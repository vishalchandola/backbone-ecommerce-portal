var Product = Backbone.Model.extend({
  idAttribute: "productId",
});

var Products = Backbone.Collection.extend({
  model: Product,
  url: "https://fakestoreapi.com/products",
});

var products = new Products();

var HomeView = Backbone.View.extend({
  template: Handlebars.compile($("#dashboard-view-template").html()),
  initialize: function () {
    this.collection = products;
    var that = this;
    products.fetch({
      success: function () {
        that.render();
      },
    });
    this.render();
  },
  render: function () {
    this.$el.html(
      this.template({
        productList: this.collection && this.collection.toJSON(),
      })
    );
  },
});

var AboutView = Backbone.View.extend({
  template: Handlebars.compile($("#about-template").html()),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(
      this.template({
        content: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis ex saepe cum eos mollitia voluptatem corporis at facilis praesentium commodi ab, dolor provident neque culpa cupiditate illo iusto reprehenderit animi eius dignissimos. Velit delectus voluptas accusamus harum, nisi, pariatur nesciunt sunt facilis minus at consequatur quis dignissimos itaque, exercitationem modi? Quod facere amet sed ex commodi, soluta saepe sint omnis distinctio fugit quos suscipit facilis vero nam, possimus consectetur laboriosam molestiae sapiente veniam reiciendis voluptate consequatur minus ipsam nisi. Repellendus harum sunt sed blanditiis iusto. Pariatur dolor beatae facilis ad iste dicta porro. Ut dolore dolorem porro dignissimos amet!
    `,
      })
    );
  },
});

var ProductModel = Backbone.Model.extend({
  idAttribute: "productId",
});

var productModel = new ProductModel();

var ProductItemCollection = Backbone.Collection.extend({
  model: ProductModel,
  initialize: function (id) {
    this.id = id;
  },
  url: function () {
    return "https://fakestoreapi.com/products/" + this.id;
  },
});

var ProductView = Backbone.View.extend({
  template: Handlebars.compile($("#product-template").html()),
  initialize: function (id) {
    var productItemCollection = new ProductItemCollection(id);
    this.collection = productItemCollection;
    var that = this;
    productItemCollection.fetch({
      success: function () {
        that.render();
      },
    });
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.collection.toJSON()[0]));
  },
});

var ConactModel = Backbone.Model.extend({});

var ContactView = Backbone.View.extend({
  model: ConactModel,
  template: Handlebars.compile($("#contact-template").html()),
  events: {
    "click button#submit": "getData",
  },
  initialize: function () {
    var self = this;

    this.email = $("#email");
    this.message = $("#getMessage");
    this.render();
  },

  getData: function () {
    var userEmail = this.$el.find("#email").val();
    var userMessage = this.$el.find("#getMessage").val();
    this.render();
    this.$el.find(".alert").fadeIn();
    var self = this;
    setTimeout(function () {
      self.$el.find(".alert").fadeOut();
    }, 3000);
  },

  render: function () {
    var conactModel = new ConactModel();
    this.$el.html(this.template({ email: this.$el.find("#email").val() }));
  },
});

var appRouter = new AppRouter();
Backbone.history.start();

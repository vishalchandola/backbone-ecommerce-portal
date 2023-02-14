var AppRouter = Backbone.Router.extend({
  routes: {
    "": "homeRoute",
    home: "homeRoute",
    about: "aboutRoute",
    "item/:id": "productRoute",
    contact: "contactRoute",
  },
  homeRoute: function () {
    var homeView = new HomeView();
    $("#content-container").html(homeView.el);
  },
  aboutRoute: function () {
    var blogView = new AboutView();
    $("#content-container").html(blogView.el);
  },
  productRoute: function (id) {
    var productView = new ProductView(id);
    $("#content-container").html(productView.el);
  },
  contactRoute: function () {
    var contactView = new ContactView();
    $("#content-container").html(contactView.el);
  },
});

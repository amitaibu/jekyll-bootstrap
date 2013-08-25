'use strict';

function MainCtrl($scope, Cart, Product) {
  $scope.addToCart = function(lineItem, productInfo) {
    Cart.addLineItem(lineItem, productInfo);
  };

  $scope.removeLineItem = function(key) {
    Cart.removeLineItem(key);
  };

  // @todo: Make dynamic.
  var productID = Jekyll.productID;

  Product.gettingData(productID).then(function(data) {
    $scope.product = data;
  });

  Cart.gettingCart().then(function(data) {
    $scope.cart = Cart.data.cart;
  });

  /*

  Cart.gettingData().then(function(data) {
    $scope.cart = data;
  });

  */

};

MainCtrl.$inject = ['$scope', 'Cart', 'Product'];

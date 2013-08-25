'use strict';

var AngularShoppingCartApp = angular
  .module('AngularShoppingCartApp', ['LocalStorageModule', 'ui.bootstrap'])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  });

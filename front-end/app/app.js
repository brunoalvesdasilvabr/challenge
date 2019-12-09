var app = angular.module('app', [])
app.controller('appController', ['$scope', function ($scope) {
 
$scope.price = 20,00

$scope.getProducts = function (){
        axios('./assets/products.json')
        .then(function(response){
            console.log(response.data)
        })
}
$scope.getProducts()

}])


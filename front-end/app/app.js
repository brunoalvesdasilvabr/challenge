var app = angular.module('app', [])
app.controller('appController', ['$scope', function ($scope) {
 $scope.carrinho = false; //mostra valor do carrinho quando um item é clicado
// $scope.price = 20,00
$scope.loading = false;
$scope.carrinho_sum = 0; //variavel de soma
$scope.products_list = [];
$scope.list_items = false;
// função de para fazer a requisição dos produtos
$scope.getProducts = function (){
        $scope.loading = true;
        axios('./assets/products.json')
        .then(function(response){
            $scope.products = response.data;
            $scope.loading = false;
            $scope.products_container = true;
            $scope.$apply()

        })
}
$scope.getProducts()

// função que corta o nome dos produtos dado uma determinada length
$scope.cutProductName = function(longName, leng){
            let nameArr = [];
            let acc = "";
               longName.split(" ").forEach(function(name){
                    if(name.length + acc.length <= leng){
                        nameArr.push(name)
                         acc +=name 
                    }
               })

            return  `${nameArr.join(" ")} ...`

}

/// função para adicionar o produto ao carrinho

$scope.addToCart = function(product){
    $scope.carrinho = true;
    $scope.products_list.push(product) //adicionando o novo produto clicado a lista de produtos
    //soma os valores dos produtos
    $scope.carrinho_sum = parseInt($scope.formataDinheiro($scope.carrinho_sum)) + parseInt($scope.formataDinheiro(product.Value))

}

//formata valor para real
$scope.formataDinheiro = function(n) {
    return  n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }


// var int = getMoney( test );
//alert( int );

$scope.showProductList = function(){
    $scope.list_items  = !$scope.list_items

}

}])


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
        .catch(function(err){
            alert(err);
            $scope.loading = false;
            location.reload()
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
    //soma os valores dos produtos
    $scope.carrinho_sum = $scope.carrinho_sum + product.Value

    // $scope.products_list.forEach(function(el){
    //    let values = Object.values(el)
       
    //    if(values.indexOf(product.name) == -1){
    //     $scope.products_list.push(product) //adicionando o novo produto clicado a lista de produtos
    // }
        
    // })
}

//formata valor para real
$scope.formataDinheiro = function(n) {
    return  n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }


$scope.hamburger = function(){
   let input = document.querySelector('.hamburger_input')
   let nav_container = document.querySelector('.nav-container-mobile')
   let hamburguer_container = document.querySelector('.hamburger-container')
   let hamburguer_line = document.querySelector('.hamburger-line')
   let hamburguer_line2 = document.querySelector('.hamburger-line2')
   if(input.checked == true){
    nav_container.style.transform = "translateX(0%)"
    hamburguer_container.style.transform = "rotate(45deg)"
    hamburguer_line.style.transform = "rotate(88deg)"
    hamburguer_line.style.top = "0%"
    hamburguer_line2.style.opacity = "0"
   }else{
    nav_container.style.transform = "translateX(-124%)";
    hamburguer_container.style.transform = "rotate(0deg)"
    hamburguer_line.style.transform = "rotate(0deg)"
    hamburguer_line.style.top = "41%"
    hamburguer_line2.style.opacity = "1"

   }
}

$scope.showProductList = function(){
    $scope.list_items  = !$scope.list_items

}

}])


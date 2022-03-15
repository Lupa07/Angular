angular.module("MiPrimeraApp",[])

.controller("PrimerControlador",function($scope,$http){
    $scope.nombre="Joaquin";
    $scope.comentarios=[
        {
            comentario:"muy bueno",
            username:"lupa95"
        },
        {
            comentario:"muy malo",
            username:"granbo"
        }
    ];
    
});
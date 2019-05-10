'use strict';

(function(){
	// declaramos una variable llama app que importará los módulos de angular para nuestra ng-app declarada en 
	// nuestro archivo index.html, esta es nuestra aplicación y recibirá todas las dependencias creadas tanto en
	// directivas como controladores
	var app= angular.module('app',['directives-example', 'app-controller']);
})();
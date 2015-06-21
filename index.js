//al tener instaldo el paquete via npm, podemos cargarlo sin path
var _ = require('underscore');

//creamos un array simple
var numberArray = [1,3,2,5,4];
//creamos un array de objetos
var objectArray = [
	{
		'name': 'Albert Leal',
		'twitter': '@albertleal'
	},
	{
		'name': 'Fake Person',
		'twitter': '@zfaketwitter'
	},
];

//vamos a recorrer los arrays pasando una funcion de printado como funcion de callback
function printCallbackFunction(singleElement){
	console.log("Elemento:"+ singleElement);
};
//llamamos directamente a la función de callbac
_.each(numberArray, printCallbackFunction);

//tambien podemos hacerlo inyectando la funcion diractamente
_.each(objectArray, function(singleElement){
	console.log("Elemento Objeto: "+singleElement.name);
});

//oredenemos el array simple
var numberArraySorted = _.sortBy(numberArray);
console.log("numberArraySorted: "+numberArraySorted);


//ordernemos el array de objetos, inyectando una función
var objectArraySorted = _.sortBy(objectArray, function (singleElement) {
	return singleElement.twitter;
});
console.log("objectArraySorted:");
console.log(objectArraySorted);

//mapeemos los objetos a un nuevo diccionario
var objectArrayMapped = _.map(objectArray, function (singleElement) {
	return singleElement.name;
});
console.log("objectArrayMapped: "+objectArrayMapped);

//preparemos unos nuevos datos de prueba, con algunos datos más complejos
//inspiración de los gerreros Z,

var zWarriors = [
	{
		"name": "Son Goku",
		"race": ["Saiyan"],
		"maxtransformation": 4
	},
	{
		"name": "Vegeta",
		"race": ["Saiyan"],
		"maxtransformation": 4
	},
	{
		"name": "Son Gohan",
		"race": ["Saiyan","Terricola"],
		"maxtransformation": 2
	},
	{
		"name": "Trunks",
		"race": ["Saiyan","Terricola"],
		"maxtransformation": 2
	},
	{
		"name": "Son Goten",
		"race": ["Saiyan","Terricola"],
		"maxtransformation": 2
	},
	{
		"name": "Piccolo",
		"race": ["Namek"],
		"maxtransformation": 0
	},
	{
		"name": "Yamcha",
		"race": ["Terricola"],
		"maxtransformation": 0
	},
	{
		"name": "Krilin",
		"race": ["Terricola"],
		"maxtransformation": 0
	}
];

//Agrupemos por raza 
var zWarriorsByRace = _.groupBy(zWarriors, function (singleElement) {
	return singleElement.race;
});
console.log("zWarriorsByRace:");
console.log(zWarriorsByRace);

//filtremos por Saiyan
var zWarriorsSaians = _.filter(zWarriors, function (singleElement) {
	/*Decidimos filtrar si encontramos la raza 'Saiyan' 
	en el array de razas del guerrero 
	si lo encuentra sera en posición en una posición diferente de -1*/
	return -1 !==  _.findIndex(singleElement.race, function(singleRace){
		return singleRace === 'Saiyan';
	});
});
console.log("zWarriorsSaians:");
console.log(zWarriorsSaians);

//solo el primero que se transforme en 4
var zWarriorsTransformations4 =  _.findWhere(zWarriors, {maxtransformation: 4});
console.log("zWarriorsTransformations4:");
console.log(zWarriorsTransformations4);

//todos los que se transformen en 2
var zWarriorsTransformations2 =  _.where(zWarriors, {maxtransformation: 2});
console.log("zWarriorsTransformations2:");
console.log(zWarriorsTransformations2);

//indexados por transformación, como no son unicas nos dará uno de cada
var zWarriorsIndexByTransformations = _.indexBy(zWarriors, 'maxtransformation');
console.log("zWarriorsIndexByTransformations:");
console.log(zWarriorsIndexByTransformations);
angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  console.log('main', main);
  console.log('animal', animal)
  console.log('main controller working');

  animal.getAnimals()
    .then(function(animalList){
      console.log('animal list', animalList);
      main.animalList = animalList;
    });
    // animal.getAnimals();

}

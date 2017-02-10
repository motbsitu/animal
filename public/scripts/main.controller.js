angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  main.animalID = [];
  main.newAnimal = [];
  console.log('main', main);
  console.log('animal', animal)
  console.log('main controller working');

  animal.getAnimals()
    .then(function(animalList){
      console.log('animal list', animalList);
      main.animalList = animalList;
    });
    animal.getAnimals();

    animal.getDetail()
    .then(function(animalID){
      console.log('animal ID', animalID);
      main.animalID = animalID;
    });

    main.getThisID = function(e){
      e.preventDefault();
      console.log('getthisid works');
    }

  animal.createAnimals = function(newAnimal){
      console.log('new animal', newAnimal);
      main.newAnimal = newAnimal;
    };

}

angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  main.animalID = [];
  animal.name = [];
  main.newAnimal = [];
  // console.log('main', main);
  // console.log('animal', animal)
  // console.log('main controller working');

  animal.getAnimals()
    .then(function(animalList){
      // console.log('animal list', animalList);
      main.animalList = animalList;
    });
    // animal.getAnimals();

main.getAnimalDetail = function(id){
    animal.getDetail(id)
    .then(function(animalInfo){
    main.info = animalInfo;
    // console.log(main.info);

    });
  }

    main.getThisID = function(e){
      // console.log('getthisid works');
      // console.log('id from getThisID', e);
      // animal.getDetail(e);
      main.getAnimalDetail(e);
    }
  main.createAnimals = function(newAnimal){
    console.log('createAnimals working');
    var data = {
      commonName: main.commonName

    }
      console.log('new animal', data);
    };

}

angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  main.animalID = [];
  animal.data = {};
  main.newAnimal = [];
  // console.log('main', main);
  // console.log('animal', animal)
  // console.log('main controller working');

  animal.getAnimals()
    .then(function(animalList){
      console.log('animal list', animalList);
      main.animalList = animalList;
    });
    // animal.getAnimals();

main.getAnimalDetail = function(id){
    animal.getDetail(id)
    .then(function(animalInfo){
    main.info = animalInfo;
    console.log('get animal detail info', main.info);

    });
  }

    main.getThisID = function(e){
      // console.log('getthisid works');
      // console.log('id from getThisID', e);
      // animal.getDetail(e);
      main.getAnimalDetail(e);
    }
  main.createAnimal = function(newAnimal){
    console.log('createAnimals working');
    var animalData = {
      commonName: main.commonName

    }
      console.log('new animal', animalData);
      animal.createAnimals(animalData)
      .then(function(newAnimal){
        console.log('data in create animal function', newAnimal);
        animal.data = newAnimal;
      console.log('data create animal controller', newAnimal);

      });
    };

}

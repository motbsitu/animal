angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  main.animalID = [];
  animal.data = {};
  main.newAnimal = [];
  console.log('animal', animal)
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


  main.createAnimal = function(name){
    console.log('createAnimals working');
    console.log('name', name);
    // var animalData = {
    //     commonName: name
    //
    // }
    animal.createNewAnimal(name)
      .then(function(response){
        console.log('animalData', name)

        console.log('response in create animal function', response);
      });
}

}

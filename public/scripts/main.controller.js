angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  main.animalID = [];
  animal.data = {};
  main.newAnimal = [];

main.getAllAnimals = function(){
  return animal.getAnimals()
    .then(function(animalList){
      main.animalList = animalList;
      console.log('animal list', main.animalList);
    }, function(error){
      console.log('error getting animal list', error);
    });
};
main.getAllAnimals();

  main.getAnimalDetail = function(id){
    return animal.getDetail(id)
    .then(function(animalInfo){
    main.info = animalInfo;
  }, function(error){
    console.log('error getting animal detail', error);
  });
};

  main.getThisID = function(thisId){
    main.getAnimalDetail(thisId);
  };


  main.createAnimal = function(name, scientificName, family, imageUrl){
    return animal.createNewAnimal(name, scientificName, family, imageUrl)
      .then(function(response){
        //clear form
        main.commonName = '';
        main.scientificName = '';
        main.family = '';
        main.imageUrl = '';

        main.animalList =

        main.getAllAnimals();
      }, function(error){
        console.log('error creating animal', error);
      });
  };




  main.deleteAnimal = function(id){
    return animal.deleteThisAnimal(id)
      .then(function(animalDelete){
        main.getAllAnimals();
      }, function(error){
        console.log('error deleting animal', error);
        });
  };
};

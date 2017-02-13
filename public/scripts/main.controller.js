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

  main.getThisID = function(thisId){
    main.getAnimalDetail(thisId);
  };

  main.getAnimalDetail = function(id){
    return animal.getDetail(id)
    .then(function(animalInfo){
    main.info = animalInfo;
  }, function(error){
    console.log('error getting animal detail', error);
  });
};


  main.createAnimal = function(name, scientificName, family, imageUrl){
    return animal.createNewAnimal(name, scientificName, family, imageUrl)
      .then(function(response){
        main.getAllAnimals();

        //clear form
        main.commonName = '';
        main.scientificName = '';
        main.family = '';
        main.imageUrl = '';

      }, function(error){
        console.log('error creating animal', error);
      });
  };

  main.getDeleteID = function(deleteId){
    idToDelete = deleteId
  };


  main.deleteAnimal = function(){
    return animal.deleteThisAnimal(idToDelete)
      .then(function(animalDelete){
        main.getAllAnimals();
      }, function(error){
        console.log('error deleting animal', error);
        });
  };
};

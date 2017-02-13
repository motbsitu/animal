angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  main.animalList = [];
  main.animalID = [];
  animal.data = {};
  main.newAnimal = [];

  animal.getAnimals()
    .then(function(animalList){
      main.animalList = animalList;
    });

  main.getAnimalDetail = function(id){
    animal.getDetail(id)
    .then(function(animalInfo){
    main.info = animalInfo;
    });
  }

  main.getThisID = function(thisId){
    main.getAnimalDetail(thisId);
  }


  main.createAnimal = function(name, scientificName, family, imageUrl){
    animal.createNewAnimal(name, scientificName, family, imageUrl)
      .then(function(){
        animal.getAnimals();
        main.commonName = '';

      }, function(error){
        console.log('error creating animal', error);
      });
  }




main.deleteAnimal = function(id){
  animal.deleteThisAnimal(id)
    .then(function(animalDelete){

    }, function(error){
      console.log('error deleting animal', error);

    });
}
}
//directive to convert url to correct format
// angular.module('animalApp')
//     .directive('httpPrefix', function() {
//         return {
//             restrict: 'A',
//             require: 'ngModel',
//             link: function(scope, element, attrs, controller) {
//                 function ensureHttpPrefix(value) {
//                     // Add prefix if we don't have http:// prefix already AND we don't have part of it
//                     if (value && !/^(https?):\/\//i.test(value) &&
//                         'http://'.indexOf(value) !== 0 && 'https://'.indexOf(value) !== 0) {
//                         main.$setViewValue('http://' + value);
//                         main.$render();
//                         return 'http://' + value;
//                     } else
//                         return value;
//                 }
//                 main.$formatters.push(ensureHttpPrefix);
//                 main.$parsers.splice(0, 0, ensureHttpPrefix);
//             }
//         };
//     });

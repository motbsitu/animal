angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  // console.log(main);

  main.authenticate = function(auth) {
      animal.authenticate(main.authorize)
              .then(function(response) {
          });
          console.log('something');

}
}

angular.module('animalApp')
    .controller('MainController', MainController);

function MainController(animal) {
  var main = this;
  console.log('main controller working');

  main.authenticate = function() {
    console.log('authenticate in controller working');
      animal.authenticate(main.authorize)
              .then(function(response) {
                console.log('something');

          });

}
main.authenticate();
}

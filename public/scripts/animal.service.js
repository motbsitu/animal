angular.module('animalApp')
  .service('animal', animalAPIService);

function animalAPIService($http){

  var req = {
    method: 'GET',
    url: 'https://animalrestapi.azurewebsites.net/Animal/Authenticate/',
    headers: {
      'Content-Type': application/x-www-form-urlencoded
    },
    params: {candidateID: ''}
}
this.authenticate = function(){
    $http(req).then(function(response){
      return response;
      console.log('response', response);


  });
}

};

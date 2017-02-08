angular.module('animalApp')
  .service('animal', animalAPIService);

function animalAPIService($http){
console.log('apiservice working');

this.getAnimals = function(req){
  var req = {
    method: 'GET',
    url: 'https://animalrestapi.azurewebsites.net/Animal/List/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {candidateID: '68f78af7-391c-4321-82e5-31727460a2e1'}
}
  console.log('authenticate working');
  console.log('req', req);
    return $http(req).then(function(response){
      console.log('response', response.data.list);

      return response.data.list;


  });
}

};

angular.module('animalApp')
  .service('animal', animalAPIService);

function animalAPIService($http){
console.log('apiservice working');
  var req = {
    method: 'GET',
    url: 'https://animalrestapi.azurewebsites.net/Animal/List/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {'candidateID': '68f78af7-391c-4321-82e5-31727460a2e1'}
}
console.log('req outside', req);
this.authenticate = function(req){
  console.log('authenticate working');
  console.log(req);
    $http(req).then(function(response){
      console.log('response', response);

      return response;


  });
}

};

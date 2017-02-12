angular.module('animalApp')
  .service('animal', animalAPIService);

function animalAPIService($http){
// console.log('apiservice working');

// var url = 'https://animalrestapi.azurewebsites.net/Animal';
// var params = {candidateID: '68f78af7-391c-4321-82e5-31727460a2e1'};
// var head = {'Content-Type': 'application/x-www-form-urlencoded'};
// //
//
// this.getAnimals = function(){
// var req = {
//   method: 'GET',
//   url: url + '/List',
//   headers: head,
//   params: params
// }
//     return $http(req)
//       .then(function(response){
//       console.log('getAnimals response', response);
//       return response.data.list;
//   });
// }
// }


this.getAnimals = function(){
  var req = {
    method: 'GET',
    url: 'https://animalrestapi.azurewebsites.net/Animal/List/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {candidateID: '68f78af7-391c-4321-82e5-31727460a2e1'}
}
  // console.log('req', req);
    return $http(req).then(function(response){
      // console.log('getAnimals response', response.data.list);
      return response.data.list;
  });
}

this.getDetail = function(animalID){
  var req = {
    method: 'GET',
    url: 'https://animalrestapi.azurewebsites.net/Animal/Id/' + animalID,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {candidateID: '68f78af7-391c-4321-82e5-31727460a2e1'}
}
    return $http(req).then(function(response){
      // console.log('get detail response', response.data.animal);
      return response.data.animal;
  });
};

this.createAnimals = function(animalDetail){
  var req = {
    method: 'POST',
    url: 'https://animalrestapi.azurewebsites.net/Animal/Create',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {candidateID: '68f78af7-391c-4321-82e5-31727460a2e1'},
    data: {animalDetail}
}
    return $http(req).then(function(response){
      console.log('create response', response);
      return response;
  });
};
};

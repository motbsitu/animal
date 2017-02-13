angular.module('animalApp')
  .service('animal', animalAPIService);

function animalAPIService($http, $httpParamSerializerJQLike){

var url = 'https://animalrestapi.azurewebsites.net/Animal';
var params = {candidateID: '68f78af7-391c-4321-82e5-31727460a2e1'};
var head = {'Content-Type': 'application/x-www-form-urlencoded'};
//

this.getAnimals = function(){
var req = {
  method: 'GET',
  url: url + '/List',
  headers: head,
  params: params
}
    return $http(req)
      .then(function(response){
      console.log('getAnimals response', response);
      return response.data.list;
  });
}

this.getDetail = function(animalID){
  var req = {
    method: 'GET',
    url: url +'/Id/' + animalID,
    headers: head,
    params: params
}
    return $http(req).then(function(response){
      return response.data.animal;
  });
};

this.createNewAnimal = function(name, scientificName, family, imageUrl){
  var animalDetail = {
          commonName: name,
          scientificName: scientificName,
          family: family,
          imageUrl: imageUrl};
          console.log(animalDetail);

  var req = {
    method: 'POST',
    url: url + '/Create',
    headers: head,
    params: params,
    data: $httpParamSerializerJQLike(animalDetail)
}
    return $http(req).then(function(response){
      return response;
  });
};

this.deleteThisAnimal = function(id){

  var req = {
    method: 'DELETE',
    url: url + '/Delete/' + id,
    headers: head,
    params: params

}
    return $http(req).then(function(response){
      return response;
  });
};
};

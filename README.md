#Animal and Pokemon Application
Web application to view, save, and delete your favorite animals and Pokemon.

##Installation
From terminal:
- npm init
- npm start

##Technology used
- AngularJS
- Node
- Express
- Bootstrap

##Author
- Julie S. Mike, jule@juliesmike.com


#Provided Documentation
##REST API reference
###Authentication
- To authenticate to the server, you must include a querystring parameter called candidateID in each request. The candidateID querystring shall be equal to the candidate ID that you received via e-mail.
- All requests must be URL form encoded with the Content-Type header set to application/x-www-form-urlencoded.

###Animal
- /Animal/List -- Lists all animals (images, IDs, and common names) (HTTP GET request)
- /Animal/Id/{id} -- Retrieves all information known about an animal (HTTP GET request)
- /Animal/Create([REQUIRED] commonName, scientificName, family, imageURL) -- Creates a new animal (HTTP POST request)
- /Animal/Delete([REQUIRED] id) -- Deletes an animal with a specified ID (HTTP POST request)
- All requests return data in JSON.

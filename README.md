#Players API

##1. Create player. 

Method: POST

URL: [soccerapi.herokuapp.com/api/players](http://soccerapi.herokuapp.com/api/players)

Example: 
```javascript
{
  "name" : "Cristiano Ronaldo",
  "image" : "someimageurl.jpg",
  "clubId" : "584e7e7cfe1e2300049c9462",
  "position" : "LM"
}
```
#2. Update player. 

Method: PUT

URL: soccerapi.herokuapp.com/api/players/:id

Example:
```javascript
{
  "position" : "RM"
}
```
Changes a players position to "RM"

#3. Delete player. 

Method: DELETE

URL: soccerapi.herokuapp.com/api/players/:id

#4. Get all players. 

Method: GET

URL: [soccerapi.herokuapp.com/api/players](http://soccerapi.herokuapp.com/api/players)

#5. Get single player. 

Method: GET

URL: [soccerapi.herokuapp.com/api/players/:id](http://soccerapi.herokuapp.com/api/players/584e7f16fe1e2300049c9463)

#6. Get all players in specific team. 

Method: GET

URL: [soccerapi.herokuapp.com/api/players/clubs/:id](http://soccerapi.herokuapp.com/api/players/clubs/584e7e5cfe1e2300049c9461)

##Clubs API

#1. Create Club. 

Method: POST

URL: soccerapi.herokuapp.com/api/clubs

Example: 
```javascript
{
  "name" : "Real Madrid",
  "image" : "someimageurl.jpg",
}
```
#2. Update Clubs. 

Method: PUT

URL: soccerapi.herokuapp.com/api/clubs/:id

Example:
```javascript
{
  "name" : "Real Madrid C.F"
}
```
Changes a clubs name to "Real Madrid C.F."

#3. Delete club. 

Method: DELETE

URL: soccerapi.herokuapp.com/api/clubs/:id

#4. Get all clubs. 

Method: GET

URL: [soccerapi.herokuapp.com/api/clubs](http://soccerapi.herokuapp.com/api/clubs)

#5. Get single club. 

Method: GET

URL: [soccerapi.herokuapp.com/api/clubs/:id](http://soccerapi.herokuapp.com/api/clubs/584e7e5cfe1e2300049c9461)




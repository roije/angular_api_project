##Players API

#1. Create player. 
URL: soccerapi.herokuapp.com/api/players

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
URL: soccerapi.herokuapp.com/api/players/:id

Example:
```javascript
{
  "position" : "RM"
}
```
Changes a players position to "RM"

#3. Delete player. 
URL: soccerapi.herokuapp.com/api/players/:id

#4. Get all players. 
URL: soccerapi.herokuapp.com/api/players/

#5. Get single player. 
URL: soccerapi.herokuapp.com/api/players/:id

#6. Get all players in specific team. 
URL: soccerapi.herokuapp.com/api/players/clubs/:id

##Clubs API

#1. Create Club. 
URL: soccerapi.herokuapp.com/api/clubs

Example: 
```javascript
{
  "name" : "Real Madrid",
  "image" : "someimageurl.jpg",
}
```
#2. Update Clubs. 
URL: soccerapi.herokuapp.com/api/clubs/:id

Example:
```javascript
{
  "name" : "Real Madrid C.F"
}
```
Changes a clubs name to "Real Madrid C.F."

#3. Delete club. 
URL: soccerapi.herokuapp.com/api/clubs/:id

#4. Get all clubs. 
URL: soccerapi.herokuapp.com/api/clubs/

#5. Get single club. 
URL: soccerapi.herokuapp.com/api/clubs/:id



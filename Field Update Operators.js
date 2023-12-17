//Field update operator
//db.collectonName.updateOne({mention kake update korbe},{mention ki update korben})
db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")}, 
    {$set: { age : 24 , "name.firstName": "Al Tahmiduzzaman", "name.lastName": "Tuhin" }}
    )
db.test.find({_id : ObjectId("6406ad63fc13ae5a40000065")})

//$addToSet :  The $addToSet operator adds a value to an array unless the value is already present, 
// in which case $addToSet does nothing to that array.
// syntax : { $addToSet: { <field1>: <value1>, ... } }

// NB: $addToSet: only ensures that there are no duplicate items added to the set and does not affect existing duplicate elements.

db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    // {$addToSet: {interests : "coding"}})//set only one element in the array
    {$addToSet: {interests : {$each: ["Coding" , "playing"]}}}) //set multiple element in the array
db.test.find({_id : ObjectId("6406ad63fc13ae5a40000065")})

db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {push: {interests : {$each: ["Coding" , "playing"]}}}) //set multiple element in the array using "PUSH"
db.test.find({_id : ObjectId("6406ad63fc13ae5a40000065")})
   
   
//   [NB: push --> allow Duplication of value] 
//   [NB: addToSet --> doesn't allow Duplication of value] 
   
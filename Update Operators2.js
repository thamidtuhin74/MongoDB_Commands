// $unset : The $unset operator deletes a particular field.
// $pop,  $pull & $pullAll
// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065") },
//     // {$pop: {interests : 1}}
//     // {$pull: {interests : "coding"}}
//     {$pullAll: {interests : ["playing","Coding"]}}
// )

// set with '$' sign in mongoDB
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Communications" },
    // {$pop: {interests : 1}}
    // {$pull: {interests : "coding"}}
    {
        $set: {
        "education.$.degree": "BSc Engineering",
        "education.$.institute": "RU",
        "education.$.year": 2021
        }
    }
)
db.test.find(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }
)
  // $inc : Increment & Decrement
 db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065") },
    // {$pop: {interests : 1}}
    // {$pull: {interests : "coding"}}
    {
        $inc: {
            age: 1 //increment each time '1' ; age  = age + 1;
        }
    }
)
db.test.find(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }
)  
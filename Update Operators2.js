// $unset : The $unset operator deletes a particular field.
// $pop,  $pull & $pullAll
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065") },
    // {$pop: {interests : 1}}
    // {$pull: {interests : "coding"}}
    {$pullAll: {interests : ["playing","Coding"]}}
)
db.test.find(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }
)
    
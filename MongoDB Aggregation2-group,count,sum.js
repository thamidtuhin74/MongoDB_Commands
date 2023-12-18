//MongoDB Aggregation 2
// $group | count | $push
db.test.aggregate([
    //stage 1
    {$match: {age: {$gte: 24}}},
    //stage 2
    {$group: {
        _id: "$address.country",
        count : {$sum: 1},
        ShowPeopleName : { $push: "$name"},//single field
        ShowPeopleDetails : { $push: "$$ROOT"}//single field
        
        
    }},
    //stage 3
    
    {$project: {
        "ShowPeopleDetails.name": 1,
        "ShowPeopleDetails.email": 1,
        "ShowPeopleDetails.phone": 1
    }}
    ])
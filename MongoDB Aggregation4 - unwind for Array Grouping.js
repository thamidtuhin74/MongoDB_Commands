// MongoDB Aggregation4 - unwind for Array Grouping

db.test.aggregate([
        //stage 1,
        {$unwind: "$friends"},
        //stage 2
        {
            $group:{
                _id: "$friends",
                total: {$sum: 1},
                interestPerPerson : {$push: "$friends"}
                
                
                
                
                
            }
        }
    ])
    
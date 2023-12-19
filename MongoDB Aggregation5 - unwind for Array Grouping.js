// MongoDB Aggregation4 - bucket, groupBy

db.test.aggregate([
    {
        //stage-1
        $bucket: {
              groupBy : "$age",
              boundaries: [0,18,32,50,70],
              default : "70+ old peoples",
              output:{
                  count: {$sum : 1},
                  nameOfAllPeople: {$push: "$$ROOT"}
              }
            }
    }
    
])
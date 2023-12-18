// MongoDB Aggregation3-GroupAllData

db.test.aggregate([
        //stage 1
        {$group: { 
            _id: null,
            totalSalary : {$sum: "$salary"},
            avgSalary : {$avg: "$salary"},
            maxSalary: {$max: "$salary"},
            minSalary: {$min: "$salary"}
        }},
        //stage 2
        {
            $project: {
                totalSalary: 1,
                avarageSalary: "$avgSalary",
                MinimumSalary: "$minSalary",
                MaximumSalary: "$maxSalary",
                DistanceBetweenMinAndMax: {$subtract: ["$maxSalary","$minSalary"]}
            }
        }
        
    ])
    
// MongoDB Aggregation6 - Multipipeline-fecet
db.test.aggregate([
    {
        $facet: {
            firendCount : [//pipeline1
                {$unwind: "$friends"},
                {$group: { _id: "$friends", count:{$sum: 1}}},
                
            ],
            educationCount:[//pipeline1
                {$unwind: "$education"},
                {$group: { _id: "$education", count:{$sum: 1}}}
                ],
            skillsCount: [//pipeline1
                {$unwind: "$skills"},
                {$group: { _id: "$skills", count: {$sum: 1}}}
                ]
        }
    }
    ])

// --------Operator ----------
    //-------------Logical operator-----------------
        // -------Emplicit AND---------
        db.test.find({ 
            $and: [
                {age : {$gte: 18, $lte: 30} },
                {interests : "Cooking"}, 
                {interests : "Travelling"},
            ]
            
        }).project({
            name: 1,gender: 1, interests: 1, age: 1
            
        }).sort({age: 1});

        // -------Emplicit OR---------
        db.test.find({ 
            $or: [
                {age : {$gte: 18, $lte: 30} },
                // {interests : "Cooking"}, 
                // {interests : "Travelling"},
                {interest : {$in : ["Cooking","Travelling"]}}
            ]
            
        }).project({
            name: 1,gender: 1, interests: 1, age:1
            
        }).sort({age: 1});
   
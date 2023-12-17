//Array Query Operators

    //$all : The $all operator selects the documents where the value of a field is an array that contains all the specified elements.
    //syntax : { <field>: { $all: [ <value1> , <value2> ... ] } }
   
        db.test.find({
            interests :  ["Reading", "Writing", "Gaming"]//searching exactly with index serial;
        }).project({interests : 1});
        db.test.find({
            interests :  {$all : ["Reading", "Writing", "Gaming"]}//searching exactly with the values, does't maintain the value's serial;
        }).project({interests : 1});
        
        
        db.test.find({
            "interests.1" : "Writing" //searching "Writing" in interests array with index 1
        }).project({interests : 1})
        
        db.test.find({
            interests :  {$all : ["Writing"]} //searching "Writing" in interests array in any index
        }).project({interests : 1 , skills: 1})
    
    //$elemMatch : The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
    //syntax : { <field>: { $elemMatch: { <query1>, <query2>, ... } } }
    
    db.test.find({
        skills: { //multiple query in exactly serial
            name : "JAVASCRIPT",
            level : "Expert",
            isLearning : false
        }
    }).project({
        skills: 1
    })
    
    db.test.find({
        skills: { //multiple query without exact serial
            $elemMatch: {
                name: "JAVASCRIPT",
                isLearning : true
            }
        }
    }).project({
        skills: 1
    })
    
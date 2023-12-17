// db.test.findOne({ gender: "Female"})
// db.test.find({ gender: "Female"})

//----------------- field filtering--------------------
    // db.test.find( {gender : "Female"}, { name: 1, email: 1, gender : 1}) // field filtering normal
    // db.test.find( {gender : "Female"}).project({name: 1, email: 1})// Field Filtering using Project -> chaining

// --------Operator ----------
    //-------------comparison operator-----------------
    
    //---------equal operator $eq --> { <field>: { $eq: <value> } } ---------
    db.test.find( {age: {$eq :12 } })
    //---------equal operator $ne --> { <field>: { $ne: <value> } } ---------
    db.test.find( {age: {$ne :12 } })
    //--------- greater than (i.e. >)  operator $gt --> { <field>: { $gt: <value> } } ---------
    db.test.find( {age: {$gt :18 } })
    //--------- greater than equal (i.e. >=)  operator $gte --> { <field>: { $gte: <value> } } ---------
    db.test.find( {age: {$gte : 18 } });
    //--------- Less than (i.e. <)  operator $lt --> { <field>: { $gt: <value> } } ---------
    db.test.find( {age: {$lt :18 } })
    //--------- Less than equal (i.e. <=)  operator $lte --> { <field>: { $gte: <value> } } ---------
    db.test.find( {age: {$lte : 18 } }).sort({ age: 1 });
    
    //--------- In operator $in --> { <field>: { $in: [<value1>, <value2>, ... <valueN>] } } ---------
    db.test.find( {age: {$in : [18,30,100] } }).sort({ age: 1 });
    //--------- Not In operator $nin --> { <field>: { $nin: [<value1>, <value2>, ... <valueN>] } } ---------
    db.test.find( { age: {$gte : 18 , $lte: 28}, gender: "Female" , interests: {$in : ["Cooking","Reading"]}}).sort({ age: 1 });
    
// //------------ Sort sort({<field>: 1}) --> 1 for ascending -1 for decending -----------------
//     db.test.find( {age: {$gte : 18 } }).sort({ age: -1 });
//     db.test.find( {age: {$gte : 18 } }).sort({ age: 1 });

// // -------Emplicit AND---------
//     db.test.find({age: {$gte: 18 , $lte: 30 } , gender : "Female"}, {age : 1, name: 1, phone : 1 , gender: 1}).sort({ age: 1 })

    
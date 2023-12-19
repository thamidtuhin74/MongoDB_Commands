//MongoDB Aggregation7 - RefferenceData- $lookup
// embedded data vs Refference Data

//NB: Working on order Collection

// Syntax
// $lookup: {
//               from: "<collection to join>",
//               localField: "<field from the input documents>",
//               foreignField: "<field from the documents of the from collection>",
//               as: "<output array field>"
//              }
db.orders.aggregate([
    
    {
        $lookup: { //referencing data to another collection & get full data
               from: "test",
               localField: "userId",
               foreignField: "_id",
               as: "user"
             }
    }
    ])
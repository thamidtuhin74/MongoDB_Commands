//MongoDB Aggregation8 - IndexScan - create index
//ceck execution Time: db.test.find({email : "weffnert2r@networkadvertising.org"}).explain("executionStats")
//collscan take more time than indexscan!
//-------------------------single indexing--------------
//create index
    //db.getCollection("massive-data").createIndex({email: 1})//create index for an email
//Delete Index
    //db.getCollection("massive-data").dropIndex({email: 1})

//------------------Compound indexing / Multiple Indexing------------
// db.getCollection("massive-data").createIndex({gender: -1, age: 1})

// db.getCollection("massive-data").find({gender : "male", age: 26})

//------------------------text Indexing----------------
//create text index
// db.getCollection("massive-data").createIndex({ about: "text"})
//seaching text
// db.getCollection("massive-data").find({$text : {$search: "dolor"}})




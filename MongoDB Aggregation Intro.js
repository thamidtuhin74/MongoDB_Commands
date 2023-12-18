//MongoDB Aggregation Intro

// db.test.aggregate()
//     .match({age: {$gte: 20},gender: "Female"})
//     .project({name: 1, gender: 1, age: 1})
//     .sort({_id:1})
db.test.aggregate()
    .match({"skills.name" : {$all: ["JAVASCRIPT"]}, "skills.level": "Expert"})
    .addFields({course: "Level-2", inistitute: "Programming Hero"})//add new field in pipeline
    // NB: .addFields doesn't change the orginal file. It just work with pipeline data
    // .out("level-2-students") // save the pipeLine Data as a "New Collection"
    .merge("test") // merge the pipeLine Data to the Existing Collection
    .project({course: 1, inistitute : 1})
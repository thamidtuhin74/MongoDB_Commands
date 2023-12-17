
db.posts.deleteOne({
    _id : ObjectId("657f61acc703dc1e45f4f881")
})
db.posts.drop({ writeConcern : {w : 1} })

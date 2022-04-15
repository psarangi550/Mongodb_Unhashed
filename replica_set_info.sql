
//displaying all the avaioble db
show dbs
//using the sample_mflix sample dataset db
use sample_mflix
//showing all the collections in the db
show collections
//here checking the documents in the comments collection
db.getCollection("comments").find({})

//fetching the replica set info which will provide primary and secondary server info insdie the cluster replica set
rs.status() //here usng the status() on the replica set object rs

//using the mydb database
use mydb
//checking all the collections availble
show collections
//displaying the number of documents present in the collections
db.person.find().count()
//here we are also using the getIndexes() to fetch the default _id_ index
db.person.getIndexes()
//creating a new unique index in this case 
db.person.createIndex({name:-1},{unique:true})
//creating nthe index using the index field on the background as
db.person.createIndex({index:1},{background:true})
//here we are also using the getIndexes() to fetch the default _id_ index
db.person.getIndexes()
//fetching the document from the collection using the index field as
db.person.find({index:1})
//using the explain method for person collection for find method as
db.person.explain().find({})
//this can also be written as 
db.person.find({name}).explain()
//with executionStats
db.person.explain("executionStats").find({})
//using the aggregate method as
db.person.explain("executionStats").aggregate([
    {$match:{index:11}}
])
//creating an index for the age field
db.person.createIndex({age:1},{name:"ageIndex"})
//fetching the index details using getIndex()
db.person.getIndexes()
//now using theexplain method for the age field as below 
db.person.explain("executionStats").find({age:{$gte:27}})
//or alternate way 
db.person.find({age:{$gte:27}}).explain("executionStats")
//another alternate way without using explainStats
db.person.find({age:{$gte:27}}).explain()
/*ferching the count*/
db.person.find({age:{$lt:25}}).count()
//here as we are using it with the index hence in this case TotalNoOfKeys=258 and totalDocument Processed 258
//here also in the above case we can use the executionTimeinMillisecond as 0 as we are using the IXSCAN 
db.person.find({age:{$lt:25}}).explain("executionStats")
//without the indexing
//droping the indexes as 
db.person.dropIndex({age:1})
//here the field is not indexed taking time and totalkeyprocessed 0 and total document processed 1000
//here also the executionTime will be displayed as 1.0
//here the scanning will be COLSCAN
db.person.find({age:{$lt:25}}).explain("executionStats")
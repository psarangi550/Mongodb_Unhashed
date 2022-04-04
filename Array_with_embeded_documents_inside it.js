//here switching the database to inventory
use company
//here using the collection as inventory
db.createCollection("inventory")
//now adding the array of emebded document
db.inventory.insertMany([{_id : 1,
                          item : "primer paint",
                          instock : [{wh : "A", loc : "rack-1", qty : 100},
                                     {wh : "D", loc : "rack-4", qty : 55},
                                     {wh : "E", loc : "bin-1", qty : 10}]},

                         {_id : 2,
                          item : "thinner",
                          instock : [{wh : "A", loc : "rack-3", qty : 200},
                                      {wh : "C", loc : "bin-3", qty : 35}]},

                         {_id : 3,
                          item : "sealent",
                          instock : [{wh : "A", loc : "bin-2", qty : 60},
                                     {wh : "B", loc : "rack-2", qty : 30},
                                     {wh : "C", loc : "rack-3", qty : 40}]}
])

//now we can query the entire document as 
db.inventory.find({})
//now if we want to query a particular document from the array of embeded elements then we can use as 
//here this will be search in the entire array of embeded element as 
//here we can also see the order and the value should exactly match
db.inventory.find({instock:{wh : "B", loc : "rack-2", qty : 30}})
//if we want to ignore the order then we have to use the $elemMatch 
//remember that for the normal array it is $all
//array of documents then it is $elemMatch
db.inventory.find({instock:{$elemMatch:{wh : "B",qty : 30 ,loc : "rack-2"}}})
//if we want to look for a particular element in that array of embeded document then this can be consider as 
//this will be checked in every document in Embeded document against every main document 
db.inventory.find({"instock.qty":60})
//if we eant to search a value in the particular location then we have to use the index as 
db.inventory.find({"instock.0.qty":100})
//here also we can use the $lt and $gt but this will look for every where if the index not provided
//if one of the value matching on of the condition then that will be displayed
db.inventory.find({"instock.qty":{$gt:100}})
//similarly we can use it for the multiple case as
db.inventory.find({"instock.qty":{$gte:100,$lt:250}})
//but if we want both the condition should match then we can use it as 
//if we want to satisfy the condition then we can use the $elemMatch in those case
//while using the $elemMatch we can't refer by "<embeded.document key>.<element in the document >"
//rather it refered by <key>:{$elemMatch:{<element in the document>:{$lt or $gt condition }}}
db.inventory.find({instock:{$elemMatch:{qty:{$gt:55,$lt:100}}}})
//here if we want to fetch the embeded document whose value is less than 150 or warehouse is A then this can be written as
//here we are using the $lt with out the index hence it will check every document wherever the value matched it matched the same 
db.inventory.find({"instock.qty":{$lt:150},"instock.wh":"A"})
//but if we want to restrict it then we can use as with index as below 
db.inventory.find({"instock.0.qty":{$lt:150},"instock.wh":"A"})



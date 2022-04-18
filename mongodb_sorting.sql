//using the database as company
use company
//creating the collection named as invoice
db.createCollection("invoice")
//displaying all the available collections
show collections
//adding all the documents into the collections
db.invoice.insertMany([{item : {name : "paper", rate : 20}, qty : 10, amt : 200},
                       {item : {name : "folder", rate : 25}, qty : 5, amt : 125},
                       {item : {name : "paper", rate : 18}, qty : 20, amt : 360},
                       {item : {name : "boxes", rate : 15}, qty : 30, amt : 450},
                       {item : {name : "folder", rate : 30}, qty : 8, amt : 240},
                       {item : {name : "boxes", rate : 12}, qty : 10, amt : 120},
                       {item : {name : "paper", rate : 14}, qty : 40, amt : 560},
                       {item : {name : "paper", rate : 22}, qty : 12, amt : 264}
])

//fetching all the docs using the find({})
db.invoice.find({})

//sorting it in the descending order of the rate it will be
db.getCollection("invoice").find({}).sort({
        "item.rate":-1
})

//sorting by using the  asc of the item name and desc by the order rate
db.getCollection("invoice").find({}).sort({
        "item.name":1,
        "item.rate":-1

})

//sorting it by the amount of the invoice in desc way
db.getCollection("invoice").find({}).sort({
     "amt":-1
})
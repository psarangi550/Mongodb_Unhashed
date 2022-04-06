//creating the logical database
use shoppingcart
//creating the collection without any docs and making the database physical
db.createCollection("cart")
//now checking for the database
show dbs
//removing the older cart collection 
db.cart.drop()
//now inserting documents into the collection as below 
db.cart.insertMany([
    {index:NumberInt(1)},
    {index:NumberInt(2)},
    {index:NumberInt(3)},
    {index:NumberInt(4)},
    {index:NumberInt(5)}
])
//now chaing the value of the index 2 as below 
db.getCollection("cart").update(
    //query--mandetory
    {index:NumberInt(2)},
    //update commands --mandetory
    {$set:{
        cart_val:[],
        cart_id:NumberInt(325),
        customers:{
            name:"pratik"
        }
    }},
    //update options --optional
    {}
)

//now checking for the value with the projection 
db.cart.find({index:NumberInt(2)})
//fetching all the values 
db.cart.find({})
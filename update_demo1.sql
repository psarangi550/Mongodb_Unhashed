//switching the database to company
use company
//displaying all the collection
show collections
//displaying all the documents
db.getCollection("empdept").find({})
//fetching the number of clerk
db.getCollection("empdept").find({"employees.job":"clerk"}).count()
//problem:-2
//here we want to update the field back to clerk and health allowance to 300 if avaible and if not set the value of health as 300
db.getCollection("empdept").updateMany(
    //query
    {"employees.job":"clerk"},
    //update query
    {
        $set:{"employees.$.salary.health":NumberInt(300)},
        $set:{"employees.$.job":"UDC"}
    },
    {}
)


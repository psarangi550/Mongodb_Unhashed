use school

db.getCollection("students").aggregate([
    //here using the $unwind operator
    {$unwind:"$games"},
    //here we need to use the $grou to groub by class and gender
    {$group:{_id:{standard:"$std",gender:"$gender"},total_game:{$addToSet:"$games"}}},
    //now sorting the order
    {$sort:{"_id.standard":1}}
])


db.getCollection("students").updateMany(
    //using the query
    {std:5},
    //using the pull to make the changes pull
    {
        $pullAll:{
            games:["hockey"]
        }
    }
)

//fetching the value
db.getCollection("students").find({std:5})
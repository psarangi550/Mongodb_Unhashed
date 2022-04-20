use school

db.getCollection("students").findOne()

db.getCollection("students").aggregate([

        //here using the query as the $unwind operator
        {$unwind:"$games"},

        //using the $group operator to group the class standard
        {$group:{
                _id:{standard:"$std",gender:"$gender",game:"$games"},
                }},

        //here using the $sort to sort the standard wise
        {$sort:{"_id.standard":1,"_id.gender":-1}}

])

db.getCollection("students").updateMany(

        //here the query is
        {std:5},
        //here is the update Query
        {
                $push:
                {
                        games:"hocky"
                }
        }
        //here as we are using the updateMany no need to Provide that

)

db.getCollection("students").find()

//displaying in an single array
db.getCollection("students").aggregate([

    {$unwind:"$games"},

    //here checking out for the queries
    {$group:{
            _id:{standard:"$std"},
            total_games:{$addToSet:"$games"}
    }},

    //sorting it by the standards
    {$sort:{"_id.standard":1}}

])

//here we need to use
db.getCollection("students").aggregate([
    //here using the $unwind operator
    {$unwind:"$games"},
    //here we need to use the $grou to groub by class and gender
    {$group:{_id:{standard:"$std",gender:"$gender"},allGames:{$addToSet:"$games"}}},
    //now sorting the order
    {$sort:{"_id.standard":1}}
])

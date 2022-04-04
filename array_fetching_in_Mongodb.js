use company;
db.createCollection("stationery");
db.stationery.insertMany([{_id : 1,
                          item : "file",
                          material : "plastic",
                          color : ["red", "blue", "white"],
                          dimension : [10, 14],
                          stock : 120},

                         {_id : 2,
                          item : "file",
                          material : "paper",
                          color : ["blue", "white", "red"],
                          dimension : [10, 14],
                          stock : 150},

                         {_id : 3,
                          item : "file",
                          material : "stiff board",
                          color : ["white","red","blue","green"],
                          dimension : [9, 10],
                          stock : 130},

                         {_id : 4,
                          item : "envelopes",
                          material : "paper",
                          color : ["pink","white","brown"],
                          dimension : [5, 7],
                          stock : 2000},

                         {_id : 5,
                          item : "envelopes",
                          material : "clothline",
                          color : ["brown", "cyan", "white"],
                          dimension : [3, 8],
                          stock : 1000},

                         {_id : 6,
                          item : "pad",
                          color : ["white", "pink"],
                          dimension : [8.5, 11.5],
                          stock : 100},

                         {_id : 7,
                          item : "pad",
                          color : ["white", "ruled", "yellow"],
                          dimension : [9, 12],
                          stock : 75}
])
//fetching the value individually
db.stationery.find().pretty();
//fetching the value where the array is of red,blue and white
db.stationery.find(
    {
        color:["red","blue","white"]
    }
)
//without considering the sequence and more number of values 
db.stationery.find(
    {
        color:
        {
            $all:["red","blue","white"]
        }
    }
)
//fetching one particular element in the array as
db.stationery.find(
        {
            color:"pink"
        }
)

//if we want to find the pink only on the first position then 
db.stationery.find(
        {
            "color.0":"pink"
        }
)
//if we want to fetch the dimension whose value is less than 9 then
//here only one of the value will be going to be get considered 
db.stationery.find(
    {
        dimension:
        {
            $lt:9
        }
    }
)
//similarly taking both the condition into the consideration as
db.stationery.find(
    {
        dimension:
        {
            $lt:9,$gt:4
        }
    }
)
//using the $elemMatch to fwetch which value satisfy both the condition regardless its position
db.stationery.find(
    {
        dimension:
        {
            $elemMatch:
            {
                $lt:15,$gt:10
            }
        }
    }
)
//using the positional query along in here as 
db.stationery.find(
    {
        "dimension.0":
        {
            $gt:4,$lt:6
        },
        "dimension.1":
        {
           $gt:4,$lt:10
        }
    }
)
//fetching the size of the query as 4 using the $size operation
db.stationery.find
(
    {
        color:
        {
            $size:4        
        }
    }
)

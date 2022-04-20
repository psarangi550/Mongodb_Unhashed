//switivhing to school database
use school

//creating the student collection
db.createCollection("students")

//creating the variable
let a= [{rollNo : 51, gender : "F", std : 5, games : ["baseball", "skiing", "chess"], charges : 25,
      name : {first : "julia",
              last : "roberts"
             }
     },
     {rollNo : 63, gender : "M", std : 6, games : ["cricket", "skiing"], charges : 35,
      name : {first : "donald",
              last : "trump"
             }
     },
     {rollNo : 55, gender : "M", std : 5, games : ["skiing", "football"], charges : 20,
      name : {first : "boris",
              last : "baker"
             }
     },
     {rollNo : 53, gender : "F", std : 5, games : ["baseball", "volleyball"], charges : 25,
      name : {first : "dolly",
              last : "parton"
             }
     },
     {rollNo : 61, gender : "F", std : 6, games : ["skiing", "handball"], charges : 30,
      name : {first : "diana",
              last : "spencer"
             }
     },
     {rollNo : 62, gender : "F", std : 6, games : ["skiing", "carrom"], charges : 35,
      name : {first : "martina",
              last : "navratilova"
             }
     },
     {rollNo : 52, gender : "M", std : 5, games : ["baseball", "hockey"], charges : 20,
      name : {first : "george",
              last : "bush"
             }
     },
     {rollNo : 65, gender : "M", std : 6, games : ["handball", "skiing", "chess"], charges : 35,
      name : {first : "barack",
              last : "obama"
             }
     },
     {rollNo : 54, gender : "F", std : 5, games : ["baseball", "skiing", "chess"], charges : 25,
      name : {first : "ivanka",
              last : "trump"
             }
     },
     {rollNo : 64, gender : "M", std : 6, games : ["handball", "chess"], charges : 35,
      name : {first : "bill",
              last : "clinton"
             }
     },
     {rollNo : 71, gender : "F", std : 7, games : ["tennis", "skiing"], charges : 40,
      name : {first : "hillary",
              last : "clinton"
             }
     },
     {rollNo : 57, gender : "F", std : 5, games : ["baseball", "skiing"], charges : 25,
      name : {first : "martina",
              last : "hingis"
             }
     },
     {rollNo : 74, gender : "M", std : 7, games : ["baseball", "skiing"], charges : 35,
      name : {first : "oprah",
              last : "winfrey"
             }
     },
     {rollNo : 58, gender : "M", std : 5, games : ["baseball", "chess"], charges : 20,
      name : {first : "peter",
              last : "anderson"
             }
     },
     {rollNo : 73, gender : "F", std : 7, games : ["tennis", "skiing", "football"], charges : 25,
      name : {first : "rebecca",
              last : "mark"
             }
     },
]



)
//using the insertMany with the variable which created earlier
db.getCollection("students").insertMany(a)
//fetching all the docs using the find()
db.getCollection("students").find()
//fetching one document using the findOne()
db.getCollection("students").findOne()
//now using the $project with $concat and $toUpper and $toLower
db.getCollection("students").aggregate([
        //here we are using the $project along with the $concat unary operator
        {$project:{
            _id:0, //making the _id field disapper
            fullName:{$concat:["$name.first","-","$name.last"]},
            //here we are using the first and last to display that both will be concatinated along with "-"
            fees:"$charges" //changing the field name to fee and displaying after the fullName
        }}
])

//here we are using the $toUpper to make the firstname in u[pper case and toLower to keep the lastname in lower case
db.getCollection("students").aggregate([
        //here using the $project stage to use $concat and $toUpper and $toLower unary operator
        {$project:{
            _id:0,//making the _id field as hidden
            mix_fuillname:{$concat:[{$toUpper:"$name.first"},"-",{$toLower:"$name.last"}]},
            //here making the firstname in uppercase and last name in lower case
            fees:"$charges" //making the charge field name as the fees

        }}

])
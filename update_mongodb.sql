use company //switching the darabase to company
db.createCollection("empdept") //creating the collection named as empdept
db.getCollection("empdept").find({}) //fetching all document present inside it
//incrementing the basic salary of each field by 100 and also update the job as UDC (upper division clerk)
db.getCollection("empdept").updateMany(
    //here the query to fetch the details
    {},//here it will fetch the entire document
    //here the update query we want to perform
    {
        $inc:{"employees.$[a].salary.basic":NumberInt(100)},
        $set:{"employees.$[b].job":"UDC" }
    },
    //here the option but as we are using the updateMany() its not required
    {
        arrayFilters:[{"a.job":"clerk"},{"b.job":"clerk"}]
    }
)
//fetching the documents after the updates
db.getCollection("empdept").find()
//inserting the documents into the collection
db.empdept.insertMany([{_id : 1,
                       dname : "research",
                       loc : "new york",
                       phone : ["+1 571 446 9580", "+1 368 921 7534", "+1 132 860 0234"],
                       employees : [{name : "Peter",
                                     job : "clerk",
                                     salary : {basic : 900,
                                               dapct : 70,
                                               travel : 250,
                                               health : 300}
                                     },
                                     {name : "Miller",
                                      job : "analyst",
                                      salary : {basic : 2500,
                                                dapct : 85,
                                                health : 400,
                                                overtime : 500,
                                                house : 800}
                                     },
                                     {name : "King",
                                      job : "manager",
                                      salary : {basic : 3000,
                                                dapct : 90,
                                                travel : 850,
                                                health : 500,
                                                house : 900}
                                      }
                        ]},

                        {_id : 2,
                         dname : "accounts",
                         loc : "boston",
                         phone : ["+1 201 203 7332"],
                         employees : [{name : "Smith",
                                       job : "clerk",
                                       salary : {basic : 900,
                                       dapct : 70,
                                       travel : 200,
                                       health : 400}
                                      },
                                      {name : "Ford",
                                       job : "manager",
                                       salary : {basic : 3000,
                                                 dapct : 90,
                                                 travel : 750,
                                                 health : 400,
                                                 house : 800}
                                      },
                                      {name : "Jones",
                                       job : "clerk",
                                       salary : {basic : 800,
                                                 dapct : 70,
                                                 travel : 150,
                                                 health : 300}
                                      }
                         ]},

                         {_id : 3,
                          dname : "sales",
                          loc : "chicago",
                          phone : ["+1 217 778 2876", "+1 435 657 8124"],
                          employees : [{name : "Turner",
                                        job : "salesman",
                                        salary : {basic : 1000,
                                                  dapct : 60,
                                                  travel : 500,
                                                  health : 400,
                                                  comm : 200}
                                       },
                                       {name : "Allen",
                                        job : "manager",
                                        salary : {basic : 3000,
                                                  dapct : 90,
                                                  travel : 850,
                                                  health : 500,
                                                  house : 900}
                                       }
                         ]}
])
//switching the database to company
use company
//creating a collection with empty document using the explicit way as below
db.createCollection("empdept")
//inserting multiple documents into it as below
db.empdept.insertMany([{_id : 1,
                       dname : "research",
                       loc : "new york",
                       phone : "+1 571 446 9580",
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
                         phone : "+1 201 203 7332",
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
                          phone : "+1 217 778 2876",
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

//generic syntax for fetching specific row using the collection is 
//db.<collection name>.find(<selection query>)(<field>:1,<field>:0)
//here 1 stands for to dispaly and 0 stands for the hide

//fetching the main document specific attribute projection as below 
db.empdept.find({},{dname: 1,loc: 1})
//_id is auto yes if we want to ignore that we can mention _id:0
//here remember that only the _id field can be zero while the rest of the field being 1
//but this rule will not be applicable for the normal fields
//the fields can either be showned and hide but not both at the same time
db.empdept.find({},{dname:1,loc:1,_id:0})
//but here if we provide for the normal one as one to show and one to hide then it will throw an error 
db.empdept.find({},{dname:1,loc:0,_id:0})//this will throw an error because we are asking showing and hoding in the same 
//similarly we can hide the elements as with 0 as
//remmber while hiding we can;t display the field 
//while displaying we can't hide the field 
//but the only exception is _id field 
//this will be having the same result as here here we are hiding all the column 
//this will be complement of the preveious case 
db.empdept.find({},{phone:0,_id:0,employees:0})
//similarly we can display this for the embeded document as below
//this will display the main document as well embeded array of document specific field 
db.empdept.find({},{dname:1,loc:1,"employees.name":1,"employees.job":1})
//if we want to hide out the _id field then
db.empdept.find({},{dname:1,loc:1,"employees.name":1,"employees.job":1,_id:0})
//similarly checking for the nested document present in the embeded document as below
//here we are dispolaying the employee name and empoloyee basic salary as below 
db.empdept.find({},{dname:1,loc:1,"employees.name":1,"employees.salary.basic":1,_id:0})
//here lest suppose if we want to display the manager employee only who belong to department research as
db.empdept.find({dname:"research"})//this will display the whole document
//if we want to fetch only for the manager then that can be written as below 
db.empdept.find({dname:"research"},{employees:{$elemMatch:{job:"manager"}}})
//similarly fetching it for the salary as below 
db.empdept.find({dname:"research"},{employees:{$elemMatch:{"salary.basic":3000}},phone:1})

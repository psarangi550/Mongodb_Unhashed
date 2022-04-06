use company
show collections
db.employee.find()
//updating the name to pratik where name is Peter in the main document 
db.employee.update({},{$set:{name:"Pratik"}},
                       {$filter:{name:"Peter"}})
//checking the result afterwards
db.employee.find();
//changing the basic salary to 1000 where basic salary 900
db.employee.update({"salary.basic":900},{$set:{"salary.basic":1000}},{multi:true})
//changing the basic salary to 2000 from 1000 where name="King"
db.employee.update({name:"King"},{$inc:{"salary.basic":1000}})
db.employee.update({dept:"accounts"},{$inc:{"salary.basic":1000}},{multi:true})
db.employee.update({dept:"research"},{$inc:{"salary.basic":2000}},{multi:true})
//fetching the value from it 
db.employee.find();
//similarly updating the value of the basic salary to  incremented by 200 where the travel is > 200
db.employee.update({"salary.travel":{$gt:200}},{$inc:{"salary.basic":200}},{multi:true})
//alternate way 
db.employee.update({},{$inc:{"salary.basic":200}},{$filter:{"salary.travel":{$gt:200}}},{multi:true})

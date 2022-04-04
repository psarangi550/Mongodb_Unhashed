//using the database as company
use company
//showing all different collections
show collections
//displaying all the employee avaible 
db.employee.find({})
//fetching all the nested documentes inside the main document considering the elelemtn
db.employee.find({salary:{basic:900,dapct:70,travel:250,health:300}})

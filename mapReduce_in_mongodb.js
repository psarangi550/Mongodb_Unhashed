use school;
db.students.find()
db.students.mapReduce(
    function()
        {
            emit(this.std,this.charges);    
        },
     function(key,value)
         {
             return Array.max(value);
         },
         {
             query:{gender:"F"},
             out:{inline:1}
         }
)
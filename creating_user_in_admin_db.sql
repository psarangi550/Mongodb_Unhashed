show dbs
db.createUser(
    {
    user:"pratik",
    pwd:"pratik123",
    roles:[
        {
        role:"root",
        db:"admin"
        }
    ]
    }
)
db
show users

show collections
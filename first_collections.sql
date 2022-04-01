// db.appliance.find()
show collections
b=(
    {
        aid:2,
        aname:'Fan',
        power:1000,
        sweep:12,
        rmp:5000,
        weight:15,
    }
)

db.appliance.insert(b);

db.appliance.find()

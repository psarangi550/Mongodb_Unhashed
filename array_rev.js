show collections
db.stationery.find()
db.stationery.find({color:{$all:["red","white","blue"]}})
db.stationery.find({dimension:{0:{$:{$gt:6}}}})
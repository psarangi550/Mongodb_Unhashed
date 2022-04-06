use company
//showiung the collection as 
show collections;
//creating one more collection without any document as fetch_date
db.createCollection("fetch_date")
//insewrting the documents into it 
db.fetch_date.insert(
    {
        created_at:new Date("2022-03-16 13:00:00")
    }
);
//fetching the result as 
db.fetch_date.find()
//here in this case cased also timezone will be subtracted from the time provided 
db.fetch_date.insert(
    {
        created_at:new Date("2022-03-16 1:30:00")
    }
);

//fetching the result as 
db.fetch_date.find()
//here it will be displayed as the format we provided the value 
db.fetch_date.insert(
    {
        created_at:new Date("2021-03-16T1:30:00Z")
    }
);
//here remember that month starts with 0 so 9 here means 10 actually
db.fetch_date.insert(
    {
        created_at:new Date(2018,9,10)
    }
);

db.fetch_date.find({})
//--here also the timezone will be considered 
db.fetch_date.insert(
    {
        created_at:new Date("2018 August 10")
    }
);
//another way to add is --here also the timezone will be considered 
db.fetch_date.insert(
    {
        created_at:new Date("August 2019  10")
    }
);

//fetching the data using the find()
db.fetch_date.find({})
//another way to add the date is by using the ISODate()
//ISODate()--> return new Date() which will provide the new Date 
db.fetch_date.insert(
    {
        created_at:ISODate()
    }
);
//another form of the ISODate
db.fetch_date.insert(
    {
        created_at:ISODate("1997-03-16T03:30:05Z")
    }
);
//again fetching as 
db.fetch_date.find({})
//bit when we provided by this then the timezone will not be considered
db.fetch_date.insert(
    {
        created_at:new Date("2018-03-16")
    }
);

//fetchign the data as 
db.fetch_date.find({})
//when we omit the new and only provide as date then the value is the string 
var created_date=Date("1997-03-16")
// print(created_date)
typeof created_date //this will return as string 
var created_new_date=new Date("1997-03-16")
typeof created_new_date //this will return as object 

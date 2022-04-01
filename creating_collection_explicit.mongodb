//creating the collection explicitly
db.createCollection('books');

//creating the collection and inserting the docs into it 
db.books.insert({
    title:"python",
    author:"pratik"
})

//creating the document b
b={
    title:"plsql",
    author:"rika"
}
//inserting one document into the collection 
db.books.insertOne(b)
//fetching the documents from the collections
db.books.find()
//displaying the collections
show collections;
//creating an explicit capped collection
db.createCollection('new_books',{capped:true,size:2048,max:3});

//displaying the capped collections

show collections

//creating the document a

a={
    name:"pratik",
    major:"python"
}
//creating the document b

b={
    name:"rika",
    major:"plsql"
}
//creating the document c
c={
    name:"abi",
    major:"mongo"
}


//executing multiple document insertion into the capped collection 
db.new_books.insert([a,b,c])
//fetching the data from the documents
db.new_books.find()

d={
    name:"gundu",
    major:"docker"
}


//now trying to add one more document to the capped collection whose max document size been exsusted 
db.new_books.insert(d)

//now checking whether the preveious value been dleted to accomodate the new document

db.new_books.find();//same result as expected 

//deleting the capped collections by using the drop()
db.new_books.drop()







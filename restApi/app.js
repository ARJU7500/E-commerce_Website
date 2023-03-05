let express = require('express');
app = express();
const dotenv= require('dotenv');
dotenv.config();
const mongo = require ("mongodb");
let mongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;
let port= process.env.port || 7668;

//home page
app.get("/", (req, res)=>
{
    res.send("home page");
})

// //storetdata
// app.get("/product", (req, res)=>
// {
// db.collection("product").find().toArray((err, result)=>
// {
//     if(err) throw err;
//     res.send(result);
// })
// })

// product data
app.get("/product", (req, res)=>
{
    let productId=Number(req.params.product_id);
    let query={};
    if(productId)
    {
        query={product_id : productId}
    }
    db.collection("product").find(query).toArray((err, result)=>
    {
    if(err) throw err;
    res.send(result);
    })

})
//connectdatabase
mongoClient.connect(mongoUrl, (err, connection)=>
{
    if(err) throw err;
    db=connection.db("redstore");
    app.listen(port, ()=>
{
    console.log(`server start port num ${port}`);
});
})


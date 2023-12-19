const express =  require("express");
// this is server 
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/Ashvin",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected with mongoDB")
}).catch((err)=>{
    console.log(err)
})


app.use(bodyparser.urlencoded({extended :false}))
app.use(express.json)

const productSchma = new  mongoose.Schema({
    name:String,
    Decompression : String,
    price:Number,

})
const Product = new mongoose.model('Product',productSchma)


// create product
app.post("/api/product/new",async(req ,res)=>{

   const product = await Product.create(req.body);
    res.status(200).json({
        success : true,
        product
    })
})



app.listen(4500,()=>{
    console.log("server is working http://localhost:4500")
})
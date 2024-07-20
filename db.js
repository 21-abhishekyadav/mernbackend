const mongoose= require('mongoose');
const mongoURI= "mongodb://127.0.0.1:27017/iNotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI)  
    console.log("connection successful");
}

module.exports=connectToMongo;
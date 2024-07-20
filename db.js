const mongoose= require('mongoose');
const mongoURI= "mongodb+srv://21abhishekay:ZXtRQdzdhywZABow@cluster0.w17k2pr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI)  
    console.log("connection successful");
}

module.exports=connectToMongo;

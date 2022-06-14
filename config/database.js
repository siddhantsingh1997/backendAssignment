const mongoose=require("mongoose");

const Connection = async () => {
    
  const URL = `mongodb+srv://roro:${process.env.DB_PASSWORD}@sidcluster.kbusf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useunifiedTopology: true,
    });
    console.log("connected with mongo db");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports=Connection;
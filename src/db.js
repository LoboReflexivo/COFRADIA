//Aquí es donde se conecta la base de datos
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://DGG:Lobolobito777@cluster0.209hny3.mongodb.net/cofradia"
    );
    console.log(">>> MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

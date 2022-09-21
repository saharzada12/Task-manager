const mongoose = require("mongoose");

const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  try {
    mongoose.connect(
      "mongodb+srv://saharzada:szzada8599@cluster0.qkykm5z.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("connected to the data");
  } catch (error) {
    console.log(error);
    console.log("could not connect");
  }
};

module.exports = database;

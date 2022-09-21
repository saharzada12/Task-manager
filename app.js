const express = require("express");
const app = express();
const tasks = require("./public/routes/tasks");
const database = require("./db/connect");
require("dotenv").config;

// middleware
app.use(express.static('./public'))

app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks); 




const PORT = 3001;

const start = async () => {
  try {
    await database(process.env.MONGO_URI);
    app.listen(
      PORT,
      console.log(`Server is listening on port ${PORT} have fun !!`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

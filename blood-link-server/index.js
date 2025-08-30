const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const needBloodRoutes = require("./routes/needBloodRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

// creates express app
const app = express();

// use of middlewars
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//routes
app.use("/api/needBlood",needBloodRoutes);
app.use("/api/user",userRoutes);


app.get("/", async (req, res) => {
  res.send("working server blood link");
});


mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    // listen for request
    console.log("Successfully Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`Listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
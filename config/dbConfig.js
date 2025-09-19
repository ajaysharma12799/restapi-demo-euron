const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database", error);
    });
};

module.exports = connectDatabase;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const carroRoutes = require('./routes/carros');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/cliente", clienteRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://santiagoguii:ApVXZobIBXHpzmlq@carros.0bivlqi.mongodb.net/?retryWrites=true&w=majority&appName=Carros"
  )
  .then(() => {
    console.log("Conectado com o banco de dados!");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const productRouter = require("./routes/product.route");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";

app.use(express.json()); // allows us to accept JSON in the request body

app.use("/api/products", productRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Running in ${ENV} mode on port ${PORT}`);
});

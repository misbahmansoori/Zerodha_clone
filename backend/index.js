const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("./models/UserModel");

const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// ✅ Middlewares FIRST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://zerodha-clone-dusky-beta.vercel.app",
    ],
    credentials: true,
  })
);


// ✅ Routes BEFORE listen
app.use("/", authRoute);

// ---- Other APIs ----
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel(req.body);
  await newOrder.save();
  res.send("Order saved!");
});

// app.get("/me", (req, res) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ user: null });

//   const decoded = jwt.verify(token, process.env.TOKEN_KEY);

//   User.findById(decoded.id)
//     .select("-password")
//     .then((user) => {
//       res.json({ user });
//     });
// });

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// ✅ Start server LAST
app.listen(PORT, async () => {
  console.log("App started!", PORT);
  await mongoose.connect(uri);
  console.log("DB started!");
});

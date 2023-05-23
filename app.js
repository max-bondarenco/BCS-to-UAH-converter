const express = require("express");

const rateRouter = require("./routes/rate");
const subscriptionRouter = require("./routes/subscription");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", rateRouter);
app.use("/api", subscriptionRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Page not found" });
});

app.use((err, req, res, next) => {
  if (err.custom)
    return res.status(err.statusCode).json({ error: err.message });

  console.log(err);
  res.status(500).json({ error: "Unknown error, try again later" });
});

module.exports = app;

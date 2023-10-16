require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
// This is your test secret API key.
const stripe = require("stripe")(
  "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"
);
const path = require("path");

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
app.use(express.static(buildPath));
app.use(express.json());
app.use(
  cors({ origin: ["http://freetownrentals.com", "http://127.0.0.1:5173"] })
);

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// const calculateOrderAmount = (amount) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return amount * 400;
// };

app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body);
  const { amount } = req.body;
  console.log(amount);

  //   const newPrice = price * amount;
  //   const newPrice = amount * 100;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));

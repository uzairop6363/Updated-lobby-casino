const express = require("express");
const cors = require("cors");
const axios = require("axios"); // EasyPaisa API call
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Mock user database (replace with real DB)
let users = {
  testuser: { email: "test@test.com", balance: 200 }
};

// Create EasyPaisa transaction
app.post("/api/create-easypaisa-transaction", async (req, res) => {
  const { email, amount } = req.body;
  if (!email || !amount) return res.status(400).json({ error: "Missing fields" });

  try {
    // Replace this with real EasyPaisa merchant API request
    const paymentUrl = `https://easypaisa.com/checkout?amount=${amount}&email=${email}&mock=true`;

    // Save pending transaction in memory (replace with DB in prod)
    users[email].pendingPayment = amount;

    res.json({ paymentUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

// Confirm payment (called by frontend or webhook)
app.post("/api/confirm-payment", (req, res) => {
  const { email } = req.body;
  if (!email || !users[email] || !users[email].pendingPayment) {
    return res.status(400).json({ error: "No pending payment found" });
  }

  const amount = users[email].pendingPayment;
  users[email].balance += amount;
  delete users[email].pendingPayment;

  res.json({ balance: users[email].balance });
});

// Get user balance
app.get("/api/get-user-balance/:email", (req, res) => {
  const { email } = req.params;
  if (!email || !users[email]) return res.status(404).json({ error: "User not found" });
  res.json({ balance: users[email].balance });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

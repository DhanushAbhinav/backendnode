const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/officeTransactions', { useNewUrlParser: true, useUnifiedTopology: true });

const transactionSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    description: String,
    amount: Number,
    type: String // 'Credit' or 'Debit'
});

const Transaction = mongoose.model('Transaction', transactionSchema);

app.post('/api/transactions', async (req, res) => {
    const { description, amount, type } = req.body;
    const transaction = new Transaction({ description, amount, type });
    await transaction.save();
    res.send(transaction);
});

app.get('/api/transactions', async (req, res) => {
    const transactions = await Transaction.find().sort({ date: 1 });
    res.send(transactions);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(Listening on port ${port}...));
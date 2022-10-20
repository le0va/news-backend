const { MongoClient } = require('mongodb');

const url = "mongodb+srv://news-petproject:UwnfhvTxgGaSZfzq@cluster0.qfywilp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

module.exports = client;
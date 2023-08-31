// existing imports
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Initialize dotenv for environment variables
require('dotenv').config();

// Add a log to check the PORT value
console.log(`Listening on port: ${port}`);

// existing code
const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_DB_ENDPOINT || "https://healthcaredb.documents.azure.com:443/";
const key = process.env.COSMOS_DB_KEY;

const client = new CosmosClient({ endpoint, key });

console.log('Azure Cosmos DB client has been initialized successfully.');

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



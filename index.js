const express = require('express');
const app = express();
const port = 3000;

// Initialize dotenv for environment variables
require('dotenv').config();

// Import required modules
const { CosmosClient } = require("@azure/cosmos");

// Retrieve environment variables for CosmosDB connection
const endpoint = process.env.COSMOS_DB_ENDPOINT || "https://healthcaredb.documents.azure.com:443/";
const key = process.env.COSMOS_DB_KEY;

// Initialize Cosmos DB client
const client = new CosmosClient({ endpoint, key });

// Log a message to indicate successful initialization
console.log('Azure Cosmos DB client has been initialized successfully.');

// Serve static files from a "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

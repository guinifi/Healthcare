const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Dummy function to simulate inserting data into Cosmos DB
async function insertIntoCosmosDB(appointmentData) {
  // Here, you'll implement the code to insert data into Cosmos DB
  return true;
}

app.post('/api/appointments', async (req, res) => {
  const appointmentData = req.body;
  
  // Insert data into Cosmos DB
  const isInserted = await insertIntoCosmosDB(appointmentData);
  
  if (isInserted) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
// Import the CosmosClient
const { CosmosClient } = require("@azure/cosmos");

// Initialize a new instance of CosmosClient
const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint, key });

async function main() {
  const database = client.database("docliveappdb");
  const container = database.container("Appointments");

  // Insert a new document into the container
  const newItem = {
    id: "appointment1",
    patientName: "John Doe",
    appointmentDate: new Date().toISOString(),
  };

  const { resource: createdItem } = await container.items.create(newItem);
  console.log(`Inserted item: ${createdItem.id}`);

  // Query the item
  const querySpec = {
    query: "SELECT * FROM Appointments a WHERE a.id = @id",
    parameters: [
      {
        name: "@id",
        value: "appointment1",
      },
    ],
  };

  const { resources: results } = await container.items.query(querySpec).fetchAll();
  for (var queryResult of results) {
    console.log(`Queried item: ${queryResult}`);
  }
}

main().catch((error) => {
  console.error(error);
});

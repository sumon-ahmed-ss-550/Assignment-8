
const { MongoClient } = require("mongodb");

async function test() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log("Connected successfully to server");
    await client.close();
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

test();

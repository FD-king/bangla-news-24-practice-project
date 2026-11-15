const { MongoClient } = require("mongodb");

async function testConnection() {
  const client = new MongoClient(process.env.MONGODB_DATABASE_SECRET);

  try {
    await client.connect();

    console.log("MongoDB connected!");

    const db = client.db("BanglaNews24");
    console.log(await db.command({ ping: 1 }));
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  } finally {
    await client.close();
  }
}

require("dotenv").config();
testConnection();

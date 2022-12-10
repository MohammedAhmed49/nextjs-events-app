import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const url =
      "mongodb+srv://momo:123@cluster0.z7mqdcq.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    // Database Name
    const dbName = "events";

    async function main() {
      // Use connect method to connect to the server
      await client.connect();
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection("newsletterEmails");

      const { email } = JSON.parse(req.body);

      const response = await collection.insertOne({ email: email });

      res.status(201).json({ message: "Done!" });

      return "done.";
    }

    main()
      .then(console.log("Done"))
      .catch(console.error)
      .finally(() => client.close());
  }
}

export default handler;

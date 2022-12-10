import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const url =
    "mongodb+srv://momo:123@cluster0.z7mqdcq.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);

  // Database Name
  const dbName = "events";

  const db = client.db(dbName);

  await client.connect();

  if (req.method === "POST") {
    const { email, name, text } = JSON.parse(req.body);

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const response = await db.collection("comments").insertOne(newComment);

    console.log(response.insertedId);

    newComment.id = response.insertedId;

    res.status(201).json({ message: "Done", newComment });
  }
  if (req.method === "GET") {
    const comments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: comments });
  }

  client.close();
}

export default handler;

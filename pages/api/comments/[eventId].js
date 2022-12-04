function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, text } = JSON.parse(req.body);

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Done", newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      { id: 1, name: "Momo", text: "First" },
      { id: 2, name: "Nehal", text: "Second" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;

function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);
    console.log(email);

    res.status(201).json({ message: "Done!" });
  }
}

export default handler;

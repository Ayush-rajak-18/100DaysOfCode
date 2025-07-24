exports.createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
    }

    res.status(201).json({
        message: "User created successfully",
        user: { name, email }
    });
};

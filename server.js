require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000();

app.post("/email", async (req, res) => {
    try {
        const newemail = new email(req.body);
        await newemail.save();
        res.status(201).json({ message: "email created suscefully", email: newemail });
    } catch (error) {
        res.status(400).json({ message: "Error in saving email", error });
    }
});


app.get("/emails", async (req, res) => {
    try {
        const books = await emails.find();
        res.json(emails);
    } catch (error) {
        res.status(500).json({ message: "Error fetching emails", error });
    }
});



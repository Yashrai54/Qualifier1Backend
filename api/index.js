const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const corsOptions = {
    origin: "https://frontend-qualifier1-qr3xnus9v-yash-rais-projects-74183a18.vercel.app/",
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type"
};
app.use(cors(corsOptions));

app.options("/bfhl", cors(corsOptions)); 

app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input. 'data' must be an array."
        });
    }

    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highestAlphabet = alphabets.length ? alphabets.sort().pop().toUpperCase() : null;

    res.status(200).json({
        is_success: true,
        user_id: "yash_rai_07022005",
        email: "22BCS16285@cuchd.in",
        roll_number: "22BCS16285",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

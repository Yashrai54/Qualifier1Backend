const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// Define allowed frontend URLs
const allowedOrigins = [
    "https://frontend-qualifier1-klknkh4yv-yash-rais-projects-74183a18.vercel.app",
    "https://frontend-qualifier1-29m0trvsm-yash-rais-projects-74183a18.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS policy blocked this request"));
        }
    }
}));

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

    res.json({
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
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

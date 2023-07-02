const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const fs = require("fs");
const path = require("path");
const images = path.join(__dirname, "images");

app.get("/", (req, res) => {
    fs.readdir(images, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }

        const index = Math.floor(Math.random() * files.length);
        const image = files[index];
        const imagePath = path.join(images, image);

        res.sendFile(imagePath);
    });
});

app.get("/external/*", async (req, res) => {
    const input = req.params[0];
    const images = input.split(",").filter(item => item.trim() !== "");

    const index = Math.floor(Math.random() * images.length);
    const image = images[index];

    try {
        const response = await axios.get(image, {
          responseType: "stream",
        });
    
        res.set("Content-Type", response.headers["content-type"]);
        response.data.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/github", (req, res) => {
    res.send(`<script>window.location.href = "https://github.com/FireStreaker2/RandomImage";</script>`);
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
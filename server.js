const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require("path");

// // Routes
const category = require("./server/routes/api/category");
const blog = require("./server/routes/api/blog");
// const post = require("./routes/api/post");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static('public/static'))

// //Db config
const db = require("./server/config/keys").mongoURI;
mongoose
    .connect(db)
    .then(() => console.log("Mongo db connected"))
    .catch(err => console.log(error));


app.use("/api/v1/category", category);
app.use("/api/v1/blog", blog);


app.get("/+*", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

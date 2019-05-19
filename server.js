const express = require("express");
const mongoose = require("mongoose");

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');

const PORT = process.env.PORT || 5000;
const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(e => console.log(e));

app.get("/", (req, res) => res.send("Hello World!"));

// User Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

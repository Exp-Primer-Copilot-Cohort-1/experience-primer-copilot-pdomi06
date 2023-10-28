// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ACNH', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import model
const Comment = require('./models/comment');

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = new Comment(req.body);
    comment.save().then((comment) => {
        res.send(comment);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// Get all comments
app.get('/comments', (req, res) => {
    Comment.find().then((comments) => {
        res.send(comments);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    Comment.findById(req.params.id).then((comment) => {
        res.send(comment);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// Update a comment
app.patch('/comments/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((comment) => {
        res.send(comment);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((comment) => {
        res.send(comment);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// Listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
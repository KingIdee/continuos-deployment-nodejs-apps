const express = require("express");

const router = express.Router();

const User = require("./../../models/Blog");

// @route   GET api/posts/test
// @desc    Test posts route
// @access  Public
router.get("/", (req, res) => {
    Blog
        .find()
        .then(blog => res.json(blog))
        .catch(err => console.log(err));
});


// @route   GET api/posts/test
// @desc    Test posts route
// @access  Public
router.get("/:id", (req, res) => {
    Blog
        .findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => console.log(err));
});

// @route   GET api/users/register
// @desc    Test posts route
// @access  Public
router.post("/create", (req, res) => {

    const newBlog = new Blog({
        title: req.body.title,
        description: req.body.description,
        category_id: req.body.category_id,

    });

    newBlog
        .save()
        .then(blog => res.json(blog))
        .catch(err => console.log(err));

});
module.exports = router;

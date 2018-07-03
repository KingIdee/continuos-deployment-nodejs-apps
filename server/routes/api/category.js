const express = require("express");

const router = express.Router();

const User = require("./../../models/Category");

// @route   GET api/posts/test
// @desc    Test posts route
// @access  Public
router.get("/", (req, res) => {
    Category
        .find()
        .then(category => res.json(category))
        .catch(err => console.log(err));
});


// @route   GET api/users/register
// @desc    Test posts route
// @access  Public
router.post("/create", (req, res) => {

    const newCategory = new Category({
        name: req.body.name,

    });
    console.log(newCategory);
    newCategory
        .save()
        .then(category => res.json(category))
        .catch(err => console.log(err));

});

// @route   GET api/users/register
// @desc    Test posts route
// @access  Public
router.post("/delete/:id", (req, res) => {


    Category
        .findByIdAndDelete(req.params.id)
        .then(category => res.json(category))
        .catch(err => console.log(err));

});

module.exports = router;

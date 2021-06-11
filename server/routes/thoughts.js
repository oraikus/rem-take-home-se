var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var db = require('../database');
// var app = express();

// /* GET Thoughts. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/all", function (req, res) {
    db.Thought.findAll()
        .then(thoughts => {
            res.status(200).send(JSON.stringify(thoughts));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.get("/:id", function (req, res) {
    db.Thought.findByPk(req.params.id)
        .then(thought => {
            res.status(200).send(JSON.stringify(thought));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.put("/", function (req, res) {
    db.Thought.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id
    })
        .then(thought => {
            res.status(200).send(JSON.stringify(thought));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.delete("/:id", function (req, res) {
    db.Thought.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;

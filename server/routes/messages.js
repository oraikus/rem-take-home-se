var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var db = require('../database');
// var app = express();

// /* GET Messages. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/all", function (req, res) {
    db.Message.findAll()
        .then(messages => {
            res.status(200).send(JSON.stringify(messages));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.get("/:id", function (req, res) {
    db.Message.findByPk(req.params.id)
        .then(message => {
            res.status(200).send(JSON.stringify(message));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.put("/", function (req, res) {
    db.Message.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id
    })
        .then(message => {
            res.status(200).send(JSON.stringify(message));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.delete("/:id", function (req, res) {
    db.Message.destroy({
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

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var db = require('../database');
// var app = express();

// /* GET Conversations. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/all", function (req, res) {
    db.Conversation.findAll()
        .then(conversations => {
            res.status(200).send(JSON.stringify(conversations));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.get("/:id", function (req, res) {
    db.Conversation.findByPk(req.params.id)
        .then(conversation => {
            res.status(200).send(JSON.stringify(conversation));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.put("/", function (req, res) {
    db.Conversation.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id
    })
        .then(conversation => {
            res.status(200).send(JSON.stringify(conversation));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});
router.delete("/:id", function (req, res) {
    db.Conversation.destroy({
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

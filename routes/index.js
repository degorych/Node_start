const express = require('express');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        res.render('index');
    })
    .post(urlencodedParser, function (req, res, next) {
        const sum = req.body.first && req.body.second ? Number(req.body.first) + Number(req.body.second) : 'error';
        res.render('index', {sumRez: sum});
    })
    .put(urlencodedParser, function (req, res, next) {
        res.render('index', {string: req.body.string});
    })
    .delete(function (req, res, next) {
        res.json({result: Number(req.body.number) + 1});
    });

module.exports = router;

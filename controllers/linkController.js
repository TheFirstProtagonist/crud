const Link = require('../models/Link');

const redirect = async (req, res) => {
    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title });
        res.redirect(doc.url);
    } catch (error) {
        res.send("Error: " + error);           
    }
}

const create = async (req, res) => {
    let link = new Link({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    });

    try {
        let doc = await link.save();
        res.send(doc);
    } catch (error) {
        res.send("Error: " + error);
    }
}

const returnAll = async (req, res) => {
    try {
        let links = await Link.find();
        res.send(links);
    } catch (error) {
        res.send("Error: " + error);
    }
}

const deleteOne = async (req, res) => {
    let id = req.params.id;
    try {
        let doc = await Link.deleteOne({ _id: id });
        res.send(doc);
    } catch (error) {
        res.send("Error: " + error);
    }
}

const putOne = async (req, res) => {
    let id = req.params.id;
    try {
        let doc = await Link.updateOne({ _id: id }, req.body);
        res.send(doc);
    } catch (error) {
        res.send("Error: " + error);
    }
}

module.exports = {
    redirect,
    create,
    returnAll,
    deleteOne,
    putOne
}
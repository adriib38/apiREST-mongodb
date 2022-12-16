const express = require("express");
const publicationSchema = require("../models/publication");
const router = express.Router();

//create publication
router.post("/publications", (req, res) => {
    const publication = publicationSchema(req.body);
    publication
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all publications
router.get("/publications", (req, res) => {
    publicationSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a publication
router.get("/publication/:id", (req, res) => {
    const { id } = req.params;
    publicationSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a publication
router.put("/publication/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, mail } = req.body;
    publicationSchema
    .updateOne({ _id: id }, { $set: {name, age, mail} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a publication
router.delete("/publication/:id", (req, res) => {
    const { id } = req.params;
    publicationSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
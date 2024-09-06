const mongoose = require("mongoose");
const needBloodModel = require("../models/needBloodModel.js");

const getAllNeedBlood = async (req, res) => {
    const exams = await needBloodModel.find({});
    res.status(200).json(exams);
};

const getSingleNeedBlood = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID.!." });
    }
    const exam = await needBloodModel.findById(id);

    if (exam) {
        res.status(200).json(exam);
    } else {
        return res.status(400).json({ error: "No Such need blood post Found.!." });
    }
};

const createNeedBlood = async (req, res) => {
    console.log("need blood", req.body)
    try {
        let data = {
            ...req.body,
        };
        const newNeedBlood = new needBloodModel(data);
        const savedNeedBlood = await newNeedBlood.save();
        res.status(201).json(savedNeedBlood);
    } catch (error) {
        console.error('Error saving need blood post:', error); // Log the error details
        res.status(500).json({ message: error.message });
    }
};

const updateNeedBlood = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID.!." });
    }
    const exam = await examModel.findOneAndUpdate({ _id: id }, { ...req.body });

    if (exam) {
        const toSend = await needBloodModel.findById(id);
        res.status(200).json(toSend);
    } else {
        return res.status(400).json({ error: "No Such Exam Found.!." });
    }
};

const deleteNeedBlood = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID.!." });
    }

    const needBlood = await needBloodModel.findOneAndDelete({ _id: id });

    if (needBlood) {
        res.status(200).json(needBlood);
    } else {
        return res.status(400).json({ error: "No Such exam Found.!." });
    }
};

module.exports = {
    createNeedBlood,
    getAllNeedBlood,
    getSingleNeedBlood,
    updateNeedBlood,
    deleteNeedBlood
}

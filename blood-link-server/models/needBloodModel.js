const mongoose = require("mongoose");

const needBloodSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userCollection",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    neededBloodGroup: {
        type: String,
        required: true
    },
    details:{
        type: String
    },
    location: {
        type: String,
        required: true
    },
}, { timestamps: true });

const needBlood = mongoose.model("needBloodCollection", needBloodSchema);

module.exports = needBlood;

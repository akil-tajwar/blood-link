const userModel = require("../models/userModel.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const { sendOtpForForgotPassword, sendOtpForRegistration, sendWelcomeEmail } = require("../MailServices/mail.js");
const bcrypt =  require("bcrypt");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

const signup = async (req, res) => {
    console.log("AP=>", req.body);
    try {
      const user = await userModel.signup(req.body);
  
      const token = createToken(user._id);
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

const getAllUser = async (req, res) => {
    const users = await userModel.find({});
    res.status(200).json(users);
};

const getSingleUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID.!." });
    }

    const user = await userModel.findById(id);

    if (user) {
        res.status(200).json(user);
    } else {
        return res.status(400).json({ error: "No Such user Found.!." });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID." });
    }

    try {
        // Find the existing user
        const prevUser = await userModel.findById(id);
        console.log("🚀 ~ updateUser ~ prevUser:", prevUser);

        if (!prevUser) {
            return res.status(404).json({ error: "No Such User Found." });
        }

        // Check if the email is being updated
        if (req.body.email && req.body.email !== prevUser.email) {
            // Check if the new email is not empty
            if (req.body.email === "") {
                return res.status(400).json({ error: "Email cannot be empty." });
            }

            // Check if the new email already exists
            const existingUser = await userModel.findOne({ email: req.body.email });
            if (existingUser) {
                return res.status(400).json({ error: "Email already in use." });
            }
        }

        // Update the user
        const updatedUser = await userModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            return res.status(400).json({ error: "Failed to update user." });
        }
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "An error occurred while updating the user." });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID.!." });
    }

    const user = await userModel.findOneAndDelete({ _id: id }, {
        ...req.body
    });

    if (user) {
        res.status(200).json(user);
    } else {
        return res.status(400).json({ error: "No Such User Found.!." });
    }
};





const signupOTP = async (req, res) => {
    const mail = await sendOtpForRegistration(req.body.email, req.body.otp);
    res.status(200).json(mail);
};
const forgotPasswordOTP = async (req, res) => {
    const mail = await sendOtpForForgotPassword(req.body.email, req.body.otp);
    res.status(200).json(mail);
};

const changePasswordFromForgotPassword = async (req, res) => {

    console.log("AAAAAAA",req.body);
    const { email } = req.params;
    const exist = await userModel.findOne({ email });

    if (!exist) {
        return res.status(404).json({ error: "Could Not Find any User with This Email.!. Please Sign Up" });
    }

    let dex = exist;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    dex.password=hash;

    const user = await userModel.findOneAndUpdate({ email: email }, {
        ...dex
    });

    if (user) {
        res.status(200).json(user);
    } else {
        return res.status(400).json({ error: "No Such User Found.!." });
    }
};

module.exports = {
    signup,
    login,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}
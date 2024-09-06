const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        bloodGroup: {
            type: String,
            required: true
        },
        bio: {
            type: String
        },
        lastDonate: {
            type: String
        },
        role: {
            type: String
        },
        isverified: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
);

userSchema.statics.signup = async function (name, email, phone, password, bloodGroup, bio, lastDonate, role, isverified) {
    console.log('asdfkah', email, name);
    const exist = await this.findOne({ email });
    if (exist) {
        if (!password)
            return exist;
        throw Error("Email already exists.!.");
    }

    if (!email || !name) {
        throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw Error("Not a valid email.!.")
    }
    if (password && !validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough.!.")
    }

    if (password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({ name, email, phone, password: hash, bloodGroup, bio, lastDonate, role, isverified });
        console.log("🚀 ~ user:", user)

        return user;
    }

    else {
        const user = await this.create({ name, email, phone, password, bloodGroup, bio, lastDonate, role, isverified });
        return user;
    }
};


userSchema.statics.login = async function (email, password) {
    if (password) {
        if (!password || !email) {
            throw Error("All fields must be filled...");
        }

        const user = await this.findOne({ email });

        if (!user) {
            throw Error("Incorrect Email.!.");
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw Error("Incorrect password.!.");
        }

        return user;
    }
    else {
        if (!email) {
            throw Error("All fields must be filled...");
        }

        const user = await this.findOne({ email });

        if (!user) {
            throw Error("Incorrect Email.!.");
        }

        return user;
    }

};

const user = mongoose.model("UserCollection", userSchema);

module.exports = user;

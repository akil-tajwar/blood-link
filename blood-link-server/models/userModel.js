const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    location: {
      type: String,
    },
    password: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    bio: {
      type: String,
    },
    age: {
      type: Number,
    },
    donations: {
      type: Number,
    },
    lastDonate: {
      type: String,
    },
    role: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function ({
  name,
  email,
  phone,
  image,
  city,
  location,
  password,
  bloodGroup,
  bio,
  lastDonate,
  role,
  isverified,
}) {
  const exist = await this.findOne({ email });
  if (exist) {
    if (!password) return exist;
    throw Error("Email already exists.!.");
  }

  if (!email || !name) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Not a valid email.!.");
  }

  if (password && !validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough.!.");
  }

  let user;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    user = await this.create({
      name,
      email,
      phone,
      image,
      city,
      location,
      password: hash,
      bloodGroup,
      bio,
      lastDonate,
      role,
      isverified,
    });
  } else {
    user = await this.create({
      name,
      email,
      phone,
      image,
      city,
      location,
      password,
      bloodGroup,
      bio,
      lastDonate,
      role,
      isverified,
    });
  }

  return user;
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
  } else {
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

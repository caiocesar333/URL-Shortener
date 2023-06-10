const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        session: {
            type: Boolean,
            default: false,
        },
        storedLinks: [{
            link: {
                type: String
            }
        }]
    }
)

const User = mongoose.model("user", userSchema);

module.exports = User;
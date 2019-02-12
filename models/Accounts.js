const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const AccountsSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true,
        trim: true
    },
    account_id : {
        type: Number,
        required: true,
    },
    balance : {
        type: Number,
        default: 0
    }
});

AccountsSchema.plugin(timestamp);

const Accounts = mongoose.model('Accounts', AccountsSchema);
module.exports = Accounts;
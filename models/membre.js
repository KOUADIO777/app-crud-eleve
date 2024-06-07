const mongoose = require('mongoose');
const membreSchema = mongoose.Schema(
    {
        nom: { type: String },
        prenoms: { type: String},
        date: { type: String },
        heure: { type: String },
        motif: { type: String },
        username: { type: String }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Membre', membreSchema);
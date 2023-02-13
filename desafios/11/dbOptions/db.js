import mongoose from "mongoose";

const connString = "mongodb+srv://coderhouse:3wTSMKBzH6$ei.h@miprimercluster.n0zzg0a.mongodb.net/test";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    hash: {type: String, required: true},
    salt: {type: String, required: true},
}, {collection: "users"})

const connection = mongoose.createConnection(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export const User = connection.model("User",UserSchema);
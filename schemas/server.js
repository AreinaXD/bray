const { Schema, model } = require("mongoose");

const schema = Schema({
  serverID: { type: String, default: "" },
  votes: { type: Array, default: [] }
});

module.exports = model("server", schema);
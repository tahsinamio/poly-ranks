const mongoose = require("mongoose");
const { Schema } = mongoose;

const classSchema = new Schema({
  name: String,
  evals: { type: Number, default: 0 },
  profList: [[String, { type: Number, default: 0 }]],
});

classSchema.index({ name: "text" });

mongoose.model("classes", classSchema);

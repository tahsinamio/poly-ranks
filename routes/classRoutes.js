const mongoose = require("mongoose");
const requireAdmin = require("../middlewares/requireAdmin");

const Class = mongoose.model("classes");

module.exports = (app) => {
  app.post("/api/fetchClass", async (req, res) => {
    const { classID } = req.body;

    const classFound = await Class.findOne({ _id: classID });

    res.send(classFound);
  })

  app.post("/api/searchclass", async (req, res) => {
    const { value } = req.body;
    console.log(value);

    const classesFound = await Class.find({  
      $text: { $search: value },
    });

    res.send(classesFound);
  });
};

const db = require("../config/sequelize");
const Number = db.number;
const { spawn } = require("child_process");

exports.generate = async (req, res) => {
  var limit = req.query.limit;

  if (typeof limit === "undefined") {
    // setting default value
    limit = 20;
  }

  // spawn new child process to call the python script
  const python = spawn("python", ["generator.py", limit]);

  // collect data from script
  python.stdout.on("data", async function (data) {
    var jsonString = data.toString();
    var jsonObject = JSON.parse(jsonString);

    for (i in jsonObject.numbers) {
      const temp = await Number.create({ number: jsonObject.numbers[i] }).catch(
        (err) => {
          return res.status(500).json(err);
        }
      );
    }
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);

    if (code != 0) {
      res.status(404).send("python interpreter or python script is not found ");
    }

    res
      .status(201)
      .send("1 to " + limit + " odd numbers are successfully generated");
  });
};
exports.list = async (req, res) => {
  const numbers = await Number.findAll().catch((err) => {
    return res.status(500).json(err);
  });
  res.send(numbers);
};

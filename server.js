const cors = require("cors");
const express = require("express");

const app = express();
require("dotenv").config();

const port = process.env.PORT;
app.use(express.json());

app.use(cors());
// app.get();
// app.get();
// app.get();
// app.get();
// app.post();
// app.post();
// app.put();
// app.put();
// app.delete();
// app.delete();

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

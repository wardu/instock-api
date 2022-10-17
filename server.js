const cors = require("cors");
const express = require("express");

app.use(express.json());

app.use(cors());

const app = express();
app.get();
app.post();
app.put();
app.delete();

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});

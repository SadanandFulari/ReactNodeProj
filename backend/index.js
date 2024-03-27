import express from "express";

const app = express();

app.get("/", (req, resp) => {
  resp.send("app is working");
});

app.listen(9000);

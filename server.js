const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.method, req.url);
  console.log("Incoming request");
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req.method, req.url);
  console.log("Incoming request");
  res.end();
});

app.get("/hello", function handleRequest(req, res) {
  console.log(req.method, req.url);
  console.log("Incoming request");
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Super site </title>
      </head>
      <body>
        <p>Hello <b>World</b></p>
      </body>
    </html>
  `);
});

app.get("/json", (req, res) => {
  console.log(req.method, req.url);
  console.log("Incoming request");
  res.json({
    name: "Namir",
    job: "Head Coach",
  });
});

app.post("/json", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name.includes("Mike")) {
    res.send("Will finish today");
    return;
  }
  res.send("Whatever");
});

const port = 3000;
app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});

import express from "express";
import "dotenv-safe/config";

function main() {
  let app = express();
  app.use("/", (_, res) => {
    res.send("hello world!1");
  });

  app.listen(process.env.PORT, () => {
    console.log(`server started on localhost:${process.env.PORT}`);
  });
}

main();

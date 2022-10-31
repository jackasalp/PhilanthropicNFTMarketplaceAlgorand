import express from "express";
import { Bootstrapper } from "./utils/bootstrapper";
import { Config } from "./config/index";

const app = express();
const config = new Config();

process.on('uncaughtException', function (err) {
  console.error(err.stack);
});

(async () => {
  const boostrapper = new Bootstrapper(app, config);

  await boostrapper.bootstrap();

  await boostrapper.listen((port) =>
    {
      console.log(`%c Server running on port ${port}`, "color: green");
    }
  );
})();

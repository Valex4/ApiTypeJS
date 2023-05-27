import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { productRouter } from "./Product/infrastructure/product-router";
function boostrap() {
  const app = express();
  app.disable("x-powered-by")
  app.use(bodyParser.json());
  app.use("/product", productRouter);
  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();

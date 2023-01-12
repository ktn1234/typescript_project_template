import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import chalk from "chalk";

import config from "./config";
import router from "./router";

import { logger, errorHandler } from "./middleware";

(() => {
  const app = express();
  app.use(
    cors({
      credentials: true,
      origin: config.CORS_ORIGIN,
      optionsSuccessStatus: 200,
    })
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());
  app.use(logger());
  app.use(helmet());

  app.use(router());
  app.use(errorHandler);

  app.listen(config.PORT, config.HOST_NAME, () => {
    console.log(
      chalk.cyanBright(
        `⚡️Server running at http://${config.HOST_NAME}:${config.PORT}/`
      )
    );
  });
})();

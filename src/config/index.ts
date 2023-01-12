import "dotenv/config";
import chalk from "chalk";

const config = {
  NODE_ENV: process.env.NODE_ENV as string,
  DEBUG: Boolean(process.env.DEBUG) || false,
  PORT: Number(process.env.PORT as string) || 3000,
  HOST_NAME: process.env.HOST_NAME || "127.0.0.1",
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};

let missingEnvVars = false;
for (const [key, value] of Object.entries(config)) {
  if (typeof value === "undefined") {
    missingEnvVars = true;
    console.log(chalk.redBright(`Missing ${key} env var`));
  }
}

if (missingEnvVars) {
  process.exit(1);
}

export default config;

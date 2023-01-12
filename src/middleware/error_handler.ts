import express from "express";
import boom from "@hapi/boom";
import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

/**
 *  Handles errors that occur within the router.
 * @param {boom|Error} err The error.
 * @param {express.Request} req The HTTP request.
 * @param {express.Response} res The HTTP response.
 * @param {express.Function} next Callback to invoke after this method has completed. It will not be used.
 * @returns {Response} The HTTP response.
 */
export function errorHandler(
  err: boom.Boom,
  req: Request,
  res: Response,
  next: NextFunction
): express.Response<any, Record<string, any>> {
  if (boom.isBoom(err)) {
    const { message } = err;
    const { statusCode, error } = err.output.payload;

    console.log(
      chalk.red(
        `response: [ status-code: [${statusCode}] | error: [${error}] | message: [${message}] ]`
      )
    );

    return res.status(err.output.statusCode).json(err.output.payload);
  } else {
    console.error(err);
    return errorHandler(boom.boomify(err), req, res, next);
  }
}

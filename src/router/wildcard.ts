import boom from "@hapi/boom";
import { NextFunction, Request, Response, Router } from "express";

export default (router: Router): void => {
  router.all("*", (_: Request, __: Response, next: NextFunction) => {
    return next(boom.methodNotAllowed());
  });
};

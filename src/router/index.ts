import { Router } from "express";
import base from "./base";
import wildcard from "./wildcard";

export default () => {
  const router = Router();
  base(router);
  wildcard(router);

  return router;
};

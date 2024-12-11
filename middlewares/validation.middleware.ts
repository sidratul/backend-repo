import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export function validate(schema: z.ZodTypeAny ){
  return async function(req: Request, res: Response, next: NextFunction) {
    const result = await schema.safeParse(req.body);
    if (!result.error) {
      return next();
    }

    res.statusCode = 400;
    // TODO: format messages so its easier to handle
    res.json(result.error.format());
  }
}
import { ObjectSchema } from "joi";
import { RequestHandler } from "express";
import { HttpError } from "@rest-api-monorepo/http-error";

const createRequestValidate = (key: "body" | "params" | "query") => (
  schema: ObjectSchema
): RequestHandler => (req, res, next): void => {
  try {
    const validationResult = schema.validate(req[key]);
    if (validationResult.error) {
      throw new HttpError(400, validationResult.error.message);
    }
    req[key] = validationResult.value;
    next();
  } catch (err) {
    next(err);
  }
};

export const body = createRequestValidate("body");

export const query = createRequestValidate("query");

export const params = createRequestValidate("params");

import Joi from "joi";
import { body, params, query } from "../src/index";
import { HttpError } from "@rest-api-monorepo/http-error";

describe("body", () => {
  it("throws error if invalid schema", async () => {
    expect.assertions(3);

    const schema = Joi.object().keys({
      userId: Joi.number().integer().required(),
    });

    const fn = jest.fn();

    const nextCallback = (err: any) => {
      fn();
      expect(err).toBeInstanceOf(HttpError);
      expect(err.status).toBe(400);
    };

    body(schema)(
      { body: { userId: "invalid" } } as any,
      null as any,
      nextCallback
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("converts parameters to correct values", () => {
    expect.assertions(10);

    const schema = Joi.object()
      .keys({
        userId: Joi.number().required(),
        name: Joi.string().lowercase().required(),
        city: Joi.string().trim().required(),
        country: Joi.string().default("US"),
      })
      .required();

    const req: any = {
      body: { userId: "1", name: "UPPERCASE", city: " S P A C E D " },
    };

    const fn = jest.fn();

    const nextCallback = () => {
      fn();
      expect(req.body).toBeDefined();
      expect(req.body.userId).toBe(1);
      expect(req.body.userId).not.toBe("1");
      expect(req.body.name).toBe("uppercase");
      expect(req.body.name).not.toBe("UPPERCASE");
      expect(req.body.city).toBe("S P A C E D");
      expect(req.body.city).not.toBe(" S P A C E D ");
      expect(req.body.country).toBeDefined();
      expect(req.body.country).toBe("US");
    };

    body(schema)(req, null as any, nextCallback);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("query", () => {
  it("throws error if invalid schema", async () => {
    expect.assertions(3);

    const schema = Joi.object().keys({
      userId: Joi.number().integer().required(),
    });

    const fn = jest.fn();

    const nextCallback = (err: any) => {
      fn();
      expect(err).toBeInstanceOf(HttpError);
      expect(err.status).toBe(400);
    };

    query(schema)(
      { query: { userId: "invalid" } } as any,
      null as any,
      nextCallback
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("converts parameters to correct values", () => {
    expect.assertions(10);

    const schema = Joi.object()
      .keys({
        userId: Joi.number().required(),
        name: Joi.string().lowercase().required(),
        city: Joi.string().trim().required(),
        country: Joi.string().default("US"),
      })
      .required();

    const req: any = {
      body: { userId: "1", name: "UPPERCASE", city: " S P A C E D " },
    };

    const fn = jest.fn();

    const nextCallback = () => {
      fn();
      expect(req.body).toBeDefined();
      expect(req.body.userId).toBe(1);
      expect(req.body.userId).not.toBe("1");
      expect(req.body.name).toBe("uppercase");
      expect(req.body.name).not.toBe("UPPERCASE");
      expect(req.body.city).toBe("S P A C E D");
      expect(req.body.city).not.toBe(" S P A C E D ");
      expect(req.body.country).toBeDefined();
      expect(req.body.country).toBe("US");
    };

    body(schema)(req, null as any, nextCallback);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("params", () => {
  it("throws error if invalid schema", async () => {
    expect.assertions(3);

    const schema = Joi.object().keys({
      userId: Joi.number().integer().required(),
    });

    const fn = jest.fn();

    const nextCallback = (err: any) => {
      fn();
      expect(err).toBeInstanceOf(HttpError);
      expect(err.status).toBe(400);
    };

    params(schema)(
      { params: { userId: "invalid" } } as any,
      null as any,
      nextCallback
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("converts parameters to correct values", () => {
    expect.assertions(10);

    const schema = Joi.object()
      .keys({
        userId: Joi.number().required(),
        name: Joi.string().lowercase().required(),
        city: Joi.string().trim().required(),
        country: Joi.string().default("US"),
      })
      .required();

    const req: any = {
      body: { userId: "1", name: "UPPERCASE", city: " S P A C E D " },
    };

    const fn = jest.fn();

    const nextCallback = () => {
      fn();
      expect(req.body).toBeDefined();
      expect(req.body.userId).toBe(1);
      expect(req.body.userId).not.toBe("1");
      expect(req.body.name).toBe("uppercase");
      expect(req.body.name).not.toBe("UPPERCASE");
      expect(req.body.city).toBe("S P A C E D");
      expect(req.body.city).not.toBe(" S P A C E D ");
      expect(req.body.country).toBeDefined();
      expect(req.body.country).toBe("US");
    };

    body(schema)(req, null as any, nextCallback);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});

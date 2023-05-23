module.exports = class extends Error {
  constructor(statusCode, message) {
    super(message);

    this.custom = true;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
};

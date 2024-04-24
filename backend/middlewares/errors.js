import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal Server error",
  };

  //handle invalid MOngoose ID
  if (err.name === "CastError") {
    const message = `Resource not found . Invalid : $(err?.path)`;
    error = new ErrorHandler(message, 404);
  }

  //handle validation error MOngoose ID
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  //Handle Mongoose Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    error = new ErrorHandler(message, 404);
  }

  //handle wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON web Token is invalid . Try Again`;
    error = new ErrorHandler(message, 400);
  }

  //handle expired JWT Error
  if (err.name === "TokenExpiredError") {
    const message = `JSON web Token is Expired. Try Again`;
    error = new ErrorHandler(message, 400);
  }

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(error.statusCode).json({
      message: error.message,
      error: err,
      stack: err?.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

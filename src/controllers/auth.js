import { errorHandler } from "../utils/error.js";

export const signup = (req, res , next) => {
  try {
    res.status(200).send('hello2')
  } catch (error) {
    next(errorHandler(400, 'error error'))
  }
};

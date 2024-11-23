import chalk from "chalk";

export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  
  const log = console.log;
  log(chalk.blue.bgRed.bold("error start"));
  log(chalk.blue.bgRedBright.bold(`Error message: ${error}`));
  console.log(error);
  log(chalk.blue.bgRed.bold("Error end"));
  
  return error;
};

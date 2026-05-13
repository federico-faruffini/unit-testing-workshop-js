export class Logger {
  info(message) {
    api.logInformation(message);
  }

  error(message) {
    api.logError(message);
  }

  warn(message) {
    api.logMessage(message);
  }
}
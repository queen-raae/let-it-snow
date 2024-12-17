// Define log levels
const LOG_LEVELS = {
  silent: 0,
  error: 1,
  warn: 2,
  info: 3,
};

// Factory function to create a logger with a specific log level
export function createLogger(logLevel, prefix) {
  const log = {};
  // If the log level is not valid, default to "info"
  logLevel = LOG_LEVELS[logLevel] ? logLevel : "info";

  Object.keys(LOG_LEVELS).forEach((level) => {
    log[level] = (...messages) => {
      const levelValue = LOG_LEVELS[level];
      const configuredLogLevelValue = LOG_LEVELS[logLevel];

      if (levelValue > 0 && levelValue <= configuredLogLevelValue) {
        console[level](`${prefix}:`, ...messages);
      }
    };
  });

  return log;
}

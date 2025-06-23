import { pino } from 'pino';

/**
 * @description Logger instance for the application.
 */
export const logger = pino({
  level: process.env.LOG_LEVEL || 'debug',
});

export const initLog = (logLevel: string): void => {
  logger.level = logLevel;
  logger.info(`Logger initialized with level: ${logLevel}`);
};

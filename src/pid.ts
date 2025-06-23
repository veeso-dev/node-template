import { writeFile } from 'fs';
import { logger } from './log.js';

export const writePidfile = (pidfile: string): void => {
  const pid = process.pid;
  writeFile(pidfile, pid.toString(), (err) => {
    if (err) {
      logger.error(`Failed to write PID file: ${pidfile}`, err);
      throw err;
    }

    logger.info(`PID file written: ${pidfile}`);
  });
};

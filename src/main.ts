import meow from 'meow';

import { initLog, logger } from './log.js';
import { writePidfile } from './pid.js';

const cli = meow(
  `
    Usage
      $ node-template [options]

    Options
      --log-level, -l     Set the log level (debug, info, warn, error)
      --pidfile, -P       Set the PID file path
      --version, -v       Show version number
      --help, -h          Show help message
  `,
  {
    importMeta: import.meta,
    flags: {
      logLevel: {
        type: 'string',
        shortFlag: 'l',
        default: 'info',
        choices: ['debug', 'info', 'warn', 'error'],
      },
      pidfile: {
        type: 'string',
        shortFlag: 'P',
        default: '/var/run/node-template.pid',
      },
      version: {
        type: 'boolean',
        shortFlag: 'v',
      },
      help: {
        type: 'boolean',
        shortFlag: 'h',
      },
    },
  },
);

// Initialize logging based on CLI options
initLog(cli.flags.logLevel);

logger.info('Starting...');

// write PID file
writePidfile(cli.flags.pidfile);

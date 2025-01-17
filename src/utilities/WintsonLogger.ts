const winston = require('winston');

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'survey-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'combined.log',level: 'info' }),
    new winston.transports.File({ filename: 'combined.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log',level: 'warn' })
  ]
});
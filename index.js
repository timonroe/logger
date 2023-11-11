import { Console } from 'node:console';
import { stdout, stderr } from 'node:process';
export default class Logger {
    console;
    logInfo;
    logVerbose;
    logWarning;
    logError;
    constructor(params) {
        this.logInfo = params && params.logInfo === true;
        this.logVerbose = params && params.logVerbose === true;
        this.logWarning = params && params.logWarning === true;
        this.logError = params && params.logError === true;
        if (!this.logInfo && !this.logVerbose && !this.logWarning && !this.logError) {
            this.console = undefined;
            return;
        }
        this.console = new Console({ stdout, stderr });
    }
    info(message, ...optionalParams) {
        if (!this.logInfo || !this.console || !message)
            return;
        this.console.info(message, ...optionalParams);
    }
    verbose(message, ...optionalParams) {
        if (!this.logVerbose || !this.console || !message)
            return;
        this.console.info(message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        if (!this.logWarning || !this.console || !message)
            return;
        this.console.warn(message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        if (!this.logError || !this.console || !message)
            return;
        this.console.error(message, ...optionalParams);
    }
}
/*
// Some basic tests...
(async () => {
  let logger = new Logger({ logInfo: true, logVerbose: true, logWarning: true, logError: true });
  logger.info(`info message`);
  logger.verbose(`verbose message`);
  logger.warn(`warning message`);
  logger.error(`error message`);
  console.log();
  logger.info(`info message with params: %s, %d`, 'param 1', 99);
  logger.verbose(`verbose message with params: %s, %d`, 'param 1', 99);
  logger.warn(`warning message with params: %s, %d`, 'param 1', 99);
  logger.error(`error message with params: %s, %d`, 'param 1', 99);
  console.log();
  logger = new Logger({ logInfo: true, logVerbose: false, logWarning: false, logError: false });
  logger.info(`only info message displays`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`verify warning message does not display`);
  logger.error(`verify error message does not display`);
  console.log();
  logger = new Logger({ logInfo: false, logVerbose: true, logWarning: false, logError: false });
  logger.info(`verify info message does not display`);
  logger.verbose(`only verbose message displays`);
  logger.warn(`verify warning message does not display`);
  logger.error(`verify error message does not display`);
  console.log();
  logger = new Logger({ logInfo: false, logVerbose: false, logWarning: true, logError: false });
  logger.info(`verify info message does not display`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`only warning message displays`);
  logger.error(`verify error message does not display`);
  console.log();
  logger = new Logger({ logInfo: false, logVerbose: false, logWarning: false, logError: true });
  logger.info(`verify info message does not display`);
  logger.verbose(`verify verbose message does not display`);
  logger.warn(`verify warning message does not display`);
  logger.error(`only error message displays`);
  console.log();
})();
*/

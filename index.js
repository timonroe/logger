import { Console } from 'node:console';
import { stdout, stderr } from 'node:process';
export class Logger {
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

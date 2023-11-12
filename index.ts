import { Console } from 'node:console';
import { stdout, stderr } from 'node:process';

export class Logger {
  console: Console | undefined;
  logInfo: boolean;
  logVerbose: boolean;
  logWarning: boolean;
  logError: boolean;

  constructor(params: {
    logInfo?: boolean,
    logVerbose?: boolean,
    logWarning?: boolean,
    logError?: boolean
  }) {
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

  info(message?: any, ...optionalParams: any[]): void {
    if (!this.logInfo || !this.console || !message) return;
    this.console.info(message, ...optionalParams);
  }

  verbose(message?: any, ...optionalParams: any[]): void {
    if (!this.logVerbose || !this.console || !message) return;
    this.console.info(message, ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    if (!this.logWarning || !this.console || !message) return;
    this.console.warn(message, ...optionalParams)
  }

  error(message?: any, ...optionalParams: any[]): void {
    if (!this.logError || !this.console || !message) return;
    this.console.error(message, ...optionalParams);
  }

}

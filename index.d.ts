
export declare class Logger {
  constructor(obj: { logInfo: boolean, logWarning: boolean, logError: boolean });
  info(message?: any, ...optionalParams: any[]): void;
  verbose(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
}

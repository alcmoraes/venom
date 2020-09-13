export interface CreateConfig {
  headless?: boolean;
  devtools?: boolean;
  useChrome?: boolean;
  debug?: boolean;
  browserArgs?: string[];
  logQR?: boolean;
  refreshQR?: number;
  autoClose?: number;
  disableSpins?: boolean;
  executablePath?: string;
}
export declare const defaultOptions: CreateConfig;

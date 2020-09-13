import { Page } from 'puppeteer-core';
import { SocketState } from '../model/enum';
export declare class HostLayer {
  page: Page;
  constructor(page: Page);
  /**
   * Delete the Service Workers
   */
  killServiceWorker(): Promise<any>;
  /**
   * Load the service again
   */
  restartService(): Promise<any>;
  /**
   * @returns Current host device details
   */
  getHostDevice(): Promise<any>;
  /**
   * Retrieves WA version
   */
  getWAVersion(): Promise<any>;
  /**
   * Retrieves the connecction state
   */
  getConnectionState(): Promise<SocketState>;
  /**
   * Retrieves if the phone is online. Please note that this may not be real time.
   */
  isConnected(): Promise<any>;
  /**
   * Retrieves if the phone is online. Please note that this may not be real time.
   */
  isLoggedIn(): Promise<any>;
  /**
   * Retrieves Battery Level
   */
  getBatteryLevel(): Promise<any>;
}

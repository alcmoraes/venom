/// <reference types="node" />
import { Page } from 'puppeteer-core';
import { ControlsLayer } from './layers/controls.layer';
import { Message } from './model';
export declare class Whatsapp extends ControlsLayer {
  page: Page;
  constructor(page: Page);
  /**
   * Decrypts message file
   * @param data Message object
   * @returns Decrypted file buffer (null otherwise)
   */
  downloadFile(data: string): Promise<any>;
  /**
   * Get the puppeteer page instance
   * @returns The Whatsapp page
   */
  get waPage(): Page;
  /**
   * Clicks on 'use here' button (When it get unlaunched)
   * This method tracks the class of the button
   * Whatsapp web might change this class name over the time
   * Dont rely on this method
   */
  useHere(): Promise<void>;
  /**
   * Closes page and browser
   * @internal
   */
  close(): Promise<void>;
  /**
   * Decrypts message file
   * @param message Message object
   * @returns Decrypted file buffer (null otherwise)
   */
  decryptFile(message: Message): Promise<Buffer>;
}

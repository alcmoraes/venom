import { Page } from 'puppeteer';
import { CreateConfig } from '../config/create-config';
export declare function initWhatsapp(
  session: string,
  options: CreateConfig
): Promise<Page>;
/**
 * Initializes browser, will try to use chrome as default
 * @param session
 */
export declare function injectApi(page: Page): Promise<Page>;

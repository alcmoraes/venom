import * as puppeteer from 'puppeteer-core';
/**
 * Validates if client is authenticated
 * @returns true if is authenticated, false otherwise
 * @param waPage
 */
export declare const isAuthenticated: (waPage: any) => Promise<unknown>;
export declare const needsToScan: (
  waPage: any
) => import('rxjs').Observable<unknown>;
export declare const isInsideChat: (
  waPage: any
) => import('rxjs').Observable<unknown>;
export declare function retrieveQR(
  page: puppeteer.Page
): Promise<{
  code: string;
  data: string;
  asciiQR: string;
}>;
export declare function auth_InjectToken(
  page: puppeteer.Page,
  session: string
): Promise<any>;

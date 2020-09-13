import { Page } from 'puppeteer-core';
import { HostLayer } from './host.layer';
export declare class ProfileLayer extends HostLayer {
  page: Page;
  constructor(page: Page);
  /**
   * Change the theme
   * @param string types "dark" or "light"
   */
  setTheme(type: string): any;
  /**
   * Sets current user profile status
   * @param status
   */
  setProfileStatus(status: string): Promise<any>;
  /**
   * Sets the user's current profile photo
   * @param name
   */
  setProfilePic(data: string): Promise<any>;
  /**
   * Sets current user profile name
   * @param name
   */
  setProfileName(name: string): Promise<any>;
}

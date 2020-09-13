import { Page } from 'puppeteer-core';
import { SenderLayer } from './sender.layer';
export declare class RetrieverLayer extends SenderLayer {
  constructor(page: Page);
  /**
   * Receive the current theme
   * @returns string light or dark
   */
  getTheme(): Promise<any>;
  /**
   * Receive all blocked contacts
   * @returns array of [0,1,2,3....]
   */
  getBlockList(): Promise<any>;
  /**
   * Retrieves all chats
   * @returns array of [Chat]
   */
  getAllChats(withNewMessageOnly?: boolean): Promise<any>;
  /**
   * Checks if a number is a valid WA number
   * @param contactId, you need to include the @c.us at the end.
   * @returns contact detial as promise
   */
  checkNumberStatus(contactId: string): Promise<any>;
  /**
   * Retrieves all chats with messages
   * @returns array of [Chat]
   */
  getAllChatsWithMessages(withNewMessageOnly?: boolean): Promise<any>;
  /**
   * Retrieve all groups
   * @returns array of groups
   */
  getAllGroups(withNewMessagesOnly?: boolean): Promise<any>;
  /**
   * Retrieves contact detail object of given contact id
   * @param contactId
   * @returns contact detial as promise
   */
  getContact(contactId: string): Promise<any>;
  /**
   * Retrieves all contacts
   * @returns array of [Contact]
   */
  getAllContacts(): Promise<any>;
  /**
   * Retrieves chat object of given contact id
   * @param contactId
   * @returns contact detial as promise
   */
  getChatById(contactId: string): Promise<any>;
  /**
   * Retrieves chat object of given contact id
   * @param contactId
   * @returns contact detial as promise
   * @deprecated
   */
  getChat(contactId: string): Promise<any>;
  /**
   * Retrieves chat picture
   * @param chatId Chat id
   * @returns url of the chat picture or undefined if there is no picture for the chat.
   */
  getProfilePicFromServer(chatId: string): Promise<any>;
  /**
   * Load more messages in chat object from server. Use this in a while loop
   * @param contactId
   * @returns contact detial as promise
   * @deprecated
   */
  loadEarlierMessages(contactId: string): Promise<any>;
  /**
   * Retrieves status of given contact
   * @param contactId
   */
  getStatus(contactId: string): Promise<any>;
  /**
   * Checks if a number is a valid whatsapp number
   * @param contactId, you need to include the @c.us at the end.
   * @returns contact detial as promise
   */
  getNumberProfile(contactId: string): Promise<any>;
  /**
   * Retrieves all undread Messages
   * @param includeMe
   * @param includeNotifications
   * @param useUnreadCount
   * @returns any
   * @deprecated
   */
  getUnreadMessages(
    includeMe: boolean,
    includeNotifications: boolean,
    useUnreadCount: boolean
  ): Promise<any>;
  /**
   * Retrieves all unread messages (where ack is -1)
   * @returns list of messages
   */
  getAllUnreadMessages(): Promise<any>;
  /**
   * Retrieves all new messages (where isNewMsg is true)
   * @returns List of messages
   * @deprecated Use getAllUnreadMessages
   */
  getAllNewMessages(): Promise<any>;
  /**
   * Retrieves all messages already loaded in a chat
   * For loading every message use loadAndGetAllMessagesInChat
   * @param chatId, the chat to get the messages from
   * @param includeMe, include my own messages? boolean
   * @param includeNotifications
   * @returns any
   */
  getAllMessagesInChat(
    chatId: string,
    includeMe: boolean,
    includeNotifications: boolean
  ): Promise<any>;
  /**
   * Loads and Retrieves all Messages in a chat
   * @param chatId, the chat to get the messages from
   * @param includeMe, include my own messages? boolean
   * @param includeNotifications
   * @returns any
   */
  loadAndGetAllMessagesInChat(
    chatId: string,
    includeMe?: boolean,
    includeNotifications?: boolean
  ): Promise<any>;
  /**
   * Checks if a CHAT contact is online.
   * @param chatId chat id: xxxxx@c.us
   */
  getChatIsOnline(chatId: string): Promise<boolean>;
}

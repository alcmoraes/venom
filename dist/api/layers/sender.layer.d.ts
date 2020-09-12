import { Page } from 'puppeteer';
import { ChatState } from '../model/enum';
import { ListenerLayer } from './listener.layer';
export declare class SenderLayer extends ListenerLayer {
  page: Page;
  constructor(page: Page);
  /**
   * Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
   * @param chatId
   * @param url string A link, for example for youtube. e.g https://www.youtube.com/watch?v=Zi_XLOBDo_Y&list=RDEMe12_MlgO8mGFdeeftZ2nOQ&start_radio=1
   * @param title custom text as the message body, this includes the link or will be attached after the link
   */
  sendLinkPreview(chatId: string, url: string, title: string): Promise<string>;
  /**
   * Sends a text message to given chat
   * @param to chat id: xxxxx@us.c
   * @param content text message
   */
  sendText(to: string, content: string): Promise<string>;
  /**
   * Experimental!
   * Sends a text message to given chat even if its a non-existent chat
   * @param to chat id: xxxxx@us.c
   * @param content text message
   */
  sendMessageToId(to: string, content: string): Promise<string>;
  /**
   * Sends image message
   * @param to Chat id
   * @param imgBase64
   * @param filename
   * @param caption
   */
  sendImage(
    to: string,
    path: string,
    filename: string,
    caption?: string
  ): Promise<void>;
  /**
   * Sends image message
   * @param to Chat id
   * @param imgBase64
   * @param filename
   * @param caption
   */
  sendImageFromBase64(
    to: string,
    base64: string,
    filename: string,
    caption?: string
  ): Promise<void>;
  /**
   * Sends message with thumbnail
   * @param thumb
   * @param url
   * @param title
   * @param description
   * @param chatId
   */
  sendMessageWithThumb(
    thumb: string,
    url: string,
    title: string,
    description: string,
    chatId: string
  ): Promise<void>;
  /**
   * Replies to given mesage id of given chat id
   * @param to Chat id
   * @param content Message body
   * @param quotedMsg Message id to reply to.
   * @param mentioned User id to mentioned (just phone number).
   */
  reply(
    to: string,
    content: string,
    quotedMsg: string,
    mentioned: string[]
  ): Promise<void>;
  /**
   * Sends file
   * base64 parameter should have mime type already defined
   * @param to Chat id
   * @param base64 base64 data
   * @param filename
   * @param caption
   */
  sendPttFromBase64(
    to: string,
    base64: string,
    filename: string,
    caption?: string
  ): Promise<void>;
  /**
   * Sends file
   * base64 parameter should have mime type already defined
   * @param to Chat id
   * @param base64 base64 data
   * @param filename
   * @param caption
   */
  sendFileFromBase64(
    to: string,
    base64: string,
    filename: string,
    caption?: string
  ): Promise<void>;
  /**
   * Sends file from path
   * @param to Chat id
   * @param path File path
   * @param filename
   * @param caption
   */
  sendFile(
    to: string,
    path: string,
    filename: string,
    caption?: string
  ): Promise<void>;
  /**
   * Sends a video to given chat as a gif, with caption or not, using base64
   * @param to chat id xxxxx@us.c
   * @param base64 base64 data:video/xxx;base64,xxx
   * @param filename string xxxxx
   * @param caption string xxxxx
   */
  sendVideoAsGif(
    to: string,
    path: string,
    filename: string,
    caption: string
  ): Promise<void>;
  /**
   * Sends a video to given chat as a gif, with caption or not, using base64
   * @param to chat id xxxxx@us.c
   * @param base64 base64 data:video/xxx;base64,xxx
   * @param filename string xxxxx
   * @param caption string xxxxx
   */
  sendVideoAsGifFromBase64(
    to: string,
    base64: string,
    filename: string,
    caption: string
  ): Promise<void>;
  /**
   * Sends contact card to iven chat id
   * @param to Chat id
   * @param contactsId Example: 0000@c.us | [000@c.us, 1111@c.us]
   */
  sendContact(to: string, contactsId: string | string[]): Promise<any>;
  /**
   * Forwards array of messages (could be ids or message objects)
   * @param to Chat id
   * @param messages Array of messages ids to be forwarded
   * @param skipMyMessages
   */
  forwardMessages(
    to: string,
    messages: string | string[],
    skipMyMessages: boolean
  ): Promise<any>;
  /**
   * Generates sticker from the provided animated gif image and sends it (Send image as animated sticker)
   *  @param path image path imageBase64 A valid gif image is required. You can also send via http/https (http://www.website.com/img.gif)
   *  @param to chatId '000000000000@c.us'
   */
  sendImageAsStickerGif(to: string, path: string): Promise<boolean>;
  /**
   * Generates sticker from given image and sends it (Send Image As Sticker)
   * @param path image path imageBase64 A valid png, jpg and webp image is required. You can also send via http/https (http://www.website.com/img.gif)
   * @param to chatId '000000000000@c.us'
   */
  sendImageAsSticker(to: string, path: string): Promise<boolean>;
  /**
   * TODO: Fix message not being delivered
   * Sends location to given chat id
   * @param to Chat id
   * @param latitude Latitude
   * @param longitude Longitude
   * @param caption Text caption
   */
  sendLocation(
    to: string,
    latitude: any,
    longitude: any,
    title?: string,
    subtitle?: string
  ): Promise<void>;
  /**
   * Sets a chat status to seen. Marks all messages as ack: 3
   * @param chatId chat id: xxxxx@us.c
   */
  sendSeen(chatId: string): Promise<void>;
  /**
   * Starts typing ('Typing...' state)
   * @param chatId
   */
  startTyping(to: string): Promise<void>;
  /**
   * Stops typing
   * @param to Chat id
   */
  stopTyping(to: string): Promise<void>;
  /**
   * Sends text with tags
   *
   */
  sendMentioned(
    to: string,
    message: string,
    mentioned: string[]
  ): Promise<void>;
  /**
   * Sets the chat state
   * @param chatState
   * @param chatId
   */
  setChatState(chatId: string, chatState: ChatState): Promise<void>;
}

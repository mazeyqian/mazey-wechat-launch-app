/**
 * @author: Mazey Chu
 */

interface MenuShareTimelineOptions {
  title: string;
  link: string;
  imgUrl: string;
  success: () => void;
  cancel: () => void;
}

interface MenuShareAppMessageOptions {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  type: string;
  dataUrl: string;
  success: () => void;
  cancel: () => void;
}

type LAUNCH_APP_SHARE_TIMELINE = (options: MenuShareTimelineOptions) => void;
type LAUNCH_APP_SHARE_APP_MESSAGE = (
  options: MenuShareAppMessageOptions
) => void;

interface Window {
  // METHOD
  LAUNCH_APP_UPDATE(data: any): void;
  LAUNCH_APP_BEFORE_DESTROY(): void;
  LAUNCH_APP_SHOW_WEIXIN_TO_BROWSER(): void;
  LAUNCH_APP_SHARE_TIMELINE: LAUNCH_APP_SHARE_TIMELINE;
  LAUNCH_APP_SHARE_APP_MESSAGE: LAUNCH_APP_SHARE_APP_MESSAGE;
  // VAR
  LAUNCH_APP_LOAD: any;
  LAUNCH_APP_HIDE_WEIXIN_BROWSER: any;
  LAUNCH_APP_WEIXIN_JS_SDK_TICKET: any;
  LAUNCH_APP_READY: boolean;
  // LIB
  wx: any;
  mazey: any;
  sha1: any;
  $: any;
  jQuery: any;
}

interface retVal {
  LAUNCH_APP_UPDATE(data: any): void;
  LAUNCH_APP_BEFORE_DESTROY(): void;
  LAUNCH_APP_SHOW_WEIXIN_TO_BROWSER(): void;
  LAUNCH_APP_SHARE_TIMELINE: LAUNCH_APP_SHARE_TIMELINE;
  LAUNCH_APP_SHARE_APP_MESSAGE: LAUNCH_APP_SHARE_APP_MESSAGE;
  start(data: any): void;
  update(data: any): void;
  destroy(): void;
}

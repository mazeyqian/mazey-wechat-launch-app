/**
 * @author: Mazey Chu
 */

interface Window {
  // METHOD
  LAUNCH_APP_UPDATE(data: any): void;
  LAUNCH_APP_BEFORE_DESTROY(): void;
  LAUNCH_APP_SHOW_WEIXIN_TO_BROWSER(): void;
  // VAR
  LAUNCH_APP_LOAD: any;
  LAUNCH_APP_HIDE_WEIXIN_BROWSER: any;
  LAUNCH_APP_WEIXIN_JS_SDK_TICKET: any;
  // LIB
  wx: any;
  mazey: any;
  sha1: any;
  $: any;
}

interface retVal {
  LAUNCH_APP_UPDATE(data: any): void;
  LAUNCH_APP_BEFORE_DESTROY(): void;
  LAUNCH_APP_SHOW_WEIXIN_TO_BROWSER(): void;
}

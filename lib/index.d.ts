/**
 * Launch APP
 *
 * @param {string} jqSelector Example: '#mazey-wx-btn-report'
 * @param {string} launchInBrowserClassName Example: 'mazey-launch-in-browser-btn'
 * @param {string} genTagPrefixStr Example: 'mazey-launch-btn-'
 * @param {string} launchShowWeixinToBrowserClassName Example: 'mazey-wx-to-browser'
 * @param {string} launchBtnClassName Example: 'mazey-btn'
 * @param {string} schemeUrl Example: 'mazey://launch/page'
 * @param {string} wexinServiceAccountAppId Example: 'wx1234'
 * @param {string} openPlatformMobileAppId Example: 'wx5678'
 * @param {boolean} isConClosed
 * @param {function} canLaunchApp
 * @param {function} canOpenAppFromWeixin
 * @returns {void}
 */
declare const _default: (options?: {
    jqSelector?: string | undefined;
    launchInBrowserClassName?: string | undefined;
    genTagPrefixStr?: string | undefined;
    launchShowWeixinToBrowserClassName?: string | undefined;
    launchBtnClassName?: string | undefined;
    schemeUrl?: string | undefined;
    wexinServiceAccountAppId?: string | undefined;
    openPlatformMobileAppId?: string | undefined;
    isConClosed?: boolean | undefined;
    canLaunchApp?: ((data: any) => boolean) | undefined;
    canOpenAppFromWeixin?: (() => boolean) | undefined;
}) => void;
export default _default;
//# sourceMappingURL=index.d.ts.map
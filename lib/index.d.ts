/**
 * Launch App
 *
 * @param {string} jqSelector Example: '#mazey-wx-btn-report'
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
    launchContainerQuery?: string | undefined;
    jqSelector?: string | undefined;
    genTagPrefixStr?: string | undefined;
    launchShowWeixinToBrowserImgUrl?: string | undefined;
    launchShowWeixinToBrowserClassName?: string | undefined;
    launchBtnClassName?: string | undefined;
    launchBtnStyle?: string | undefined;
    launchBtnText?: string | undefined;
    schemeUrl?: string | undefined;
    wexinServiceAccountAppId?: string | undefined;
    openPlatformMobileAppId?: string | undefined;
    canContinuousUpdating?: boolean | undefined;
    isConClosed?: boolean | undefined;
    isWxDebug?: boolean | undefined;
    canLaunchApp?: ((data: any) => boolean) | undefined;
    canOpenAppFromWeixin?: (() => boolean) | undefined;
}) => retVal;
export default _default;
//# sourceMappingURL=index.d.ts.map
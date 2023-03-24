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
export default (
  options: {
    jqSelector?: string;
    launchInBrowserClassName?: string;
    genTagPrefixStr?: string;
    launchShowWeixinToBrowserClassName?: string;
    launchBtnClassName?: string;
    schemeUrl?: string;
    wexinServiceAccountAppId?: string;
    openPlatformMobileAppId?: string;
    isConClosed?: boolean;
    canLaunchApp?: (data: any) => boolean;
    canOpenAppFromWeixin?: () => boolean;
  } = {
    jqSelector: "",
    launchInBrowserClassName: "",
    genTagPrefixStr: "",
    launchShowWeixinToBrowserClassName: "",
    launchBtnClassName: "",
    schemeUrl: "",
    wexinServiceAccountAppId: "",
    openPlatformMobileAppId: "",
    isConClosed: true,
    canLaunchApp: () => false,
    canOpenAppFromWeixin: () => false
  }
): void => {
  const {
    jqSelector,
    launchInBrowserClassName,
    genTagPrefixStr,
    launchShowWeixinToBrowserClassName,
    launchBtnClassName,
    schemeUrl,
    wexinServiceAccountAppId,
    openPlatformMobileAppId,
    isConClosed,
    canLaunchApp,
    canOpenAppFromWeixin
  } = Object.assign(
    {
      jqSelector: "",
      launchInBrowserClassName: "",
      genTagPrefixStr: "",
      launchShowWeixinToBrowserClassName: "",
      launchBtnClassName: "",
      schemeUrl: "",
      wexinServiceAccountAppId: "",
      openPlatformMobileAppId: "",
      isConClosed: true,
      canLaunchApp: () => false,
      canOpenAppFromWeixin: () => false
    },
    options
  );
  // Build:
  const mazey = window.mazey;
  const sha1 = window.sha1;
  const wx = window.wx;
  const $ = window.$;
  const LaunchCon = mazey.genCustomConsole("LaunchCon:", {
    isClosed: isConClosed
  });
  LaunchCon.log("Launch APP");

  function renderWXOpenLaunchApp(
    wexinServiceAccountAppId = "",
    openPlatformMobileAppId = "",
    isShowBrowser = false
  ) {
    const wxBtnReport = () => {
      $(jqSelector).click();
    };
    const launchBtnForBrowser =
      "<button style='" +
      "position: fixed;" +
      "bottom: 0;" +
      "left: 0;" +
      "opacity: 0;" +
      "width: 100%;" +
      "height: 50px;" +
      "height: 1.44rem;" +
      "z-index: 9993;" +
      "border: none;" +
      "box-sizing: border-box;" +
      "'>" +
      "LaunchApp" +
      "</button>";
    const launchInBrowserTip = () => {
      if ($(`.${launchInBrowserClassName}`).length === 0) {
        $("body").append(
          `<div id=${launchInBrowserClassName}' class='${launchInBrowserClassName}'>` +
            launchBtnForBrowser +
            "</div>"
        );
      }
      const mazeyLaunchBtn = document.getElementById(
        `${launchInBrowserClassName}`
      );
      mazeyLaunchBtn &&
        mazeyLaunchBtn.addEventListener("click", function() {
          launchShowWeixinToBrowser();
          wxBtnReport();
        });
    };
    if (isShowBrowser) {
      launchInBrowserTip();
      return "success:launch_in_browser";
    }

    return Promise.all([getTicket(), loadSha1()])
      .then(allRes => {
        const ticket = allRes[0];
        const sha1 = allRes[1];
        const noncestr = mazey.generateRndNum(7);
        const jsapi_ticket = ticket;
        const timestamp = new Date().getTime();
        const url = location.href;
        const string1 =
          "jsapi_ticket=" +
          jsapi_ticket +
          "&noncestr=" +
          noncestr +
          "&timestamp=" +
          timestamp +
          "&url=" +
          url;
        const signature = sha1(string1);
        wx.config({
          debug: false, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印
          appId: wexinServiceAccountAppId, // 必填，公众号/服务号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名
          jsApiList: ["showOptionMenu"], // 必填，需要使用的 JS 接口列表
          openTagList: ["wx-open-launch-app"] // 可选，需要使用的开放标签列表
        });
        wx.ready(function() {
          // config 信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config 是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中
          const id = mazey.getQueryParam("id") || "";
          const sourceFrom =
            mazey.getQueryParam("sourceFrom") ||
            mazey.getQueryParam("source_from") ||
            "";
          const genTag = (positionDomClass: string) => {
            const prefix = genTagPrefixStr;
            const positionDomId = prefix + positionDomClass;
            const launchBtn =
              `<style>.${launchBtnClassName} {` +
              "opacity: 0;" +
              "width: 375px;" +
              "height: 60px;" +
              "backgroud: transparent;" +
              "color: #300f54;" +
              "border: none;" +
              "box-sizing: border-box;" +
              "}</style>" +
              `<button class="${launchBtnClassName}">` +
              "Unknown New App" +
              "</button>";
            const tagStr =
              "<wx-open-launch-app" +
              " id='" +
              positionDomId +
              "' appid='" +
              openPlatformMobileAppId +
              `' extinfo='${schemeUrl}?id=` +
              id +
              "&sourceFrom=" +
              sourceFrom +
              (positionDomClass !== "open-app"
                ? "&position=bottom'"
                : "&position=top'") +
              " style='z-index: 99; position: absolute; width: 100%; height: 100%; opacity: 1; background: transparent; overflow: hidden; left: 0;'" +
              ">" +
              "<script type='text/wxtag-template'>" +
              launchBtn +
              "</script>" +
              "</wx-open-launch-app>";
            $("." + positionDomClass + ":eq(0)").append(tagStr);
            const mazeyLaunchBtn = document.getElementById(positionDomId);
            if (mazeyLaunchBtn) {
              mazeyLaunchBtn.addEventListener("ready", function() {
                // Ready
              });
              mazeyLaunchBtn.addEventListener("launch", function() {
                // Launch
              });
              mazeyLaunchBtn.addEventListener("error", function(e: any) {
                // Error
                LaunchCon.error("fail:", e.detail);
                // Prefix
                $("[id^='" + prefix + "']").hide();
                launchInBrowserTip();
                $("." + positionDomClass + ":eq(0)").click();
                if (positionDomClass !== "open-app") {
                  launchShowWeixinToBrowser();
                }
              });
              mazeyLaunchBtn.addEventListener("click", function(e) {
                wxBtnReport();
              });
            }
          };
          genTag("user-operate");
          genTag("open-app");
        });
        wx.error(function(res: any) {
          LaunchCon.error("fail", res);
        });
        return "success:launch_app";
      })
      .catch(err => {
        LaunchCon.error("fail:launch_app", err);
      });
  }

  function launchShowWeixinToBrowser() {
    if (!window.LAUNCH_APP_HIDE_WEIXIN_BROWSER) {
      window.LAUNCH_APP_HIDE_WEIXIN_BROWSER = function() {
        $(".wx-share-ui.with-launch").hide();
      };
    }
    if ($(".wx-share-ui.with-launch").length === 0) {
      $("body").append(
        "<div class='wx-share-ui with-launch' onclick='window.LAUNCH_APP_HIDE_WEIXIN_BROWSER()'>" +
          `<div class='wx-img ${launchShowWeixinToBrowserClassName}' alt='Weixin'></div>` +
          "</div>"
      );
    } else {
      $(".wx-share-ui.with-launch").show();
    }
  }

  function renderWeixinLaunchTemplate() {
    const isShowBrowser = false;
    if (canOpenAppFromWeixin()) {
      renderWXOpenLaunchApp(
        wexinServiceAccountAppId,
        openPlatformMobileAppId,
        isShowBrowser
      );
    }
  }

  function loadSha1() {
    return Promise.resolve(sha1);
  }

  function getTicket() {
    return Promise.resolve(window.LAUNCH_APP_WEIXIN_JS_SDK_TICKET);
  }

  function destroyWeixinLaunchEvent() {
    window.LAUNCH_APP_LOAD = null;
    window.LAUNCH_APP_HIDE_WEIXIN_BROWSER = null;
  }

  function appUpdated(data: any) {
    LaunchCon.log("appUpdated", data);
    if (!window.LAUNCH_APP_LOAD && canLaunchApp(data)) {
      renderWeixinLaunchTemplate();
      window.LAUNCH_APP_LOAD = true;
    }
  }

  function appBeforeDestroy() {
    LaunchCon.log("appBeforeDestroy", appBeforeDestroy);
    destroyWeixinLaunchEvent();
  }

  window.LAUNCH_APP_UPDATE = appUpdated;
  window.LAUNCH_APP_BEFORE_DESTROY = appBeforeDestroy;
  window.LAUNCH_APP_SHOW_WEIXIN_TO_BROWSER = launchShowWeixinToBrowser;
};

# mazey-wechat-launch-app

[![NPM version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey-wechat-launch-app
[npm-url]: https://npmjs.org/package/mazey-wechat-launch-app
[l-image]: https://img.shields.io/npm/l/mazey-wechat-launch-app
[l-url]: https://github.com/mazeyqian/mazey-wechat-launch-app

生成微信跳转 App 所需要的按钮，经过灵活配置，可支持生成单/多个按钮。

## Install

使用 [NPM](https://www.npmjs.com/package/mazey-wechat-launch-app) 安装 mazey-wechat-launch-app

```
npm install mazey-wechat-launch-app --save
```

注意：本项目依赖[微信 JS-SDK](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#3)、[js-sha1](https://github.com/emn178/js-sha1)、[jQuery](https://jquery.com/)、[mazey](https://github.com/mazeyqian/mazey)，请确保已经引入，程序会在初始化的时候探测 `window.wx`、`window.sha1`、`window.$`/`window.jQuery`、`window.mazey`。

## Usage

```
import LAUNCH_APP from 'mazey-wechat-launch-app';

const options = {
  weixinJsSdkTicket: 'bxLdikRXVb',
  launchContainerQuery: '.example-btn',
  wexinServiceAccountAppId: 'wx123',
  openPlatformMobileAppId: 'wx456',
  extInfo: 'example://example/example',
};
const app = LAUNCH_APP(options);
app.start();
```

Parameters(`options`):

| Attribute | Description | Type | Values |
| :------------ | :------------ | :------------ | :------------ |
| weixinJsSdkTicket | [jsapi_ticket](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62) 公众号用于调用微信JS接口的临时票据 | string | （必填）例如：'bxLdikRXVb' |
| launchContainerQuery | [selectors](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors) 有效的 CSS 选择器字符串，通常是填充按钮的父容器 | string | （必填）例如：'.example-btn', '#example-btn' |
| wexinServiceAccountAppId | AppId 公众号的唯一标识 | string | （必填）例如：'wx123' |
| openPlatformMobileAppId | AppId 所需跳转的移动应用的AppID | string | （必填）例如：'wx456' |
| extInfo | [extinfo](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#%E8%B7%B3%E8%BD%ACAPP%EF%BC%9Awx-open-launch-app) 跳转所需额外信息 | string | （可选）例如：'example://example/example' |

Returns(`app`):

| Attribute | Description | Type | Values |
| :------------ | :------------ | :------------ | :------------ |
| start | 生成 | function | - |
| update | 更新 | function | - |
| destroy | 销毁 | function | - |

## Contributing

```
# Install
npm i

# Serve
npm run dev

# Build
npm run build
```

## License

This software is released under the terms of the [MIT license](https://github.com/mazeyqian/mazey-wechat-launch-app/blob/main/LICENSE).

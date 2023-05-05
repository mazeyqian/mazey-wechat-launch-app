# mazey-wechat-launch-app

[![NPM version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey-wechat-launch-app
[npm-url]: https://npmjs.org/package/mazey-wechat-launch-app
[l-image]: https://img.shields.io/npm/l/mazey-wechat-launch-app
[l-url]: https://github.com/mazeyqian/mazey-wechat-launch-app

Launch App in Wechat

## Install

Use mazey-wechat-launch-app via [npm](https://www.npmjs.com/package/mazey-wechat-launch-app).

```
npm install mazey-wechat-launch-app --save
```

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

LAUNCH_APP(options);
```

Options:

| Attribute | Description | Type | Values |
| :------------ | :------------ | :------------ | :------------ |
| weixinJsSdkTicket | jsapi_ticket 公众号用于调用微信JS接口的临时票据 | string | Example: 'bxLdikRXVb' |
| launchContainerQuery | selectors 有效的 CSS 选择器字符串 | string | Example: '.example-btn' |
| wexinServiceAccountAppId | AppId 公众号的唯一标识 | string | Example: 'wx123' |
| openPlatformMobileAppId | AppId 所需跳转的移动应用的AppID | string | Example: 'wx456' |
| extInfo | extinfo 跳转所需额外信息 | string | Example: 'example://example/example' |

## Contributing

```
# Install
npm i

# Serve
npm run dev

# Build
npm run build

# Document
npm run docs

# Test
npm run test
```

## License

This software is released under the terms of the [MIT license](https://github.com/mazeyqian/mazey-wechat-launch-app/blob/master/LICENSE).

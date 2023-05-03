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
  launchContainerQuery: '.example-btn',
  launchShowWeixinToBrowserImgUrl: '//example.com/example.png',
  extInfo: 'example://example/example',
  wexinServiceAccountAppId: 'example',
  openPlatformMobileAppId: 'example',
};

LAUNCH_APP(options);
```

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

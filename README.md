# prefix-stream-suffix

![npm](https://img.shields.io/npm/v/prefix-stream-suffix)
![ci](https://github.com/takumi-n/prefix-stream-suffix/actions/workflows/ci.yaml/badge.svg)
![node-current](https://img.shields.io/node/v/prefix-stream-suffix)

Stream transformer to prepend prefix and append suffix to Node.js stream

```js
import { prefixStreamSuffix } from 'prefix-stream-suffix';

stream.pipe(prefixStreamSuffix('prefix', 'suffix'));
```

## Install

```
npm install --save prefix-stream-suffix
```

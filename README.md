# prefix-stream-suffix

[![npm](https://img.shields.io/npm/v/prefix-stream-suffix)](https://www.npmjs.com/package/prefix-stream-suffix)
[![ci](https://github.com/takumi-n/prefix-stream-suffix/actions/workflows/ci.yaml/badge.svg)](https://github.com/takumi-n/prefix-stream-suffix/actions/workflows/ci.yaml)
[![node-current](https://img.shields.io/node/v/prefix-stream-suffix)](https://nodejs.org/en/about/releases/)

Stream transformer to prepend prefix and append suffix to Node.js stream

```js
import { prefixStreamSuffix } from 'prefix-stream-suffix';

Readable.from('content').pipe(prefixStreamSuffix('prefix', 'suffix')); // === prefixcontentsuffix
```

## Install

```
npm install --save prefix-stream-suffix
```

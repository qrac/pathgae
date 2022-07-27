# pathgae

<p>
  <a aria-label="Made by QRANOKO" href="https://qranoko.jp">
    <img src="https://img.shields.io/badge/MADE%20BY%20QRANOKO-212121.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/pathgae">
    <img alt="" src="https://img.shields.io/npm/v/pathgae.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="License" href="https://github.com/qrac/pathgae/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/pathgae.svg?style=for-the-badge&labelColor=212121">
  </a>
</p>

## About

ビルド後パスを作成するための小さなライブラリ。

- 元パスのディレクトリ構造を保持
- バックスラッシュをスラッシュに置換（Windows）

## How To Use

```bash
$ npm install pathgae
```

```js
import pathgae from "pathgae"

const result = pathgae("src/pages/index.ts", {
  outBase: "src",
  outDir: "dist",
  outExt: "js",
})

console.log(result)
// => "dist/pages/index.js"
```

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)

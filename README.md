# @whiski/kit

Deno, Github Plugins for [whiski](https://npmjs.com/package/whiski)

## Installation

```
$ yarn add @whiski/kit
$ npm install @whiski/kit
```

## Usage

### `kit.deno`

```js
const whiski = require('whiski');
const kit = require('@whiski/kit');

whiski.install('https://deno.land/std@0.127.0/fs/mod.ts', {
  plugins: [kit.deno()],
  extension: 'ts',
});
```

### `kit.github`

```js
const whiski = require('whiski');
const kit = require('@whiski/kit');

whiski.install('https://github.com/foo/bar/index.js', { plugins: [kit.github()] });
```

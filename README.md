# @jacobmischka/transform-color

```js
transformColor(start, end, transformedValue);
```

Creates a color that's `transformedValue` of the way between `start` and `end`.

Very simple wrapper over the excellent `Color` library.

Usage:
```js
import transformColor from '@jacobmischka/transform-color';

let purple = transformColor('red', 'blue', 0.5);
let lightPink = transformColor('white', 'red', 0.1);
let translucentOrange = transformColor('transparent', 'orange', 0.4);
```

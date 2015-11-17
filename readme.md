# tap-only

> Get exclusive / focus tests for node-tap.


## Install

```
$ npm install --save -g tap tap-only
```

```js
// test.js
var test = require('tap-only');

test('test name', function (t) {
  t.is(...);
});

// when you want an exclusive test, just do this:

test.only('test name', function (t) {
  // ...
});
```

## License

MIT © [James Talmage](http://github.com/jamestalmage)

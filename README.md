# docschina-slugger

Generate a slug just like GitHub does for markdown headings. It also ensures slugs are unique in the same way GitHub does it. The overall goal of this package is to emulate the way GitHub handles generating markdown heading anchors as close as possible.

This project is not a Markdown or HTML parser: passing `alpha *bravo* charlie`
or `alpha <em>bravo</em> charlie` doesn’t work.
Instead pass the plain text value of the heading: `alpha bravo charlie`.

## Install

```bash
npm install docschina-slugger
```

## Usage

```js
const slugger = require('docschina-slugger')()

slugger.slug('foo')
// returns 'foo'

slugger.slug('foo')
// returns 'foo-1'

slugger.slug('bar')
// returns 'bar'

slugger.slug('foo')
// returns 'foo-2'

slugger.reset()

slugger.slug('foo')
// returns 'foo'
```

## License

[ISC](LICENSE)

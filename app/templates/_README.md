<%= pkg.name %>
<%= Array(pkg.name.length + 1).join('=') %>

[![Build status](https://img.shields.io/travis/<%= pkg.github %>/<%= pkg.name %>/master.svg?style=flat-square)](https://travis-ci.org/<%= pkg.github %>/<%= pkg.name %>)[![NPM version](https://img.shields.io/npm/v/<%= pkg.name %>.svg?style=flat-square)](https://npmjs.org/package/<%= pkg.name %>)[![Dependencies status](https://img.shields.io/david/<%= pkg.github %>/<%= pkg.name %>.svg?style=flat-square)](https://david-dm.org/<%= pkg.github %>/<%= pkg.name %>)![Licence](https://img.shields.io/npm/l/<%= pkg.name %>.svg?style=flat-square&label=licence)![Experimental](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)


<%= pkg.description %>


## Example

```js
( ... )
```


## Installing

The easiest way is to grab it from NPM. If you're running in a Browser
environment, you can use [Browserify][]

    $ npm install <%= pkg.name %>


### Using with CommonJS

If you're not using NPM, [Download the latest release][release], and require
the `<%= pkg.name %>.umd.js` file:

```js
var <%= pkg.exports.split('.').pop() %> = require('<%= pkg.name %>')
```


### Using with AMD

[Download the latest release][release], and require the `<%= pkg.name %>.umd.js`
file:

```js
require(['<%= pkg.name %>'], function(<%= pkg.exports.split('.').pop() %>) {
  ( ... )
})
```


### Using without modules

[Download the latest release][release], and load the `<%= pkg.name %>.umd.js`
file. The properties are exposed in the global `<%= pkg.exports %>` object:

```html
<script src="/path/to/<%= pkg.name %>.umd.js"></script>
```


### Compiling from source

If you want to compile this library from the source, you'll need [Git][],
[Make][], [Node.js][], and run the following commands:

    $ git clone git://github.com/<%= pkg.github %>/<%= pkg.name %>.git
    $ cd <%= pkg.name %>
    $ npm install
    $ make bundle
    
This will generate the `dist/<%= pkg.name %>.umd.js` file, which you can load in
any JavaScript environment.

    
## Documentation

You can [read the documentation online][docs] or build it yourself:

    $ git clone git://github.com/<%= pkg.github %>/<%= pkg.name %>.git
    $ cd <%= pkg.name %>
    $ npm install
    $ make documentation

Then open the file `docs/index.html` in your browser.


## Platform support

This library assumes an ES5 environment, but can be easily supported in ES3
platforms by the use of shims. Just include [es5-shim][] :)


## Licence

Copyright (c) 2015 <%= pkg.user %>.

Released under the [MIT licence](https://github.com/<%= pkg.github %>/<%= pkg.name %>/blob/master/LICENCE).

<!-- links -->
[Fantasy Land]: https://github.com/fantasyland/fantasy-land
[Browserify]: http://browserify.org/
[Git]: http://git-scm.com/
[Make]: http://www.gnu.org/software/make/
[Node.js]: http://nodejs.org/
[es5-shim]: https://github.com/kriskowal/es5-shim
[docs]: http://docs.folktalejs.org/
<!-- [release: https://github.com/<%= pkg.github %>/<%= pkg.name %>/releases/download/v$VERSION/<%= pkg.name %>-$VERSION.tar.gz] -->
[release]: https://github.com/<%= pkg.github %>/<%= pkg.name %>/releases/download/v0.0.0/<%= pkg.name %>-0.0.0.tar.gz
<!-- [/release] -->

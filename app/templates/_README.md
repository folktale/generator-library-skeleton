<%= pkg.name %>
<%= Array(pkg.name.length + 1).join('=') %>

[![Build Status](https://secure.travis-ci.org/<%= pkg.github %>/<%= pkg.name %>.png?branch=master)](https://travis-ci.org/<%= pkg.github %>/<%= pkg.name %>)
[![NPM version](https://badge.fury.io/js/<%= pkg.name %>.png)](http://badge.fury.io/js/<%= pkg.name %>)
[![Dependencies Status](https://david-dm.org/<%= pkg.github %>/<%= pkg.name %>.png)](https://david-dm.org/<%= pkg.github %>/<%= pkg.name %>)
[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges)


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

Then open the file `docs/literate/index.html` in your browser.


## Platform support

This library assumes an ES5 environment, but can be easily supported in ES3
platforms by the use of shims. Just include [es5-shim][] :)


## Licence

Copyright (c) 2013 <%= pkg.user %>.

Released under the [MIT licence](https://github.com/<%= pkg.github %>/<%= pkg.name %>/blob/master/LICENCE).

<!-- links -->
[Fantasy Land]: https://github.com/fantasyland/fantasy-land
[Browserify]: http://browserify.org/
[Git]: http://git-scm.com/
[Make]: http://www.gnu.org/software/make/
[Node.js]: http://nodejs.org/
[es5-shim]: https://github.com/kriskowal/es5-shim
[docs]: http://<%= pkg.github %>.github.io/<%= pkg.name %>
<!-- [release: https://github.com/<%= pkg.github %>/<%= pkg.name %>/releases/download/v$VERSION/<%= pkg.name %>-$VERSION.tar.gz] -->
[release]: https://github.com/<%= pkg.github %>/<%= pkg.name %>/releases/download/v0.0.0/<%= pkg.name %>-0.0.0.tar.gz
<!-- [/release] -->

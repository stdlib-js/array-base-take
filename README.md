<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# take

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Take elements from an array.



<section class="usage">

## Usage

```javascript
import take from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-take/tags). For example,

```javascript
import take from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take@v0.1.0-esm/index.mjs';
```

#### take( x, indices )

Takes elements from an array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ 1, 3 ] );
// returns [ 2, 4 ]
```

If `indices` is an empty array, the function returns an empty array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [] );
// returns []
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x`, the value of the corresponding element in the output array is undefined.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import filledBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import take from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take@esm/index.mjs';

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );

// Take a random sample of elements from `x`:
var y = take( x, indices );

console.log( x );
console.log( indices );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-take.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-take

[test-image]: https://github.com/stdlib-js/array-base-take/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-take/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-take/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-take?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-take.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-take/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-take/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-take/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-take/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-take/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-take/main/LICENSE

</section>

<!-- /.links -->

/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Takes element from an array.
*
* ## Notes
*
* -   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x`, the value of the corresponding element in the output array is undefined.
*
* @param x - input array
* @param indices - list of element indices
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = take( x, [ 1, 3 ] );
* // returns [ 2, 4 ]
*/
declare function take<T>( x: ArrayLike<T>, indices: ArrayLike<number> ): Array<T>; // tslint:disable-line:max-line-length


// EXPORTS //

export = take;
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

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';
import { Mode } from '@stdlib/types/ndarray';

/**
* Index array.
*/
type IndexArray = Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `take`.
*/
interface Take {
	/**
	* Takes elements from an array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = take( x, [ 1, 3 ], 'throw' );
	* // returns [ 2, 4 ]
	*/
	<T = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode ): Array<T>;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Float64Array>[ 2.0, 0.0, 4.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Float64Array, stride: number, offset: number ): Float64Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Float32Array>[ 2.0, 0.0, 4.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Float32Array, stride: number, offset: number ): Float32Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-float64' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Complex128Array>[ 3.0, 4.0, 0.0, 0.0, 7.0, 8.0, 0.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Complex128Array, stride: number, offset: number ): Complex128Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var out = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Complex64Array>[ 3.0, 4.0, 0.0, 0.0, 7.0, 8.0, 0.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Complex64Array, stride: number, offset: number ): Complex64Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Int32Array = require( '@stdlib/array-int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	* var out = new Int32Array( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Int32Array>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Int32Array, stride: number, offset: number ): Int32Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Int16Array = require( '@stdlib/array-int16' );
	*
	* var x = new Int16Array( [ 1, 2, 3, 4 ] );
	* var out = new Int16Array( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Int16Array>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Int16Array, stride: number, offset: number ): Int16Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Int8Array = require( '@stdlib/array-int8' );
	*
	* var x = new Int8Array( [ 1, 2, 3, 4 ] );
	* var out = new Int8Array( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Int8Array>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Int8Array, stride: number, offset: number ): Int8Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Uint32Array = require( '@stdlib/array-uint32' );
	*
	* var x = new Uint32Array( [ 1, 2, 3, 4 ] );
	* var out = new Uint32Array( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Uint32Array>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Uint32Array, stride: number, offset: number ): Uint32Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Uint16Array = require( '@stdlib/array-uint16' );
	*
	* var x = new Uint16Array( [ 1, 2, 3, 4 ] );
	* var out = new Uint16Array( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Uint16Array>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Uint16Array, stride: number, offset: number ): Uint16Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var x = new Uint8Array( [ 1, 2, 3, 4 ] );
	* var out = new Uint8Array( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Uint8Array>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Uint8Array, stride: number, offset: number ): Uint8Array;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
	*
	* var x = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
	* var out = new Uint8ClampedArray( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns <Uint8ClampedArray>[ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: Collection | AccessorArrayLike<any>, indices: IndexArray, mode: Mode, out: Uint8ClampedArray, stride: number, offset: number ): Uint8ClampedArray;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var out = [ 0, 0, 0, 0 ];
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns [ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, out: Array<U>, stride: number, offset: number ): Array<T | U>;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
	*
	* var x = [ 1, 2, 3, 4 ];
	* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* var v = arr.get( 0 );
	* // returns 2
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, out: AccessorArrayLike<U>, stride: number, offset: number ): AccessorArrayLike<T | U>;

	/**
	* Takes elements from an array and assigns the value to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var out = [ 0, 0, 0, 0 ];
	*
	* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
	* // returns [ 2, 0, 4, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, out: Collection<U>, stride: number, offset: number ): Collection<T | U>;
}

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param mode - index mode
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = take( x, [ 1, 3 ], 'throw' );
* // returns [ 2, 4 ]
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var out = [ 0, 0, 0, 0 ];
*
* var arr = take.assign( x, [ 1, 3 ], 'throw', out, 2, 0 );
* // returns [ 2, 0, 4, 0 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var take: Take;


// EXPORTS //

export = take;

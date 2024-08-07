/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

'use strict';

// MODULES //

var isComplexDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
var isBooleanDataType = require( '@stdlib/array-base-assert-is-boolean-data-type' );
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var reinterpret = require( '@stdlib/strided-base-reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );
var ind = require( '@stdlib/ndarray-base-ind' ).factory;


// FUNCTIONS //

/**
* Takes elements from an indexed array and assigns the values to elements in an indexed output array.
*
* @private
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {string} mode - index mode
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var out = [ 0, 0, 0, 0 ];
*
* var arr = indexed( x, indices, 'throw', out, 1, 0 );
* // returns [ 4, 2, 3, 1 ]
*/
function indexed( x, indices, mode, out, stride, offset ) {
	var getIndex;
	var max;
	var io;
	var i;
	var j;

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = x.length - 1;

	// Extract each desired element from the provided array...
	io = offset;
	for ( i = 0; i < indices.length; i++ ) {
		j = getIndex( indices[ i ], max );
		out[ io ] = x[ j ];
		io += stride;
	}
	return out;
}

/**
* Takes elements from an accessor array and assigns the values to elements in an accessor output array.
*
* @private
* @param {Object} x - input array object
* @param {Object} indices - index array object
* @param {string} mode - index mode
* @param {Object} out - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var indices = toAccessorArray( [ 3, 1, 2, 0 ] );
*
* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), arraylike2object( indices ), 'throw', arraylike2object( out ), 1, 0 );
*
* var v = arr.get( 0 );
* // returns 4
*/
function accessors( x, indices, mode, out, stride, offset ) {
	var getIndex;
	var xdata;
	var idata;
	var odata;
	var xget;
	var iget;
	var oset;
	var max;
	var io;
	var i;
	var j;

	xdata = x.data;
	idata = indices.data;
	odata = out.data;

	xget = x.accessors[ 0 ];
	iget = indices.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = xdata.length - 1;

	// Extract each desired element from the provided array...
	io = offset;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), max );
		oset( odata, io, xget( xdata, j ) );
		io += stride;
	}
	return odata;
}

/**
* Takes elements from a complex array and assigns the values to elements in a complex output array.
*
* @private
* @param {Collection} x - real-valued floating-point input array view
* @param {Object} indices - index array object
* @param {string} mode - index mode
* @param {Collection} out - real-valued floating-point output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array view
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var indices = [ 0, 0, 1, 1 ];
*
* var out = new Float64Array( 8 );
*
* var arr = complex( x, arraylike2object( indices ), 'throw', out, 1, 0 );
* // returns <Float64Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
*/
function complex( x, indices, mode, out, stride, offset ) {
	var getIndex;
	var idata;
	var iget;
	var max;
	var io;
	var so;
	var i;
	var j;
	var k;

	idata = indices.data;
	iget = indices.accessors[ 0 ];

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = ( x.length/2 ) - 1; // resolve the length of the original complex array

	// Extract each desired element from the provided array...
	so = stride * 2; // note: multiply by 2, as real-valued array consists of interleaved real and imaginary components
	io = offset * 2;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), max );
		k = j * 2;
		out[ io ] = x[ k ];
		out[ io+1 ] = x[ k+1 ];
		io += so;
	}
	return out;
}

/**
* Takes elements from a boolean array and assigns the values to elements in a boolean output array.
*
* @private
* @param {Collection} x - boolean value input array view
* @param {Object} indices - index array object
* @param {string} mode - index mode
* @param {Collection} out - boolean value output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array view
*
* @example
* var Uint8Array = require( '@stdlib/array-uint8' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = new Uint8Array( [ 1, 0, 0, 1 ] );
* var indices = [ 0, 0, 1, 1 ];
*
* var out = new Uint8Array( 4 );
*
* var arr = boolean( x, arraylike2object( indices ), 'throw', out, 1, 0 );
* // returns <Uint8Array>[ 1, 1, 0, 0 ]
*/
function boolean( x, indices, mode, out, stride, offset ) {
	var getIndex;
	var idata;
	var iget;
	var max;
	var io;
	var i;
	var j;

	idata = indices.data;
	iget = indices.accessors[ 0 ];

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = x.length - 1;

	// Extract each desired element from the provided array...
	io = offset;
	for ( i = 0; i < idata.length; i++ ) {
		j = getIndex( iget( idata, i ), max );
		out[ io ] = x[ j ];
		io += stride;
	}
	return out;
}


// MAIN //

/**
* Takes elements from an array and assigns the values to elements in a provided output array.
*
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {string} mode - index mode
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var out = [ 0, 0, 0, 0 ];
* var arr = assign( x, indices, 'throw', out, 1, 0 );
* // returns [ 4, 2, 3, 1 ]
*
* var bool = ( arr === out );
* // returns true
*/
function assign( x, indices, mode, out, stride, offset ) {
	var xo;
	var io;
	var oo;

	xo = arraylike2object( x );
	io = arraylike2object( indices );
	oo = arraylike2object( out );
	if (
		xo.accessorProtocol ||
		io.accessorProtocol ||
		oo.accessorProtocol
	) {
		// Note: we only explicitly support a limited set of dtype-to-dtype pairs, as this function should not be concerned with casting rules, etc. That is left to userland...
		if (
			isComplexDataType( xo.dtype ) &&
			isComplexDataType( oo.dtype )
		) {
			complex( reinterpret( x, 0 ), io, mode, reinterpret( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		if (
			isBooleanDataType( xo.dtype ) &&
			isBooleanDataType( oo.dtype )
		) {
			boolean( reinterpretBoolean( x, 0 ), io, mode, reinterpretBoolean( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		accessors( xo, io, mode, oo, stride, offset );
		return out;
	}
	indexed( x, indices, mode, out, stride, offset );
	return out;
}


// EXPORTS //

module.exports = assign;

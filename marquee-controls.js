/*
 * The Marquis Marquee™
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

(function( w ) {
	"use strict";

	var doc = w.document,
		componentName = "marquee",
		enhancedAttr = "data-enhanced",
		initSelector = componentName;

	function _setBindings( el, opts ) {
		var _pause = function( e ) {
				el.setAttribute( "scrollamount", "0" );
			},
			_play = function( e ) {
				el.setAttribute( "scrollamount", opts.scrollamount );
			};

		if( w.addEventListener ) {
			el.addEventListener( "mouseover", _pause );
			el.addEventListener( "mouseout", _play );
		} else {
			el.attachEvent( "onmouseover", _pause );
			el.attachEvent( "onmouseout", _play );
		}
	}

	function _addControls( el ) {
		var left = doc.createElement( "a" ),
			right = doc.createElement( "a" ),
			goLeft = function( e ) {
				el.setAttribute( "direction", "left" );
				return false;
			},
			goRight = function( e ) {
				el.setAttribute( "direction", "right" );
				return false;
			};

		left.setAttribute( "href", "#" );
		left.setAttribute( "class", "marquee-left" );
		left.innerHTML = "scroll left";

		right.setAttribute( "href", "#" );
		right.setAttribute( "class", "marquee-right" );
		right.innerHTML = "scroll right";

		el.parentNode.insertBefore( left, el );
		el.parentNode.appendChild( right );

		if( w.addEventListener ) {
			left.addEventListener( "click", goLeft );
			right.addEventListener( "click", goRight );
		} else {
			left.attachEvent( "onclick", goLeft );
			right.attachEvent( "onclick", goRight );
		}
	}

	function init() {
		var els = doc.getElementsByTagName( initSelector );

		for( var i = 0, l = els.length; i < l; i++ ) {
			var el = els[ i ], opts;

			if( el.getAttribute( "enhanced" ) === null ) {
				opts = {
					scrollamount: el.getAttribute( "scrollamount" ) || 6,
					scrolldelay: el.getAttribute( "scrolldelay" ) || 85
				};

				_addControls( el );
				_setBindings( el, opts );

				el.setAttribute( enhancedAttr, "true" );
			}
		}
	}

	w.marquismarquee = init;

}( this ));
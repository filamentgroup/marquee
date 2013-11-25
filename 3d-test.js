
(function( win, undefined ) {

	function transform3dTest() {
		var fakeBody,
			doc = document,
			de = doc.documentElement,
			bod = doc.body || (function() {
				fakeBody = true;
				return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
			}()),
			el = document.createElement( "div" ),
			prop = "transform-3d",
			vendors = [ "Webkit", "Moz", "O" ],
			mm = "matchMedia" in window,
			ret = false,
			transforms, t;

		if( mm ) {
			ret = window.matchMedia( "(-" + vendors.join( "-" + prop + "),(-" ) + "-" + prop + "),(" + prop + ")" );
			if ( ret ) {
				return !!ret;
			}
		} else {
			return !!ret;
		}

		transforms = {
			// We’re omitting Opera for the time being; MS uses unprefixed.
			"MozTransform": "-moz-transform",
			"transform": "transform"
		};

		fakeBody.appendChild( el );

		for ( t in transforms ) {
			if ( el.style[ t ] !== undefined ) {
				el.style[ t ] = "translate3d( 100px, 1px, 1px )";
				ret = window.getComputedStyle( el ).getPropertyValue( transforms[ t ] );
			}
		}
		return ( !!ret && ret !== "none" );
	}

	console.log( transform3dTest() );

}( this ));


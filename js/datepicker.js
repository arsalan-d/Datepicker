"use strict";


if (!String.prototype.includes)
{
	String.prototype.includes = function(search, start)
	{
		'use strict';
		if (typeof start !== 'number') {
			start = 0;
		}

		if (start + search.length > this.length) {
			return false;
		} else {
			return this.indexOf(search, start) !== -1;
		}
	};
}


// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach)
{

	Array.prototype.forEach = function(callback/*, thisArg*/)
	{

		var T, k;

		if (this == null) {
			throw new TypeError('this is null or not defined');
		}

		// 1. Let O be the result of calling toObject() passing the
		// |this| value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get() internal
		// method of O with the argument "length".
		// 3. Let len be toUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If isCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let
		// T be undefined.
		if (arguments.length > 1) {
			T = arguments[1];
		}

		// 6. Let k be 0.
		k = 0;

		// 7. Repeat while k < len.
		while (k < len) {

			var kValue;

			// a. Let Pk be ToString(k).
			//    This is implicit for LHS operands of the in operator.
			// b. Let kPresent be the result of calling the HasProperty
			//    internal method of O with argument Pk.
			//    This step can be combined with c.
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal
				// method of O with argument Pk.
				kValue = O[k];

				// ii. Call the Call internal method of callback with T as
				// the this value and argument list containing kValue, k, and O.
				callback.call(T, kValue, k, O);
			}
			// d. Increase k by 1.
			k++;
		}
		// 8. return undefined.
	};
}


// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Object.prototype.forEach) {

	Object.prototype.forEach = function(callback/*, thisArg*/) {

		var T, k;

		if (this == null) {
			throw new TypeError('this is null or not defined');
		}

		// 1. Let O be the result of calling toObject() passing the
		// |this| value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get() internal
		// method of O with the argument "length".
		// 3. Let len be toUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If isCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let
		// T be undefined.
		if (arguments.length > 1) {
			T = arguments[1];
		}

		// 6. Let k be 0.
		k = 0;

		// 7. Repeat while k < len.
		while (k < len) {

			var kValue;

			// a. Let Pk be ToString(k).
			//    This is implicit for LHS operands of the in operator.
			// b. Let kPresent be the result of calling the HasProperty
			//    internal method of O with argument Pk.
			//    This step can be combined with c.
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal
				// method of O with argument Pk.
				kValue = O[k];

				// ii. Call the Call internal method of callback with T as
				// the this value and argument list containing kValue, k, and O.
				callback.call(T, kValue, k, O);
			}
			// d. Increase k by 1.
			k++;
		}
		// 8. return undefined.
	};
}



var datePickerLocale =
{

	WEEKDAYS: ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],

	MONTHLIST: ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	],

	dateObj: new Date(),

	year: ( new Date() ).getFullYear(),

	month: ( new Date() ).getMonth(),

	day: ( new Date() ).getDate(),

	dayOfWeek: ( new Date() ).getDay(),

	date: function( y, m, d )
	{
		var date ;
		if( ! datepickerHelper.isUndef(d) )
		{
			date = new Date( y, m, d ) ;
		}
		else if( ! datepickerHelper.isUndef(m) )
		{
			date = new Date( y, m ) ;
		}
		else if( ! datepickerHelper.isUndef( y ) )
		{
			date = new Date( y ) ;
		}
		else
		{
			date = new Date() ;
		}
		return {
			date: date,
			year: date.getFullYear(),
			month: date.getMonth(),
			day: date.getDate(),
			dayOfWeek: date.getDay(),
		} ;
	},

	// dateObj is return value of datePickerLocale.date( y, m, d ).
	set: function( dateObj, valueObj )
	{
		if( valueObj.day ){
			dateObj.date.setDate( valueObj.day ) ;
		}
		if( valueObj.month ){
			dateObj.date.setMonth( valueObj.month ) ;
		}
		if( valueObj.year ){
			dateObj.date.setFullYear( valueObj.year ) ;
		}
		return {
			date: dateObj.date,
			year: dateObj.date.getFullYear(),
			month: dateObj.date.getMonth(),
			day: dateObj.date.getDate(),
			dayOfWeek: dateObj.date.getDay(),
		} ;
	},

	now: function()
	{
		return {
			year: this.year,
			month: this.month,
			day: this.day,
			dayOfWeek: this.dayOfWeek,
		} ;
	},

} ;



var datepickerHelper =
{

	/**
	 * Converts a month number to a string.
	 *
	 * @param {Number} monthIndex
	 * @return {String} Returns month name
	 */
	getMonthAsString: function(monthIndex)
	{
		return datePickerLocale.MONTHLIST[monthIndex] ;
	},

	/**
	 * Converts a day number to a string.
	 *
	 * @param {Number} dayIndex
	 * @return {String} Returns day name
	 */
	dayOfWeekAsString: function (dayIndex)
	{
		return datePickerLocale.WEEKDAYS[dayIndex];
	},

	/**
	 * Converts a month number to a string.
	 *
	 * @param {String} month
	 * @return {Number} Returns month index
	 */
	getMonthIndex: function (month)
	{
		return datePickerLocale.MONTHLIST.indexOf( month ) ;
	},

	/**
	 * Converts a day number to a string.
	 *
	 * @param {String} day
	 * @return {Number} Returns day index
	 */
	dayOfWeekIndex: function (day)
	{
		return datePickerLocale.WEEKDAYS.indexOf( day );
	},

	checkDayOfWeek: function ( dayIndex, reverse )
	{
		if ( reverse )
		{
			if ( dayIndex <= 0 )
			{
				return 6 + dayIndex ;
			}
			return dayIndex - 1 ;
		}

		if ( dayIndex >= 6 )
		{
			return mod( dayIndex, 6 );
		}
		return dayIndex + 1 ;

	},

	prependZero: function ( number )
	{
		if (number < 10 )
		{
			return "0" + number ;
		}
		return "" + number ;
	},

	stringify: function ( datesArray )
	{
		datesArray[0] = "" + datesArray[0] ;
		datesArray[1] = this.prependZero( datesArray[1] ) ;
		datesArray[2] = this.prependZero( datesArray[2] ) ;
		return datesArray ;
	},

	isUndef: function( v )
	{
		return typeof( v ) == "undefined" ;
	},

	getPosition: function getPosition(el)
	{
	    var xPosition = 0;
	    var yPosition = 0;

	    while(el) {
	        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
	        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
	        el = el.offsetParent;
	    }

	    return { x: xPosition, y: yPosition };
	},

} ;


// arg : the first argument, which can be either a query, and array, HTML node and so on...
// What it does with it depends on the next method call.
var _helper_ = function( arg, parentQuery )
{

	var 	that = this,
		el,
		query = arg,
		array = arg,
		string = arg,
		object = arg,
		HTMLEl = arg ;

	//Returns true if it is a DOM node
	this.isNode = function(o){
		return (
			typeof Node === "object" ? o instanceof Node :
			o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
		);
	}

	this.isUndef = function( v )
	{
		return typeof( v ) == "undefined" ;
	} ;

	//Returns true if it is a DOM element
	this.isElement = function(o){
		return (
			typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
		);
	}

	this.first = function( parent )
	{
		if( parent )
		{
			if( typeof parent == "string" )
			{
				parent = document.querySelector( parent ) ;
			}
		}
		else if( parentQuery )
		{
			if( typeof parentQuery == "string" )
			{
				parent = document.querySelector( parentQuery ) ;
			}
		}
		else
		{
			parent = document ;
		}
		return el = parent.querySelector( query ) ;
	} ;

	this.all = function( parent )
	{
		if( parent )
		{
			if( typeof parent == "string" )
			{
				parent = document.querySelector( parent ) ;
			}
		}
		else if( parentQuery )
		{
			if( typeof parentQuery == "string" )
			{
				parent = document.querySelector( parentQuery ) ;
			}
		}
		else
		{
			parent = document ;
		}
		return parent.querySelectorAll( query ) ;
	} ;

	this.stringRemove = function( needle )
	{
		return string.replace( needle, "" ) ;
	} ;

	this.arrayChunk = function( chunk, index )
	{
		var start = index * chunk ;
		return array.slice( start , start + chunk ) ;
	} ;

	this.HTMLElMatches = function( query )
	{
		var 	list = [ 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector' ] ;

		for( var i = 0 ; i < 4 ; i++ )
		{
			if( HTMLEl[ list[ i ] ] )
			{
				return HTMLEl[ list[ i ] ]( query ) ;
			}
		}

		return (function(s)
			{
				var matches = (HTMLEl.document || HTMLEl.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== HTMLEl) {}
				return i > -1;
			})( query ) ;
	} ;

	/**
	 * Get the closest matching element up the DOM tree.
	 * @private
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	this.HTMLElClosest = function( selector )
	{
		var elem = HTMLEl ;

		// Get closest match
		for ( ; elem && elem !== document; elem = elem.parentNode )
		{
			if ( elem.matches( selector ) ) return elem;
		}

		return null;

	} ;

	/**
	 * Get all of an element's parent elements up the DOM tree
	 * @param  {Node}   elem     The element
	 * @param  {String} selector Selector to match against [optional]
	 * @return {Array}           The parent elements
	 */
	this.HTMLElParents = function ( selector )
	{
		var elem = HTMLEl ;
		// Element.matches() polyfill
		if (!Element.prototype.matches)
		{
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function(s)
				{
					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}
		// Setup parents array
		var parents = [];

		// Get matching parent elements
		for ( ; elem && elem !== document; elem = elem.parentNode )
		{
			// Add matching parents to array
			if ( selector )
			{
				if ( elem.matches( selector ) )
				{
					parents.push( elem );
				}
			}
			else
			{
				parents.push( elem );
			}
		}

		return parents;
	} ;

	/**
	 * Get all of an element's parent elements up the DOM tree until a matching parent is found
	 * @param  {Node}   elem     The element
	 * @param  {String} parent   The selector for the parent to stop at
	 * @param  {String} selector The selector to filter against [optionals]
	 * @return {Array}           The parent elements
	 */
	this.HTMLElParentsUntil = function ( parent, selector )
	{
		var elem = HTMLEl ;
		// Element.matches() polyfill
		if (!Element.prototype.matches)
		{
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function(s)
				{
					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}
		// Setup parents array
		var parents = [];
		// Get matching parent elements
		for ( ; elem && elem !== document; elem = elem.parentNode )
		{
			if ( parent )
			{
				if ( elem.matches( parent ) ) break;
			}
			if ( selector )
			{
				if ( elem.matches( selector ) )
				{
					parents.push( elem );
				}
				break;
			}
			parents.push( elem );
		}
		return parents;
	} ;

	this.HTMLElHasClass = function( classToCheck )
	{
		return HTMLEl.className.includes( classToCheck ) ;
	} ;

	this.HTMLElToggle = function ()
	{
		HTMLEl.style.display = HTMLEl.style.display == 'none' ? '' : 'none';
	} ;

	this.HTMLElAddClass = function( className )
	{
		if( ! HTMLEl.className.includes( className ) )
		{
			HTMLEl.className += " " + className ;
		}
		return HTMLEl ;
	} ;

	this.HTMLElRemoveClass = function( className )
	{
		if( HTMLEl.className.includes( className ) )
		{
			string = HTMLEl.className ;
			var removing = this.stringRemove( " " + className ) ;
			string = removing ;
			removing = this.stringRemove( className + " " ) ;
			string = removing ;
			HTMLEl.className = this.stringRemove( className ) ;
		}
		return HTMLEl ;
	} ;

	/*
	 * Custom event handler.
	 * [ String ] event : type of event, eg : 'click', ...
	 * [ Mixed : Closure | String ] arg : child element, or the event handler closure,
	 * if te 3rd argument is present, the 2nd argument is
	 * child query.
	 * [Closure-optional] closure : if present, the event handler anonymous
	 * function ( Closure )
	 *
	 */
	this.HTMLElOn = function( event, arg, closure )
	{
		if( HTMLEl.addEventListener )
		{
			//HTMLEl.addEventListener(event, arg) ;
			if (event === 'click') { event = "mouseup"}
			if (event === 'mouseup' || event === 'mousedown' || event === 'touchstart' || event === 'touchdown' )
			{
				event = ( ( 'on' + event ) in window ) ? event : 'click' ;
			}

			if( closure )
			{
				HTMLEl.addEventListener(event, function(e)
				{
					var target = _arsiDatePicker( e.target ) ;
					if( target.matches( arg ) )
					{
						(closure).bind( e.target )(e) ;
					} else
					{
						var parent = target.closest( arg ) ;
						if( parent )
						{
							(closure).bind( parent )(e) ;
						}
					}
				}) ;
			}
			else
			{
				console.log( "ERROR !" ) ;
				// HTMLEl.addEventListener(event, arg ) ;
			}
		}

		return HTMLEl ;
	} ;

	/*
	 * Custom event handler.
	 * [ String ] event : type of event, eg : 'click', ...
	 * [ Mixed : Closure | String ] arg : child element, or the event handler closure,
	 * if te 3rd argument is present, the 2nd argument is
	 * child query.
	 * [Closure-optional] closure : if present, the event handler anonymous
	 * function ( Closure )
	 *
	 */
	this.HTMLElOff = function( event, excludedQuery, closure )
	{
		if( HTMLEl.addEventListener )
		{
			HTMLEl.addEventListener(event, function(e)
			{
				var target = _arsiDatePicker( e.target ) ;
				if( target.matches( excludedQuery ) )
				{
					return;
				} else
				{
					var parent = target.closest( excludedQuery ) ;
					if( parent )
					{
						return;
					}
				}
				(closure).bind( e.target )(e) ;
			}) ;
		}

		return HTMLEl ;
	} ;

	// Set css properties of a HTMLElement.
	this.HTMLElCss = function( props )
	{
		if( HTMLEl.style )
		{
			for( var cssProperty in props )
			{
				var cssValue = props[ cssProperty ] ;
				HTMLEl.style[ cssProperty ] = cssValue ;
			}
		}
	} ;

	// Appending html string or element to a DOM HTMLElement as its child ;
	this.HTMLElAppend = function( html )
	{
		var el = document.createElement('div') ;

		if( that.isElement( html ) )
		{
			return HTMLEl.appendChild( html );
		}

		el.innerHTML += html ;
		el.childNodes.forEach( function( child )
		{
			HTMLEl.appendChild( child ) ;
		})
		el.innerHTML = "" ;
		return ;
	} ;

	// Appending html string or element to a DOM HTMLElement as its child ;
	this.HTMLElDetach = function()
	{
		HTMLEl.parentNode.removeChild( HTMLEl ) ;
	} ;


	this.HTMLElTriggerEvent = function( eventName )
	{
		var event; // The custom event that will be created

		if (document.createEvent) {
			event = document.createEvent( "HTMLEvents" );
			event.initEvent( eventName, true, true);
		} else {
			event = document.createEventObject();
			event.eventType = eventName;
		}

		event.eventName = eventName;

		if (document.createEvent) {
			HTMLEl.dispatchEvent(event);
		} else {
			HTMLEl.fireEvent("on" + event.eventType, event);
		}
	} ;

	this.addRippleEffect = function( event )
	{
		event = this.isUndef( event ) ? 'mousedown' : event ;

		_arsiDatePicker('body').on(event, query, function( e )
		{
                e.stopPropagation();
			var 	that = _arsiDatePicker( this ),
				that = _arsiDatePicker( this ),
				elWidth = this.offsetWidth,
				elHeight = this.offsetHeight;

			if( elHeight > elWidth )
				var scale = Math.ceil( elHeight / 10 ) * 2 + 2 ;
			else
				var scale = Math.ceil( elWidth / 10 ) * 2 + 2 ;

			var rect = this.getBoundingClientRect(),
				xCoordinate = e.clientX - rect.left - 5,
				yCoordinate = e.clientY - rect.top - 5 ;

			that.append("<span class='touch-effect' style='top: " + yCoordinate + "px; left: " + xCoordinate + "px;'></span>") ;
			var span = _arsiDatePicker( "span.touch-effect", that ) ;

			setTimeout( function()
			{
				var firstSpan = span.first() ;
				if( firstSpan ) { firstSpan.style.transform = "scale(" + scale + ")" ; }
			}, 1) ;

			setTimeout( function()
			{
				that.addClass("fade-out") ;
			}, 400) ;

			setTimeout( function()
			{
				span.detach() ;
				that.removeClass("fade-out") ;
				that.removeClass("touching") ;
			}, 600) ;

			return true ;

		}) ;
	} ;

	// Object consists of a number of HTMLElement objects.
	// And the effect will be applied to all its properties.
	this.ObjectCss = function( props )
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElCss( props ) ;
		}) ;
	} ;

	// Object consists of a number of HTMLElement objects.
	// And the effect will be applied to all its properties.
	this.ObjectTriggerEvent = function( eventName )
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElTriggerEvent( eventName ) ;
		}) ;
	} ;

	// Object consists of a number of HTMLElement objects.
	// And the effect will be applied to all its properties.
	this.ObjectAddClass = function( className )
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElAddClass( className ) ;
		}) ;
	} ;

	// Object consists of a number of HTMLElement objects.
	// And the effect will be applied to all its properties.
	this.ObjectRemoveClass = function( className )
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElRemoveClass( className ) ;
		}) ;
	} ;

	this.ObjectDetach = function()
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElDetach() ;
		}) ;
	} ;

	// Object consists of a number of HTMLElement objects.
	// And the effect will be applied to all its properties.
	/*
	 * Custom event handler.
	 * [ String ] event : type of event, eg : 'click', ...
	 * [ Mixed : Closure | String ] arg : child element, or the event handler closure,
	 * if te 3rd argument is present, the 2nd argument is
	 * child query.
	 * [Closure-optional] closure : if present, the event handler anonymous
	 * function ( Closure )
	 *
	 */
	this.ObjectOn = function( event, arg, closure )
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElOn( event, arg, closure ) ;
		}) ;
	} ;

	this.ObjectOff = function( event, excludedQuery, closure )
	{
		object.forEach( function( el )
		{
			HTMLEl = el ;
			that.HTMLElOff( event, excludedQuery, closure ) ;
		}) ;
	} ;

	this.removeEvent = function( event, handler )
	{
		if ( HTMLEl.removeEventListener )
		{	// For all major browsers, eHTMLElcept IE 8 and earlier
			return HTMLEl.removeEventListener( event, handler ) ;
		}
		else if ( HTMLEl.detachEvent )
		{	// For IE 8 and earlier versions
			return HTMLEl.detachEvent( "on" + event , handler ) ;
		}
	}

	return {

		//  arg typeof string

		first: function( parent )
		{
			return that.first( parent ) ;
		},

		all: function( parent )
		{
			return that.all( parent ) ;
		},

		remove: function( needle )
		{
			return that.stringRemove( needle ) ;
		},


		//  array instanceof array

		chunk: function( chunk, index )
		{
			return that.arrayChunk( chunk, index ) ;
		},


		//  HTMLEl instanceof HTMLEl

		matches: function( query )
		{
			return that.HTMLElMatches( query ) ;
		},

		/**
		 * Get the closest matching element up the DOM tree.
		 * @private
		 * @param  {Element} elem     Starting element
		 * @param  {String}  selector Selector to match against
		 * @return {Boolean|Element}  Returns null if not match found
		 */
		closest: function( selector )
		{
			return that.HTMLElClosest( selector ) ;
		},

		/**
		 * Get all of an element's parent elements up the DOM tree
		 * @param  {Node}   elem     The element
		 * @param  {String} selector Selector to match against [optional]
		 * @return {Array}           The parent elements
		 */
		parents: function ( selector )
		{
			return that.HTMLElParents( selector ) ;
		},

		/**
		 * Get all of an element's parent elements up the DOM tree until a matching parent is found
		 * @param  {Node}   elem     The element
		 * @param  {String} parent   The selector for the parent to stop at
		 * @param  {String} selector The selector to filter against [optionals]
		 * @return {Array}           The parent elements
		 */
		parentsUntil: function ( parent, selector )
		{
			return that.HTMLElParentsUntil( parent, selector ) ;
		},

		toggle: function ()
		{
			return that.HTMLElToggle() ;
		},

		hasClass: function( classToCheck )
		{
			if( typeof arg == "string" )
			{
				object = that.first( query ) ;
			}
			return that.HTMLElHasClass( classToCheck ) ;
		},

		addClass: function( className )
		{
			if( typeof arg == "string" )
			{
				object = that.all() ;
				return that.ObjectAddClass( className ) ;
			}
			else if( arg instanceof NodeList )
			{
				return that.ObjectAddClass( className ) ;
			}
			else
			{
				return that.HTMLElAddClass( className ) ;
			}
		},

		removeClass: function( className )
		{
			if( typeof arg == "string" )
			{
				object = that.all() ;
				return that.ObjectRemoveClass( className ) ;
			}
			else if( arg instanceof NodeList )
			{
				return that.ObjectRemoveClass( className ) ;
			}
			else
			{
				return that.HTMLElRemoveClass( className ) ;
			}
		},

		// Appending html string or element to a DOM HTMLElement as its child ;
		detach: function()
		{
			if( typeof arg == "string" )
			{
				object = that.all() ;
				return that.ObjectDetach() ;
			}
			else if( arg instanceof NodeList )
			{
				return that.ObjectDetach() ;
			}
			else
			{
				return that.HTMLElDetach() ;
			}
		},

		// Appending html string or element to a DOM HTMLElement as its child ;
		ripple: function( event )
		{
			return that.addRippleEffect( event ) ;
		},

		/*
		 * Custom event handler.
		 * [ String ] event : type of event, eg : 'click', ...
		 * [ Mixed : Closure | String ] child : child element, or the event handler closure,
		 * if te 3rd argument is present, the 2nd argument is
		 * child query.
		 * [Closure-optional] closure : if present, the event handler anonymous
		 * function ( Closure )
		 *
		 */
		on: function( event, child, closure )
		{
			if( typeof query == "string" )
			{
				object = that.all() ;
				return that.ObjectOn( event, child, closure ) ;
			}
			else if( object instanceof NodeList )
			{
				return that.ObjectOn( event, child, closure ) ;
			}
			else
			{
				return that.HTMLElOn( event, child, closure ) ;
			}
		},

		/*
		 * Custom event handler.
		 * [ String ] event : type of event, eg : 'click', ...
		 * [ Mixed : Closure | String ] arg : child element, or the event handler closure,
		 * if te 3rd argument is present, the 2nd argument is
		 * child query.
		 * [Closure-optional] closure : if present, the event handler anonymous
		 * function ( Closure )
		 *
		 */
		off: function( event, excludedQuery, closure )
		{
			if( typeof arg == "string" )
			{
				object = that.all() ;
				return that.ObjectOff( event, excludedQuery, closure ) ;
			}
			else if( arg instanceof NodeList )
			{
				return that.ObjectOff( event, excludedQuery, closure ) ;
			}
			else
			{
				return that.HTMLElOff( event, excludedQuery, closure ) ;
			}
		},

		css: function( props )
		{
			if( typeof arg == "string" )
			{
				object = that.all() ;
				return that.ObjectCss( props ) ;
			}
			else if( arg instanceof NodeList )
			{
				return that.ObjectCss( props ) ;
			}
			else
			{
				return that.HTMLElCss( props ) ;
			}
		},

		append: function( html )
		{
			return that.HTMLElAppend( html ) ;
		},

		trigger: function( eventName )
		{
			if( typeof arg == "string" )
			{
				object = that.all() ;
				return that.ObjectTriggerEvent( className ) ;
			}
			else if( arg instanceof NodeList )
			{
				return that.ObjectTriggerEvent( className ) ;
			}
			else
			{
				return that.HTMLElTriggerEvent( eventName ) ;
			}
		},



	} ;

}


var _arsiDatePicker = function( arg )
{
	return new _helper_( arg ) ;
}


var	DatePickerObject,
	numberOfDatePickers = 1 ;
var DatePicker = function( query, options, defaultYear, defaultMonth, defaultDay )
{
	DatePickerObject = this ;
	var 	that = this,
		body = _arsiDatePicker('body').first(),
		input = _arsiDatePicker( query ).first(),
		datePickerId = 'arsi-datepicker-' + numberOfDatePickers ,
		DayPickerVar, MonthPickerVar, YearPickerVar,
		options = datepickerHelper.isUndef( options ) ? {} : options ;
		options.twoDigits = options.twoDigits ? true : false ;

	input.setAttribute('data-datepicker', datePickerId ) ;
	defaultMonth-- ;
	numberOfDatePickers++ ;

	this.embedDatePicker = function()
	{
		var 	position = datepickerHelper.getPosition( input ),
			top = position.y +  input.clientHeight,
			left = position.x + 30 ;

		var 	datepickerString = this.datePickerHtml( top + "px", left + "px" ) ;
		_arsiDatePicker(body).append( datepickerString ) ;
	}

	this.datePickerHtml = function(top, left)
	{

		return '<div class="datepicker arsi-datepicker dropdown-menu open" id="' + datePickerId + '" style="top: ' + top + '; left: ' + left + ';">' +
			' <div class="datepicker-days datepicker-tab active">' +
			'    <table class=" table-condensed">' +
			'        <thead>' +
			'            <tr class="datepicker-nav">' +
			'                <th class="nav prev">' +
			'                    <p>‹</p>' +
			'                </th>' +
			'                <th colspan="5" class="switch-datepicker days"></th>' +
			'                <th class="nav next">' +
			'                    <p>›</p>' +
			'                </th>' +
			'            </tr>' +
			'            <tr class="datepicker-nav week-days">' +
			'            </tr>' +
			'        </thead>' +
			'        <tbody>' +
			'        </tbody>' +
			'        <tfoot>' +
			'            <tr class="datepicker-now">' +
			'                <th colspan="7" class="switch-datepicker"> NOW</th>' +
			'            </tr>' +
			'        </tfoot>' +
			'    </table>' +
			'</div>' +
			'<div class="datepicker-months datepicker-tab">' +
			'	<table class="table-condensed">' +
			'		<thead>' +
			'			<tr class="datepicker-nav">' +
			'				<th class="nav prev">' +
			'					<p>‹</p>' +
			'				</th>' +
			'				<th colspan="5" class="switch-datepicker months"></th>' +
			'				<th class="nav next">' +
			'					<p>›</p>' +
			'				</th>' +
			'			</tr>' +
			'		</thead>' +
			'	</table>' +
			'	<table class="table-condensed">' +
			'		<tbody>' +
			'		</tbody>' +
			'	</table>' +
			'</div>' +
			'<div class="datepicker-years datepicker-tab">' +
			'	<table class="table-condensed">' +
			'		<thead>' +
			'			<tr class="datepicker-nav">' +
			'				<th class="nav prev">' +
			'					<p>‹</p>' +
			'				</th>' +
			'				<th colspan="5" class="switch-datepicker years"></th>' +
			'				<th class="nav next">' +
			'					<p>›</p>' +
			'				</th>' +
			'			</tr>' +
			'		</thead>' +
			'	</table>' +
			'	<table class="table-condensed">' +
			'		<tbody>' +
			'		</tbody>' +
			'	</table>' +
			' </div>' +
		'</div> <!-- / .datepicker -->' ;
	}

	this.embedHeaders = function()
	{
		var 	headersFor = [ 'days', 'months', 'years' ],
			html ;
		for( var i = 0 ; i < 3 ; i++ )
		{
			html = '<th class="nav prev">' +
				'<p>‹</p>' +
				'</th>' +
				'<th colspan="5" class="switch-datepicker ' + headersFor[ i ] + '"></th>' +
				'<th class="nav next">' +
				'<p>›</p>' +
				'</th>' ;

			//_arsiDatePicker('.datepicker-' + headersFor[ i ] + ' thead tr.datepicker-nav').first().innerHTML =  html ;
		}
	}

	this.setTogglingListeners = function()
	{
		MonthPickerVar = new this.MonthPicker( datePickerId );
		YearPickerVar = new this.YearPicker( datePickerId, MonthPickerVar ) ;
		_arsiDatePicker('body').on( 'click', '.arsi-datepicker#' + datePickerId + ' .switch-datepicker', function(e)
		{
			var 	parent = _arsiDatePicker(this).closest('.datepicker'),
				allTabs = _arsiDatePicker( 'div.datepicker-tab').all( parent ),
				activeTab;
			if( _arsiDatePicker(this).hasClass( 'day' ) )
			{
				activeTab = _arsiDatePicker( 'div.datepicker-months' ).first( parent ) ;
				MonthPickerVar.init( this.getAttribute('data-year' ), this.getAttribute('data-month' ) ) ;
			}
			else if( _arsiDatePicker(this).hasClass( 'month' ) )
			{
				activeTab = _arsiDatePicker( 'div.datepicker-years' ).first( parent ) ;
				YearPickerVar.init( this.getAttribute('data-year' ) ) ;
			}
			else
			{
				activeTab = _arsiDatePicker( 'div.datepicker-days' ).first( parent ) ;
			}

			_arsiDatePicker( allTabs ).removeClass( 'active' ) ;
			_arsiDatePicker( activeTab ).addClass( 'active' ) ;
			that.setPickingListeners() ;
		}) ;
	}

	this.setPickingListeners = function()
	{
		_arsiDatePicker('body').on( 'click', '.arsi-datepicker#' + datePickerId + ' .datepicker-years table>tbody>tr>td,.datepicker-months table>tbody>tr>td', function(e)
		{
			var 	parent = _arsiDatePicker( this ).closest('.datepicker'),
				span = _arsiDatePicker( 'span' ).first( this ) ,
				spanObj = _arsiDatePicker( span ) ,
				allTabs = _arsiDatePicker( 'div.datepicker-tab').all( parent ),
				activeTab,
				year,
				month,
				day;
			if( spanObj.hasClass( 'year' ) )
			{
				year = this.getAttribute('data-year') ;
				activeTab = _arsiDatePicker( 'div.datepicker-months' ).first( parent ) ;
				MonthPickerVar.init( year ) ;
			}
			else if( spanObj.hasClass( 'month' ) )
			{
				parent = spanObj.closest(".datepicker-months") ;
				year = _arsiDatePicker('.switch-datepicker.months').first( parent ).getAttribute('data-year') ;
				month = span.getAttribute('data-index') ;
				activeTab = _arsiDatePicker( 'div.datepicker-days' ).first( parent.parentNode ) ;
				DayPickerVar.init(query, year, month) ;
			}

			_arsiDatePicker( allTabs ).removeClass( 'active' ) ;

			if( activeTab )
				_arsiDatePicker( activeTab ).addClass( 'active' ) ;
		}) ;
	}

	this.init = function()
	{
		that.embedDatePicker() ;
		that.embedHeaders() ;
		DayPickerVar = new this.DayPicker( datePickerId, options ) ;
		DayPickerVar.setDefaults( defaultYear, defaultMonth, defaultDay ) ;
		DayPickerVar.init( query, defaultYear, defaultMonth ) ;
		this.setTogglingListeners() ;
	}

	this.removeDatePicker = function()
	{
		if( _arsiDatePicker(input).hasClass('datepicker-active') )
		{
			var datepicker = _arsiDatePicker('.arsi-datepicker#' + datePickerId ).first() ;
			if( datepicker )
			{
				document.querySelector('body').removeChild( datepicker ) ;
			}
			_arsiDatePicker(input).removeClass( "datepicker-active" ) ;
		}
	}


	this.setDefaults = function()
	{
		if( datepickerHelper.isUndef( defaultYear ) )
		{
			defaultYear = datePickerLocale.year ;
			defaultMonth = datePickerLocale.month ;
			defaultDay = datePickerLocale.day ;
		} else if( datepickerHelper.isUndef( defaultMonth ) )
		{
			defaultMonth = 0 ;
			defaultDay = 1 ;
		} else if( datepickerHelper.isUndef( defaultDay ) )
		{
			defaultDay = 1 ;
		}
		else
		{
			defaultYear = year;
			defaultMonth = month;
			defaultDay = day;
		}
	}

	this.setDefaults() ;

	_arsiDatePicker( '.datepicker table tr td, .datepicker table tr th' ).ripple() ;

	_arsiDatePicker(body).off('click', '.arsi-datepicker, ' + query, function(e)
	{
		that.removeDatePicker() ;
	}) ;

	_arsiDatePicker(body).on('datepicker:picked', query, function(e)
	{
		that.removeDatePicker() ;
	}) ;

	_arsiDatePicker(body).on('click', query, function()
	{
		if( ! _arsiDatePicker(input).hasClass('datepicker-active') )
		{
			if( input.value != '' )
			{
				var date = ( new that.DatePickerFormat() ).deformat( input.value ) ;

				if( date )
				{
					defaultYear = date.year ;
					defaultMonth = date.month ;
					defaultDay = date.day ;
				}
			}
			that.init() ;
			_arsiDatePicker(input).addClass( "datepicker-active" ) ;
		}
	}) ;

	_arsiDatePicker(body).on('keydown',query, function(e)
	{
		that.removeDatePicker() ;
	}) ;

}



DatePicker.prototype.PickDate = function( input, cell, e )
{
	var that = this ;

	this.getSelectedCellsDateValue = function()
	{
		return cell.getAttribute('data-date') ;
	}

	this.pasteSelectedDate = function( value )
	{
		input.value = value ;
		return input ;
	}

	return {
		pick: function()
		{
			var date = that.getSelectedCellsDateValue() ;
			that.pasteSelectedDate( date ) ;
			_arsiDatePicker( input ).trigger("datepicker:picked") ;
			return date ;
		},
		pickDate: function( date )
		{
			that.pasteSelectedDate( date ) ;
			_arsiDatePicker( input ).trigger("datepicker:picked") ;
			return date ;
		}
	} ;

}



DatePicker.prototype.DatePickerFormat = function( separator )
{
	var that = this ;
	if( ! separator ) separator = "/" ;

	var 	MAXDAY = 31,
		MINDAY = 1,
		MAXMONTH = 12,
		MINMONTH = 1,
		MAXYEAR = 2100,
		MINYEAR = 1900,
		options ;


	this.validateDate = function( date )
	{
		date = date.map( function( item )
		{
			return parseInt( item ) ;
		}) ;

		if( 	typeof( date[0] ) !== 'number' ||
			typeof( date[1] ) !== 'number' ||
			typeof( date[2] ) !== 'number' ||
			date[0] > MAXYEAR || date[0] < MINYEAR ||
			date[1] > MAXMONTH || date[1] < MINMONTH ||
			date[2] > MAXDAY || date[2] < MINDAY )
		{
			return ;
		}
		return date ;
	} ;

	this.prependZero = function( value )
	{
		return that.options && that.options.twoDigitDate ? datepickerHelper.prependZero( value ) : value ;

	} ;

	return {
		format: function( dateObject, options )
		{
			that.options = options ;
			var formattedDate = [ dateObject.year, that.prependZero( dateObject.month + 1 ), that.prependZero( dateObject.day ) ].join( separator ) ;

			return formattedDate ;
		},

		deformat: function( dateString )
		{
			var date = dateString.split( separator ) ;

			date = that.validateDate( date ) ;

			if( ! date ){
				return;
			}

			return {
				year: date[0],
				month: date[1] - 1,
				day: date[2],
			} ;
		},
	} ;
}



/*
 * Generate an array of days, based on the year and the month
 * provided, and prepend and append days from previous/next
 * month if needed for completing the days-tab of the picker.
 *
 * The year provided as argument will be referred to as "this year".
 * The month provided as argument will be referred to as "this month".
 *
 * @param [Number] year.
 * @param [Number] month.
 * @return [Array].
 *
 */
DatePicker.prototype.GenerateDaysOfMonth = function(year, month )
{

	// Initializing variables based on arguments.
	var 	that = this,
		date = datePickerLocale.date( year, month ),
		month = date.month,
		year = date.year,
		day = date.day ;

	// Gathers all the days of this month.
	this.thisMonthDays = function()
	{
		var thisMonthDays = [],
			date = datePickerLocale.date( year, month ),
			currentDay ;

		for (var i = 0; i <= 33; i++)
		{
			currentDay = datePickerLocale.set( date, { day: day + i } ) ;

			if ( currentDay.month != month ) break ;

			thisMonthDays[ i ] = currentDay ;

		}

		thisMonthDays = this.prependPreviousMonthDays( thisMonthDays ) ;
		thisMonthDays = this.appendNextMonthDays( thisMonthDays ) ;

		return thisMonthDays ;
	}


	this.prependPreviousMonthDays = function( days )
	{
		var 	firstDayOfMonthIndex = days[0].dayOfWeek ;

		if ( firstDayOfMonthIndex > 0 )
		{
			for (var i = 0; i < firstDayOfMonthIndex; i++)
			{
				var currentDay = datePickerLocale.date( year, month, 0 - i ) ;
				currentDay.prev = true ;
				days.unshift( currentDay ) ;
			}
		}
		return days ;
	}

	this.appendNextMonthDays = function( days )
	{
		var 	lastDayOfMonthIndex = days[ days.length - 1 ].dayOfWeek,
			lastDayOfMonth = days[ days.length - 1 ].day ;

		if ( lastDayOfMonthIndex < 6 )
		{
			for (var i = 0 ; i < 6 - lastDayOfMonthIndex ; i++)
			{
				var currentDay = datePickerLocale.date( year, month + 1, i + 1 ) ;
				currentDay.next = true ;

				days.push( currentDay ) ;
			}

		}

		return days ;

	}

	return {

		chunked: function()
		{
			var	days = that.thisMonthDays(),
				chunkedArray = [],
				numberOfChunks = Math.ceil( days.length / 7 ) ;

			for (var i = 0; i < numberOfChunks; i++)
			{
				chunkedArray[ i ] = _arsiDatePicker( days ).chunk( 7, i ) ;
			}

			return chunkedArray ;

		}

	} ;

}



DatePicker.prototype.EmbedDaysOfMonth = function( datePickerId, DayPickerObject, daysOfMonthChunkedArrays, input, options, year, month, defaults )
{

	var that = this ;

	this.initDatePickEvents = function()
	{
		_arsiDatePicker('#' + datePickerId).on('click', 'td.datepicker-day', function(e)
		{
			var datePicked = ( new DatePickerObject.PickDate( input, this, e ) ).pick() ;

			_arsiDatePicker( "#" + datePickerId + ' td.datepicker-day').removeClass('active') ;
			_arsiDatePicker(this).addClass('active') ;

			// Convert date from formatted date string to an object.
			var date = ( new DatePickerObject.DatePickerFormat() ).deformat( datePicked ) ;

			if( ! date )
			{
				var date = datePickerLocale.now() ;
			}

			DayPickerObject.setDefaults( date.year, date.month, date.day ) ;
		}) ;
	}

	this.setSwitcherDataAttributes = function()
	{
		var 	randomItem = daysOfMonthChunkedArrays[1][0],
			monthName = datepickerHelper.getMonthAsString( parseInt( randomItem.month ) ) ;
		var switcher = _arsiDatePicker("#" + datePickerId + " .datepicker-nav th.switch-datepicker").first() ;
		switcher.setAttribute("data-month", randomItem.month ) ;
		switcher.setAttribute("data-year", randomItem.year ) ;
		switcher.innerHTML = monthName + "-" + randomItem.year ;
		return switcher ;
	}

	this.findStatus = function( dayArray )
	{
		var status = "" ;
		if ( dayArray.prev )
		{
			status = "previous" ;
		}
		else if ( dayArray.next )
		{
			status = "next" ;
		}
		else if ( dayArray.year == defaults.year && dayArray.month == defaults.month && dayArray.day == defaults.day )
		{
			status = "active" ;
		}

		return status ;
	}

	this.weekDaysToHtml = function()
	{
		var html = '' ;
		for( var i = 0 ; i < 7 ; i++ )
		{
			html += '<th class="week-day">' + datepickerHelper.dayOfWeekAsString( i ).substr(0,3) + '</th>' ;
		}
		return html ;
	}

	this.embedWeekDays = function()
	{
		var html = this.weekDaysToHtml() ;
		return _arsiDatePicker( "#" + datePickerId + " tr.week-days").first().innerHTML = html ;
	}

	this.convertToHtml = function()
	{
		var	html = "",
			DatePickerFormatter = new DatePickerObject.DatePickerFormat() ;

		for (var chunk = 0; chunk < daysOfMonthChunkedArrays.length ; chunk++)
		{
			var currentChunk = daysOfMonthChunkedArrays[ chunk ],
				status, formattedDate ;
			html += '' ;
			html += '<tr>' ;

			for (var i = 0; i <= 6 ; i++)
			{

				status = this.findStatus( currentChunk[ i ] ) ;
				formattedDate = DatePickerFormatter.format( currentChunk[ i ], options ) ;

				html += '<td class="datepicker-day day ' + status + '" data-date="' + formattedDate + '">' +
					'<p>' + currentChunk[ i ].day + '</p>' +
					'</td>' ;
			}

			html += '</tr>' ;
		}
		return html ;
	}

	this.filltable = function( htmlContent )
	{

		var el = document.querySelector( "#" + datePickerId + " .datepicker-days tbody") ;
		el.innerHTML = htmlContent ;

		this.setSwitcherDataAttributes() ;
		this.initDatePickEvents() ;

		return el ;
	}

	return {

		embed: function()
		{
			var html = that.convertToHtml() ;
			that.filltable( html ) ;
			that.embedWeekDays() ;
		}

	} ;

}



DatePicker.prototype.DayPicker = function( datePickerId, options )
{
	var 	that = this,
		defaults = {},
		input, baseYear;

	this.navigateNext = function( month )
	{
		month++ ;
		if( month == 12 )
		{
			baseYear++ ;
			month = 0 ;
		}
		return {
			year: baseYear,
			month: month
		} ;
	}

	this.navigatePrevious = function( month )
	{
		month-- ;
		if( month == -1 )
		{
			baseYear-- ;
			month = 11 ;
		}
		return {
			year: baseYear,
			month: month
		} ;
	}

	this.navigatorsClickHandler = function (element, e )
	{
		var 	month = _arsiDatePicker( "#" + datePickerId + ' .datepicker-nav .switch-datepicker').first().getAttribute("data-month"),
			date ;
		month = parseInt( month ) ;

		if( _arsiDatePicker(element).hasClass('next') )
			date = this.navigateNext( month ) ;
		else
			date = this.navigatePrevious( month ) ;

		this.init( date.year, date.month, date.day ) ;

	};

	this.preparePickNowBtn = function()
	{
		_arsiDatePicker('#' + datePickerId).on('click', '.datepicker-now', function(e)
		{
			var date = datePickerLocale.now() ;

			var dateString = new DatePickerObject.DatePickerFormat().format( date, options ) ;
			( new DatePickerObject.PickDate( input ) ).pickDate( dateString ) ;
		}) ;
	}

	this.prepareNavigators = function()
	{
		_arsiDatePicker('#' + datePickerId).on('click', ".datepicker-days .datepicker-nav .nav", function(e)
		{
			that.navigatorsClickHandler( this, e ) ;
			return false ;
		}) ;
	}

	this.init = function( year, month )
	{
		if( ! year )
		{
			year = defaults.year ;
			month = defaults.month ;
		}

		var daysOfMonth = new DatePickerObject.GenerateDaysOfMonth( year, month ) ;
		var datePickerEmbeder = new DatePickerObject.EmbedDaysOfMonth( datePickerId, this, daysOfMonth.chunked(), input, options, year, month, defaults ) ;
		datePickerEmbeder.embed() ;
		this.preparePickNowBtn() ;
	}

	this.setDefaults = function( year, month, day )
	{
		defaults = {
			year: year,
			month: month,
			day: day
		} ;
	}

	this.prepareNavigators() ;

	return {
		init: function( query, year, month )
		{
			input = _arsiDatePicker( query ).first(),
				baseYear = year ;
			that.init( year, month ) ;
			//that.prepareNavigators( initialDefaultYear, initialDefaultMonth ) ;
		},
		setDefaults: function( year, month, day )
		{
			return that.setDefaults( year, month, day ) ;
		},
	}

}



DatePicker.prototype.MonthPicker = function( datePickerId )
{

	this.monthNamesToHtml = function()
	{
		var html = '',
			counter = 0 ;
		for( var i = 0 ; i < 4 ; i++ )
		{
			html += '<tr>' ;
			for( var j = 0 ; j < 3 ; j++ )
			{
				html += '<td><span class="month" data-index="' + counter + '">' + datepickerHelper.getMonthAsString( counter++ ).substr(0,3) + '</span></td>' ;
			}
			html += '</tr>' ;
		}
		return html ;
	}

	this.embedMonthNames = function()
	{
		return _arsiDatePicker("#" + datePickerId + " .datepicker-months table tbody").first().innerHTML = this.monthNamesToHtml() ;
	}

	this.embedMonthNames() ;

	var 	that = this,
		cells = _arsiDatePicker("#" + datePickerId + ' .datepicker-months span.month').all(),
		yearSwitcher = _arsiDatePicker("#" + datePickerId + ' .datepicker-months .datepicker-nav .switch-datepicker').first(),
		year, defaultYear, defaultMonth ;

	this.navigatorsClickHandler = function (element, e )
	{
		var year = _arsiDatePicker( "#" + datePickerId + ' .datepicker-months .datepicker-nav .switch-datepicker').first().getAttribute("data-year") ;
		year = parseInt( year ) ;

		if( _arsiDatePicker( element ).hasClass('next') )
			year++ ;
		else
			year-- ;

		this.init( year ) ;

	};

	this.prepareNavigators = function()
	{
		_arsiDatePicker('#' + datePickerId).on('click', ".datepicker-months .datepicker-nav .nav", function(e)
		{
			that.navigatorsClickHandler( this, e) ;
			return false ;
		}) ;
	}

	this.init = function( year )
	{
		var date = datePickerLocale.date( year, 0 ) ;

		cells.forEach( function( item ) {
			_arsiDatePicker(item.parentNode).removeClass("active") ;
		}) ;

		if( defaultYear == date.year )
		{
			cells.forEach( function( item ) {
				var index = item.getAttribute('data-index');
				if (index == defaultMonth )
				{
					_arsiDatePicker( item.parentNode ).addClass("active") ;
				}
			}) ;
		}
		yearSwitcher.innerHTML = year ;
		yearSwitcher.setAttribute('data-year', year ) ;
	}

	that.prepareNavigators() ;

	return {
		init: function( initialDefaultYear, initialDefaultMonth )
		{
			if( ! initialDefaultYear )
			{
				var now = datePickerLocale.now() ;
				initialDefaultYear = now.year ;
				initialDefaultMonth = now.month ;
			}
			year = initialDefaultYear ;
			defaultYear = initialDefaultYear ;
			defaultMonth = initialDefaultMonth ;
			that.init( initialDefaultYear ) ;
			//that.prepareNavigators( year ) ;
		}
	}
}



/*
 * Generate an array of days, based on the year and the month
 * provided, and prepend and append days from previous/next
 * month if needed for completing the days-tab of the picker.
 *
 * The year provided as argument will be referred to as "this year".
 * The month provided as argument will be referred to as "this month".
 *
 * @param [Number] year.
 * @param [Number] month.
 * @return [Array].
 *
 */
DatePicker.prototype.GenerateYears = function( start, defaultYear )
{
	var 	that = this ;

	this.generateYearsArray = function()
	{
		var years = [] ;

		for( var i = 0; i < 12 ; i++ )
		{
			years[i] = start + i ;
		}
		return years ;
	}

	return {

		chunked: function()
		{
			var years = that.generateYearsArray(),
				chunk = 3,
				chunkedArray = [],
				numberOfChunks = Math.ceil( years.length / chunk ) ;

			for (var i = 0; i < numberOfChunks; i++)
			{
				chunkedArray[ i ] = _arsiDatePicker( years ).chunk( chunk, i ) ;
			}

			return chunkedArray ;

		}

	} ;

}



DatePicker.prototype.YearPicker = function( datePickerId, MonthPickerInstance )
{
	var 	that = this,
		yearSwitcher = _arsiDatePicker( "#" + datePickerId + ' .datepicker-years .datepicker-nav .switch-datepicker').first(),
		start, defaultYear ;

	this.navigatorsClickHandler = function (element, e )
	{
		var start = _arsiDatePicker( "#" + datePickerId + ' .datepicker-years .datepicker-nav .switch-datepicker').first().getAttribute("data-start") ;
		start = parseInt( start ) ;

		if( _arsiDatePicker( element ).hasClass('next') )
			start += 12 ;
		else
			start -= 12 ;

		this.init( start ) ;

	};

	this.prepareNavigators = function()
	{
		_arsiDatePicker('#' + datePickerId).on('click', ".datepicker-years .datepicker-nav .nav", function(e)
		{
			that.navigatorsClickHandler( this, e ) ;
			return false ;
		}) ;
	}

	this.init = function( start )
	{
		var end = parseInt( start ) + 11 ;

		yearSwitcher.innerHTML = start + "-" + end ;
		yearSwitcher.setAttribute('data-start', start ) ;

		var years = new DatePickerObject.GenerateYears( start, defaultYear ) ;
		var yearsEmbeder = new DatePickerObject.EmbedYears( datePickerId, MonthPickerInstance, years.chunked(), defaultYear ) ;
		yearsEmbeder.embed() ;
	}

	this.prepareNavigators() ;

	return {
		init: function( initialDefaultYear )
		{
			start = initialDefaultYear - 7 ;
			defaultYear = initialDefaultYear ;
			that.init( start ) ;
			//that.prepareNavigators( start ) ;
		}
	}
}



DatePicker.prototype.EmbedYears = function( datePickerId, MonthPickerInstance, yearsChunkedArray, defaultYear )
{

	var that = this ;
	if( ! defaultYear ) defaultYear = datePickerLocale.year ;

	this.initYearPickEvents = function()
	{
		var cells = selectAll( '.arsi-datepicker#' + datePickerId + '>.datepicker-years table>tbody>tr>td>span') ;
		_arsiDatePicker('#' + datePickerId).on( 'click', '.datepicker-years table>tbody>tr>td>span', function(e)
		{
			var 	parent = this.closest('.datepicker'),
				allTabs = selectAll( 'div.datepicker-tab', parent ),
				activeTab = selectFirst( 'div.datepicker-years', parent ),
				year = this.parentNode.getAttribute('data-year') ;
			MonthPickerInstance.init( year ) ;

			allTabs.removeClass( 'active' ) ;

			if( activeTab )
				activeTab.addClass( 'active' ) ;
		}) ;
	}

	this.convertToHtml = function()
	{
		var html = "" ;

		for (var chunk = 0; chunk < yearsChunkedArray.length ; chunk++)
		{
			var currentChunk = yearsChunkedArray[ chunk ] ;
			html += '' ;
			html += '<tr>' ;

			for (var i = 0; i <= 2 ; i++)
			{
				var status = currentChunk[i] == defaultYear ? "active" : "" ;
				html += '<td class="' + status + '" data-year="' + currentChunk[ i ] + '">' +
					'<span class="year">' + currentChunk[ i ] + '</span>' +
					'</td>' ;
			}

			html += '</tr>' ;
		}
		return html ;
	}

	this.filltable = function( htmlContent )
	{
		var el = document.querySelector("#" + datePickerId + " .datepicker-years tbody") ;
		el.innerHTML = htmlContent ;

		return el ;
	}

	return {

		embed: function()
		{
			var html = that.convertToHtml() ;
			that.filltable( html ) ;
			//return that.initYearPickEvents() ;
		}

	} ;

}




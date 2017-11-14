# Datepicker
Simple standalone js datepicker with ripple effect.
Demo is available on demos.arsaland.com/datepicker.

Contributions will be appreciated, even in documentation.

To use datepicker, simply create a script tag and point the source to datepicker.js.
in another script tag, instantiate the datepicker like so :
new Datepicker( query, options ) ;

E.G: 


	<script src="js/datepicker.js"></script>
	<script>
		new DatePicker( 'input#datepicker', { twoDigitDate: true } ) ;
		new DatePicker( 'input#datepicker2' ) ;
	</script>

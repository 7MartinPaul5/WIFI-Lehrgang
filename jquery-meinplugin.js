$.fn.red = function() {
  this.css( {color:'red'} );
}
// this ist das Objekt, beim dem ich die Funktion aufrufe

$.fn.red = function() {
  return this.css( {color:'red'} );
  //return this; transparente Methode
  // return this.parent(); destruktiv, weil jQuery, aber was anderes als this
  // kein return > terminierend
  // return kein jquery > terminierend
}
// this ist das Objekt, beim dem ich die Funktion aufrufe


;(function($) {
$.fn.colorize = function( options ) {

  var settings = $.extend( {
    r:0,
    g:0,
    b:0
  }, options);

  return this.each( function() {
    if ( $(this).hasClass( 'nocolorize') == false) {

    $(this).css( {color:'rgb('+settings.r+', '+settings.g+' , '+settings.b+')' } )
  }

  });

  // return this;
}
}(jQuery));

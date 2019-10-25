jQuery(document).ready(function() {
    initTopNav();
  })

  function initTopNav(){
    jQuery('.action-mobile-nav a').click(function(){
    if (jQuery("aside.book-container").length && jQuery('aside.book-container').css('display') == 'none') {
	  jQuery('aside.book-container').show('slow');
    }else{
	 jQuery('aside.book-container').hide('slow');   
    }
    return false;
  })
}


jQuery.fn.eqHeights = function(options) {

    var defaults = {  
        child: false ,
      parentSelector:null
    };  
    var options = jQuery.extend(defaults, options); 

    var el = jQuery(this);
    if (el.length > 0 && !el.data('eqHeights')) {
        jQuery(window).bind('resize.eqHeights', function() {
            el.eqHeights();
        });
        el.data('eqHeights', true);
    }

    if( options.child && options.child.length > 0 ){
        var elmtns = jQuery(options.child, this);
    } else {
        var elmtns = jQuery(this).children();
    }

    var prevTop = 0;
    var max_height = 0;
    var elements = [];
    var parentEl;
    elmtns.height('auto').each(function() {

      if(options.parentSelector && parentEl !== jQuery(this).parents(options.parentSelector).get(0)){
        jQuery(elements).height(max_height);
        max_height = 0;
        prevTop = 0;
        elements=[];
        parentEl = jQuery(this).parents(options.parentSelector).get(0);
      }

        var thisTop = this.offsetTop;

        if (prevTop > 0 && prevTop != thisTop) {
            jQuery(elements).height(max_height);
            max_height = jQuery(this).height();
            elements = [];
        }
        max_height = Math.max(max_height, jQuery(this).height());

        prevTop = this.offsetTop;
        elements.push(this);
    });

    jQuery(elements).height(max_height);
};
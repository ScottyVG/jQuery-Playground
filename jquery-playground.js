// $ is short hand for jQuery
// $('#id') is exactly the same as jQuery('#id')

//Document Ready Statment
//$(document).ready(function(){});
//Every function inside this statment is going to be
//acted upon after the document itself is ready or loaded.
//Not to be confused with when the page is loaded.
//it just means that the DOM is read by the browser and it
//knows what all of the nodes are
//The document tree has been parsed
//Basically means don't fire off the javascript until the document
//itself or the DOM has been parsed by the browser
//SHORTER DOM READY STATEMENT
//$(function(){
  //code
//});

// Playground 1
$(document).ready(function(){

  // BASIC SELECTORS
  // Paragraph Selector:
  //$('p').css('border', '4px solid red');
  // Paragraph Selector with the class of lead:
  //$('p.lead').css('border', '4px solid red');
  // Parent and Child - Still selects just the lead
  //$('body p.lead').css('border', '4px solid red');
  // Tag and class Selector:
  //$('#playground-1').css('border', '4px solid red');
  // CSS Star - To select EVERYTHING in the entire document!
  //$('*').css('border', '4px solid red');

  // BASIC ANIMATIONS
  // Hide Box Animation:
  //$('.box:first').hide(500);
  // Hide and Show Box Animation:
  //$('.box:first').hide(500).show(800);
  // Hide, Delay, then Show Box Animation:
  //$('.box:first').hide(500).delay(300).show(800);
  // slideUp & slideDown Animation:
  //$('.box:first').slideUp(300).slideDown(800);
  // FadeOut
  //$('.box:first').fadeOut(500).slideDown(800);

  // ANIMATION METHOD
  //$('.box:first').animate({height: '200px'}, 300);
  //$('.box:first').animate({bottom: '200px', left: '200px'}, 300);
  //$('.box:first').animate({bottom: '200px', left: '200px'}, 800);

  // INDEX FILTERS
  // jQuery starts indexing with 0 not 1
  // First
  //$('p:first').css('border', '4px solid red');
  // Last
  //$('p:last').css('border', '4px solid red');
  // Greater than...
  //$('p:gt(1)').css('border', '4px solid red');
  // Less than...
  //$('p:lt(2)').css('border', '4px solid red');
  // Equal to...
  //$('p:eq(0)').css('border', '4px solid red');
  //$('p:eq(2)').css('border', '4px solid red');

  // RELATIONSHIP FILTERS
  // Select only the h2 element that has a span
  //$('h2:has(span)').css('border', '4px solid red');
  // Select only boxes that have children
  //$('.box:parent').css('border', '4px solid red');
  // Select only boxes that are empty
  //$('.box:empty').css('border', '4px solid red');

  // ATTRIBUTE FILTERS
  // Attributes are: Class, image source, or href on an anchor link
  //$('p[class="lead"]').css('border', '4px solid red');
  //$('p[name="shorty"]').css('border', '4px solid red');
  // Say you don't know the full name, just a short string of it...
  //$('p[name^="shorty"]').css('border', '4px solid red');
  // links at bottom and filter for href like maybe ending with...
  // dollar sign means is the string that matches at the end.
  // Great for searching sites for .pdf files
  //$('a[href$=".co.uk"]').css('border', '4px solid red');

});



// Lesson 2
$(function(){

  // ATTR METHOD
  // in jQuery you can set attributes AND retrieve them
  // Alert what the first attribute class
  //alert($('p:first').attr('class'));
  // Change an Attribute
  //$('p:first').attr('class', 'not-lead');

  // IMAGE SWAP
  //$('img').attr('src', 'img2.jpg');
  // (This) whatever the function is called on in jQuery
  // FadeOut, change the source and Fade it in

  //$('img').delay(400).fadeOut(500, function(){
  //  $(this).attr('src', 'img2.jpg').fadeIn(500);
  //});

  // CLASS METHODS
  // If you're good with CSS this can be one of the most powerful
  // things to use jQuery to manipulate how the page is structured
  // jQuery can ask things if it has a class
  //alert($('p:last').hasClass('lead'));
  //alert($('p:first').hasClass('lead'));
  // add Class
  //$('p').addClass('blue').removeClass('lead');
  // toggleClass This is a great way to do drop down menus
  // or tabs or anything that you need to switch the state
  //$('p').toggleClass('blue').removeClass('lead');

  // CONTENT METHODS
  // jQuery uses this to look at the content of the things
  // for example what is in a paragraph tag
  // alert to tell us what the text is
  //alert($('p:first').text());
  // text used to change the content of the p:first
  //$('p:first').text('Hey you guuuuuyyyyyyyssss!');
  // text is the way that you pull text out of an element
  // you can use the method text to insert inside a DOM
  //When adding html tags to a content method change text()
  // to html() so the html is read properly
  //$('p:first').html('heey there <em>buddy</em>');
  // Form element
  //alert($('input').val());
  // can store content or store user input
  // not only can you gather the information, but you can set it
  //$('input').val('yo dude!');


  //$('p:first').html('<a href="google.com">link</a>');
  // $('input').val('yo dude!');

});



// Lesson 3
$(function(){

  // DOM TRAVERSAL
  // $('h2').parents('section').siblings('header').children().css('border', '4px solid red');


  // EVENT BINDING
  // $('html').keypress(function(){
  //   $(this).toggleClass('blue');
  // });


});

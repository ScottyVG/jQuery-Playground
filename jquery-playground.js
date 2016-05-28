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
  //$('p:first').attr('class', 'not-lead');

  // IMAGE SWAP
  //$('img').attr('src', 'img2.jpg');
  // $('img').delay(400).fadeOut(500, function(){
  //   $(this).attr('src', 'img2.jpg').fadeIn(500);
  // });

  // CLASS METHODS
  //$('p').toggleClass('blue').removeClass('lead');

  // CONTENT METHODS
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

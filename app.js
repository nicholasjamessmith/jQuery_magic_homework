$(() => {
  // put jQuery in here

  //if (typeof jQuery == 'undefined') {
  //  console.log('oops! I still have to link my jQuery properly!');
  //} else { console.log('I did it! I linked jQuery and this js file!') };

  //Creates variable named $container and sets it to a queried div with id of 'container'
  const $container = $('#container');
  //console.log($container)

  //creates an h1 element and sets it to a variable called $h1; ads text 'Hogwarts' to h1
  const $h1 = $('<h1>').text('Hogwarts')
  //appends $h1 to the div with id of 'container'
  $($container).append($h1)
  //console.log($h1)

  const $h2 = $('<h2>').text('Nicholas')
  $($container).append($h2)

  const $h3 = $('<h3>').text('Ravenclaw')
  $($container).append($h3)

  const $h4 = $('<h4>').text('Cheeto').addClass('Cheetah')
  $($container).append($h4)

  const $h4wand = $('<h4>').text('Wanderful')
  $($container).append($h4wand)

  const $ul = $('<ul>').attr('storage', 'trunk')
  $($container).append($ul)
  //console.log($ul)

  const $li1 = $('<li>').text('butter beer')
  $($ul).append($li1)

  const $li2 = $('<li>').text('invisibility cloak').addClass('secret')
  $($ul).append($li2)

  const $li3 = $('<li>').text('magic map').addClass('secret')
  $($ul).append($li3)

  const $li4 = $('<li>').text('time turner').addClass('secret')
  $($ul).append($li4)

  const $li5 = $('<li>').text('leash').addClass('Cheetah')
  $($ul).append($li5)

  const $li6 = $('<li>').text('Bertie Botts Every Flavored [Jelly] Beans')
  $($ul).append($li6)

  //removes wand element
  $($h4wand).remove()

  $($li1).remove()

  const $newwand = $('<h4>').text('Even More Wanderful')
  $($container).append($newwand)

  $($newwand).css("color", "indigo")

  //removes pet from DOM
  $($h4).remove()
  //$($h4).append($container)
  //attempt to replace pet element
  $($h4).replaceWith($('<h4>').text('Cheeto').addClass('Cheetah'))

  $('.secret').hide('slow').delay(2000);
  $('.secret').show('slow');

  $($li5).addClass('cabbage')
  $($li5).removeClass('cabbage')

});


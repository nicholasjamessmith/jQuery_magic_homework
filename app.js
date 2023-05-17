$(() => {
  // put jQuery in here

  //if (typeof jQuery == 'undefined') {
  //  console.log('oops! I still have to link my jQuery properly!');
  //} else { console.log('I did it! I linked jQuery and this js file!') };

  //Creates variable named $container and sets it to a queried div with id of 'container'
  const $container = $('#container');
  console.log($container)

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







});
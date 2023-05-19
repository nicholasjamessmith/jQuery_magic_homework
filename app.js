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

  //appends $h2 to the div with id of 'container'
  const $h2 = $('<h2>').text('Nicholas J. Smith')
  $($container).append($h2)

  //appends $h3 to the div with id of 'container'
  const $h3 = $('<h3>').text('Ravenclaw')
  $($container).append($h3)

  //appends $h4 to the div with id of 'container'
  const $h4 = $('<h4>').text('Cheeto').addClass('Cheetah')
  $($container).append($h4)

  //appends $h4wand to the div with id of 'container'
  const $h4wand = $('<h4>').text('Wanderful')
  $($container).append($h4wand)

  //creates new element <ul> and appends it to the div with id 'contianer'
  const $ul = $('<ul>').attr('storage', 'trunk')
  $($container).append($ul)
  //console.log($ul)

  //creates new <li> element and appends it to the <ul>
  const $li1 = $('<li>').text('butter beer')
  $($ul).append($li1)

  //creates new <li> element and appends it to the <ul>, with class of secret
  const $li2 = $('<li>').text('invisibility cloak').addClass('secret')
  $($ul).append($li2)

  //creates new <li> element and appends it to the <ul>, with class of 'secret'
  const $li3 = $('<li>').text('magic map').addClass('secret')
  $($ul).append($li3)

  //creates new <li> element and appends it to the <ul>, with class of 'secret'
  const $li4 = $('<li>').text('time turner').addClass('secret')
  $($ul).append($li4)

  //creates new <li> element and appends it to the <ul>, with class of 'Cheetah'
  const $li5 = $('<li>').text('leash').addClass('Cheetah')
  $($ul).append($li5)

  //creates new <li> element and appends it to the <ul>
  const $li6 = $('<li>').text('Bertie Botts Every Flavored [Jelly] Beans')
  $($ul).append($li6)

  //removes wand element
  $($h4wand).remove()

  //removes butter beer li item
  $($li1).remove()

  //creates new h4 wand element with text of 'Even More Wanderful'
  const $newwand = $('<h4>').text('Even More Wanderful')
  //appends $newwand to the div with id 'container'
  $($container).append($newwand)

  //changes font color of $newwand to indigo
  $($newwand).css("color", "indigo")

  //removes pet from DOM
  $($h4).remove()
  //$($h4).append($container)
  //attempt to replace pet element
  $($h4).replaceWith($('<h4>').text('Cheeto').addClass('Cheetah'))

  //hides elements with class of 'secret'; attempt at delay method
  $('.secret').hide('slow').delay(2000);
  //shows hidden elements with class of 'secret'
  $('.secret').show('slow');

  //adds class of 'cabbage' to $li5 (pet's leash)
  $($li5).addClass('cabbage')
  //removes class of 'cabbage' from $li5
  $($li5).removeClass('cabbage')

  //creates new element $butterbeer, a list item, with text 'Butter beer'
  const $butterbeer = $('<li>').text('Butter beer')
  //Appends 'Butter beer' to the ul
  $($ul).append($butterbeer)

  //removes attribute of 'trunk' from the ul and gives new storage attribute of chest
  $($ul).removeAttr('storage', 'trunk').attr('storage', 'chest')

  //styling for the h1 Hogwarts text
  $h1.css({ "color": "Maroon", "font-family": "cursive" })
  //Styling for the h3 Ravenclaw text
  $h3.css({
    "font-family": "Trattatello, fantasy", "fontSize": "36px", "color": "DarkBlue"
  })
  //Styling for the UL
  $ul.css({
    "font-family": "Optima, sans-serif", "color": "red"
  })

});


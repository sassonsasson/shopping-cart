// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
}


var addItem = function (item) {
  // TODO: finish
}

var clearCart = function () {
  // TODO: finish
  $( ".cart-list" ).empty();
  $('.total').html(0);
  totalCart = 0;
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').slideToggle("fast");
});

var totalCart = Number($('.total').val());

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var cardName = $(this).closest('.card').attr('data-name')
  var cardPrice = $(this).closest('.card').attr('data-price');
  var totals = totalCart += Number(cardPrice);
  $('.total').html(totalCart);

  var source   = $("#cart-template").html();
  var template = Handlebars.compile(source);
  var data = { 
       name: cardName,
       price: cardPrice+'$'
      }
  $(".cart-list").append(template(data));


  // addItem(item);
  // updateCart();
});


$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();


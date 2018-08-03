var searchmakeup = document.querySelector("#SearchMakeup");
var minprice = document.querySelector("#PriceDropdown");
var minimumprice = 0;

searchmakeup.addEventListener("click", e => {
  //var makeupsearch = makeup_input.value
  var minimumprice = Number(minprice.value)
  MakeupRequest(minimumprice);
})

function MakeupRequest(price){
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=" + price)
    .then (function(data){
      return data.json ()
    })
    .then(function(json){
        console.log(json)
    })
}



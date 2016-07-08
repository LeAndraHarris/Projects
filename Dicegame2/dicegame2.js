$('#sub').click(function(){
  var dieNumber = parseInt($('#number').val())
  var dieHtml = ''
  for (var i = 0; i < dieNumber; i++){
    dieHtml += '<img src="' + (Math.floor(Math.random() * 6) + 1) + '.png">'
  }
  console.log(dieHtml);
  $('#dice').html(dieHtml)
 })



/*
document.getElementById("sub").addEventListener("click", function(event) {
  document.getElementById("dice").innerHTML = "";
  var num = document.getElementById("number").value;
  if (num > 200) {
    document.getElementById("chatterBox").innerHTML = "Lets not be ridiculous. Enter a number of dice less that 200"
  } else {
    numberOfDice(num);
  }
});

function sixSidedDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function numberOfDice(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(sixSidedDice())
  }
  renderToHtml(arr);
}

function renderToHtml(arr) {
  var div = document.getElementById('dice')
  arr.forEach(function(x) {
    div.innerHTML += '<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/436722/' + x + '.png">'
  })
}
*/

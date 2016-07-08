/*
1. Focus and Blur used to style input boxes.
2. Any boxes that have no value should turn red and give error and say box
needs to be filled out.

Bonus check to make sure phone number and email are valid.
*/

$("input[type=text]").focus(function(){
  $(this).css("background-color", "yellow");
})

$("input[type=text]").blur(function(){
  $(this).css("background-color", "white");
})

$("#formsubmit").click(function(event){
  event.preventDefault()
var firstName = $('#firstname').val();
var lastName = $('#lastname').val();
var address = $('#address').val();
var city = $('#city').val();
var state = $('#state').val();
var zip = $('#zip').val();
var phone = $('#phone').val();
var email = $('#email').val();
var commentbox = $('#commentbox').val();

if(!firstName){
  $("#firstname").css("background-color", "red");
  $("#firstnameerror").html("Name cannot be left blank");
  }
if(!lastName){
  $("#lastname").css("background-color", "red");
  $("#lastnameerror").html("Name cannot be left blank");
  }
if(!address){
  $("#address").css("background-color", "red");
  $("#addresserror").html("Address cannot be left blank");
  }
if(!city){
  $("#city").css("background-color", "red");
  $("#cityerror").html("City cannot be left blank");
  }
if(!state){
  $("#state").css("background-color", "red");
  $("#stateerror").html("State cannot be left blank");
  }
if(!zip){
  $("#zip").css("background-color", "red");
  $("#ziperror").html("zip cannot be left blank");
}
if(!phone){
  $("#phone").css("background-color", "red");
  $("#phoneerror").html("Phone cannot be left blank");
  }
if(!email){
  $("#email").css("background-color", "red");
  $("#emailerror").html("Email cannot be left blank");
  }
if(!commentbox){
  $("#commentbox").css("background-color", "red");
  $("#commentboxerror").html("Comment box cannot be left blank");
  }
if(firstname && lastname && address && city && state && zip && phone && email && commentbox){
  $("#displayText").html("Thank you!!");
}else {
  $("#displayText").html("");

}
})

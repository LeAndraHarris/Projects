/*
1. Focus and Blur used to style input boxes.
2. Any boxes that have no value should turn red and give error and say box
needs to be filled out.

Bonus check to make sure phone number and email are valid.
*/
document.getElementById("firstname").addEventListener("focus", function(event){
  document.getElementById("firstname").style.backgroundColor="yellow";
})
document.getElementById("firstname").addEventListener("blur", function(event){
  document.getElementById("firstname").style.backgroundColor="white";
})
document.getElementById("lastname").addEventListener("focus", function(event){
  document.getElementById("lastname").style.backgroundColor="yellow";
})
document.getElementById("lastname").addEventListener("blur", function(event){
  document.getElementById("lastname").style.backgroundColor="white";
})
document.getElementById("address").addEventListener("focus", function(event){
  document.getElementById("address").style.backgroundColor="yellow";
})
document.getElementById("address").addEventListener("blur", function(event){
  document.getElementById("address").style.backgroundColor="white";
})
document.getElementById("city").addEventListener("focus", function(event){
  document.getElementById("city").style.backgroundColor="yellow";
})
document.getElementById("city").addEventListener("blur", function(event){
  document.getElementById("city").style.backgroundColor="white";
})
document.getElementById("state").addEventListener("focus", function(event){
  document.getElementById("state").style.backgroundColor="yellow";
})
document.getElementById("state").addEventListener("blur", function(event){
  document.getElementById("state").style.backgroundColor="white";
})
document.getElementById("zip").addEventListener("focus", function(event){
  document.getElementById("zip").style.backgroundColor="yellow";
})
document.getElementById("zip").addEventListener("blur", function(event){
  document.getElementById("zip").style.backgroundColor="white";
})
document.getElementById("phone").addEventListener("focus", function(event){
  document.getElementById("phone").style.backgroundColor="yellow";
})
document.getElementById("phone").addEventListener("blur", function(event){
  document.getElementById("phone").style.backgroundColor="white";
})
document.getElementById("email").addEventListener("focus", function(event){
  document.getElementById("email").style.backgroundColor="yellow";
})
document.getElementById("email").addEventListener("blur", function(event){
  document.getElementById("email").style.backgroundColor="white";
})
document.getElementById("commentbox").addEventListener("focus", function(event){
  document.getElementById("commentbox").style.backgroundColor="yellow";
})
document.getElementById("commentbox").addEventListener("blur", function(event){
  document.getElementById("commentbox").style.backgroundColor="white";
})
document.getElementById("formsubmit").addEventListener("click",function(event){
  event.preventDefault()
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var commentbox = document.getElementById('commentbox').value;

if(!firstName){
  document.getElementById("firstname").style.backgroundColor="red";
  document.getElementById("firstnameerror").textContent="Name cannot be left blank"
}
if(!lastName){
document.getElementById("lastname").style.backgroundColor="red";
document.getElementById("lastnameerror").textContent="Name cannot be left blank"
}
if(!address){
document.getElementById("address").style.backgroundColor="red";
document.getElementById("addresserror").textContent="Address cannot be left blank"
}
if(!city){
document.getElementById("city").style.backgroundColor="red";
document.getElementById("cityerror").textContent="City cannot be left blank"
}
if(!state){
document.getElementById("state").style.backgroundColor="red";
document.getElementById("stateerror").textContent="State cannot be left blank"
}
if(!zip){
document.getElementById("zip").style.backgroundColor="red";
document.getElementById("ziperror").textContent="Zip Code cannot be left blank"
}
if(!phone){
document.getElementById("phone").style.backgroundColor="red";
document.getElementById("phoneerror").textContent="Phone cannot be left blank"
}
if(!email){
document.getElementById("email").style.backgroundColor="red";
document.getElementById("emailerror").textContent="Email cannot be left blank"
}
if(!commentbox){
document.getElementById("commentbox").style.backgroundColor="red";
document.getElementById("commentboxerror").textContent="Comment box cannot be left blank"
}
if(firstName && lastName && address && city && state && zip && phone && email && commentbox)s{
  document.getElementById('displayText').textContent = 'Thank you!!';
}

})

/*needs to be a value in each box, show an error if empty,input box turns red.*/

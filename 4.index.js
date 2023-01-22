// onchange() VS oninput EVENT ------>>>

// onchange() ----->> IT TRIGGERED WHEN WE CLICK OUTSIDE THE INPUT
// oninput() ------->> ALWAYS WILL TRIGGERED ON EVERY CHARACTER PRESS / DELETE

// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


function passChecker(){
   let pass = document.getElementById("pass").value;
   // console.log(pass);
   var regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

if(pass.length < 5)
{
  document.getElementById("pass-strength").innerHTML = "<br><b>Weak Password</b>";
  document.getElementById("indicator").style.backgroundColor = "red";

}else if(regExp.test(pass))
{
  document.getElementById("pass-strength").innerHTML = "<br><b>Strong Password</b>";
  document.getElementById("indicator").style.backgroundColor = "green";

}else{
  document.getElementById("pass-strength").innerHTML = "<br><b>Moderate Password</b>";
  document.getElementById("indicator").style.backgroundColor = "orange";
}

}

let arr1 = [10, 20, 30, 40, 50];
let [a, b, ...rest] = arr1;
console.log(rest);
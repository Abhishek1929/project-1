function myFunction() {
    var x = document.getElementById("signup");
    var y = document.getElementById("signup2");

    var xDisplay = window.getComputedStyle(x, null).getPropertyValue('display') 

    if (xDisplay == "none") {
      x.style.display = "flex";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
    }
    
  }

let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');
 eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png";
    } else{
        password.type = "password";
        eyeicon.src = "eye-close.png.png";
    }
 }

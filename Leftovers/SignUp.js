function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
  var password = document.getElementById("pswd").value;
        var confirmPassword = document.getElementById("ConPswrd").value;
 if(form.ConPswrd pswrd.value == "1234")
  {
    window.open('home.html')/*opens the target page while Id & password matches*/
  } 
  
 else
 {
   alert("Error Password or Username")/*displays error message*/ 
   
  }
}
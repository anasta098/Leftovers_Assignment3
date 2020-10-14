function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.ConPswrd.value == "1234" && form.pswrd.value == "1234")
  {
    window.open('home.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/ 
   
  }
}
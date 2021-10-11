var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});




  function validation()
{
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  var email=document.getElementById("email").value;
  var password=document.getElementById("psw").value;
  const passwordrepait=document.getElementById("psw-repeat").value;

  if(email=="" || password=="" || passwordrepait=="")
  { 
    alert(" form must be filled out")
  }

  else if(! email.match(mailformat))
  {
    alert("eMail invalid");
  }
  
  else if (password !== passwordrepait)
  {
    alert("passwrt not same");
  }

}
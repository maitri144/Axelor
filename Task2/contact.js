function submitClick() {
 
  let fname = document.ContactForm.fname.value;
  let pass = document.ContactForm.pass.value;

  let usererr = document.getElementById("fnameError");
  let passerr = document.getElementById("passError");

  let hasdigit = /\d/.test(pass);

  usererr.textContent = "";
  passerr.textContent = "";

  fname.textContent = "";
  fname.textContent = "";

  if (fname == "") {
    usererr.textContent = "*Please enter your username*";
    usererr.style.display = "block";
  } else if (pass == "") {
    passerr.textContent = "*Please enter your Password*";
    passerr.style.display = "block";
  } else if (pass.length < 6) {
    passerr.textContent = "*Enter atleast 6 characters*";
    passerr.style.display = "block";
  } else if (!hasdigit) {
    passerr.textContent = "*Password should have atleast 1 digit*";
    passerr.style.display = "block";
  }
}

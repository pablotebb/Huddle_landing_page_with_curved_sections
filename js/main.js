// DATA ENTRY, DATA OUTPUT
const button_form = document.getElementById("form_button");
const input_form = document.getElementById("form_input");
const error_form = document.querySelector(".error");

// EVENT BUTTON CLICK
button_form.addEventListener("click", (e) => {
  ExpReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (ExpReg.test(input_form.value) == true) {
    // EMAIL CORRECT
    error_form.innerText = "";
    error_form.style.marginTop = "10px";
    // DELETE VALUE INPUT
    input_form.value = "";
  } else {
    // EMAIL INCORRECT
    error_form.innerText = "Check your email please";
    error_form.style.marginTop = "-10px";
    e.preventDefault();
  }
});

// this code is not working
function form_print() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("number").value;
  let date = document.getElementById("date").value;
  let message = document.getElementById("message").value;

  document.getElementById("place_name").innerHTML +=
    "<p>" + name.toUpperCase() + "</p>";
  document.getElementById("place_email").innerHTML += "<p>" + email + "</p>";
  document.getElementById("place_phone").innerHTML += "<p>" + phone + "</p>";
  document.getElementById("place_date").innerHTML += "<p>" + date + "</p>";
  document.getElementById("place_message").innerHTML +=
    "<p>" + message + "</p>";
}
function validphone() {
  //test : xxxx-xxxxxxx
  let phoneNumber = document.getElementById("number").value;
  let re3 = /^\d{4}-\d{7}$/;
  if (re3.test(phoneNumber)) {
    //if input is  valid
    document.getElementById("phone").style.color = "Green";
    document.getElementById("phone").innerHTML = "<strong>Valid</strong>";
    return true;
  } else {
    //if input is not vaild
    document.getElementById("phone").style.color = "Red";
    document.getElementById("phone").innerHTML =
      "<strong>Use: xxxx-xxxxxxx</strong>";
    return false;
  }
}

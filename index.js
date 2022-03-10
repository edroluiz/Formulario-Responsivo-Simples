function SuccessMessage() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var services = document.getElementById("services");
  var message = document.getElementById("message");

  if (
    username.value != "" &&
    email.value != "" &&
    phone.value != "" &&
    services.value != "" &&
    message.value != ""
  ) {
    alert("Mensagem enviada com sucesso!");
  }
}



function setCookies() {
  const firstName = document.getElementById("firstname").value;
  const eMail = document.getElementById("email").value;
  const date = new Date();
  date.setDate(date.getDate() + 10);
  const expires = "expires=" + date.toDateString();
  if (firstName) {
    document.cookie = `firstname= ${firstName}; ${expires}; path=/`;
  }
  if (eMail) {
    document.cookie = `email= ${eMail}; ${expires}; path=/`;
  }
}

function showCookies() {
  const show_ckies = document.createElement("P");
  show_ckies.innerHTML = `Cookies: ${document.cookie}`;
  const sh_body = document.querySelector("body");
  sh_body.append(show_ckies);
}

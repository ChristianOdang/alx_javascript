function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const eMail = document.getElementById("email").value;
  const date = new Date();
  date.setDate(date.getDate() + 10);
  const expires = "expires=" + date.toDateString();
  if (firstname) {
    document.cookie = `firstname= ${firstname}; ${expires}; path=/`;
  }
  if (eMail) {
    document.cookie = `email= ${eMail}; ${expires}; path=/`;
  }
}

function showCookies() {
  const show_ckies = document.createElement("P");
  show_ckies.innerHTML = `Cookies: ${document.cookie}`;
  const EMAIL = getCookies("email");
  const FirstName = getCookies("firstname");
  show_ckies.innerHTML = `Email: ${EMAIL} - Firstname: ${FirstName}`;
  const sh_body = document.querySelector("body");
  sh_body.append(show_ckies);
}

function getCookies(name) {
  const decodeCookie = decodeURIComponent(document.cookie);
  const list = decodeCookie.split(";");
  for (let i of list) {
    let cookie = i.split("=");
    if (name === cookie[0].trim()) return cookie[1].trim();
  }
  return "";
}

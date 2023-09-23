function setCookiesAndShowWelcomeMessage() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  if (firstname && email) {
    Cookies.set("firstname", firstname, { expires: 10 });
    Cookies.set("email", email, { expires: 10 });
  }
  showWelcomeMessageOrForm();
}

function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  if (firstname && email) {
    const date = new Date();
    date.setDate(date.getDate() + 10);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `firstname= ${firstname}; ${expires}; path=/`;
    document.cookie = `email= ${email}; ${expires}; path=/`;
  }
  showWelcomeMessageOrForm();
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

function showForm() {
  const welcome = document.getElementById("welcome");
  if (welcome) welcome.remove();

  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = "initial";
}

function hideForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = "none";
}

function deleteCookiesAndShowForm() {
  showForm();
  const date = new Date();
  date.setDate(date.getDate() - 10);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `firstname=; ${expires}; path=/`;
  document.cookie = `email=; ${expires}; path=/`;
}

function showWelcomeMessageOrForm() {
  if (getCookies("email") && getCookies("firstname")) {
    hideForm();
J
    const b_body = document.querySelector("body");
    const d_div = document.createElement("div");
    d_div.setAttribute("id", "welcome");

    const h1 = document.createElement("h1");
    const FirstName = getCookies("firstname");
    h1.innerHTML = `Welcome: ${FirstName}`;
    h1.style.display = "inline-block";

    const alpha = document.createElement("a");
    alpha.innerHTML = "(logout)";
    alpha.style.cssText = "font-weight: normal; font-style: italic; margin-left: 10px;";

    alpha.addEventListener("click", deleteCookiesAndShowForm);

    d_div.append(h1);
    h1.append(alpha);
    b_body.append(d_div);
  } else {
    showForm();
  }
}

showWelcomeMessageOrForm();

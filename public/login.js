function login() {
    const nameEl = document.querySelector("#name");
    const passEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passEl.value);
    window.location.href = "home.html";
}
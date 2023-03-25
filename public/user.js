class User {
    name;
    password;
    score;
    constructor() {
        const playerNameEl = document.querySelector('.player');
        playerNameEl.textContent = this.getPlayerName();
        const scoreEl = document.querySelector('.score');
        scoreEl.textContent = '0';
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Unknown';
    }
}

const user = new User();

function changePassword() {
    const newPass = document.querySelector("#password");
    localStorage.setItem("password", newPass.value);
}

function displayQuote(data) {
    const containerEl = document.querySelector("#quote");
  
    const quoteEl = document.createElement("p");
    quoteEl.classList.add("quote");
    const authorEl = document.createElement("p");
    authorEl.classList.add("author");
  
    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;
  
    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
  }
  
  function callService(url, displayCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayCallback(data);
      });
  }
  
  const random = Math.floor(Math.random() * 1000);
  callService("https://api.quotable.io/random", displayQuote);
  
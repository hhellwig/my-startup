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
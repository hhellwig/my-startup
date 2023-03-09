function sendMessage() {
    const sent = document.body.querySelector(".messages");
    const message = document.body.querySelector("#message");
    const m = sent.appendChild(document.createElement("li"));
    m.textContent = message.value;

}

// function loadUsers() {
//     let users = [];
//     const usersText = localStorage.getItem('userName');
//     if (usersText) {
//         users = JSON.parse(usersText);
//     }

//     const selectBodyEl = document.querySelector('#user');

//     if (users.length) {
//         for (const userName of users.entries()) {
//             const nameEl = document.createElement('option');
//             nameEl = userName.value;
//             selectBodyEl.appendChild(nameEl);
//         }
//     } else {
//         selectBodyEl.innerHTML = '<option>Nobody</option>';
//     }
// }

// loadUsers();


function sendMessage() {
    const sent = document.body.querySelector(".messages");
    const message = document.body.querySelector("#message");
    const m = sent.appendChild(document.createElement("li"));
    m.textContent = message.value;

}


const API_URL = "https://your-backend.onrender.com/api/chat";

async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value;
    if (!userMessage) return;

    chatBox.innerHTML += `<div><b>You:</b> ${userMessage}</div>`;
    input.value = "";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();
        chatBox.innerHTML += `<div><b>Halobot:</b> ${data.reply}</div>`;
    } catch (error) {
        chatBox.innerHTML += `<div style="color:red;"><b>Error:</b> Failed to connect.</div>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMsg");

    if (name.length < 2) {
        msg.innerHTML = "Please enter a valid name.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msg.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (message.length < 5) {
        msg.innerHTML = "Message is too short.";
        return false;
    }

    msg.innerHTML = "Form submitted successfully!";
    return false; // prevents real submission (demo only)

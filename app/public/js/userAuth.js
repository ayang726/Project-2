$(document).ready(() => {



    $("#loginForm").on("submit", e => {
        e.preventDefault();
        const displayMessage = $("#loginForm .form-message");
        // send post request to server for login
        const email = $("#loginEmail").val();
        const password = $("#loginPassword").val();
        const body = { email, password };
        $.post("/login", body, response => {
            switch (response.code) {
                case "auth/user-not-found":
                    displayMessage.removeClass("d-none").text("User not found");
                    break;
                default:
                    displayMessage.removeClass("d-none").text("Something is wrong, please try again later.")
                    break;
            }
        });
    });

    $("#signupForm").on("submit", e => {
        e.preventDefault();
        const displayMessage = $("#signupForm .form-message");

        const email = $("#signupEmail").val();
        const password = $("#signupPassword").val();
        const confirmPassword = $("#signupConfirmPassword").val();
        if (password !== confirmPassword) {
            return displayMessage.removeClass("d-none").text("The passwords you have entered do not match.")
        }
        const name = $("#firstName").val();
        const body = { email, password, name };
        $.post("/signup", body, response => {

        });
    });
});
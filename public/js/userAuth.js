let currentUser;
$(document).ready(() => {

    //========================================================//
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBbeo6HDibDSFp3S8s3NFzRiGq63SSJadU",
        authDomain: "harcam-project2.firebaseapp.com",
        databaseURL: "https://harcam-project2.firebaseio.com",
        projectId: "harcam-project2",
        storageBucket: "",
        messagingSenderId: "496002682671",
        appId: "1:496002682671:web:9c2667e92420572a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            location.href === location.origin + "/" ? location.href = "/home" : console.log("On page " + location.href);
            currentUser = user.uid;
        }
        else {
            location.href !== location.origin + "/" ? location.href = "/" : console.log("Welcome");
        };

    });

    $("#loginForm").on("submit", event => {
        event.preventDefault();
        const displayMessage = $("#loginForm .form-message");
        // send post request to server for login
        const email = $("#loginEmail").val();
        const password = $("#loginPassword").val();

        const signInPromise = firebase.auth().signInWithEmailAndPassword(email, password);
        signInPromise.catch(err => {
            displayMessage.removeClass("d-none").text(err.message);
        });

    });

    $("#signupForm").on("submit", event => {
        event.preventDefault();
        const displayMessage = $("#signupForm .form-message");

        const email = $("#signupEmail").val();
        const password = $("#signupPassword").val();
        const confirmPassword = $("#signupConfirmPassword").val();
        if (password !== confirmPassword) {
            return displayMessage.removeClass("d-none").text("The passwords you have entered do not match.")
        }
        const name = $("#firstName").val();

        const signupPromise = firebase.auth().createUserWithEmailAndPassword(email, password);

        signupPromise.catch(err => {
            displayMessage.removeClass("d-none").text(err.message);
        }).then(response => {
            if (response) {
                // console.log(response.user.uid);
                $.post("/api/users/create", { email, password, name, uid: response.user.uid }, db_feedback => {
                    // console.log(db_feedback);
                })
            }
        });

    });
    $("#logout").on("click", () => {
        firebase.auth().signOut();
    });

});


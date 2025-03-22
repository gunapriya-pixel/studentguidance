// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbJqovO8zphSXW8XEXn57JRF1kQwApIlI",
    authDomain: "student-guidance-cc4ba.firebaseapp.com",
    projectId: "student-guidance-cc4ba",
    storageBucket: "student-guidance-cc4ba.appspot.com",
    messagingSenderId: "231754394299",
    appId: "1:231754394299:web:53d5011c757d764633979e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for login
document.getElementById("loginBtn").addEventListener("click", loginUser);

// Event listener for creating a new account
document.getElementById("createAccountBtn").addEventListener("click", createAccount);

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!email || !password) {
        errorMessage.textContent = "Please fill in all fields!";
        return;
    }

    // Firebase authentication for login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem("email", email);
            window.location.replace("dashboard.html"); // Redirect to dashboard
        })
        .catch((error) => {
            errorMessage.textContent = "Login failed: " + error.message;
        });
}

function createAccount(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!email || !password) {
        errorMessage.textContent = "Please fill in all fields!";
        return;
    }

    // Firebase authentication for new user sign-up
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            errorMessage.textContent = "Account created successfully! Please log in.";
        })
        .catch((error) => {
            errorMessage.textContent = "Sign-up failed: " + error.message;
        });
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl3v0iLZF-oEyqjEX0f3YE01vtLNJyqhI",
    authDomain: "login-project-6bb91.firebaseapp.com",
    projectId: "login-project-6bb91",
    storageBucket: "login-project-6bb91.appspot.com",
    messagingSenderId: "969258026093",
    appId: "1:969258026093:web:ebda5f519fbaa7b5842b64"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
let signUp = document.getElementById("signUp")
let email = document.getElementById("email")
let password = document.getElementById("password")

signUp.addEventListener("click", function(){
   // const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Sign Up Successfull")
    console.log("user created" , user)
    // ...
    location.href = `./poll.html`
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
    console.log(errorMessage)
  }); 
})
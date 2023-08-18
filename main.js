import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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

  let login = document.getElementById("login")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")




login.addEventListener("click", function() {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
  
      // ...
      alert("Log In Successfull")
     
location.href = `./home.html`
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);

      console.log(errorMessage);
    });
});
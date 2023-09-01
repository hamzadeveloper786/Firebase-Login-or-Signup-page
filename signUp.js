const firebaseConfig = {
apiKey: "AIzaSyBjBt6SkIg06RLBpVfZA5BIesBkQRgCFuY",
authDomain: "fir-login-d93fc.firebaseapp.com",
databaseURL: "https://fir-login-d93fc-default-rtdb.firebaseio.com",
projectId: "fir-login-d93fc",
storageBucket: "fir-login-d93fc.appspot.com",
messagingSenderId: "1028211588618",
appId: "1:1028211588618:web:403dbb6cc81a239a3ce9f3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

let signup = document.getElementById('signup')

signup.addEventListener('click', function (event) {

event.preventDefault()

let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
window.location.href = "./home.html"; 
console.log("signup")
})
.catch((error) => {
console.log(error);
});


})

<!-- firebase.Auth()onAuthStateChanged(auth, handleAuthStateChange); -->
console.log(email.value, password.value);
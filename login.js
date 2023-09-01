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

let login = document.getElementById('login')

login.addEventListener('click', function(event){
event.preventDefault()
let email = document.getElementById('email').value
let password = document.getElementById('password').value
console.log("run")

firebase
.auth()
.signInWithEmailAndPassword(email, password)
.then((userCredential) => {
console.log("Login successful");
window.location.href = "./home.html"; 
console.log(
firebase.auth().currentUser.email)
localStorage.setItem("mail", (
firebase.auth().currentUser.email))
})
.catch((error) => {
console.log("Login error:", error);
alert("Invalid email or password. Please enter correct credentials.");
});


})
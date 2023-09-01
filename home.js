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
    


    document.querySelector("h1").innerText = `Welcome Mr ${localStorage.getItem("mail")}`
    
    <!-- document.querySelector("h1").innerHTML = `HEllo Ahad` -->
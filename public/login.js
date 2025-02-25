function login(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username ==  "your_username"  && password == "your_password"){
        window.location.href = "index.html";
    }

    else{
        alert("Invalid username or password. Please try again.");
    }
}


function redirectToHomePage() {
    // Redirect to the main home page
    window.location.href = "index.html";
}
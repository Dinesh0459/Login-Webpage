function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Dinesh32" && password == "Srm3000") {
         alert("LOGGED IN SUCCESFULLY");
         window.location.href="http://localhost:8501";
        try {
            // window.location.href = "./login.html";
            setTimeout(function(){document.location.href = "http://localhost:8501"},500);

        } catch(err) {
            console.log(err);
        }
        // location.
    }
    else {
        alert("FAILED TO LOG IN. PLEASE CHECK YOUR CREDENTIALS");
    }
}

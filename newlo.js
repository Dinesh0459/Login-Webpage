function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Team15" && password == "Srm3000") {
         alert("LOGGED IN SUCCESFULLY");
         window.location.href="https://share.streamlit.io/dinesh0459/face-mask/main";
        try {
            // window.location.href = "./login.html";
            setTimeout(function(){document.location.href = "https://share.streamlit.io/dinesh0459/face-mask/main"},500);

        } catch(err) {
            console.log(err);
        }
        // location.
    }
    else {
        alert("FAILED TO LOG IN. PLEASE CHECK YOUR CREDENTIALS");
    }
}

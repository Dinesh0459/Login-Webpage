function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Dinesh32" && password == "Srm3000") {
         alert("LOGGED IN SUCCESFULLY");
         window.location.href="https://colab.research.google.com/drive/13Ktsrx164eQHfDmYLyMCoI-Kq0gC5Kg1";
        try {
            // window.location.href = "./login.html";
            setTimeout(function(){document.location.href = "https://colab.research.google.com/drive/13Ktsrx164eQHfDmYLyMCoI-Kq0gC5Kg1"},500);

        } catch(err) {
            console.log(err);
        }
        // location.
    }
    else {
        alert("FAILED TO LOG IN. PLEASE CHECK YOUR CREDENTIALS");
    }
}

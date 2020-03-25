function validateForm() {
    var username = document.getElementById("em").value;
    var password = document.getElementById("pswd").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    

    var admin_email = "root@atypical.com";
    var pass = "root123";
    if(username==admin_email && password==pass){
        alert('Welcome Administrator!');
        window.location.href = "admin.html";
        return false;
    }
    
}
function validateform() {
    var name = document.forms["RegForm"]["firstname"];
    var email = document.forms["RegForm"]["email"];
    var address = document.forms["RegForm"]["address"];
    var mobileNumber = document.forms["RegForm"]["mobilenumber"];
    var alternativeNumber = document.forms["RegForm"]["alternativenumber"];
    var password = document.forms["RegForm"]["password"];
    var what = document.forms["RegForm"]["subject"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (mobileNumber.value == "") {
        window.alert("Please enter your mobile number.");
        mobileNumber.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    if (alternativeNumber.value == "") {
        window.alert("Please enter your alternative number.");
        alternativeNumber.focus();
        return false;
    }

    return true;
}

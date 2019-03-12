function post() {
    var success_log = [];
    var error_log = [];
    var fName = document.getElementById('fName').value;
    var eMail = document.getElementById('eMail').value;
    var message = document.getElementById('message').value;
    if (fName == "") {
        fName = "Full name missing";
        error_log.push({
            "fullname": fName
        });
    }
    if (eMail == "") {
        eMail = "Email missing";
        error_log.push({
            "email_addr": eMail
        });
    }
    if (message == "") {
        message = "Message missing";
        error_log.push({
            "message": message
        });
    }
    if (error_log == "") {
        success_log = {
            fName,
            eMail,
            message
        };
        console.log("Collected Data:\n", success_log);
    } else {
        console.log("Errors:\n", error_log);
    }
}
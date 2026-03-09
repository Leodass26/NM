var regForm = document.getElementById("regForm");
var pTable = document.getElementById("pTable");
var statusMsg = document.getElementById("statusMsg");

regForm.onsubmit = function(e) {
    e.preventDefault();

    var uName = document.getElementById("uName");
    var uEmail = document.getElementById("uEmail");
    var uPhone = document.getElementById("uPhone");
    var uDob = document.getElementById("uDob");
    var uEvent = document.getElementById("uEvent");
    var clgStud = document.getElementById("clgStud");
    var uConfirm = document.getElementById("uConfirm");

    var gender = document.querySelector('input[name="g"]:checked');
    var mode = document.querySelector('input[name="m"]:checked');

    var ok = true;

    // Simple validation checks
    if (uName.value == "") { 
        uName.className = "redBorder"; ok = false; 
    } else { 
        uName.className = "greenBorder"; 
    }

    if (uEmail.value == "" || uEmail.value.indexOf("@") == -1) {
        uEmail.className = "redBorder"; ok = false;
    } else {
        uEmail.className = "greenBorder";
    }

    if (uPhone.value.length != 10) {
        uPhone.className = "redBorder"; ok = false;
    } else {
        uPhone.className = "greenBorder";
    }

    if (uDob.value == "") {
        uDob.className = "redBorder"; ok = false;
    } else {
        uDob.className = "greenBorder";
    }

    if (uEvent.value == "") {
        uEvent.className = "redBorder"; ok = false;
    } else {
        uEvent.className = "greenBorder";
    }

    if (clgStud.value == "") {
        clgStud.className = "redBorder"; ok = false;
    } else {
        clgStud.className = "greenBorder";
    }

    if (!gender || !mode || !uConfirm.checked) {
        alert("Check all fields and the checkbox!");
        ok = false;
    }

    // If everything is correct, add to table
    if (ok == true) {
        var row = pTable.insertRow(-1);
        row.insertCell(0).innerHTML = uName.value;
        row.insertCell(1).innerHTML = uEmail.value;
        row.insertCell(2).innerHTML = uPhone.value;
        row.insertCell(3).innerHTML = uEvent.value;
        row.insertCell(4).innerHTML = mode.value;

        statusMsg.innerHTML = "Registration Successful!";
        statusMsg.style.color = "green";

        // Reset form
        regForm.reset();
        
        // Remove colors after 3 seconds
        setTimeout(function() {
            statusMsg.innerHTML = "";
            uName.className = "";
            uEmail.className = "";
            uPhone.className = "";
            uDob.className = "";
            uEvent.className = "";
            clgStud.className = "";
        }, 3000);
    }
}

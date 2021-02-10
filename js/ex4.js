var Pass = prompt("Please enter password: ");
var trys = 0

while (trys < 3)
    if (Pass != "secret");{
    console.log("You entered the correct password after ${trys} attempt(s)")
    }
    else{
        console.log("Please try again: ");
        var Pass = prompt("Please enter password: ")
        break;
}
    if (trys >= 3);{
        console.log("Your account is locked! You failed to enter the correct password ${trys} times.")
    }
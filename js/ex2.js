const DayEntered = prompt("Please enter a day of the week using 3 letter abbreviation: ");
switch (DayEntered){
    case "sun":
        console.log("You entered: ${DayEntered}. The following day is Monday.");
        break;
    case "mon":
        console.log("You entered: ${DayEntered}. The following day is Tuesday.");
        break;
    case "tue":
        console.log("You entered: ${DayEntered}. The following day is Wednesday.");
        break;    
    case "wed":
        console.log("You entered: ${DayEntered}. The following day is Thursday.");
        break;     
    case "thu":
        console.log("You entered: ${DayEntered}. The following day is Friday.");
        break;   
    case "fri":
    console.log("You entered: ${DayEntered}. The following day is Saturday.");
        break;
    case "sat":
    console.log("You entered: ${DayEntered}. The following day is Sunday.");
        break;
    default:
        console.log("Invalid day. Please try again: ");
}
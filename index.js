// While
var a=20;


var a=3;
while(a>=1){
    console.log(a);
    a--;
}
console.log("Timer Stopped Start");

// Odd and Even Numbers Up to 10

var c=1;
    while(c<=10){
        if(c%2==0){
            console.log(c," is Even Number");
        }
        else{
            console.log(c," is Odd Number");
        }
        c++;
    }
    console.log("Odd and Even Numbers Up to 10");

// do while

var b=3;
do{
    console.log(b);
    b--;
}while(b>=1)
console.log("Timer Stopped Start");

// finding day in a week using switch

var day=7;

switch(day){
    case 1:
        {
            console.log("Sunday");
            break;
        }
        case 2:
            {
                console.log("Monday");
                break;
            }
            case 3:
                {
                    console.log("Tuesday");
                    break;
                }
                case 4:
                    {
                        console.log("Wednesday");
                         break;
                    }
                    case 5:
                        {
                            console.log("Thursday");
                            break;
                        }
                        case 6:
                            {
                                console.log("Friday");
                                break;
                            }
                            case 7:
                                {
                                    console.log("Saturday");
                                    break;
                                }
                                default:
                                    {
                                        console.log("You Have Entered Inavalid Day")
                                    }
}

// finding month in a year using switch

var a1=8;

switch(a1){
    case 1:
        {
            console.log("January");
            break;
        }
        case 2:
            {
                console.log("February");
                break;
            }
            case 3:
                {
                    console.log("March");
                    break;
                }
                case 4:
                    {
                        console.log("April");
                        break;
                    }
                    case 5:
                        {
                            comsole.log("May");
                            break;
                        }
                        case 6:
                            {
                                console.log("June");
                                break;
                            }
                            case 7:
                                {
                                    console.log("July");
                                    break;
                                }
                                case 8:
                                    {
                                        console.log("August");
                                        break;
                                    }
                                    case 9:
                                        {
                                            console.log("September");
                                            break;
                                        }
                                        case 10:
                                            {
                                                console.log("October");
                                                break;
                                            }
                                            case 11:
                                                {
                                                    console.log("November");
                                                    break;
                                                }
                                                case 12:
                                                    {
                                                        console.log("December");
                                                        break;
                                                    } 
                                                    default:
                                                        {
                                                            console.log("This Month Number Is Invalid");
                                                        }
}

//  Finding Even Numbers in First 10 Numbers

var numbers=1;

while(numbers<=10){
    if(numbers%2==0){
        console.log(numbers," is Even Number");
    }
    numbers++;
}
console.log("These are the Even Numbers In First 10 Numbers");

//  Countdown From 10 Using while

var count=10;

while(count>=1){
    console.log(count);
    count--;
}
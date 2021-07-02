// Reference of quotes.js file
document.write('<script type="text/javascript" language="javascript" src="quotes.js"></script>')

// Main JavaScript 
// Get quoteDisplay for rendering quotes
let quoteDisplayEl = document.getElementById("quoteDisplay-el")

// Main function to generate quotes
function quoteGenerator() {
    let num = Math.floor(Math.random()*quotes.length)

    for (let i = 0; i < quotes.length; i++)
    {
        quoteDisplayEl.textContent = quotes[num]
        console.log("Success") // For debug purposes only
    }
}

// Function to be called when 'New Quote' button is clicked
function newQuote() {
    quoteGenerator()
}
 
// Time and Date display section
function fetchTime() {
    let today=new Date(); // Use inbuilt
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let ampm = "";

    // Meridian i.e. AM or PM display
    if (h > 12) {
      h = h - 12;
      ampm = " PM";
    } else if (h === 12){
      h = 12;
      ampm = " PM";
    } else if (h < 12){
      ampm = " AM";
    } else {
      ampm = "PM";
    };
  
   if(h === 0) {
     h=12;
    }
    
    h = padZero(h);
    m = padZero(m);
    s = padZero(s);
    
    document.getElementById('display').innerHTML = h+":"+m+":"+s+ampm;
    // Added following time for setTimeout / refresh
    let t = setTimeout(function(){fetchTime()},500);
}

function padZero(i) {
    if (i<10) {i = "0" + i};  // padding zeros for minutes, seconds less than 10
    return i;
}

function fetchDate() {
    // Days array - zero indexed - runs from 0 - 6
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
    // Months array - zero indexed - runs from 0 - 11
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

    // Dates need to be displayed as ..th, rd, nd e.g. 1st, 2nd, 3rd
    nth = ""
    let d = new Date();
    n = d.getDate() 
    if (n === 1 || n === 21 || n === 31) {
        nth = "st of "
    } else if (n === 2 || n === 22) {
        nth = "nd of "
    } else if (n === 3 || n === 23) {
        nth = "rd of "
    } else {
        nth = "th of "
    }

    document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+nth+month[d.getMonth()]+" "+d.getFullYear();
  }
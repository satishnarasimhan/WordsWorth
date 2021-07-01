let quotes = [
    "Arise awake, stop not until the goal is reached",
    "Every successful journey starts with a single step",
    "Try, try till you succeed",
    "Attitude when it adds up makes 100 !!!",
    "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them",
    "There is no greater power in heaven or on earth than the commitment to a dream",
    "We don't just build on successes, we also build on failures",
    "Adversity always presents opportunities for introspection", 
    "Once your mind stretches to a new level, it never goes back to its original dimension",
    "Learning gives creativity, Creativity leads to thinking, Thinking leads to knowledge, Knowledge makes you great"        
]

let quoteDisplayEl = document.getElementById("quoteDisplay-el")

function quoteGenerator() {
    let num = Math.floor(Math.random()*quotes.length)

    for (let i = 0; i < quotes.length; i++)
    {
        quoteDisplayEl.textContent = quotes[num]
        console.log("Success")
    }
}

function newQuote() {
    quoteGenerator()
}

function startTime() {
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let ampm = "";
    m = checkTime(m);

    if (h > 12) {
      h = h - 12;
      ampm = " PM";
    } else if (h == 12){
        h = 12;
      ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    let t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startDate() {
    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"]
    nth = ""
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


function countdown ()
{
    setInterval(()=>{
    let destination = new Date('april,9,2024,12:00:00').getTime();
    let current = new Date().getTime();
    let difference = destination-current;
    let day = Math.floor(difference/(1000*60*60*24));
    console.log(day);
    let hrs = Math.floor(difference%(1000*60*60*24)/(1000*60*60))
    console.log(hrs);
    let min = Math.floor(difference%(1000*60*60*24)/(1000*60))
    console.log(min);
    let sec = Math.floor(difference%(1000*60*60*24)/(1000))
    console.log(sec);
    document.getElementById('day').innerHTML=day+"<br>"+"days"
    document.getElementById('hr').innerHTML=hrs+"<br>"+"hr"
    document.getElementById('min').innerHTML=min+"<br>"+"mins"
    document.getElementById('sec').innerHTML=sec+"<br>"+"secs"


    },1000)
}
countdown()
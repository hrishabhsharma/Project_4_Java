// FOR DYNAMIC CLOCK TIMING AND DISPLAY MESSAGE ACCORDING TO THE TIME

var hrs  = document.getElementById("hours")
var mins = document.getElementById("minutes")
var secs = document.getElementById("seconds")
var mern = document.getElementById("meridian")
var msg  = document.getElementById("title")


function zero(t) {
    return t < 10 ? '0'.concat(t) : t
}

function clockstart(){
    let time = new Date();
    let hours   = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    let AMPM = "AM"
    if(hours>12){
        AMPM = "PM"
        hours -= 12
    }
    hrs.innerHTML  = `${zero(hours)} <span>hours</span>`
    mins.innerHTML = `${zero(minutes)} <span>mins</span>`
    secs.innerHTML = `${zero(seconds)} <span>secs</span>`
    mern.innerHTML = `${AMPM}`
}

function display_message(){
    let time = new Date()
    let hrs = time.getHours()
    
    if(hrs>=0 && hrs<10){
        msg.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
    }
    else if(hrs>=10 && hrs<14){
        msg.innerText = "LET'S HAVE SOME LUNCH !!!"
    }
    else if(hrs>=14 && hrs<20){
        msg.innerText = "STOP YAWNING , GET SOME TEA.. \n   ITS JUST EVENING!!!"
        msg.style.padding = "30px 22px"
    }
    else{
        msg.innerText = "CLOSE YOUR EYES AND GO TO SLEEP!!"
    }
}

setInterval(()=>{
    clockstart();
    display_message();
}, 1000);

// FOR SETTING UP THE ALARM AND DISPLAY THE MESSAGE AND IMAGE ACCORDING TO ALARM SETUP

const slot_1 = document.getElementById("wakeup")
const slot_2 = document.getElementById("lunch")
const slot_3 = document.getElementById("nap")
const slot_4 = document.getElementById("night")

var update = document.getElementsByClassName("update")

var remainder = document.querySelector(".greetings")

var display_image = document.querySelector(".activity")

function setupalarm(){
    let time = new Date()
    let hrs = time.getHours()
    
    let wakeup = slot_1.selectedIndex
    let wakeup_text = slot_1.options[wakeup].innerText

    let lunch = slot_2.selectedIndex
    let lunch_text = slot_2.options[lunch].innerText

    let nap = slot_3.selectedIndex
    let nap_text = slot_3.options[nap].innerText

    let night = slot_4.selectedIndex
    let night_text = slot_4.options[night].innerText

    update[0].innerText = wakeup_text
    update[2].innerText = nap_text
    update[1].innerText = lunch_text
    update[3].innerText = night_text


    if(wakeup === hrs ){
        remainder.innerText      = "GOOD MORNING!! WAKE UP!!"
        display_image.innerHTML  = `<img src="./Component.svg" alt="activity"></img>`
    }
    else if(lunch === hrs ){
        remainder.innerText      = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        remainder.style.padding  = "5px 25px"
        display_image.innerHTML  = `<img src="./Component31 _1.svg" alt="activity"></img>`
    }
    else if(nap === hrs ){
        remainder.innerText      = "GOOD EVENING !!"
        display_image.innerHTML  = `<img src="./lunch_image.png" alt="activity"></img>`
    }
    else if(night === hrs ){
        remainder.innerText      = "CLOSE YOUR EYES AND GO TO SLEEP"
        display_image.innerHTML  = `<img src="./Component32 _1.svg" alt="activity"></img>`
    }

}

// For Button Text Change

var alarm_button = document.querySelector(".set_alarm")

alarm_button.addEventListener("mouseover", function() {
  this.textContent = "Party Time!";
})
alarm_button.addEventListener("mouseout", function() {
    this.textContent = "Set Alarm";
  })
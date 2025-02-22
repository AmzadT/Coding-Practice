// var time = new Date()
var date = new Date(100)
console.log(date);


var netDate = new Date('2030-8-16')
console.log(netDate);


// current time
setInterval(updateTime, 1000)
// <span id="time"></span>
function updateTime() {
    time.innerHTML  = new Date()
    // var now = new Date()
    // document.getElementById('clock').innerHTML = now.toLocaleTimeString()
}
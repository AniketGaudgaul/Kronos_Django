var display:HTMLInputElement = <HTMLInputElement>document.getElementById('display')
var ft:HTMLButtonElement = <HTMLButtonElement>document.getElementById('ft')
var hc:HTMLButtonElement = <HTMLButtonElement>document.getElementById('hc')
var sm:HTMLButtonElement = <HTMLButtonElement>document.getElementById('sm')
var ba:HTMLButtonElement = <HTMLButtonElement>document.getElementById('ba')
var va:HTMLButtonElement = <HTMLButtonElement>document.getElementById('va')

function add1(){
    display.innerHTML += `<br>Fitness Tracker added`
    ft.disabled = true;
    alert('Fitness Tracker package added')
}
function add2(){
    display.innerHTML += `<br>Health Care added`
    hc.disabled = true;
    alert('Health Care package added')
}
function add3(){
    display.innerHTML += `<br>Schedule Module added`
    sm.disabled = true;
    alert('Schedule Module added')
}
function add4(){
    display.innerHTML += `<br>Biometric Authentication added`
    ba.disabled = true;
    alert('Biometric Authentication package added')
}
function add5(){
    display.innerHTML += `<br>Voice Assistant added`
    va.disabled = true;
    alert('Voice Assistant package added')
}

function reset(){
    display.innerHTML=""
    ft.disabled = false;
    hc.disabled = false;
    sm.disabled = false;
    ba.disabled = false;
    va.disabled = false;
}
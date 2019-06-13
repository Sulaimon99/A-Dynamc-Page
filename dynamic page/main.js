//DOM elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//options

const showAmPm = true;

//ShowTime

function showTime(){
    // let today = new Date(2019, 06, 10, 20, 45, 59),
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


    //set AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format

    hour = hour % 12 || 12;

    //output time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

//Add Zeros

function addZero(n){

    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}

// Set background and greeting

function setBgGreet(){
    //let today = new Date(2019, 06, 10, 20, 45, 59),
    let today = new Date(),
    hour = today.getHours();

    if( hour < 12 ){
        //morning
            document.body.style.backgroundImage = "url('morning.jpg')";
            greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        //evening
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';

    }else{
        //evening
        document.body.style.backgroundImage = "url('evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';

    }

}

//getName

function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

//set Name
function setName(e){
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}


//getFocus
function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = '[Enter focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

//set Focus
function setFocus(e){
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}




name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//Run
showTime();
setBgGreet();
getName();
getFocus();
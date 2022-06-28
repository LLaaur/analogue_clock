const secondsNeedle = document.querySelector('.second');
const minutesNeedle = document.querySelector('.minute');
const hoursNeedle = document.querySelector('.hour');

const dateAndTime = function(){

    const presentTime = new Date();


    const seconds = presentTime.getSeconds(); 
    const secondsRotation = ( ((seconds/60) * 360) + 90 );
    secondsNeedle.style.transform = `rotate(${secondsRotation}deg)`;

    const minutes = presentTime.getMinutes();
    const minutesRotation = ( ((minutes/60) * 360) + ((seconds/60)*6) + 90 );
    minutesNeedle.style.transform = `rotate(${minutesRotation}deg)`;

    const hours = presentTime.getHours();
    const hoursRotation = ( ((hours/12)* 360) + ((minutes/60)*30) + 90 );
    hoursNeedle.style.transform = `rotate(${hoursRotation}deg)`;

}

const tick = new Audio('assets\\ticTac.mp3');

const play = function(){
    tick.play();
};

const clrPicker = document.getElementById('colorpicker');
const bgClrPicker = document.getElementById('bgpicker');
const frameClr = document.getElementById('framepicker');

if (clrPicker){
    clrPicker.addEventListener('input', () => {
        $('.lines').css('background', clrPicker.value);
    });
};

if(bgClrPicker){
    bgClrPicker.addEventListener('input', () => {
        $('.clockBack, .clockFront').css('background', bgClrPicker.value)
    });
};

if (frameClr){
    frameClr.addEventListener('input', () => {
        $('.analogueClock').css('border-color', frameClr.value);
    });
};


setInterval(play, 1000);
setInterval(dateAndTime, 1000);

dateAndTime();
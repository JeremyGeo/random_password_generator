// slider

var slider = document.getElementById('input');
var slideValue = document.getElementById('slide-value');

// slider.oninput = function() {
//     var currentVal = slider.value
    
// }

slider.addEventListener("input", event => {
    slideValue.setAttribute("value", event.target.value);
});


// let update = () => slideValue.innerHTML = slider.value;

//     slider.addEventListener('input', update);
    

var finalSlider = +slider.value;








let password = document.getElementById('password');

// toggle

const switch1 = document.getElementById('switch1');
const button = document.getElementById('button');
const switch2 = document.getElementById('switch2')


document.querySelector('#check1').onclick = () => {
    switch1.classList.toggle('active');
    console.log(switch1.classList);
}

document.querySelector('#check2').onclick = () => {
    switch2.classList.toggle('active');
    console.log(switch2.classList);
}


button.addEventListener("click", function () {
    cekAktif();
    randomGenerator();
    password.innerHTML = `${result}`;
    result = '';
    console.log(Number(finalSlider));
});

function cekAktif() {
    if (switch1.classList.value == 'switch active' && (switch2.classList.value == 'switch')) {
        chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    else if (switch2.classList.value == 'switch active' && (switch1.classList.value == 'switch')) {
        chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    }

    else if ((switch1.classList.value == 'switch active') && (switch2.classList.value == 'switch active')) {
        chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    else {
        chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    }
}







// password
let chars = '';
let result = "";
let pwordLength = 5;
function randomGenerator () {
    const array = new Uint32Array(chars.length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < pwordLength; i++) {
        result += chars[array[i] % chars.length];
    
}
}













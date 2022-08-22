const input = document.querySelector('#converter');
const result = document.querySelector('.result');
const con = document.querySelector('.conv');
const reset = document.querySelector('.reset');
const change = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let toChange = 0;

function replace() {
    if (one.textContent === '°C') {
        one.textContent = "°F";
        two.textContent = "°C";
        toChange = 1;
        convert()
    } else {
        one.textContent = "°C";
        two.textContent = "°F";
        toChange = 0;
        convert()
    }
}

const convert = () => {
    if (input.value != '') {
        if (toChange === 0) {
            msg = ((input.value *9)/5) + 32;
            result.textContent = `${input.value} stopni to ${msg.toFixed(1)} fahrenhait`
        } else {
            msg = ((input.value - 32) * 5) / 9;
            result.textContent = `${input.value} fahrenhait to ${msg.toFixed(1)} stopni`       
        }
    } else {
        input.value = '';
        result.textContent = 'Musisz podać jakąś wartość!';
    }
}

const res = () => {
    result.textContent = '';
}

change.addEventListener('click', replace);
con.addEventListener('click', convert);
reset.addEventListener('click', res)






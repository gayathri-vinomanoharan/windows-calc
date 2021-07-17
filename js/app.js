let output = ''

const EQUAL = '=';
const CLEAR = 'C';
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const OPERATORS = ['+', '-', '*', '/','=','C'];

function renderButtons() {

    let panel = document.getElementById('panel');

    for (let index = 0; index < NUMBERS.length; index++) {
        panel.appendChild(createElement(NUMBERS[index]));
    }

    for (let index = 0; index < OPERATORS.length; index++) {
        panel.appendChild(createElement(OPERATORS[index]));
    }

}

function createElement(value) {
    let el = document.createElement("button");

    el.setAttribute("type", 'button');
    el.setAttribute("value", value);
    el.setAttribute("id", value);
    el.setAttribute("style", "class:btn");
    el.addEventListener('click', onClick);
    el.innerHTML = value;
    
    return el;
}

function attachHandlers() {
    let btns = document.getElementsByClassName('btn');

    for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        element.addEventListener('click', onClick);
    }
}

function onClick(e) {
    let text = e.target.innerText;

    if (text === EQUAL) {
        calcResult();
    } else if (text === CLEAR) {
        clearResult();
    } else {
        output += text;
    }

    showResult();
}

function calcResult() {
    output = eval(output);
}

function clearResult() {
    document.getElementById('output').value = '';
    output = '';
}

function showResult() {
    var el = document.getElementById('output');
    el.value = output;
}

renderButtons();
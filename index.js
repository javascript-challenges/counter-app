let counter = 0;
let counterValueInput = document.getElementById('counterValueInput');

function updateCounterValue() {
    document.getElementById('counterValue').innerText = counter;
}

function increment() {
    let incrementValue = parseInt(counterValueInput.value) || 1;
    counter += incrementValue;
    updateCounterValue();
}

function decrement() {
    let incrementValue = parseInt(counterValueInput.value) || 1;
    counter -= incrementValue;
    updateCounterValue()
}

function reset() {
    counter = 0;
    updateCounterValue()
}
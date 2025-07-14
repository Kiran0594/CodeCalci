let justCalculated = false;

function appendValue(val) {
  const operators = ['+', '-', '*', '/', '.'];
  const display = document.getElementById('display');

  if (justCalculated) {
    if (!operators.includes(val)) {
      display.value = '';
    }
    justCalculated = false;
  }

  display.value += val;
}

function calculate() {
  try {
    const display = document.getElementById('display');
    display.value = eval(display.value);
    justCalculated = true;
  } catch (e) {
    alert("Invalid expression");
  }
  if(display.value=="Infinity"){
    display.value = 'ERROR';

  }
}



function clearDisplay() {
  document.getElementById('display').value = '';
  justCalculated = false;
}

function square() {
  try {
    const display = document.getElementById('display');
    let current = eval(display.value);
    display.value = current * current;
    justCalculated = true;
  } catch (e) {
    alert("ERROR");
  }
}

function squareRoot() {
  try {
    const display = document.getElementById('display');
    let current = eval(display.value);
    display.value = Math.sqrt(current);
    justCalculated = true;
  } catch (e) {
    alert("ERROR");
  }
}

document.addEventListener('keydown', function(e) {
  const display = document.getElementById('display');
  const operators = ['+', '-', '*', '/', '.'];

  if (/[0-9+\-*/.]/.test(e.key)) {
    if (justCalculated) {
      if (!operators.includes(e.key)) {
        display.value = '';
      }
      justCalculated = false;
    }
    display.value += e.key;
  }

  if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    calculate();
  }

  if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }

  if (e.key === 'Escape') {
    clearDisplay();
  }
});

// fetch value of range selector
let slider = document.querySelector('#myRange');
let output = document.querySelector('#value');
output.textContent = slider.value;
slider.addEventListener('input', (e) => {
    output.textContent = `${slider.value}`;
});
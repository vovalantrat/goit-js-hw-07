const input = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', () => {
    const trimmedValue = input.value.trim();

    if (trimmedValue === '') {
        nameOutput.textContent = "Anonymous";
    }
    else {
        nameOutput.textContent = trimmedValue;
    }
});
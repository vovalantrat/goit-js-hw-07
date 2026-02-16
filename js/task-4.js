const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const { email, password } = registerForm.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);

    registerForm.reset();
});

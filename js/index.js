import { inputError } from "./inputerror.js";
import { emailValidation } from "./emailvalidation.js";

const emailInput = document.getElementById('email');
const form = document.querySelector('form');
const iconError = document.querySelector('.icon-error');
const textError = document.querySelector('.text-error');

form.addEventListener('submit', event => {
    event.preventDefault();
    const valueError = inputError({
        emailInput,
        iconError,
        textError
    });
    if(String(emailInput.value).trim() === '' || !emailInput.value) {
        valueError.show();
    } else {
        valueError.clear();
        const emailValidator = emailValidation({emailInput, valueError});
        emailValidator.verify();
    }
});
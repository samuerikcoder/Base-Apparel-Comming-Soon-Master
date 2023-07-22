export function inputError({
    emailInput,
    iconError,
    textError
}) {
    function show(){
        emailInput.style.border = '1px solid hsl(0, 100%, 74%)';
        iconError.classList.remove('close');
        textError.classList.remove('close');
    }

    function clear() {
        emailInput.style.color = '';
        emailInput.style.border = '';
        iconError.classList.add('close');
        textError.classList.add('close');
    }

    return {
        show, 
        clear
    }
}
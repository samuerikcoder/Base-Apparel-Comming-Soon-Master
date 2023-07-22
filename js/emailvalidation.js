export function emailValidation({
    emailInput,
    valueError
}) {
    function test() {
        const {value} = emailInput;
    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    function verify() {
        if(emailInput.type === 'email') {
            if(!test(emailInput)) {
                valueError.show(`Looks like this is not an e-mail`);
            } else {
                valueError.clear();
            }
        }
    }

    return {verify};
}
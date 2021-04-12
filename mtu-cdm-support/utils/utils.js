export const beautifyDate = (date) =>
    new Date(date).toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const checkValidity = (input, validations) => {
    let valid = true;
    if (validations.required) {
        valid = input.trim() !== "" && valid;
    }
    if (validations.minLength) {
        valid = input.trim().length >= validations.minLength && valid;
    }
    if (validations.isEmail) {
        valid = validateEmail(input.trim()) && valid;
    }
    if (validations.default) {
        valid = input !== validations.default && valid;
    }
    return valid;
};

module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty'
    }
    if(email.trim() === ''){
        errors.email = 'Email must not be empty'
    }else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/

        if(!email.match(regex)){
            errors.email = 'email must be a valid email address'
        }else if(password !== confirmPassword) {
            errors.confirmPassword = 'password must match'
        }
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}
const validate = require('../index')
test('password should be atleast one Upper case charecter', () => {
    expect(validate("deepak")).toBe("Password must include at least one Upper Case charecter")
})
/**
 * if(!checkLength.test(str)){
        return 'Password length must be greater than six charecters'
    }
    let checkUpperCase = new RegExp('(?=.*[A-Z])')
    if(!checkUpperCase.test(str)){
        return 'Password must include at least one Upper Case charecter'
    }
    let checkLowerCase = new RegExp('(?=.*[a-z])')
    if(!checkLowerCase.test(str)){
        return 'Password must include at least one Lower Case charecter'
    }
    let checkNumber = new RegExp('(?=.*[0-9])')
    if(!checkNumber.test(str)){
        return 'Password must include at least one Number'
    }
    let checkSpecialCharecter = new RegExp('(?=.*[^A-Za-z0-9])')
    if(!checkSpecialCharecter.test(str)){
        return 'Password must include at least one Special Charecter'
    }
    else{
        return `Valid Password`
    }
 */

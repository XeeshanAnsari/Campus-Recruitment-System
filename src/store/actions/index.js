


export function signUp(user) {
    return {
        type: 'SIGN_UP',
        value: user
    }
}

export function signIn(user) {
    return {
        type: 'SIGN_IN',
        user: user
    }
}
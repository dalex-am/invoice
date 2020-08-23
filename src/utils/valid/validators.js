export const required = value => {
    if (value) return undefined
    return "Field is required"
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength}!`
    return undefined
}

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const password = value =>
  value && !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g.test(value)
    ? "at least one uppercase and lowercase letter, one digit"
    : undefined
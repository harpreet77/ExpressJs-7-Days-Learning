class APPError extends Error {
    constructor(message) {
        super(message)
        this.name = 'APP Error'
        Error.captureStackTrace(this, this.constructor)
    }
}
function one() {
    two()
}
function two() {
    three()
}
function three() {
    throw new APPError('Something went wrong')
}
try {
    one()
}
catch (error) {
    console.error(error.stack)
}
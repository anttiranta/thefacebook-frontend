export default class PrintableError extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, PrintableError)
    }
}
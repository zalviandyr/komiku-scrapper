class Controller {
    constructor(req, res, next) {
        this.response = res
        this.request = req

        next()
    }

    /**
     * Success Response
     * @param {JSON} data
     * @param {String} message
     * @param {Number} statusCode
     */
    success(data, message = 'success', statusCode = 200) {
        const { response } = this
        const obj = {}
        obj.success = true
        obj.message = message
        obj.data = data

        response.status(statusCode).json(obj)
    }

    /**
     * Failed Response
     * @param {JSON} data
     * @param {String} message
     * @param {Number} statusCode
     */
    error(data, message = 'failed', statusCode = 500) {
        const { response } = this
        const obj = {}
        obj.success = false
        obj.message = message
        obj.data = data

        response.status(statusCode).json(obj)
    }
}

module.exports = Controller

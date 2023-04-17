class ExpressError extends Error {
    constructor(msg, status){
        super();
        this.msg=msg;
        this.status = status;
        console.error('had an error')
    }

}
module.exports = ExpressError;
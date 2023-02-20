export class BaseError extends Error{
    constructor(){
        super()
        this.name = "Coin98 Base Error Handler"
        this.message = "Coin98 Error"
    }
}
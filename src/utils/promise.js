
export default class HD{
    static PENDING = 'pending'
    static FULFILED = 'fulfiled'
    static REJECTED = 'rejected'

    status = ''
    value = ''
    
    constructor(executor){
        // super()
        this.status = HD.PENDING
        
        executor(this.resolve.bind(this),this.reject.bind(this))
        
    }

    resolve(val){
        this.status = HD.FULFILED    
    }

    reject(val){
        this.status = HD.REJECTED    
    }


}
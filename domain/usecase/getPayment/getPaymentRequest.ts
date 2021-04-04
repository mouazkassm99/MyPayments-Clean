import { PaymentReq } from "../paymentRequest";


class GetPaymentRequest extends PaymentReq{
    private id: number;
    constructor(id : number){
        super();
        this.id = id;
    }

    
    public getId() : number {
        return this.id;
    }
    
}

export{
    GetPaymentRequest,
}
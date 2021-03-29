class Payment{

   
    private paymentData: PaymentData;

    constructor(paymentData: PaymentData){
        this.paymentData = paymentData;
    }

    public getPaymentData() : PaymentData {
        return this.paymentData;
    }

    
    public setPaymentData(paymentData : PaymentData) {
        this.paymentData = paymentData;
    }
    
}

class PaymentData{
    public id:number;
    public purpose:string;
    public cost:number;
    public when:Date;
}

export{
    PaymentData,
    Payment
}
export default{
    Payment
}


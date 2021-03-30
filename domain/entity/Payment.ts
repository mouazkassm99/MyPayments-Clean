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

interface PaymentData{
    id:number;
    purpose:string;
    cost:number;
    when:Date;
}

export{
    PaymentData,
    Payment
}
export default{
    Payment
}


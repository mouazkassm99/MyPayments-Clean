
import { PaymentReq } from "../paymentRequest"
import { Payment, PaymentData } from "../../entity/Payment";

class AddPaymentRequest extends PaymentReq {

    private data : PaymentData;

    constructor(data : PaymentData) {
        super();
        this.data = data;
    }

    public toPayment(): Payment{
        const payment = new Payment(this.data);
        return payment;
    }
}

export{
    AddPaymentRequest,
}

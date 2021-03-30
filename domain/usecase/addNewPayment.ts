import { Payment, PaymentData } from "../entity/Payment";
import {PaymentRepository} from "../interface/PaymentsRepository";
import {PaymentUsecase, PaymentRequest} from "./paymentUsecase";

class AddNewPayment extends PaymentUsecase{

    constructor(paymentRepository: PaymentRepository){
        super(paymentRepository);
    }

    public excute(request: AddPaymentRequest): void{
        this.paymentRepository.addPayment(request.toPayment());
    }
}

class AddPaymentRequest extends PaymentRequest {

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
    AddNewPayment,
    AddPaymentRequest
}


//i dont think we need to do this 

// interface AddPaymentRequestData extends PaymentData{
//     // id: number;
//     // purpose: string;
//     // cost: number;
//     // when: string;
// }
import { Payment } from "../entity/Payment";
import {PaymentRepository} from "../interface/PaymentsRepository";
import {PaymentUsecase, PaymentRequest} from "./paymentUsecase";

class GetPayment extends PaymentUsecase{

    constructor(paymentReposiory: PaymentRepository){
        super(paymentReposiory);
    }

    public excute (request : GetPaymentRequest): Payment{
        return this.paymentRepository.getPayment(request.getId());
    }

}

class GetPaymentRequest extends PaymentRequest{
    private id: number;
    constructor(data : GetPaymentRequestData){
        super();
        this.id = data.id;
    }

    
    public getId() : number {
        return this.id;
    }
    
}

export{
    GetPayment,
    GetPaymentRequest
}

interface GetPaymentRequestData{
    id: number,
} 
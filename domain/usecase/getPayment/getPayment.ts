import { Payment } from "../../entity/Payment";
import {PaymentRepositoryInterface} from "../../interface/PaymentsRepository";
import {PaymentUsecase} from "../paymentUsecase";
import { GetPaymentRequest } from "./getPaymentRequest";

class GetPayment extends PaymentUsecase{

    constructor(paymentReposiory: PaymentRepositoryInterface){
        super(paymentReposiory);
    }

    public excute (request : GetPaymentRequest): Payment{
        return this.paymentRepository.getPayment(request.getId());
    }

}



export{
    GetPayment,
}


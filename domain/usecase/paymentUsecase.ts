import {PaymentRepositoryInterface} from "../interface/PaymentsRepository";
import { PaymentReq } from "./paymentRequest";

abstract class PaymentUsecase{

    protected paymentRepository: PaymentRepositoryInterface;

    constructor(paymentRepository: PaymentRepositoryInterface){
        this.paymentRepository = paymentRepository;
    }

    abstract excute(params: PaymentReq);

}



export{
    PaymentUsecase,
}


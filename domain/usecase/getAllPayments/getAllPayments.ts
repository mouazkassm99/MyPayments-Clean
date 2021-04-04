import { Payment } from "../../entity/Payment";
import { PaymentUsecase } from '../paymentUsecase';
import { PaymentRepositoryInterface } from "../../interface/PaymentsRepository";
import { GetAllPaymentRequest } from "./getAllPaymentsRequest";

class GetAllPayments extends PaymentUsecase{

    constructor(paymentRepository : PaymentRepositoryInterface){
        super(paymentRepository);
    }
    
    public excute (request: GetAllPaymentRequest): Array<Payment>{
        return this.paymentRepository.getPayments(request.getQuerySpec());
    }
}

export{
    GetAllPayments,
}

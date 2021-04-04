import { PaymentRepositoryInterface } from "../../interface/PaymentsRepository";
import { PaymentUsecase } from "../paymentUsecase";
import { AddPaymentRequest } from "./addNewPaymentRequest";


class AddNewPayment extends PaymentUsecase{

    constructor(paymentRepository: PaymentRepositoryInterface){
        super(paymentRepository);
    }

    public excute(request: AddPaymentRequest): void{
        this.paymentRepository.addPayment(request.toPayment());
    }
}


export{
    AddNewPayment,
}


//i dont think we need to do this 

// interface AddPaymentRequestData extends PaymentData{
//     // id: number;
//     // purpose: string;
//     // cost: number;
//     // when: string;
// }
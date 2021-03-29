import { Payment } from "../entity/Payment";
import PaymentRepository from "../interface/PaymentsRepository";
import PaymentUsecase from "./paymentUsecase";

class GetPayment extends PaymentUsecase{

    constructor(paymentReposiory: PaymentRepository){
        super(paymentReposiory);
    }

    public excute (id: number): Payment{
        return this.paymentRepository.getPayment(id);
    }
}
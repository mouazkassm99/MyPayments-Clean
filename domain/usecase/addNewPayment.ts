import { Payment } from "../entity/Payment";
import PaymentRepository from "../interface/PaymentsRepository";
import PaymentUsecase from "./paymentUsecase";

export default class AddNewPayment extends PaymentUsecase{

    constructor(paymentRepository: PaymentRepository){
        super(paymentRepository);
    }

    public excute(payment: Payment): void{
        this.paymentRepository.addPayment(payment);
    }
}
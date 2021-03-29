import { Payment } from "../entity/Payment";
import PaymentRepository from "../interface/PaymentsRepository";
import PaymentUsecase from './paymentUsecase';

class GetAllPayments extends PaymentUsecase{

    constructor(paymentRepository : PaymentRepository, query:string){
        super(paymentRepository);
    }
    
    public excute (query: string): Array<Payment>{
        return this.paymentRepository.getPayments(query);
    }
}
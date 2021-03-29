import PaymentRepository from "../interface/PaymentsRepository";

export default abstract class PaymentUsecase{

    protected paymentRepository: PaymentRepository;

    constructor(paymentRepository: PaymentRepository){
        this.paymentRepository = paymentRepository;
    }
}
import PaymentRepository from "../interface/PaymentsRepository";

abstract class PaymentUsecase{

    protected paymentRepository: PaymentRepository;

    constructor(paymentRepository: PaymentRepository){
        this.paymentRepository = paymentRepository;
    }

}

class PaymentRequest{}

export{
    PaymentUsecase,
    PaymentRequest
}


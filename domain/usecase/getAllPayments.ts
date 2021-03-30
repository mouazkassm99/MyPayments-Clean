import { Payment } from "../entity/Payment";
import {PaymentRepository, QuerySpecifications} from "../interface/PaymentsRepository";
import {PaymentUsecase, PaymentRequest} from './paymentUsecase';

class GetAllPayments extends PaymentUsecase{

    constructor(paymentRepository : PaymentRepository, query:string){
        super(paymentRepository);
    }
    
    public excute (request: GetAllPaymentRequest): Array<Payment>{
        return this.paymentRepository.getPayments(request.getQuerySpec());
    }
}

class GetAllPaymentRequest extends PaymentRequest {

    private querySpec : QuerySpecifications;

    constructor(querySpec : QuerySpecifications) {
        super();
        this.querySpec = querySpec;
    }

    
    public getQuerySpec() : QuerySpecifications {
        return this.querySpec;
    }
    
}
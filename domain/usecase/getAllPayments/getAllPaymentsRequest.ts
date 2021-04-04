import { QuerySpecifications} from "../../interface/PaymentsRepository";
import { PaymentReq } from "../paymentRequest";

class GetAllPaymentRequest extends PaymentReq {

    private querySpec : QuerySpecifications;

    constructor(querySpec : QuerySpecifications) {
        super();
        this.querySpec = querySpec;
    }

    
    public getQuerySpec() : QuerySpecifications {
        return this.querySpec;
    }
    
}

export{
    GetAllPaymentRequest,
}
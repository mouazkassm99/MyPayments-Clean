import {Payment} from '../entity/Payment'
interface PaymentRepository{
    getPayments(querySpec: QuerySpecifications) : Array<Payment>;
    addPayment(payment:Payment) : void;
    getPayment(id: number) : Payment;
}

interface QuerySpecifications{
    withId: boolean,
    withPuropse: boolean,
    withCost: boolean,
    withWhen: boolean,
}
export{
    QuerySpecifications,
    PaymentRepository
}
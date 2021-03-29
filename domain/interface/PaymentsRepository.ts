import {Payment} from '../entity/Payment'
export default interface PaymentRepository{
    getPayments(query: string) : Array<Payment>;
    addPayment(payment:Payment) : void;
    getPayment(id: number) : Payment;
}
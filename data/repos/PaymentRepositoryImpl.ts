import { Payment } from '../../domain/entity/Payment'
import PaymentRepository from '../../domain/interface/PaymentsRepository'
import DBManager from '../db/dbms';

export default class PaymentRepositoryDB implements PaymentRepository{
    
    private dbms:DBManager;

    public getPayment(id: number): Payment{
        return this.dbms.getPaymentById(id);
    }

    public getPayments(query: string):Array<Payment>{
        return this.dbms.getAllPayments(query);
    }

    public addPayment(payment: Payment):void{
        this.addPayment(payment);
    }

}
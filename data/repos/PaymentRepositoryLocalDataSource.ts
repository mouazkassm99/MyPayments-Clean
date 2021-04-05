import { Payment } from '../../domain/entity/Payment'
import {PaymentRepositoryInterface, QuerySpecifications } from '../../domain/interface/PaymentsRepository'
import DBManager from '../db/dbms';

export default class PaymentRepositoryLocalDataSource implements PaymentRepositoryInterface{
    
    private dbms:DBManager;

    constructor(dbms:DBManager){
        this.dbms = dbms;
    }


    public getPayment(id: number): Payment{
        return this.dbms.getPaymentById(id);
    }

    public getPayments(querySpec: QuerySpecifications):Array<Payment>{
        return this.dbms.getAllPayments(querySpec);
    }

    public addPayment(payment: Payment):void{
        this.addPayment(payment);
    }

}
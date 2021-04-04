import { Payment, PaymentData } from '../../domain/entity/Payment';
import { QuerySpecifications } from '../../domain/interface/PaymentsRepository';
// import db from './db.json'

export default class DBManager{

    private payments;

    constructor(){
        this.payments = [ //use db from json
            {
                "id":1,
                "purpose": "sitting in a cafe",
                "cost" : 2500,
                "when" : 1617042336
            },
            {
                "id":2,
                "purpose": "mobile units",
                "cost" : 4200,
                "when" : 1617031536
            }
        ]
    }


    public getPaymentById(id: number): Payment{

        let obj = this.payments.filter(p => p.id === id);

        obj.when = new Date(obj.when);

        return obj;
    }

    public getAllPayments(querySpec: QuerySpecifications): Array<Payment>{

        //use querySpecs for returning filtered data .. 

        return this.payments;
    }

    public addNewPayment(payment:Payment):void{
        this.payments.push(payment);
    }

}
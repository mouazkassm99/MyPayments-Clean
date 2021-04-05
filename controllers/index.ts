import PaymentUseCaseBuilder from "../domain/usecase";
import { GetAllPaymentRequest } from "../domain/usecase/getAllPayments/getAllPaymentsRequest";
import DBRepositoryBuilder from '../data';
import { GetPaymentRequest } from "../domain/usecase/getPayment/getPaymentRequest";
import { AddPaymentRequest } from "../domain/usecase/addNewPayment/addNewPaymentRequest";
import Payment, { PaymentData } from "../domain/entity/Payment";

export default class PaymentController{
    constructor(){}

    public getAllPayments(){
        
        return (new PaymentUseCaseBuilder())
            .makeGetPayments(new DBRepositoryBuilder().makeLocalDataSource())
            .excute(new GetAllPaymentRequest({
                withCost: true,
                withId: true,
                withWhen: true,
                withPuropse: true
            }));
    }

    public getPayment(id: number){
        return new PaymentUseCaseBuilder()
            .makeGetPayment(new DBRepositoryBuilder().makeLocalDataSource())
            .excute(new GetPaymentRequest(id));
    }

    public addPayment(data: PaymentData){
        new PaymentUseCaseBuilder()
        .makeAddNewPayment(new DBRepositoryBuilder().makeLocalDataSource())
        .excute(new AddPaymentRequest(data));
    }


}
import { GetAllPayments } from '../domain/usecase/getAllPayments/getAllPayments'
import { GetAllPaymentRequest } from '../domain/usecase/getAllPayments/getAllPaymentsRequest'
import { repo } from '../data/index'
//get all payments

console.log(123456);


const payments = (new GetAllPayments(repo)).excute(new GetAllPaymentRequest(
    {
        withCost:false,
        withId:false,
        withPuropse:false,
        withWhen:false
}));

console.log(payments);


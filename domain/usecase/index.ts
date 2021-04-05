import { PaymentRepositoryInterface } from '../interface/PaymentsRepository';
import {AddNewPayment} from './addNewPayment/addNewPayment'
import {GetAllPayments} from './getAllPayments/getAllPayments'
import {GetPayment} from './getPayment/getPayment'


export default class PaymentUseCaseBuilder {


    public makeAddNewPayment(repo : PaymentRepositoryInterface):AddNewPayment{
        return new AddNewPayment(repo);
    }

    public makeGetPayments(repo : PaymentRepositoryInterface):GetAllPayments{
        return new GetAllPayments(repo);
    }

    public makeGetPayment(repo : PaymentRepositoryInterface):GetPayment{
        return new GetPayment(repo);
    }

}
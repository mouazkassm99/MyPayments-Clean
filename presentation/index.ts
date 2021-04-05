import PaymentController from '../controllers';

const Payments = new PaymentController().getAllPayments();

console.log(Payments);

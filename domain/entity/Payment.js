"use strict";
exports.__esModule = true;
exports.Payment = exports.PaymentData = void 0;
var Payment = /** @class */ (function () {
    function Payment(paymentData) {
        this.paymentData = paymentData;
    }
    Payment.prototype.getPaymentData = function () {
        return this.paymentData;
    };
    Payment.prototype.setPaymentData = function (paymentData) {
        this.paymentData = paymentData;
    };
    return Payment;
}());
exports.Payment = Payment;
var PaymentData = /** @class */ (function () {
    function PaymentData() {
    }
    return PaymentData;
}());
exports.PaymentData = PaymentData;
exports["default"] = {
    Payment: Payment
};

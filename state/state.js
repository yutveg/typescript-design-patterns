var Order = /** @class */ (function () {
    function Order() {
        this.cancelledOrderState = new CancelOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.preparingOrderState = new PreparingOrderState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log("Cancelling your order.");
        this.order.setState(this.order.cancelledOrderState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log("Payment verified!");
        this.order.setState(this.order.preparingOrderState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log("Cannot ship the order yet.");
    };
    return PaymentPendingState;
}());
var CancelOrderState = /** @class */ (function () {
    function CancelOrderState(order) {
        this.order = order;
    }
    CancelOrderState.prototype.cancelOrder = function () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.");
    };
    CancelOrderState.prototype.verifyPayment = function () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.");
    };
    CancelOrderState.prototype.shipOrder = function () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.");
    };
    return CancelOrderState;
}());
var PreparingOrderState = /** @class */ (function () {
    function PreparingOrderState(order) {
        this.order = order;
    }
    PreparingOrderState.prototype.cancelOrder = function () {
        console.log("Cancelling your order.");
        this.order.setState(this.order.cancelledOrderState);
    };
    PreparingOrderState.prototype.verifyPayment = function () {
        console.log("Payment has already been verified.");
    };
    PreparingOrderState.prototype.shipOrder = function () {
        console.log("Shipping order now.");
        this.order.setState(this.order.orderShippedState);
    };
    return PreparingOrderState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.");
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.");
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.");
    };
    return OrderShippedState;
}());
var order = new Order();
console.log("An order has been placed. Order is currently in state: ", order.getState().constructor.name);
order.getState().cancelOrder();
console.log("Order is currently in state: ", order.getState().constructor.name);

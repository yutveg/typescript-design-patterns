interface State {
  order: Order;
  // method for each state
  cancelOrder();
  verifyPayment();
  shipOrder();
}

class Order {
  cancelledOrderState: State;
  paymentPendingState: State;
  orderShippedState: State;
  preparingOrderState: State;

  currentState: State;

  constructor() {
    this.cancelledOrderState = new CancelOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.preparingOrderState = new PreparingOrderState(this);

    this.setState(this.paymentPendingState);
  }

  setState(state: State) {
    this.currentState = state;
  }
  getState(): State {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling your order.");
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("Payment verified!");
    this.order.setState(this.order.preparingOrderState);
  }
  shipOrder() {
    console.log("Cannot ship the order yet.");
  }
}

class CancelOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("I'm sorry Dave, I'm afraid I can't do that.");
  }
  verifyPayment() {
    console.log("I'm sorry Dave, I'm afraid I can't do that.");
  }
  shipOrder() {
    console.log("I'm sorry Dave, I'm afraid I can't do that.");
  }
}

class PreparingOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling your order.");
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("Payment has already been verified.");
  }
  shipOrder() {
    console.log("Shipping order now.");
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("I'm sorry Dave, I'm afraid I can't do that.");
  }
  verifyPayment() {
    console.log("I'm sorry Dave, I'm afraid I can't do that.");
  }
  shipOrder() {
    console.log("I'm sorry Dave, I'm afraid I can't do that.");
  }
}

let order = new Order();
console.log(
  "An order has been placed. Order is currently in state: ",
  (<any>order.getState()).constructor.name
);
order.getState().cancelOrder();
console.log(
  "Order is currently in state: ",
  (<any>order.getState()).constructor.name
);

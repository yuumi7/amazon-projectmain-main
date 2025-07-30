import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";


new Promise (() => {
  console.log('promise');
})

loadProducts(() => {
  renderOrderSummary();
renderPaymentSummary();
});

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifySubscriptionPaymentRequest = {
  /**
   * Payment ID from Razorpay
   */
  razorpay_payment_id: string;
  /**
   * Subscription ID from Razorpay
   */
  razorpay_subscription_id: string;
  /**
   * Payment signature from Razorpay
   */
  razorpay_signature: string;
};


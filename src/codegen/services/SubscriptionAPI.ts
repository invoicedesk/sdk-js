/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSubscriptionOrderResponse } from '../models/CreateSubscriptionOrderResponse';
import type { CurrentSubscriptionResponse } from '../models/CurrentSubscriptionResponse';
import type { ListSubscriptionInvoicesResponse } from '../models/ListSubscriptionInvoicesResponse';
import type { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import type { ReactivateSubscriptionResponse } from '../models/ReactivateSubscriptionResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { VerifySubscriptionPaymentRequest } from '../models/VerifySubscriptionPaymentRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List subscription plans
   * Get all available subscription plans.
   * @returns ListSubscriptionPlansResponse
   * @throws ApiError
   */
  public listSubscriptionPlans(): CancelablePromise<ListSubscriptionPlansResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/subscription/plans',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get current subscription
   * Get details about the current subscription.
   * @returns CurrentSubscriptionResponse
   * @throws ApiError
   */
  public getCurrentSubscription(): CancelablePromise<CurrentSubscriptionResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/subscription/current',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create subscription order
   * Create a new subscription order for a plan.
   * @returns CreateSubscriptionOrderResponse
   * @throws ApiError
   */
  public createSubscriptionOrder({
    planId,
  }: {
    /**
     * ID of the subscription plan
     */
    planId: string,
  }): CancelablePromise<CreateSubscriptionOrderResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscription/order/{planId}',
      path: {
        'planId': planId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Verify subscription payment
   * Verify a subscription payment using Razorpay signature.
   * @returns SuccessResponse
   * @throws ApiError
   */
  public verifySubscriptionPayment({
    requestBody,
  }: {
    requestBody: VerifySubscriptionPaymentRequest,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscription/verify',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Cancel subscription
   * Cancel the current subscription.
   * @returns SuccessResponse
   * @throws ApiError
   */
  public cancelSubscription(): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscription/cancel',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update subscription plan
   * Update the plan for an existing subscription.
   * @returns CreateSubscriptionOrderResponse
   * @throws ApiError
   */
  public updateSubscriptionPlan({
    subscriptionId,
    planId,
  }: {
    /**
     * ID of the subscription
     */
    subscriptionId: string,
    /**
     * ID of the new plan
     */
    planId: string,
  }): CancelablePromise<CreateSubscriptionOrderResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscription/{subscriptionId}/update-plan/{planId}',
      path: {
        'subscriptionId': subscriptionId,
        'planId': planId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * List subscription invoices
   * Get all invoices for your current subscription.
   * @returns ListSubscriptionInvoicesResponse
   * @throws ApiError
   */
  public listSubscriptionInvoices(): CancelablePromise<ListSubscriptionInvoicesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/subscription/invoices',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Reactivate expired subscription
   * Reactivate a subscription for a user who has already used the free trial. No free trial is given, and the subscription starts immediately.
   * @returns ReactivateSubscriptionResponse
   * @throws ApiError
   */
  public reactivateSubscription({
    planId,
  }: {
    /**
     * ID of the subscription plan
     */
    planId: string,
  }): CancelablePromise<ReactivateSubscriptionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscription/reactivate/{planId}',
      path: {
        'planId': planId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}

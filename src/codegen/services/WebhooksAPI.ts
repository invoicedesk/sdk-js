/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebhooksAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any
   * @throws ApiError
   */
  public webhooksControllerHandleRazorpayWebhook({
    xRazorpaySignature,
  }: {
    xRazorpaySignature: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webhooks/razorpay',
      headers: {
        'x-razorpay-signature': xRazorpaySignature,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public webhooksControllerHandleClerkWebhook(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webhooks/clerk',
    });
  }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionInvoice } from './SubscriptionInvoice';

export type ListSubscriptionInvoicesResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * For non-error scenarios, holds the API response data
   */
  data: Array<SubscriptionInvoice>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


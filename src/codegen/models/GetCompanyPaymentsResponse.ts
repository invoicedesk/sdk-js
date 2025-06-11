/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Payment } from './Payment';

export type GetCompanyPaymentsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * For non-error scenarios, holds the API response data
   */
  data: Array<Payment>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


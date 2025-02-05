/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';

export type GetAccountDetailsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * Account details including name and timestamps
   */
  data: Account;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


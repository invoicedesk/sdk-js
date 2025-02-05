/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListCurrenciesResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of available currencies
   */
  data: Array<{
    id?: number;
    name?: string;
    symbol?: string;
    code?: string;
  }>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


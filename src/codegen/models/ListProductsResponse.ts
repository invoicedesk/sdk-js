/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { APIError } from './APIError';
import type { Product } from './Product';

export type ListProductsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of Products
   */
  data: Array<Product>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<APIError>;
};

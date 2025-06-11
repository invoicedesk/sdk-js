/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Client } from './Client';
import type { PaginationMeta } from './PaginationMeta';

export type ListClientsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of clients
   */
  data: Array<Client>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
  meta: PaginationMeta;
};


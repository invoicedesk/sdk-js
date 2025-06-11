/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DashboardData } from './DashboardData';

export type DashboardResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * For non-error scenarios, holds the API response data
   */
  data: DashboardData;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionPlanV2Response } from './SubscriptionPlanV2Response';

export type ListSubscriptionPlansV2Response = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of subscription plans with features
   */
  data: Array<SubscriptionPlanV2Response>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


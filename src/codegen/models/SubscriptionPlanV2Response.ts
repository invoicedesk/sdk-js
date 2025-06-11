/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionPlanV2Response = {
  /**
   * ID of the subscription plan
   */
  id: string;
  /**
   * Name of the subscription plan
   */
  name: string;
  /**
   * Description of the subscription plan
   */
  description: string;
  /**
   * Price of the subscription plan
   */
  price: number;
  /**
   * Currency of the subscription plan
   */
  currency: string;
  /**
   * Features included in the subscription plan
   */
  inclusions: Array<string>;
  /**
   * Features not included in the subscription plan
   */
  exclusions: Array<string>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailDeliveryOptions = {
  /**
   * Whether the invoice must be sent via email or not
   */
  send: boolean;
  /**
   * Subject of the email
   */
  subject: string;
  /**
   * List of recipients
   */
  recipients: Array<string>;
  /**
   * Body of the email
   */
  body: string;
};


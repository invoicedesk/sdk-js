/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceSettings } from './InvoiceSettings';

export type InvoiceSettingsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * The invoice settings
   */
  data: InvoiceSettings;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


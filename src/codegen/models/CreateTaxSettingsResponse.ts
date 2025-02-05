/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaxSettings } from './TaxSettings';

export type CreateTaxSettingsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * The tax settings
   */
  data: TaxSettings;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


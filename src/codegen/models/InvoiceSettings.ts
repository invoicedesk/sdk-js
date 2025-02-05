/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GlobalSettings } from './GlobalSettings';
import type { PrefixSetting } from './PrefixSetting';
import type { TaxSettings } from './TaxSettings';

export type InvoiceSettings = {
  /**
   * Settings applicable globally
   */
  globalSettings: GlobalSettings;
  /**
   * Invoice settings per prefix
   */
  prefixSettings: Array<PrefixSetting>;
  /**
   * Configured tax types
   */
  taxSettings: Array<TaxSettings>;
};


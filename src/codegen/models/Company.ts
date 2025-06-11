/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyContactInfo } from './CompanyContactInfo';
import type { Invoice } from './Invoice';
import type { InvoiceSettings } from './InvoiceSettings';
import type { Project } from './Project';

export type Company = {
  /**
   * ID of the company
   */
  id: string;
  /**
   * Account ID to which the company belongs
   */
  accountId: string;
  /**
   * Name of the company
   */
  name: string;
  /**
   * Company tax registration information
   */
  taxRegistrations: Array<string>;
  /**
   * List of invoices generated for the company
   */
  invoices: Array<Invoice>;
  /**
   * URL of company logo
   */
  logoURL: string;
  /**
   * Registered postal address of the company
   */
  address: string;
  /**
   * Additional address information
   */
  addressLine2: string;
  /**
   * City in which the company exists
   */
  city: string;
  /**
   * State in which the company exists
   */
  state: string;
  /**
   * Country in which the company exists
   */
  country: string;
  /**
   * Industry the company operates in
   */
  industry: string;
  /**
   * Default currency code for the company
   */
  defaultCurrencyCode: string;
  /**
   * Contact details of the company
   */
  contactInfo: Array<CompanyContactInfo>;
  /**
   * List of projects being managed by the company
   */
  projects: Array<Project>;
  /**
   * Invoice settings for the company
   */
  invoiceSettings: InvoiceSettings;
};


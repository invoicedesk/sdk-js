/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfo } from './ContactInfo';
import type { TaxRegistration } from './TaxRegistration';

export type CompanyResponse = {
  /**
   * Unique identifier for the company
   */
  id: string;
  /**
   * Name of the company
   */
  name: string;
  /**
   * City in which the company is registered
   */
  city: string;
  /**
   * State in which the company is registered
   */
  state: string;
  /**
   * Country in which the company is registered
   */
  country: string;
  /**
   * Registered business address line 1
   */
  address: string;
  /**
   * Registered business address line 2
   */
  addressLine2: string;
  /**
   * URL to company logo
   */
  logoURL: string;
  /**
   * Path to tax registration certificate
   */
  taxDocumentPath: string;
  /**
   * List of contacts in the company
   */
  contactInfo: Array<ContactInfo>;
  /**
   * Registered tax details of the company
   */
  taxRegistrations: Array<TaxRegistration>;
};


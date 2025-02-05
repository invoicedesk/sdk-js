/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfo } from './ContactInfo';
import type { TaxRegistration } from './TaxRegistration';

export type UpdateCompanyData = {
  /**
   * Name of the company
   */
  name?: string;
  /**
   * City in which the company is registered
   */
  city?: string;
  /**
   * State in which the company is registered
   */
  state?: string;
  /**
   * Country in which the company is registered
   */
  country?: string;
  /**
   * Registered business address line 1
   */
  address?: string;
  /**
   * Registered business address line 2
   */
  addressLine2: string;
  /**
   * Company logo file (JPEG or PNG, max 2MB)
   */
  logo: Record<string, any>;
  /**
   * Company tax registration certificate file (PDF, max 2MB)
   */
  taxRegistrationCertificate: Record<string, any>;
  /**
   * List of contacts in the company
   */
  contactInfo: Array<ContactInfo>;
  /**
   * Registered tax details of the company
   */
  taxRegistrations?: Array<TaxRegistration>;
  /**
   * Default currency code
   */
  defaultCurrencyCode?: string;
};


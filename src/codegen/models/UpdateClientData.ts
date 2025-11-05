/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateClientData = {
  /**
   * Name of the client is required
   */
  name: string;
  /**
   * If the client is a company
   */
  isCompany?: boolean;
  /**
   * Address of the client
   */
  address?: string;
  /**
   * Information on how to contact the client
   */
  contactInfo?: Array<string>;
  /**
   * Secondary address line of the client
   */
  addressLine2?: string;
  /**
   * City of the client
   */
  city?: string;
  /**
   * State of the client
   */
  state?: string;
  /**
   * Country of the client
   */
  country?: string;
  /**
   * ZIP/Postal code of the client
   */
  zipCode?: string;
  /**
   * Tax registration number of the client
   */
  taxRegistrationNumber?: string;
  /**
   * Currency the client deals in
   */
  currencyId?: Record<string, any>;
};


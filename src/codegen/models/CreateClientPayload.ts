/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfo } from './ContactInfo';

export type CreateClientPayload = {
  /**
   * Name of the client is required
   */
  name: string;
  /**
   * Client is a company
   */
  isCompany?: boolean;
  /**
   * Address of the client
   */
  address?: string;
  /**
   * Contact info of the client (array of phone numbers and email addresses)
   */
  contactInfo?: Array<ContactInfo>;
  /**
   * Secondary address line of the client
   */
  addressLine2?: string;
  /**
   * City of the client
   */
  city: string;
  /**
   * State of the client
   */
  state: string;
  /**
   * Country of the client
   */
  country: string;
  /**
   * ZIP/Postal code of the client
   */
  zipCode: string;
  /**
   * Tax registration number of the client
   */
  taxRegistrationNumber?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Company } from './Company';
import type { ContactInfo } from './ContactInfo';

export type Client = {
  /**
   * ID of the client
   */
  id: string;
  /**
   * ID of the company this client belongs to
   */
  companyId: string;
  /**
   * Name of the client
   */
  name: string;
  /**
   * Whether this client is a company or an individual
   */
  isCompany: boolean;
  /**
   * Address of the client
   */
  address: string;
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
   * Currency the client deals in
   */
  currencyId?: number;
  /**
   * Client contact information (array of phone numbers and email addresses)
   */
  contactInfo: Array<ContactInfo>;
  /**
   * Date this client was created in our system
   */
  createdAt: string;
  /**
   * The company this client is associated with
   */
  company: Company;
};


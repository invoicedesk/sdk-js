/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateProjectPayLoad = {
  /**
   * Name of the project
   */
  name: string;
  /**
   * Description of project
   */
  description?: string;
  /**
   * Client Id associated with the project
   */
  clientId: string;
  /**
   * Start date of the project
   */
  startDate?: string;
  /**
   * Due date of the project
   */
  dueDate?: string;
  /**
   * Hourly rate for the project
   */
  rate?: number;
  /**
   * Advance payment for the project
   */
  advancePayment?: number;
  /**
   * Type of engagement: 'hourly', 'project', or 'retainer'
   */
  engagementType?: CreateProjectPayLoad.engagementType;
  /**
   * Currency ID associated with the project
   */
  currencyId?: number;
  /**
   * Fee that is decided for the project
   */
  totalProjectFee?: number;
  /**
   * List of user IDs assigned to the project
   */
  teamMembers?: Array<string>;
  /**
   * Frequency of invoicing for the project
   */
  invoicingFrequency?: CreateProjectPayLoad.invoicingFrequency;
  /**
   * Retainer amount for the project
   */
  retainerAmount?: number;
  /**
   * Duration of the contract for the project
   */
  contractDuration?: CreateProjectPayLoad.contractDuration;
  /**
   * Array of media IDs for scope documents
   */
  scopeDocuments?: Array<string>;
};

export namespace CreateProjectPayLoad {

  /**
   * Type of engagement: 'hourly', 'project', or 'retainer'
   */
  export enum engagementType {
    HOURLY = 'hourly',
    PROJECT = 'project',
    RETAINER = 'retainer',
  }

  /**
   * Frequency of invoicing for the project
   */
  export enum invoicingFrequency {
    MONTHLY = 'monthly',
    FORTNIGHTLY = 'fortnightly',
    WEEKLY = 'weekly',
    QUARTERLY = 'quarterly',
  }

  /**
   * Duration of the contract for the project
   */
  export enum contractDuration {
    ONGOING = 'ongoing',
    FIXED_TERM = 'fixed_term',
  }


}


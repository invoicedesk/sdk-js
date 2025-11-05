/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateProjectPayload = {
  /**
   * Name of the project
   */
  name?: string;
  /**
   * Description of the project
   */
  description?: string;
  /**
   * Client ID for the project
   */
  clientId?: string;
  /**
   * Status of the project
   */
  status?: UpdateProjectPayload.status;
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
   * Array of media IDs for scope documents
   */
  scopeDocuments?: Array<string>;
  /**
   * Array of tag IDs to associate with the project
   */
  tagIds?: Array<string>;
  /**
   * Engagement type for the project
   */
  engagementType?: Record<string, any>;
};

export namespace UpdateProjectPayload {

  /**
   * Status of the project
   */
  export enum status {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
  }


}


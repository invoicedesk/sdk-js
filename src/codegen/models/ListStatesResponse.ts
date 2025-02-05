/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListStatesResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of available states
   */
  data: Array<{
    id?: number;
    name?: string;
  }>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};


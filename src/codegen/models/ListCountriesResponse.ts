/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListCountriesResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of available countries
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


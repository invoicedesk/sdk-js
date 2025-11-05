/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAccountRequest = {
  /**
   * Name of the account (team/agency name)
   */
  name: string;
  /**
   * Primary use cases for the account
   */
  useCases?: Array<string>;
  /**
   * Email addresses to invite as teammates
   */
  inviteEmails?: Array<string>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCommentContent = {
  /**
   * Structured JSON content of the comment from tiptap
   */
  json: Record<string, any>;
  /**
   * Plain text version of the comment
   */
  text: string;
  /**
   * Array of user IDs mentioned in the comment
   */
  mentionedUserIds: Array<string>;
};


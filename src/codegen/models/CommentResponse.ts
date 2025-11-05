/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CommentResponse = {
  /**
   * Comment ID
   */
  id: string;
  /**
   * ID of the company this comment belongs to
   */
  companyId: string;
  /**
   * ID of the user who authored the comment
   */
  authorId: string;
  /**
   * Author information
   */
  author: Record<string, any>;
  /**
   * ID of the entity being commented on
   */
  commentableId: string;
  /**
   * Type of entity being commented on
   */
  commentableType: string;
  /**
   * Content of the comment
   */
  content: Record<string, any>;
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Last update timestamp
   */
  updatedAt: string;
};


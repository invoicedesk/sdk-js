/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateProductPayload = {
  /**
   * Name of the product is required
   */
  name: string;
  /**
   * description of the product
   */
  description?: string;
  /**
   * HSN of the product
   */
  hsn?: string;
  /**
   * Price of the product
   */
  price: number;
  /**
   * Unit of the product
   */
  units?: string;
  /**
   * Type of the product (goods/services)
   */
  type: CreateProductPayload.type;
  /**
   * SAC code for services
   */
  sac?: string;
};

export namespace CreateProductPayload {

  /**
   * Type of the product (goods/services)
   */
  export enum type {
    GOODS = 'goods',
    SERVICE = 'service',
  }


}


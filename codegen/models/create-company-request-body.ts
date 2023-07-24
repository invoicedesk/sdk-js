/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Desk API Documentation
 * Official API documentation for Invoice Desk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CreateCompanyRequestBody
 */
export interface CreateCompanyRequestBody {
    /**
     * Name of the company
     * @type {string}
     * @memberof CreateCompanyRequestBody
     */
    'name': string;
    /**
     * Registered tax details of the company
     * @type {Array<string>}
     * @memberof CreateCompanyRequestBody
     */
    'taxRegistrations'?: Array<string>;
}

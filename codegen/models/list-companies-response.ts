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


// May contain unused imports in some cases
// @ts-ignore
import { APIError } from './apierror';
// May contain unused imports in some cases
// @ts-ignore
import { Company } from './company';

/**
 * 
 * @export
 * @interface ListCompaniesResponse
 */
export interface ListCompaniesResponse {
    /**
     * Indicates whether the operation was successful or not
     * @type {boolean}
     * @memberof ListCompaniesResponse
     */
    'success': boolean;
    /**
     * List of companies
     * @type {Array<Company>}
     * @memberof ListCompaniesResponse
     */
    'data': Array<Company>;
    /**
     * If the operation was not successful, holds the deatils of errors
     * @type {Array<APIError>}
     * @memberof ListCompaniesResponse
     */
    'errors': Array<APIError>;
}


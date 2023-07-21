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
import { ClientCompany } from './client-company';

/**
 * 
 * @export
 * @interface Client
 */
export interface Client {
    /**
     * ID of the client
     * @type {string}
     * @memberof Client
     */
    'id': string;
    /**
     * ID of the company this client belongs to
     * @type {string}
     * @memberof Client
     */
    'companyId': string;
    /**
     * Name of the client
     * @type {string}
     * @memberof Client
     */
    'name': string;
    /**
     * Whether this client is a company or an individual
     * @type {boolean}
     * @memberof Client
     */
    'isCompany': boolean;
    /**
     * Address of the client
     * @type {string}
     * @memberof Client
     */
    'address': string;
    /**
     * Client contact information
     * @type {Array<string>}
     * @memberof Client
     */
    'contactInfo': Array<string>;
    /**
     * Any metadata attached with the client
     * @type {string}
     * @memberof Client
     */
    'metadata': string;
    /**
     * Date this client was created in our system
     * @type {string}
     * @memberof Client
     */
    'createdAt': string;
    /**
     * 
     * @type {ClientCompany}
     * @memberof Client
     */
    'company': ClientCompany;
}


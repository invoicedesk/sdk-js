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
import { LineItem } from './line-item';

/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * ID of the created invoice
     * @type {string}
     * @memberof Invoice
     */
    'id': string;
    /**
     * ID of the company the invoice belongs to
     * @type {string}
     * @memberof Invoice
     */
    'companyId': string;
    /**
     * ID of the client the invoice is raised against
     * @type {string}
     * @memberof Invoice
     */
    'clientId': string;
    /**
     * Invoice number
     * @type {number}
     * @memberof Invoice
     */
    'number': number;
    /**
     * Prefix of the invoice series
     * @type {string}
     * @memberof Invoice
     */
    'prefix': string;
    /**
     * The financial year this invoice belongs to
     * @type {string}
     * @memberof Invoice
     */
    'financialYear': string;
    /**
     * Date of the invoice
     * @type {string}
     * @memberof Invoice
     */
    'date': string;
    /**
     * The current status of the invoice
     * @type {string}
     * @memberof Invoice
     */
    'status': string;
    /**
     * Currency of the invoice
     * @type {string}
     * @memberof Invoice
     */
    'currency': string;
    /**
     * Any metadata attached with this invoice
     * @type {object}
     * @memberof Invoice
     */
    'metadata': object;
    /**
     * Timestamp of invoice creation
     * @type {string}
     * @memberof Invoice
     */
    'createdAt': string;
    /**
     * Line items of this invoice
     * @type {Array<LineItem>}
     * @memberof Invoice
     */
    'lineItems': Array<LineItem>;
    /**
     * Client to whom the invoice is raised
     * @type {object}
     * @memberof Invoice
     */
    'client': object;
    /**
     * The company from which this invoice was raised
     * @type {object}
     * @memberof Invoice
     */
    'company': object;
}


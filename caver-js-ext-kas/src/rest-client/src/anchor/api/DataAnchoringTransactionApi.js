/**
 * Anchor API
 * # Introduction This document describes KAS (Klaytn API Service) Anchor API. Anchor API provides features sending metadata available to verify data reliability to ensure the reliability of service chain data to Klaytn main chain.  For more details on using the Anchor API, please refer to [Tutorial](https://docs.klaytnapi.com/tutorial/anchor-api).    # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1071010 | data don't exist 1071615 | its value is out of range; size 1072100 | same payload ID or payload was already anchored 1072101 | all configured accounts have insufficient funds |
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

const ApiClient = require('../../ApiClient')
const AnchorBlockRequest = require('../model/AnchorBlockRequest')
const AnchorBlockStatus = require('../model/AnchorBlockStatus')
const AnchorTransactionDetail = require('../model/AnchorTransactionDetail')
const AnchorTransactions = require('../model/AnchorTransactions')
const ErrorResponse = require('../model/ErrorResponse')

/**
 * DataAnchoringTransaction service.
 * @class DataAnchoringTransactionApi
 * @version 1.0
 */
class DataAnchoringTransactionApi {
    /**
     * Constructs a new DataAnchoringTransactionApi.
     * @alias DataAnchoringTransactionApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the anchorBlock operation.
     * @callback DataAnchoringTransactionApi~anchorBlockCallback
     * @param {String} error Error message, if any.
     * @param {AnchorBlockStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an anchoring transaction
     * Use for anchoring blockchain data. It creates and manages anchoring transactions by the operator set on the KAS console. For successful anchoring through operator or user&#x27;s feepayer, a balance of 10 times more than the fee needed  is required.
     * @param {Object} opts Optional parameters
     * @param {DataAnchoringTransactionApi~anchorBlockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AnchorBlockStatus}
     */
    anchorBlock(xChainId, opts, callback) {
        opts = opts || {}
        const postBody = opts.body

        const pathParams = {}
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = AnchorBlockStatus

        return this.apiClient.callApi(
            '/v1/anchor',
            'POST',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getAnchorBlockByPayloadID operation.
     * @callback DataAnchoringTransactionApi~getAnchorBlockByPayloadIDCallback
     * @param {String} error Error message, if any.
     * @param {AnchorTransactionDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve anchoring transactions with payload
     * Specify a Payload ID and an operator ID to retrieve a list of transactions created by the operator. When creating a transaction, you may check the payload added to the transaction.
     * @param {DataAnchoringTransactionApi~getAnchorBlockByPayloadIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AnchorTransactionDetail}
     */
    getAnchorBlockByPayloadID(xChainId, operatorId, payloadId, callback) {
        const postBody = null

        const pathParams = {
            'operator-id': operatorId,
            'payload-id': payloadId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AnchorTransactionDetail

        return this.apiClient.callApi(
            '/v1/operator/{operator-id}/payload/{payload-id}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getAnchorBlockByTx operation.
     * @callback DataAnchoringTransactionApi~getAnchorBlockByTxCallback
     * @param {String} error Error message, if any.
     * @param {AnchorTransactionDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve anchoring transactions with transaction hash value
     * Specify a transaction hash value and an operator ID to retrieve a list of transactions created by the operator. When creating a transaction, you may check the payload added to the transaction.
     * @param {DataAnchoringTransactionApi~getAnchorBlockByTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AnchorTransactionDetail}
     */
    getAnchorBlockByTx(xChainId, operatorId, transactionHash, callback) {
        const postBody = null

        const pathParams = {
            'operator-id': operatorId,
            'transaction-hash': transactionHash,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AnchorTransactionDetail

        return this.apiClient.callApi(
            '/v1/operator/{operator-id}/tx/{transaction-hash}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the retrieveAnchorBlock operation.
     * @callback DataAnchoringTransactionApi~retrieveAnchorBlockCallback
     * @param {String} error Error message, if any.
     * @param {AnchorTransactions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of transactions by the operator
     * Specify an operator ID to retrieve a list of transactions created by the operator.&lt;p&gt;&lt;/p&gt;  ## Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default value (&#x60;size&#x3D;100&#x60;) when &#x60;size&#x3D;0&#x60;&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than the maximum value&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {DataAnchoringTransactionApi~retrieveAnchorBlockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AnchorTransactions}
     */
    retrieveAnchorBlock(xChainId, operatorId, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
            'operator-id': operatorId,
        }
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
            'from-timestamp': opts.fromTimestamp,
            'to-timestamp': opts.toTimestamp,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AnchorTransactions

        return this.apiClient.callApi(
            '/v1/operator/{operator-id}/tx',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
}
module.exports = DataAnchoringTransactionApi

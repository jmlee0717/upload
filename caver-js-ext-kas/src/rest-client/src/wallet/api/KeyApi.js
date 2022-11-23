/**
 * Wallet API
 * # Introduction Wallet API is an API for creating and managing Klaytn accounts as well as sending transactions. If you create your Klaytn account using Wallet API, you don't have to manage your private key yourself. Wallet API provides a wallet for safe storage of your Klaytn account private keys that you would need to use BApps. For more details on how to use Wallet API, please refer to this [tutorial](https://docs.klaytnapi.com/v/en/tutorial).  Wallet API can be divided into the Account part, which creates and manages Klaytn accounts, and the Transaction part, which sends different kinds of transactions.  Wallet API creates, deletes and monitors Klaytn accounts and updates the accounts to multisig, and manages all private keys for all accounts registered on KAS.  Wallet API can also create transaction to send it to Klaytn. These include transactions sent from multisig accounts. In case of muiltisig accounts, a transaction will automatically be sent to Klaytn once \\(Threshold\\) is met. For more detail, please refer to this [tutorial](https://docs.klaytnapi.com/v/en/tutorial).  There are mainly two types of transactions: basic transactions and fee delegation transactions. Fee delegation transactions include Global Fee Delegation transaction and user fee deletation transaction. With the Global Fee Delegation transaction scheme, the transaction fee will initially be paid by GroundX and then be charged to you at a later date. With the User Fee Delegation transaction scheme, you create an account that pays the transaction fees on behalf of the users when a transaction.  The functionalities and limits of Wallet API are shown below:  | Version | Item | Description | | :--- | :--- | :--- | | 2.0 | Limits | Supports Cypress(Mainnet), Baobab(Testnet) \\ Doesn't support (Service Chain \\) | |  |  | Doesn't support account management for external custodial keys | |  |  | Doesn't support multisig for RLP encoded transactions | |  | Account management | Create, retrieve and delete account | |  |  | Multisig account update | |  | Managing transaction | [Basic](https://ko.docs.klaytn.com/klaytn/design/transactions/basic) creating and sending transaction | |  |  | [FeeDelegatedWithRatio](https://ko.docs.klaytn.com/klaytn/design/transactions/partial-fee-delegation) creating and sending transaction | |  |  | RLP encoded transaction\\([Legacy](https://ko.docs.klaytn.com/klaytn/design/transactions/basic#txtypelegacytransaction), [Basic](https://ko.docs.klaytn.com/klaytn/design/transactions/basic), [FeeDelegatedWithRatio](https://ko.docs.klaytn.com/klaytn/design/transactions/partial-fee-delegation)\\) creating and sending | |  |  | Managing and sending multisig transactions | |  | Administrator | Manage resource pool\\(create, query pool, delete, retrieve account \\) |
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
const Key = require('../model/Key')
const KeyCreationRequest = require('../model/KeyCreationRequest')
const KeyCreationResponse = require('../model/KeyCreationResponse')
const KeyList = require('../model/KeyList')
const KeySignDataRequest = require('../model/KeySignDataRequest')
const KeySignDataResponse = require('../model/KeySignDataResponse')
const KeyStatus = require('../model/KeyStatus')

/**
 * Key service.
 * @class KeyApi
 * @version 1.0
 */
class KeyApi {
    /**
     * Constructs a new KeyApi.
     * @alias KeyApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the getKey operation.
     * @callback KeyApi~getKeyCallback
     * @param {String} error Error message, if any.
     * @param {Key} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get key
     * Retrieve the created keys.
     * @param {KeyApi~getKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Key}
     */
    getKey(xChainId, keyId, callback) {
        const postBody = null

        const pathParams = {
            'key-id': keyId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Key

        return this.apiClient.callApi(
            '/v2/key/{key-id}',
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
     * Callback function to receive the result of the keyCreation operation.
     * @callback KeyApi~keyCreationCallback
     * @param {String} error Error message, if any.
     * @param {KeyCreationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Key Creation
     * Creates up to 100 keys in batches.
     * @param {Object} opts Optional parameters
     * @param {KeyApi~keyCreationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link KeyCreationResponse}
     */
    keyCreation(xChainId, opts, callback) {
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
        const returnType = KeyCreationResponse

        return this.apiClient.callApi(
            '/v2/key',
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
     * Callback function to receive the result of the keyDeletion operation.
     * @callback KeyApi~keyDeletionCallback
     * @param {String} error Error message, if any.
     * @param {KeyStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Key deletion
     * Delete a key.
     * @param {KeyApi~keyDeletionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link KeyStatus}
     */
    keyDeletion(xChainId, keyId, callback) {
        const postBody = null

        const pathParams = {
            'key-id': keyId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = KeyStatus

        return this.apiClient.callApi(
            '/v2/key/{key-id}',
            'DELETE',
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
     * Callback function to receive the result of the keySignData operation.
     * @callback KeyApi~keySignDataCallback
     * @param {String} error Error message, if any.
     * @param {KeySignDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign data using keys
     * Sign the data using keys.
     * @param {Object} opts Optional parameters
     * @param {KeyApi~keySignDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link KeySignDataResponse}
     */
    keySignData(xChainId, keyId, opts, callback) {
        opts = opts || {}
        const postBody = opts.body

        const pathParams = {
            'key-id': keyId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = KeySignDataResponse

        return this.apiClient.callApi(
            '/v2/key/{key-id}/sign',
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
     * Callback function to receive the result of the retrieveKeys operation.
     * @callback KeyApi~retrieveKeysCallback
     * @param {String} error Error message, if any.
     * @param {KeyList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of keys.
     * Returns a list of keys
     * @param {Object} opts Optional parameters
     * @param {KeyApi~retrieveKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link KeyList}
     */
    retrieveKeys(xChainId, krn, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            krn: krn,
            cursor: opts.cursor,
            size: opts.size,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = KeyList

        return this.apiClient.callApi(
            '/v2/key',
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
module.exports = KeyApi

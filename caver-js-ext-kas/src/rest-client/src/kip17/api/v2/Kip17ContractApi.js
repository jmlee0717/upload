/**
 * KIP-17 API
 * # Introduction The KIP-17 API helps BApp (Blockchain Application) developers to manage contracts and tokens created in accordance with the [KIP-17](https://docs.klaytnapi.com/v/en/api#kip-17-api) standard, which is Klaytn's technical speficication for Non-Fungible Tokens.  The functionality of the multiple endpoints enables you to do the following actions: - deploy smart contracts - manage the entire life cycle of an NFT from minting, to sending and burning - get contract or token data - authorize a third party to execute token transfers - view token ownership history  For more details on KAS, please refer to [KAS Docs](https://docs.klaytnapi.com/). If you have any questions or comments, please leave them in the [Klaytn Developers Forum](http://forum.klaytn.com).    **alias**  When a method of the KIP-17 API requires a contract address, you can use the contract **alias**. You can give the contract an alias when deploying, and use it in place of the complicated address.  # Fee Payer Options KAS KIP-17 supports four ways to pay the transaction fees.<br />  **1. Only using KAS Global FeePayer Account** <br /> Sends all transactions using KAS Global FeePayer Account. ``` {     \"options\": {       \"enableGlobalFeePayer\": true     } } ``` <br />  **2. Using User FeePayer Account** <br /> Sends all transactions using User FeePayer Account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ``` <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account** <br /> Sends transactions using User FeePayer Account by default, and switches to the KAS Global FeePayer Account when balances are insufficient. ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ``` <br />  **4. Not using FeePayer Account** <br /> Sends transactions the default way, paying the transaction fee from the user's account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ``` <br />  # Error Code This section contains the errors that might occur when using the KIP-17 API. KAS uses HTTP status codes. More details can be found in this [link](https://developer.mozilla.org/en/docs/Web/HTTP/Status).
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

const ApiClient = require('../../../ApiClient')
const Kip17ContractInfoResponse = require('../../model/Kip17ContractInfoResponse')
const Kip17ContractListResponse = require('../../model/Kip17ContractListResponse')
const Kip17ContractOwnerResponse = require('../../model/Kip17ContractOwnerResponse')
const Kip17DeployResponse = require('../../model/Kip17DeployResponse')
const Kip17TransactionStatusResponse = require('../../model/Kip17TransactionStatusResponse')

/**
 * Kip17Contract service.
 * @class Kip17ContractApi
 * @version 1.0
 */
class Kip17ContractApi {
    /**
     * Constructs a new Kip17ContractApi.
     * @alias Kip17ContractApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the deployContract operation.
     * @callback Kip17ContractApi~deployContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip17DeployResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy Contract
     * Deploys a new KIP-17 contract with the given parameters. You can find the tutorial for KIP-17 contract deployment [here](https://docs.klaytnapi.com/tutorial/kip17-api#kip-17).     Even if you see &#x60;Submitted&#x60; in the response, it doesn&#x27;t mean that the transaction is &#x60;Committed&#x60;. To confirm transaction status, use Get Contract List [/v2/contract](#operation/ListContractsInDeployerPool) or Get Transaction Receipt from the Wallet API [/v2/tx/{transaction-hash}](https://refs.klaytnapi.com/en/wallet/latest#operation/TransactionReceipt).
     * @param {Object} opts Optional parameters
     * @param {Kip17ContractApi~deployContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip17DeployResponse}
     */
    deployContract(xChainId, opts, callback) {
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
        const returnType = Kip17DeployResponse

        return this.apiClient.callApi(
            '/v2/contract',
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
     * Callback function to receive the result of the getContract operation.
     * @callback Kip17ContractApi~getContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip17ContractInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Contract
     * Returns the data for a specified KIP-17 contract. You can use either the contract alias or contract address.&lt;p&gt;&lt;/p&gt;
     * @param {Kip17ContractApi~getContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip17ContractInfoResponse}
     */
    getContract(xChainId, contractAddressOrAlias, callback) {
        const postBody = null

        const pathParams = {
            'contract-address-or-alias': contractAddressOrAlias,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Kip17ContractInfoResponse

        return this.apiClient.callApi(
            '/v2/contract/{contract-address-or-alias}',
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
     * Callback function to receive the result of the listContractsInDeployerPool operation.
     * @callback Kip17ContractApi~listContractsInDeployerPoolCallback
     * @param {String} error Error message, if any.
     * @param {Kip17ContractListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Contract List
     * Returns a list of KIP-17 contracts created from a KAS account.&lt;p&gt;&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Kip17ContractApi~listContractsInDeployerPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip17ContractListResponse}
     */
    listContractsInDeployerPool(xChainId, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Kip17ContractListResponse

        return this.apiClient.callApi(
            '/v2/contract',
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
     * Callback function to receive the result of the updateContract operation.
     * @callback Kip17ContractApi~updateContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip17ContractInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Contract
     * Updates the fee payment method for a contract.  ##### Options With &#x60;options&#x60; you can set the transaction fee payment method. You can find more details in [Fee Payer Options](#section/Fee-Payer-Options).
     * @param {Object} opts Optional parameters
     * @param {Kip17ContractApi~updateContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip17ContractInfoResponse}
     */
    updateContract(xChainId, contractAddressOrAlias, opts, callback) {
        opts = opts || {}
        const postBody = opts.body

        const pathParams = {
            'contract-address-or-alias': contractAddressOrAlias,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = Kip17ContractInfoResponse

        return this.apiClient.callApi(
            '/v2/contract/{contract-address-or-alias}',
            'PUT',
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
     * Callback function to receive the result of the updateContract operation.
     * @callback Kip17ContractApi~transferOwnershipCallback
     * @param {String} error Error message, if any.
     * @param {Kip17TransactionStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Transfer Ownership
     * Transfers the ownership of the contract.  ##### Options With &#x60;options&#x60; you can set the transaction fee payment method. You can find more details in [Fee Payer Options](#section/Fee-Payer-Options).
     * @param {Object} opts Optional parameters
     * @param {Kip17ContractApi~transferOwnershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip17TransactionStatusResponse}
     */
    transferOwnership(xChainId, contractAddressOrAlias, opts, callback) {
        opts = opts || {}
        const postBody = opts.body

        const pathParams = {
            'contract-address-or-alias': contractAddressOrAlias,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = Kip17TransactionStatusResponse

        return this.apiClient.callApi(
            '/v2/contract/{contract-address-or-alias}/owner/transfer',
            'PUT',
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
     * Callback function to receive the result of the updateContract operation.
     * @callback Kip17ContractApi~transferOwnershipCallback
     * @param {String} error Error message, if any.
     * @param {Kip17TransactionStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Renounce Ownership
     * Renounces the ownership of a specified KIP-17 contract.   ##### Options With &#x60;options&#x60; you can set the transaction fee payment method. You can find more details in [Fee Payer Options](#section/Fee-Payer-Options).
     * @param {Object} opts Optional parameters
     * @param {Kip17ContractApi~transferOwnershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip17TransactionStatusResponse}
     */
    renounceOwnership(xChainId, contractAddressOrAlias, opts, callback) {
        opts = opts || {}
        const postBody = opts.body

        const pathParams = {
            'contract-address-or-alias': contractAddressOrAlias,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = Kip17TransactionStatusResponse

        return this.apiClient.callApi(
            '/v2/contract/{contract-address-or-alias}/owner',
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
     * Callback function to receive the result of the getOwnerTokens operation.
     * @callback Kip17TokenApi~getOwnerTokensCallback
     * @param {String} error Error message, if any.
     * @param {GetOwnerKip17TokensResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Tokens by Address
     * Returns a list of all tokens existent for a contract.
     * @param {Kip17TokenApi~getOwnerTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link GetOwnerKip17TokensResponse}
     */
    getContractOwner(xChainId, contractAddressOrAlias, callback) {
        const postBody = null

        const pathParams = {
            'contract-address-or-alias': contractAddressOrAlias,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Kip17ContractOwnerResponse

        return this.apiClient.callApi(
            '/v2/contract/{contract-address-or-alias}/owner',
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
module.exports = Kip17ContractApi
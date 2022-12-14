/**
 * KIP-7 API
 * # Introduction The KIP-17 API helps BApp (Blockchain Application) developers to manage contracts and tokens created in accordance with the [KIP-7](https://docs.klaytnapi.com/v/en/api#kip-7-api) standard, which is Klaytn's technical speficication for Fungible Tokens.  The functionality of the multiple endpoints enables you to do the following actions: - deploy smart contracts - manage the entire life cycle of an FT from minting, to sending and burning - get contract or token data - authorize a third party to execute token transfers - send tokens on behalf of the owner   For more details on KAS, please refer to [KAS Docs](https://docs.klaytnapi.com/). If you have any questions or comments, please leave them in the [Klaytn Developers Forum](http://forum.klaytn.com).    **alias**  When a method of the KIP-17 API requires a contract address, you can use the contract **alias**. You can give the contract an alias when deploying, and use it in place of the complicated address.  **deployer**  When you create a contract, you will be assigned one `deployer` address per Credential, which is the account address used for managing contracts. In KIP-7 API, this address is used in many different token-related operations. You can find the `deployer` address with [KIP7Deployer](#operation/GetDefaultDeployer).  Even with contracts created using SDKs like \"caver\", you can still use the contract address and [Wallet API](https://refs.klaytnapi.com/en/wallet/latest) account to manage your contracts and tokens.  # Fee Payer Options  KAS KIP-17 supports four ways to pay the transaction fees.<br />  **1. Only using KAS Global FeePayer Account** <br /> Sends all transactions using KAS Global FeePayer Account. ``` {     \"options\": {       \"enableGlobalFeePayer\": true     } } ```  <br />  **2. Using User FeePayer Account** <br /> Sends all transactions using User FeePayer Account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```  <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account** <br /> Sends transactions using User FeePayer Account by default, and switches to the KAS Global FeePayer Account when balances are insufficient. ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```  <br />  **4. Not using FeePayer Account** <br /> Sends transactions the default way, paying the transaction fee from the user's account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ```  # Error Code This section contains the errors that might occur when using the KIP-17 API. KAS uses HTTP status codes. More details can be found in this [link](https://developer.mozilla.org/en/docs/Web/HTTP/Status).
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
const AddPauserKip7Request = require('../model/AddPauserKip7Request')
const DeployKip7ContractRequest = require('../model/DeployKip7ContractRequest')
const ErrorResponse = require('../model/ErrorResponse')
const Kip7ContractListResponse = require('../model/Kip7ContractListResponse')
const Kip7ContractMetadataResponse = require('../model/Kip7ContractMetadataResponse')
const Kip7DeployResponse = require('../model/Kip7DeployResponse')
const Kip7TransactionStatusResponse = require('../model/Kip7TransactionStatusResponse')
const PauseKip7Request = require('../model/PauseKip7Request')
const UnpauseKip7Request = require('../model/UnpauseKip7Request')
const UpdateKip7ContractRequest = require('../model/UpdateKip7ContractRequest')

/**
 * Kip7Contract service.
 * @class Kip7ContractApi
 * @version 1.0
 */
class Kip7ContractApi {
    /**
     * Constructs a new Kip7ContractApi.
     * @alias Kip7ContractApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the addPauser operation.
     * @callback Kip7ContractApi~addPauserCallback
     * @param {String} error Error message, if any.
     * @param {Kip7TransactionStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Contract Pauser
     * Grants a specified account the authority to pause the actions of a contract. The actions of a contract here refer to sending tokens and sending tokens on the owner&#x27;s behalf. To remove the authority, use [Remove Pauser](#operation/RenouncePauser).  &gt; **NOTE** &gt;  &gt; The &#x60;pauser&#x60; needs to be an account managed by Wallet API in order to use [Remove Contract Pauser API](#operation/RenouncePauser). Otherwise, you will have to sign and send the transaction on your own.  ##### Sender The account that grants the authority. If you leave it blank, it will automatically be set to the &#x60;deployer&#x60; address as default . You can find the &#x60;deployer&#x60; address by [KIP7Deployer](#operation/GetDefaultDeployer).     You can omit the KRN if the &#x60;sender&#x60; address is managed by the KIP-7 or Wallet Service &#x60;account-pool&#x60;.&lt;br/&gt; Otherwise you have to provide the KRN object in the header (&#x60;x-krn: krn:{chain-id}:wallet:{account-id}:account-pool:{pool name}&#x60;).
     * @param {Object} opts Optional parameters
     * @param {Kip7ContractApi~addPauserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7TransactionStatusResponse}
     */
    addPauser(contractAddressOrAlias, xChainId, opts, callback) {
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
        const returnType = Kip7TransactionStatusResponse

        return this.apiClient.callApi(
            '/v1/contract/{contract-address-or-alias}/pauser',
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
     * Callback function to receive the result of the deployContract operation.
     * @callback Kip7ContractApi~deployContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip7DeployResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy Contract
     * Deploys a new KIP-7 contract with the given parameters. You will automatically be assigned a &#x60;deployer&#x60; address, which cannot be changed. You can find the &#x60;deployer&#x60; address using [KIP7Deployer](#operation/GetDefaultDeployer).  The alias must only consist of lowercase letters, numbers and hyphens, and the first letter is restricted to a lowercase letter.&lt;p&gt;&lt;/p&gt;  ##### Options With &#x60;options&#x60; you can set the transaction fee payment method. You can find more details in [Fee Payer Options](#section/Fee-Payer-Options).
     * @param {Object} opts Optional parameters
     * @param {Kip7ContractApi~deployContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7DeployResponse}
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
        const returnType = Kip7DeployResponse

        return this.apiClient.callApi(
            '/v1/contract',
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
     * @callback Kip7ContractApi~getContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip7ContractMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Contract
     * Returns the data for a specified KIP-7 contract. You can use either the contract alias or contract address.&lt;p&gt;&lt;/p&gt;
     * @param {Kip7ContractApi~getContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7ContractMetadataResponse}
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
        const returnType = Kip7ContractMetadataResponse

        return this.apiClient.callApi(
            '/v1/contract/{contract-address-or-alias}',
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
     * @callback Kip7ContractApi~listContractsInDeployerPoolCallback
     * @param {String} error Error message, if any.
     * @param {Kip7ContractListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Contract List
     * Returns a list of all KIP-7 contracts deployed by the user in chronological order of contract creation request.&lt;p&gt;&lt;/p&gt;   The &#x60;status&#x60; field in the request has the following meanings:&lt;p&gt;&lt;/p&gt;   - &#x60;init&#x60;: The initial state before sending the transaction  - &#x60;submitted&#x60;: After the contract deployment transaction has been sent  - &#x60;deployed&#x60;: The state in which the contract is deployed&lt;p&gt;&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Kip7ContractApi~listContractsInDeployerPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7ContractListResponse}
     */
    listContractsInDeployerPool(xChainId, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
            status: opts.status,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Kip7ContractListResponse

        return this.apiClient.callApi(
            '/v1/contract',
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
     * Callback function to receive the result of the pauseContract operation.
     * @callback Kip7ContractApi~pauseContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip7TransactionStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause Contract
     * Pauses all actions of a specified contract. The actions of a contract here refer to sending tokens and sending tokens on the owner&#x27;s behalf. You can resume the contract by using [Resume Contract](#operation/UnpauseContract).&lt;p&gt;&lt;/p&gt;  ##### Pauser The account that sends the transaction to pause the contract. If you leave it blank, it will automatically be set to the &#x60;deployer&#x60; address as default . You can find the &#x60;deployer&#x60; address by [KIP7Deployer](#operation/GetDefaultDeployer).    You can omit the KRN if the &#x60;pauser&#x60; address is managed by the KIP-7 or Wallet Service &#x60;account-pool&#x60;.&lt;br /&gt; Otherwise you have to provide the KRN object in the header (&#x60;x-krn: krn:{chain-id}:wallet:{account-id}:account-pool:{pool name}&#x60;).
     * @param {Object} opts Optional parameters
     * @param {Kip7ContractApi~pauseContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7TransactionStatusResponse}
     */
    pauseContract(xChainId, contractAddressOrAlias, opts, callback) {
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
        const returnType = Kip7TransactionStatusResponse

        return this.apiClient.callApi(
            '/v1/contract/{contract-address-or-alias}/pause',
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
     * Callback function to receive the result of the renouncePauser operation.
     * @callback Kip7ContractApi~renouncePauserCallback
     * @param {String} error Error message, if any.
     * @param {Kip7TransactionStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Contract Pauser
     * Removes the authority given to a certain account to pause the actions of specified contract. The actions of a contract here refer to sending tokens and sending tokens on the owner&#x27;s behalf.  ##### Pauser The account whose authority to pause the contract will be removed.  You can omit the KRN if the &#x60;pauser-address&#x60; is managed by the KIP-7 or Wallet Service &#x60;account-pool&#x60;.&lt;br /&gt; Otherwise you have to provide the KRN object in the header (&#x60;x-krn: krn:{chain-id}:wallet:{account-id}:account-pool:{pool name}&#x60;).
     * @param {Kip7ContractApi~renouncePauserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7TransactionStatusResponse}
     */
    renouncePauser(contractAddressOrAlias, pauserAddress, xChainId, callback) {
        const postBody = null

        const pathParams = {
            'contract-address-or-alias': contractAddressOrAlias,
            'pauser-address': pauserAddress,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Kip7TransactionStatusResponse

        return this.apiClient.callApi(
            '/v1/contract/{contract-address-or-alias}/pauser/{pauser-address}',
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
     * Callback function to receive the result of the unpauseContract operation.
     * @callback Kip7ContractApi~unpauseContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip7TransactionStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resume Contract
     * Resumes the actions of the given contract. The actions of a contract here refer to sending tokens and sending tokens on the owner&#x27;s behalf.   ##### Pauser The account that sends the transaction to resume the contract. If you leave it blank, it will automatically be set to the &#x60;deployer&#x60; address as default . You can find the &#x60;deployer&#x60; address by [KIP7Deployer](#operation/GetDefaultDeployer).    You can omit the KRN if the &#x60;pauser&#x60; address is managed by the KIP-7 or Wallet Service &#x60;account-pool&#x60;.&lt;br/&gt; Otherwise you have to provide the KRN object in the header (&#x60;x-krn: krn:{chain-id}:wallet:{account-id}:account-pool:{pool name}&#x60;).
     * @param {Object} opts Optional parameters
     * @param {Kip7ContractApi~unpauseContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7TransactionStatusResponse}
     */
    unpauseContract(xChainId, contractAddressOrAlias, opts, callback) {
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
        const returnType = Kip7TransactionStatusResponse

        return this.apiClient.callApi(
            '/v1/contract/{contract-address-or-alias}/unpause',
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
     * Callback function to receive the result of the updateContract operation.
     * @callback Kip7ContractApi~updateContractCallback
     * @param {String} error Error message, if any.
     * @param {Kip7ContractMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Contract
     * Updates the fee payment method for a contract.  ##### Options With &#x60;options&#x60; you can set the transaction fee payment method. You can find more details in [Fee Payer Options](#section/Fee-Payer-Options).
     * @param {Object} opts Optional parameters
     * @param {Kip7ContractApi~updateContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Kip7ContractMetadataResponse}
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
        const returnType = Kip7ContractMetadataResponse

        return this.apiClient.callApi(
            '/v1/contract/{contract-address-or-alias}',
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
}
module.exports = Kip7ContractApi

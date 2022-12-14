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

/**
 * The LegacyTransactionRequest model module.
 * @class LegacyTransactionRequest
 * @version 1.0
 */
class LegacyTransactionRequest {
    /**
     * Constructs a new <code>LegacyTransactionRequest</code>.
     * Legacy transaction request schema.
     * @alias LegacyTransactionRequest
     * @class
     * @param from {String} KLAY sender's Klaytn account address
     */

    constructor(from) {
        this.from = from
    }

    /**
     * Constructs a <code>LegacyTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LegacyTransactionRequest} obj Optional instance to populate.
     * @return {LegacyTransactionRequest} The populated <code>LegacyTransactionRequest</code> instance.
     * @memberof LegacyTransactionRequest
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyTransactionRequest()

            if (data.hasOwnProperty('from')) {
                obj.from = ApiClient.convertToType(data.from, 'String')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
            if (data.hasOwnProperty('input')) {
                obj.input = ApiClient.convertToType(data.input, 'String')
            }
            if (data.hasOwnProperty('nonce')) {
                obj.nonce = ApiClient.convertToType(data.nonce, 'Number')
            }
            if (data.hasOwnProperty('gas')) {
                obj.gas = ApiClient.convertToType(data.gas, 'Number')
            }
            if (data.hasOwnProperty('submit')) {
                obj.submit = ApiClient.convertToType(data.submit, 'Boolean')
            }
            if (data.hasOwnProperty('to')) {
                obj.to = ApiClient.convertToType(data.to, 'String')
            }
        }
        return obj
    }
}

/**
 * KLAY sender's Klaytn account address
 * @type {String}
 * @memberof LegacyTransactionRequest
 */
LegacyTransactionRequest.prototype.from = undefined
/**
 * KLAY converted into PEB
 * @type {String}
 * @memberof LegacyTransactionRequest
 */
LegacyTransactionRequest.prototype.value = undefined
/**
 * Data that is sent along with the transaction and used for the execution.
 * @type {String}
 * @memberof LegacyTransactionRequest
 */
LegacyTransactionRequest.prototype.input = undefined
/**
 * Unique identifier for the transactions being sent.(By entering 0, the nonce will be automatically determined.)
 * @type {Number}
 * @memberof LegacyTransactionRequest
 */
LegacyTransactionRequest.prototype.nonce = undefined
/**
 * Maximum gas fee to be used for sending the transaction. (By entering 0, it will be set to default value)
 * @type {Number}
 * @memberof LegacyTransactionRequest
 * @default 100000
 */
LegacyTransactionRequest.prototype.gas = 100000
/**
 * Send or not send the transaction to Klaytn
 * @type {Boolean}
 * @memberof LegacyTransactionRequest
 */
LegacyTransactionRequest.prototype.submit = undefined
/**
 * KLAY receiver's Klaytn account address
 * @type {String}
 * @memberof LegacyTransactionRequest
 */
LegacyTransactionRequest.prototype.to = undefined

module.exports = LegacyTransactionRequest

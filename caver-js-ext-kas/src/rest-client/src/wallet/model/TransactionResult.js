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
const Signature = require('./Signature')

/**
 * The TransactionResult model module.
 * @class TransactionResult
 * @version 1.0
 */
class TransactionResult {
    /**
     * Constructs a new <code>TransactionResult</code>.
     * Data of transaction sent to Klaytn.
     * @alias TransactionResult
     * @class
     * @param from {String} Klaytn account address that sent the transaction.
     * @param gas {Number} Maximum gas fee for sending the transaction.
     * @param gasPrice {String} Cost of gas fee for sending the transaction.
     * @param nonce {Number} Number of transactions that the current sender has sent in the past.
     * @param rlp {String} RLP serialization value for the transaction.
     * @param typeInt {Number} Integer that represents the transaction type
     */

    constructor(from, gas, gasPrice, nonce, rlp, typeInt) {
        this.from = from
        this.gas = gas
        this.gasPrice = gasPrice
        this.nonce = nonce
        this.rlp = rlp
        this.typeInt = typeInt
    }

    /**
     * Constructs a <code>TransactionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionResult} obj Optional instance to populate.
     * @return {TransactionResult} The populated <code>TransactionResult</code> instance.
     * @memberof TransactionResult
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionResult()

            if (data.hasOwnProperty('from')) {
                obj.from = ApiClient.convertToType(data.from, 'String')
            }
            if (data.hasOwnProperty('gas')) {
                obj.gas = ApiClient.convertToType(data.gas, 'Number')
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj.gasPrice = ApiClient.convertToType(data.gasPrice, 'String')
            }
            if (data.hasOwnProperty('input')) {
                obj.input = ApiClient.convertToType(data.input, 'String')
            }
            if (data.hasOwnProperty('nonce')) {
                obj.nonce = ApiClient.convertToType(data.nonce, 'Number')
            }
            if (data.hasOwnProperty('rlp')) {
                obj.rlp = ApiClient.convertToType(data.rlp, 'String')
            }
            if (data.hasOwnProperty('signatures')) {
                obj.signatures = ApiClient.convertToType(data.signatures, [Signature])
            }
            if (data.hasOwnProperty('status')) {
                obj.status = ApiClient.convertToType(data.status, 'String')
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            }
            if (data.hasOwnProperty('typeInt')) {
                obj.typeInt = ApiClient.convertToType(data.typeInt, 'Number')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
            if (data.hasOwnProperty('to')) {
                obj.to = ApiClient.convertToType(data.to, 'String')
            }
            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'Number')
            }
            if (data.hasOwnProperty('message')) {
                obj.message = ApiClient.convertToType(data.message, 'String')
            }
            if (data.hasOwnProperty('requestId')) {
                obj.requestId = ApiClient.convertToType(data.requestId, 'String')
            }
            if (data.hasOwnProperty('transactionId')) {
                obj.transactionId = ApiClient.convertToType(data.transactionId, 'String')
            }
            if (data.hasOwnProperty('accountKey')) {
                obj.accountKey = ApiClient.convertToType(data.accountKey, 'String')
            }
        }
        return obj
    }
}

/**
 * Klaytn account address that sent the transaction.
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.from = undefined
/**
 * Maximum gas fee for sending the transaction.
 * @type {Number}
 * @memberof TransactionResult
 */
TransactionResult.prototype.gas = undefined
/**
 * Cost of gas fee for sending the transaction.
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.gasPrice = undefined
/**
 * Data that is sent along with the transaction to Klaytn
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.input = undefined
/**
 * Number of transactions that the current sender has sent in the past.
 * @type {Number}
 * @memberof TransactionResult
 */
TransactionResult.prototype.nonce = undefined
/**
 * RLP serialization value for the transaction.
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.rlp = undefined
/**
 * @type {Array.<Signature>}
 * @memberof TransactionResult
 */
TransactionResult.prototype.signatures = undefined
/**
 * Status after the transaction has been sent (\"Submitted\" or \"Pending\")
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.status = undefined
/**
 * Hash value for the transaction.
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.transactionHash = undefined
/**
 * Integer that represents the transaction type
 * @type {Number}
 * @memberof TransactionResult
 */
TransactionResult.prototype.typeInt = undefined
/**
 * KLAY converted into PEB
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.value = undefined
/**
 * KLAY receiver's Klaytn account address
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.to = undefined
/**
 * @type {Number}
 * @memberof TransactionResult
 */
TransactionResult.prototype.code = undefined
/**
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.message = undefined
/**
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.requestId = undefined
/**
 * Multisig transaction ID
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.transactionId = undefined
/**
 * Newly updated account key.
 * @type {String}
 * @memberof TransactionResult
 */
TransactionResult.prototype.accountKey = undefined

module.exports = TransactionResult
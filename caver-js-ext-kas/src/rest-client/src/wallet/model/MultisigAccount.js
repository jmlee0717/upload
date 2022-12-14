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
const MultisigKey = require('./MultisigKey')

/**
 * The MultisigAccount model module.
 * @class MultisigAccount
 * @version 1.0
 */
class MultisigAccount {
    /**
     * Constructs a new <code>MultisigAccount</code>.
     * Data on multisig accounts
     * @alias MultisigAccount
     * @class
     * @param address {String} Klaytn account address
     * @param krn {String} KAS KRN
     * @param threshold {Number} Threshold of total weighted values required to create a multisig transaction.
     * @param transactionHash {String} Transaction hash for account data update
     * @param updatedAt {Number} The time of the latest update of account data
     */

    constructor(address, krn, threshold, transactionHash, updatedAt) {
        this.address = address
        this.krn = krn
        this.threshold = threshold
        this.transactionHash = transactionHash
        this.updatedAt = updatedAt
    }

    /**
     * Constructs a <code>MultisigAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MultisigAccount} obj Optional instance to populate.
     * @return {MultisigAccount} The populated <code>MultisigAccount</code> instance.
     * @memberof MultisigAccount
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultisigAccount()

            if (data.hasOwnProperty('address')) {
                obj.address = ApiClient.convertToType(data.address, 'String')
            }
            if (data.hasOwnProperty('krn')) {
                obj.krn = ApiClient.convertToType(data.krn, 'String')
            }
            if (data.hasOwnProperty('multiSigKeys')) {
                obj.multiSigKeys = ApiClient.convertToType(data.multiSigKeys, [MultisigKey])
            }
            if (data.hasOwnProperty('threshold')) {
                obj.threshold = ApiClient.convertToType(data.threshold, 'Number')
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
            }
        }
        return obj
    }
}

/**
 * Klaytn account address
 * @type {String}
 * @memberof MultisigAccount
 */
MultisigAccount.prototype.address = undefined
/**
 * KAS KRN
 * @type {String}
 * @memberof MultisigAccount
 */
MultisigAccount.prototype.krn = undefined
/**
 * @type {Array.<MultisigKey>}
 * @memberof MultisigAccount
 */
MultisigAccount.prototype.multiSigKeys = undefined
/**
 * Threshold of total weighted values required to create a multisig transaction.
 * @type {Number}
 * @memberof MultisigAccount
 */
MultisigAccount.prototype.threshold = undefined
/**
 * Transaction hash for account data update
 * @type {String}
 * @memberof MultisigAccount
 */
MultisigAccount.prototype.transactionHash = undefined
/**
 * The time of the latest update of account data
 * @type {Number}
 * @memberof MultisigAccount
 */
MultisigAccount.prototype.updatedAt = undefined

module.exports = MultisigAccount

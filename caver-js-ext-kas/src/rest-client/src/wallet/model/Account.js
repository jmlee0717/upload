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
 * The Account model module.
 * @class Account
 * @version 1.0
 */
class Account {
    /**
     * Constructs a new <code>Account</code>.
     * Account information
     * @alias Account
     * @class
     * @param address {String} Klaytn account address
     * @param chainId {Number} Klaytn Chain ID
     * @param createdAt {Number} The time at which Klaytn account was created
     * @param keyId {String} Private key ID for the account
     * @param krn {String} KAS KRN
     * @param publicKey {String} Public key for the account
     * @param updatedAt {Number} The time of the latest update of account data
     */

    constructor(address, chainId, createdAt, keyId, krn, publicKey, updatedAt) {
        this.address = address
        this.chainId = chainId
        this.createdAt = createdAt
        this.keyId = keyId
        this.krn = krn
        this.publicKey = publicKey
        this.updatedAt = updatedAt
    }

    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Account} obj Optional instance to populate.
     * @return {Account} The populated <code>Account</code> instance.
     * @memberof Account
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Account()

            if (data.hasOwnProperty('address')) {
                obj.address = ApiClient.convertToType(data.address, 'String')
            }
            if (data.hasOwnProperty('chainId')) {
                obj.chainId = ApiClient.convertToType(data.chainId, 'Number')
            }
            if (data.hasOwnProperty('createdAt')) {
                obj.createdAt = ApiClient.convertToType(data.createdAt, 'Number')
            }
            if (data.hasOwnProperty('keyId')) {
                obj.keyId = ApiClient.convertToType(data.keyId, 'String')
            }
            if (data.hasOwnProperty('krn')) {
                obj.krn = ApiClient.convertToType(data.krn, 'String')
            }
            if (data.hasOwnProperty('publicKey')) {
                obj.publicKey = ApiClient.convertToType(data.publicKey, 'String')
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
            }
            if (data.hasOwnProperty('multiSigKeys')) {
                obj.multiSigKeys = ApiClient.convertToType(data.multiSigKeys, [MultisigKey])
            }
            if (data.hasOwnProperty('threshold')) {
                obj.threshold = ApiClient.convertToType(data.threshold, 'Number')
            }
        }
        return obj
    }
}

/**
 * Klaytn account address
 * @type {String}
 * @memberof Account
 */
Account.prototype.address = undefined
/**
 * Klaytn Chain ID
 * @type {Number}
 * @memberof Account
 */
Account.prototype.chainId = undefined
/**
 * The time at which Klaytn account was created
 * @type {Number}
 * @memberof Account
 */
Account.prototype.createdAt = undefined
/**
 * Private key ID for the account
 * @type {String}
 * @memberof Account
 */
Account.prototype.keyId = undefined
/**
 * KAS KRN
 * @type {String}
 * @memberof Account
 */
Account.prototype.krn = undefined
/**
 * Public key for the account
 * @type {String}
 * @memberof Account
 */
Account.prototype.publicKey = undefined
/**
 * The time of the latest update of account data
 * @type {Number}
 * @memberof Account
 */
Account.prototype.updatedAt = undefined
/**
 * @type {Array.<MultisigKey>}
 * @memberof Account
 */
Account.prototype.multiSigKeys = undefined
/**
 * NThreshold of the weighted values required to created a multisig transaction.
 * @type {Number}
 * @memberof Account
 */
Account.prototype.threshold = undefined

module.exports = Account

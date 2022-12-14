/**
 * Token History API
 * # Introduction  Token History API allows you to query the transaction history of KLAY, FTs (KIP-7 and Labelled ERC-20), NFTs (KIP-17 and Labelled ERC-721), and MTs (KIP-37 and Labelled ERC-1155). You can track KLAY's transaction history or retrieve NFT-related data of a certain EOA.   For more details on using Token History API, please refer to the [Tutorial](https://docs.klaytnapi.com/tutorial).   For any inquiries on this document or KAS in general, please visit [Developer Forum](https://forum.klaytn.com/).
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
 * The NFTTokenSummary model module.
 * @class NFTTokenSummary
 * @version 1.0
 */
class NFTTokenSummary {
    /**
     * Constructs a new <code>NFTTokenSummary</code>.
     * @alias NFTTokenSummary
     * @class
     * @param kind {String} Contract type
     * @param contractAddress {String} Contract address (20-byte)
     * @param updatedAt {Number} Last change in token ownership (timestamp)
     * @param balance {String} Token balance (in hexadecimal)
     * @param lastTransfer {Object}
     * @param extras {Object}
     */

    constructor(kind, contractAddress, updatedAt, balance, lastTransfer, extras) {
        this.kind = kind
        this.contractAddress = contractAddress
        this.updatedAt = updatedAt
        this.balance = balance
        this.lastTransfer = lastTransfer
        this.extras = extras
    }

    /**
     * Constructs a <code>NFTTokenSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {NFTTokenSummary} obj Optional instance to populate.
     * @return {NFTTokenSummary} The populated <code>NFTTokenSummary</code> instance.
     * @memberof NFTTokenSummary
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NFTTokenSummary()

            if (data.hasOwnProperty('kind')) {
                obj.kind = ApiClient.convertToType(data.kind, 'String')
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj.contractAddress = ApiClient.convertToType(data.contractAddress, 'String')
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
            }
            if (data.hasOwnProperty('balance')) {
                obj.balance = ApiClient.convertToType(data.balance, 'String')
            }
            if (data.hasOwnProperty('lastTransfer')) {
                obj.lastTransfer = ApiClient.convertToType(data.lastTransfer, Object)
            }
            if (data.hasOwnProperty('extras')) {
                obj.extras = ApiClient.convertToType(data.extras, Object)
            }
        }
        return obj
    }
}

/**
 * Contract type
 * @type {String}
 * @memberof NFTTokenSummary
 */
NFTTokenSummary.prototype.kind = undefined
/**
 * Contract address (20-byte)
 * @type {String}
 * @memberof NFTTokenSummary
 */
NFTTokenSummary.prototype.contractAddress = undefined
/**
 * Last change in token ownership (timestamp)
 * @type {Number}
 * @memberof NFTTokenSummary
 */
NFTTokenSummary.prototype.updatedAt = undefined
/**
 * Token balance (in hexadecimal)
 * @type {String}
 * @memberof NFTTokenSummary
 */
NFTTokenSummary.prototype.balance = undefined
/**
 * @type {Object}
 * @memberof NFTTokenSummary
 */
NFTTokenSummary.prototype.lastTransfer = undefined
/**
 * @type {Object}
 * @memberof NFTTokenSummary
 */
NFTTokenSummary.prototype.extras = undefined

// Implement AnyOfPageableTokenSummaryItemsItems interface:

module.exports = NFTTokenSummary

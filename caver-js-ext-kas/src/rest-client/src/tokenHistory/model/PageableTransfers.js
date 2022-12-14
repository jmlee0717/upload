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
const TransferArray = require('./TransferArray')

/**
 * The PageableTransfers model module.
 * @class PageableTransfers
 * @version 1.0
 */
class PageableTransfers {
    /**
     * Constructs a new <code>PageableTransfers</code>.
     * @alias PageableTransfers
     * @class
     * @param items {TransferArray}
     * @param cursor {String} Next page cursor
     */

    constructor(items, cursor) {
        this.items = items
        this.cursor = cursor
    }

    /**
     * Constructs a <code>PageableTransfers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PageableTransfers} obj Optional instance to populate.
     * @return {PageableTransfers} The populated <code>PageableTransfers</code> instance.
     * @memberof PageableTransfers
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageableTransfers()

            if (data.hasOwnProperty('items')) {
                obj.items = TransferArray.constructFromObject(data.items)
            }
            if (data.hasOwnProperty('cursor')) {
                obj.cursor = ApiClient.convertToType(data.cursor, 'String')
            }
        }
        return obj
    }
}

/**
 * @type {TransferArray}
 * @memberof PageableTransfers
 */
PageableTransfers.prototype.items = undefined
/**
 * Next page cursor
 * @type {String}
 * @memberof PageableTransfers
 */
PageableTransfers.prototype.cursor = undefined

module.exports = PageableTransfers

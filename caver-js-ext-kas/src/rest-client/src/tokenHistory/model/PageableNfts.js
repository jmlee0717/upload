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
const Nft = require('./Nft')

/**
 * The PageableNfts model module.
 * @class PageableNfts
 * @version 1.0
 */
class PageableNfts {
    /**
     * Constructs a new <code>PageableNfts</code>.
     * @alias PageableNfts
     * @class
     * @param items {Array.<Nft>}
     * @param cursor {String} Next page cursor
     */

    constructor(items, cursor) {
        this.items = items
        this.cursor = cursor
    }

    /**
     * Constructs a <code>PageableNfts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PageableNfts} obj Optional instance to populate.
     * @return {PageableNfts} The populated <code>PageableNfts</code> instance.
     * @memberof PageableNfts
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageableNfts()

            if (data.hasOwnProperty('items')) {
                obj.items = ApiClient.convertToType(data.items, [Nft])
            }
            if (data.hasOwnProperty('cursor')) {
                obj.cursor = ApiClient.convertToType(data.cursor, 'String')
            }
        }
        return obj
    }
}

/**
 * @type {Array.<Nft>}
 * @memberof PageableNfts
 */
PageableNfts.prototype.items = undefined
/**
 * Next page cursor
 * @type {String}
 * @memberof PageableNfts
 */
PageableNfts.prototype.cursor = undefined

module.exports = PageableNfts
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
 * The MTTokenHolder model module.
 * @class MTTokenHolder
 * @version 1.0
 */
class MTTokenHolder {
    /**
     * Constructs a new <code>MTTokenHolder</code>.
     * @alias MTTokenHolder
     * @class
     * @param address {String} CA (20-byte)
     * @param totalHolder {Number} Number of tatal holder
     */

    constructor(address, totalHolder) {
        this.address = address
        this.totalHolder = totalHolder
    }

    /**
     * Constructs a <code>MTTokenHolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MTTokenHolder} obj Optional instance to populate.
     * @return {MTTokenHolder} The populated <code>MTTokenHolder</code> instance.
     * @memberof MTTokenHolder
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MTTokenHolder()

            if (data.hasOwnProperty('address')) {
                obj.address = ApiClient.convertToType(data.address, 'String')
            }
            if (data.hasOwnProperty('totalHolder')) {
                obj.totalHolder = ApiClient.convertToType(data.totalHolder, 'Number')
            }
        }
        return obj
    }
}

/**
 * CA(20-byte)
 * @type {String}
 * @memberof MTTokenHolder
 */
MTTokenHolder.prototype.address = undefined
/**
 * Number of tatal holder
 * @type {Number}
 * @memberof MTTokenHolder
 */
MTTokenHolder.prototype.totalHolder = undefined

module.exports = MTTokenHolder

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
 * The Mt model module.
 * @class Mt
 * @version 1.0
 */
class Mt {
    /**
     * Constructs a new <code>Mt</code>.
     * @alias Mt
     * @class
     * @param tokenId {String} Token ID (in hexadecimal)
     * @param totalSupply {String} Total issued amount (in hexadecimal)
     * @param tokenUri {String} Token URL
     */

    constructor(tokenId, totalSupply, tokenUri) {
        this.tokenId = tokenId
        this.totalSupply = totalSupply
        this.tokenUri = tokenUri
    }

    /**
     * Constructs a <code>Mt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Mt} obj Optional instance to populate.
     * @return {Mt} The populated <code>Mt</code> instance.
     * @memberof Mt
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Mt()

            if (data.hasOwnProperty('tokenId')) {
                obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj.totalSupply = ApiClient.convertToType(data.totalSupply, 'String')
            }
            if (data.hasOwnProperty('tokenUri')) {
                obj.tokenUri = ApiClient.convertToType(data.tokenUri, 'String')
            }
        }
        return obj
    }
}

/**
 * Token ID (in hexadecimal)
 * @type {String}
 * @memberof Mt
 */
Mt.prototype.tokenId = undefined
/**
 * Total issued amount (in hexadecimal)
 * @type {String}
 * @memberof Mt
 */
Mt.prototype.totalSupply = undefined
/**
 * Token URL
 * @type {String}
 * @memberof Mt
 */
Mt.prototype.tokenUri = undefined

module.exports = Mt

/**
 * Anchor API
 * # Introduction This document describes KAS (Klaytn API Service) Anchor API. Anchor API provides features sending metadata available to verify data reliability to ensure the reliability of service chain data to Klaytn main chain.  For more details on using the Anchor API, please refer to [Tutorial](https://docs.klaytnapi.com/tutorial/anchor-api).    # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1071010 | data don't exist 1071615 | its value is out of range; size 1072100 | same payload ID or payload was already anchored 1072101 | all configured accounts have insufficient funds |
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
const AnchorTransaction = require('./AnchorTransaction')

/**
 * The AnchorTransactions model module.
 * @class AnchorTransactions
 * @version 1.0
 */
class AnchorTransactions {
    /**
     * Constructs a new <code>AnchorTransactions</code>.
     * List of anchoring transactions
     * @alias AnchorTransactions
     * @class
     * @param cursor {String} Cursor information that represents its last location
     */

    constructor(cursor) {
        this.cursor = cursor
    }

    /**
     * Constructs a <code>AnchorTransactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AnchorTransactions} obj Optional instance to populate.
     * @return {AnchorTransactions} The populated <code>AnchorTransactions</code> instance.
     * @memberof AnchorTransactions
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnchorTransactions()

            if (data.hasOwnProperty('cursor')) {
                obj.cursor = ApiClient.convertToType(data.cursor, 'String')
            }
            if (data.hasOwnProperty('items')) {
                obj.items = ApiClient.convertToType(data.items, [AnchorTransaction])
            }
        }
        return obj
    }
}

/**
 * Cursor information that represents its last location
 * @type {String}
 * @memberof AnchorTransactions
 */
AnchorTransactions.prototype.cursor = undefined
/**
 * @type {Array.<AnchorTransaction>}
 * @memberof AnchorTransactions
 */
AnchorTransactions.prototype.items = undefined

module.exports = AnchorTransactions

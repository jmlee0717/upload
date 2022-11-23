/**
 * KIP-37 API
 * ## Introduction The KIP-37 API helps Blockchain app (BApp) developers to easily deploy smart contracts and send tokens of the [KIP-37 Multi Token Standard](https://kips.klaytn.com/KIPs/kip-37).  You can use the default contract managing account (`deployer`) and `alias`.    You can also manage the contracts and tokens created on the klaytn network using the caver SDK, using contract address and the [Wallet API](https://refs.klaytnapi.com/ko/wallet/latest) account.    ## Fee Payer Options  KAS KIP-37 supports four scenarios for paying transactin fees:      **1. Using only KAS Global FeePayer Account**   Sends all transactions using the KAS global FeePayer Account.       ``` {     \"options\": {       \"enableGlobalFeePayer\": true     }     } ```    <br />    **2. Using User FeePayer account**   Sends all transactions using the KAS User FeePayer Account.      ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```    <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account**   Uses User FeePayer Account as default. When the balance runs out, KAS Global FeePayer Account will be used.     ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```    <br />  **4. Not using FeePayer Account**   Sends a transaction via normal means where the sender pays the transaction fee.       ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ```
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
 * The Kip37TokenListResponseItem model module.
 * @class Kip37TokenListResponseItem
 * @version 1.0
 */
class Kip37TokenListResponseItem {
    /**
     * Constructs a new <code>Kip37TokenListResponseItem</code>.
     * @alias Kip37TokenListResponseItem
     * @class
     * @param tokenId {String} Token ID
     * @param owner {String} Klaytn account address of the token owner
     * @param tokenAddress {String} Contract address
     * @param totalSupply {String} Total token supply (in hex.)
     * @param tokenUri {String} Token URI
     * @param replacedTokenUri {String} Changed token URI. The token ID is used as the URI path.
     * @param balance {String} Balance (in hex.)
     * @param transactionHash {String} Latest transaction hash (32-byte)
     * @param transferFrom {String} The Klaytn account address of the sender of the lastest TransferSingle or TransferBatch
     * @param transferTo {String} The Klaytn account address of the receiver of the lastest TransferSingle or TransferBatch
     * @param updatedAt {String} Timestamp of the latest change in token data
     */

    constructor(
        tokenId,
        owner,
        tokenAddress,
        totalSupply,
        tokenUri,
        replacedTokenUri,
        balance,
        transactionHash,
        transferFrom,
        transferTo,
        updatedAt
    ) {
        this.tokenId = tokenId
        this.owner = owner
        this.tokenAddress = tokenAddress
        this.totalSupply = totalSupply
        this.tokenUri = tokenUri
        this.replacedTokenUri = replacedTokenUri
        this.balance = balance
        this.transactionHash = transactionHash
        this.transferFrom = transferFrom
        this.transferTo = transferTo
        this.updatedAt = updatedAt
    }

    /**
     * Constructs a <code>Kip37TokenListResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Kip37TokenListResponseItem} obj Optional instance to populate.
     * @return {Kip37TokenListResponseItem} The populated <code>Kip37TokenListResponseItem</code> instance.
     * @memberof Kip37TokenListResponseItem
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Kip37TokenListResponseItem()

            if (data.hasOwnProperty('tokenId')) {
                obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
            }
            if (data.hasOwnProperty('owner')) {
                obj.owner = ApiClient.convertToType(data.owner, 'String')
            }
            if (data.hasOwnProperty('tokenAddress')) {
                obj.tokenAddress = ApiClient.convertToType(data.tokenAddress, 'String')
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj.totalSupply = ApiClient.convertToType(data.totalSupply, 'String')
            }
            if (data.hasOwnProperty('tokenUri')) {
                obj.tokenUri = ApiClient.convertToType(data.tokenUri, 'String')
            }
            if (data.hasOwnProperty('replacedTokenUri')) {
                obj.replacedTokenUri = ApiClient.convertToType(data.replacedTokenUri, 'String')
            }
            if (data.hasOwnProperty('balance')) {
                obj.balance = ApiClient.convertToType(data.balance, 'String')
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            }
            if (data.hasOwnProperty('transferFrom')) {
                obj.transferFrom = ApiClient.convertToType(data.transferFrom, 'String')
            }
            if (data.hasOwnProperty('transferTo')) {
                obj.transferTo = ApiClient.convertToType(data.transferTo, 'String')
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'String')
            }
        }
        return obj
    }
}

/**
 * Token ID
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.tokenId = undefined
/**
 * Klaytn account address of the token owner
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.owner = undefined
/**
 * Contract address
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.tokenAddress = undefined
/**
 * Total token supply (in hex.)
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.totalSupply = undefined
/**
 * Token URI
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.tokenUri = undefined
/**
 * Changed token URI. The token ID is used as the URI path.
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.replacedTokenUri = undefined
/**
 * Balance (in hex.)
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.balance = undefined
/**
 * Latest transaction hash (32-byte)
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.transactionHash = undefined
/**
 * The Klaytn account address of the sender of the lastest TransferSingle or TransferBatch
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.transferFrom = undefined
/**
 * The Klaytn account address of the receiver of the lastest TransferSingle or TransferBatch
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.transferTo = undefined
/**
 * Timestamp of the latest change in token data
 * @type {String}
 * @memberof Kip37TokenListResponseItem
 */
Kip37TokenListResponseItem.prototype.updatedAt = undefined

module.exports = Kip37TokenListResponseItem

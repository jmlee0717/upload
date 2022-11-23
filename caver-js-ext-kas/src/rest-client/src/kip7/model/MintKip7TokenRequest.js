/**
 * KIP-7 API
 * # Introduction The KIP-17 API helps BApp (Blockchain Application) developers to manage contracts and tokens created in accordance with the [KIP-7](https://docs.klaytnapi.com/v/en/api#kip-7-api) standard, which is Klaytn's technical speficication for Fungible Tokens.  The functionality of the multiple endpoints enables you to do the following actions: - deploy smart contracts - manage the entire life cycle of an FT from minting, to sending and burning - get contract or token data - authorize a third party to execute token transfers - send tokens on behalf of the owner   For more details on KAS, please refer to [KAS Docs](https://docs.klaytnapi.com/). If you have any questions or comments, please leave them in the [Klaytn Developers Forum](http://forum.klaytn.com).    **alias**  When a method of the KIP-17 API requires a contract address, you can use the contract **alias**. You can give the contract an alias when deploying, and use it in place of the complicated address.  **deployer**  When you create a contract, you will be assigned one `deployer` address per Credential, which is the account address used for managing contracts. In KIP-7 API, this address is used in many different token-related operations. You can find the `deployer` address with [KIP7Deployer](#operation/GetDefaultDeployer).  Even with contracts created using SDKs like \"caver\", you can still use the contract address and [Wallet API](https://refs.klaytnapi.com/en/wallet/latest) account to manage your contracts and tokens.  # Fee Payer Options  KAS KIP-17 supports four ways to pay the transaction fees.<br />  **1. Only using KAS Global FeePayer Account** <br /> Sends all transactions using KAS Global FeePayer Account. ``` {     \"options\": {       \"enableGlobalFeePayer\": true     } } ```  <br />  **2. Using User FeePayer Account** <br /> Sends all transactions using User FeePayer Account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```  <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account** <br /> Sends transactions using User FeePayer Account by default, and switches to the KAS Global FeePayer Account when balances are insufficient. ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```  <br />  **4. Not using FeePayer Account** <br /> Sends transactions the default way, paying the transaction fee from the user's account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ```  # Error Code This section contains the errors that might occur when using the KIP-17 API. KAS uses HTTP status codes. More details can be found in this [link](https://developer.mozilla.org/en/docs/Web/HTTP/Status).
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
 * The MintKip7TokenRequest model module.
 * @class MintKip7TokenRequest
 * @version 1.0
 */
class MintKip7TokenRequest {
    /**
     * Constructs a new <code>MintKip7TokenRequest</code>.
     * @alias MintKip7TokenRequest
     * @class
     * @param to {String} The Klaytn account address to receive the new tokens.
     * @param amount {String} The amount of tokens to create (in hexadecimal)
     */

    constructor(to, amount) {
        this.to = to
        this.amount = amount
    }

    /**
     * Constructs a <code>MintKip7TokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MintKip7TokenRequest} obj Optional instance to populate.
     * @return {MintKip7TokenRequest} The populated <code>MintKip7TokenRequest</code> instance.
     * @memberof MintKip7TokenRequest
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MintKip7TokenRequest()

            if (data.hasOwnProperty('from')) {
                obj.from = ApiClient.convertToType(data.from, 'String')
            }
            if (data.hasOwnProperty('to')) {
                obj.to = ApiClient.convertToType(data.to, 'String')
            }
            if (data.hasOwnProperty('amount')) {
                obj.amount = ApiClient.convertToType(data.amount, 'String')
            }
        }
        return obj
    }
}

/**
 * The Klaytn account address to mint the tokens. The default value is the `deployer`'s account.
 * @type {String}
 * @memberof MintKip7TokenRequest
 */
MintKip7TokenRequest.prototype.from = undefined
/**
 * The Klaytn account address to receive the new tokens.
 * @type {String}
 * @memberof MintKip7TokenRequest
 */
MintKip7TokenRequest.prototype.to = undefined
/**
 * The amount of tokens to create (in hexadecimal)
 * @type {String}
 * @memberof MintKip7TokenRequest
 */
MintKip7TokenRequest.prototype.amount = undefined

module.exports = MintKip7TokenRequest

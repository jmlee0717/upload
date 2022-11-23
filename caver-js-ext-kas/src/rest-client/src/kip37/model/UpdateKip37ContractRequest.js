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
const Kip37FeePayerOptions = require('./Kip37FeePayerOptions')

/**
 * The UpdateKip37ContractRequest model module.
 * @class UpdateKip37ContractRequest
 * @version 1.0
 */
class UpdateKip37ContractRequest {
    /**
     * Constructs a new <code>UpdateKip37ContractRequest</code>.
     * @alias UpdateKip37ContractRequest
     * @class
     */

    constructor() {}

    /**
     * Constructs a <code>UpdateKip37ContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateKip37ContractRequest} obj Optional instance to populate.
     * @return {UpdateKip37ContractRequest} The populated <code>UpdateKip37ContractRequest</code> instance.
     * @memberof UpdateKip37ContractRequest
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateKip37ContractRequest()

            if (data.hasOwnProperty('options')) {
                obj.options = Kip37FeePayerOptions.constructFromObject(data.options)
            }
        }
        return obj
    }
}

/**
 * @type {Kip37FeePayerOptions}
 * @memberof UpdateKip37ContractRequest
 */
UpdateKip37ContractRequest.prototype.options = undefined

module.exports = UpdateKip37ContractRequest

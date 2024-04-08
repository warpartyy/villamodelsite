import {ThirdwebAuth} from '@thirdweb-dev/auth/next';
import {PrivateKeyWallet} from '@thirdweb-dev/auth/evm';


export const {ThirdwebAuthHandler, getUser} = ThirdwebAuth({
    wallet: new PrivateKeyWallet(process.env.MMPRIVATE_KEY || ""),
    domain: process.env.DOMAIN || "",
});

export default ThirdwebAuthHandler();

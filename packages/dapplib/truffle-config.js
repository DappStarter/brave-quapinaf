require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike rival magic artwork hover arctic metal gift'; 
let testAccounts = [
"0x0b24cba5b17e4456b255382c7ff55f90a53ecea3fb12b45d4fa1b29438274ef0",
"0x0ebed702845d94b75373a330ccc1fe86964c4da7c52ed5f72d98bce3b41f9845",
"0xd8de6f2bc017cf863dbd999bf3fb84f6007c7c7e061a47b7077e32b45e233271",
"0x6a77a554435604d994a10918b5e7f2b2bda778069b4b7c04a99aa184cdb5af57",
"0x3992671a64b33803e84927df1dd1e890f48e2d6fdfab569329b72149e75b2d7a",
"0x3148eff1c91a12b12ff8707c8fcb70353cbeb0b76e606e7588437e1efb42de3b",
"0xa1868d76f32587a36abe9e8b0b4f8c9831ad009a41ce0d4abdb04ad755cf2ff6",
"0x0039397457a2de7919e046e82d7af4e951f182d7047439e0ce844cff3f054661",
"0xb92081f94b4f9059d770cdec17c77a6341b43796fd33f92c761902d2a4131afb",
"0x013c53605617dcb44413e45461229df0f01f6890d202513c617d92fdcf5b37bc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

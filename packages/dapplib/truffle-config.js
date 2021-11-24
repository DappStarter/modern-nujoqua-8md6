require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rescue stick evil imitate prison equal gauge'; 
let testAccounts = [
"0xa7bb31ba4be12e23b18e65c3eac2965c174a6ae7d9ac9909daf49aade0b0c844",
"0x9fcd117dd312b59f3d5b1d18bd5215814766bf4db1ec75cf6524f852530684d6",
"0x75f642ad40802e0e7888ddb95efd485a80fc62c8b743b5e391b3e4481062aab4",
"0x84ff000b795d42de5e72ff03a600e4d95443dd47a411a005696e0f5922a6a375",
"0xd1b6a454ebaf63eade3029017b2862fb8a4267c74cd3b08aca0cf8ed8345876f",
"0x4e70df108853dcc1813ff9188262fea359ca1ec31a4048e1fa5221a9e20779e8",
"0xb2dbcfbf21ba59a8650223e995168ae08a9fdf3104780afa8787393d6d69b24d",
"0x528fb3568441837c0628dad88f2af26e0f43ca1a4cb439297a5815b5cdfa5845",
"0xed2a46ce9f49bed8bce99069a6d04843df79dcf627fb41d9fa81799568b77827",
"0x5eba86e150d544f89b133aeb63c3945d58f73ba7b4cd0a58912e9b7bf810b9ee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



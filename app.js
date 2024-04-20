// Install with: npm install @tatumio/tatum
const { TatumSDK, Network, MetaMask } = require("@tatumio/tatum");

(async () => {
  try {
    const tatum = await TatumSDK.init({ network: Network.ETHEREUM_SEPOLIA });
    const txId = await tatum.walletProvider.use(MetaMask).transferNative('0x5E16f694327470053c8724846a2e6756d781E785', '0.0420');
    console.log(txId);
  } catch (error) {
    console.error("Error signing transaction:", error);
  }
})();

// We have prepared a native transfer of 1.5 ETH from your default connected MetaMask account to the recipient of 0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263
// Result is a transaction IF of a broadcasted transaction
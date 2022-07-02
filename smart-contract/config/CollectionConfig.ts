import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ARGENTUMS',
  tokenName: 'ARGENTUMS NFT',
  tokenSymbol: 'ARGENTUMS',
  hiddenMetadataUri: 'ipfs://QmNxQc6ZdoU36uFfcHWPMJ7XrbQDjeGHZramduMB4Nehnq/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 3,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 5,
    maxMintAmountPerTx: 1,
  },
  contractAddress: null,
  marketplaceIdentifier: 'argentums',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

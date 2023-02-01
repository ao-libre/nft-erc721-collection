import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ArgentumsCollection',
  tokenName: 'ArgentumsCollection NFT',
  tokenSymbol: 'ArgentumsCollection',
  hiddenMetadataUri: 'https://raw.githubusercontent.com/ao-libre/nfts-assets/master/metadata/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x099010e1C0E193Ec050D35542DCa653F1C47b9Be",
  marketplaceIdentifier: 'argentums',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
import type { OnNameLookupHandler } from '@metamask/snaps-sdk';
import { Box, Text, Bold } from '@metamask/snaps-sdk/jsx';
import { ethers } from "ethers";
import { NAME_WRAP_ABI } from './nw.abi';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onNameLookup: OnNameLookupHandler = async (request) => {
  const { chainId, domain } = request
  console.log("######## onNameLookup", chainId, domain)
  if (domain && chainId === "eip155:22988") {
    const providerUrl = 'https://rpc.testnet.hii.network';  
    const provider = new ethers.JsonRpcProvider(providerUrl);
    const nameWrapper = new ethers.Contract(NAME_WRAP_ABI.address, NAME_WRAP_ABI.abi, provider);
    console.log("######## getBlockNumber", await provider.getBlockNumber())
    const node = ethers.namehash(domain);
    console.log("######## onNameLookup node", node)
    const resolvedAddress = await nameWrapper?.ownerOf?.(ethers.getBigInt(node))
    console.log("######## onNameLookup resolvedAddress", resolvedAddress)
    if (resolvedAddress) {
      return {
        resolvedAddresses: [
          { resolvedAddress, protocol: "Hii Domains", domainName: domain },
        ],
      }
    }
  }

  return null
}
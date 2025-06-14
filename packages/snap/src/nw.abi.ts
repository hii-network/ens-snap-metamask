export const NAME_WRAP_ABI = {
  "address": "0x2C9Ae8F4dEdB37B4Ca315649fC3F5fE44e9f8C7c",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract ENS",
          "name": "_ens",
          "type": "address"
        },
        {
          "internalType": "contract IBaseRegistrar",
          "name": "_registrar",
          "type": "address"
        },
        {
          "internalType": "contract IMetadataService",
          "name": "_metadataService",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "CannotUpgrade",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "IncompatibleParent",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "IncorrectTargetOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "IncorrectTokenType",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "labelHash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "expectedLabelhash",
          "type": "bytes32"
        }
      ],
      "name": "LabelMismatch",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        }
      ],
      "name": "LabelTooLong",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LabelTooShort",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NameIsNotWrapped",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        }
      ],
      "name": "OperationProhibited",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "Unauthorised",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "controller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        }
      ],
      "name": "ControllerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "name": "ExpiryExtended",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "fuses",
          "type": "uint32"
        }
      ],
      "name": "FusesSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "NameUnwrapped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "name",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "fuses",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "name": "NameWrapped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_tokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "uint32",
          "name": "fuseMask",
          "type": "uint32"
        }
      ],
      "name": "allFusesBurned",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "canExtendSubnames",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "canModifyName",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "controllers",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ens",
      "outputs": [
        {
          "internalType": "contract ENS",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "labelhash",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "name": "extendExpiry",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getData",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "fuses",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "labelhash",
          "type": "bytes32"
        }
      ],
      "name": "isWrapped",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        }
      ],
      "name": "isWrapped",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "metadataService",
      "outputs": [
        {
          "internalType": "contract IMetadataService",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "names",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "recoverFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wrappedOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "ownerControlledFuses",
          "type": "uint16"
        }
      ],
      "name": "registerAndWrapETH2LD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "registrarExpiry",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "registrar",
      "outputs": [
        {
          "internalType": "contract IBaseRegistrar",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        }
      ],
      "name": "renew",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "expires",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "labelhash",
          "type": "bytes32"
        },
        {
          "internalType": "uint32",
          "name": "fuses",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "name": "setChildFuses",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "controller",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        }
      ],
      "name": "setController",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "uint16",
          "name": "ownerControlledFuses",
          "type": "uint16"
        }
      ],
      "name": "setFuses",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IMetadataService",
          "name": "_metadataService",
          "type": "address"
        }
      ],
      "name": "setMetadataService",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "ttl",
          "type": "uint64"
        }
      ],
      "name": "setRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        }
      ],
      "name": "setResolver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "fuses",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "name": "setSubnodeOwner",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "ttl",
          "type": "uint64"
        },
        {
          "internalType": "uint32",
          "name": "fuses",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "name": "setSubnodeRecord",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "ttl",
          "type": "uint64"
        }
      ],
      "name": "setTTL",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract INameWrapperUpgrade",
          "name": "_upgradeAddress",
          "type": "address"
        }
      ],
      "name": "setUpgradeContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "labelhash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "controller",
          "type": "address"
        }
      ],
      "name": "unwrap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "labelhash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "registrant",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "controller",
          "type": "address"
        }
      ],
      "name": "unwrapETH2LD",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "name",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "extraData",
          "type": "bytes"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "upgradeContract",
      "outputs": [
        {
          "internalType": "contract INameWrapperUpgrade",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "name",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "wrappedOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        }
      ],
      "name": "wrap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wrappedOwner",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "ownerControlledFuses",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        }
      ],
      "name": "wrapETH2LD",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "expiry",
          "type": "uint64"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0xb4e043c11de9cd80f3ab611f94283122de1ee57c6331c1bf51f0e6f5b831c7e8",
  "receipt": {
    "to": null,
    "from": "0xb769BEFa05c7D9B08062630E351e865d3F49c56D",
    "contractAddress": "0x2C9Ae8F4dEdB37B4Ca315649fC3F5fE44e9f8C7c",
    "transactionIndex": 0,
    "gasUsed": "5487424",
    "logsBloom": "0x00000000080002000000001000020000000000000000000000800000100000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000008000000001000000000000000000000000000000000000020000000000000000000800000040000000000000000000000000400080000000000000000000000000000000000000000000200000000000000000000000000000000000000010001020000020000000000000008000041000000000080000000000000000001000005004000000000000002000080000000020000000000000000210000000000020000000000800001000000002000000000000",
    "blockHash": "0xfbc218316d610870364f6eb95f9baa328e738a935ad8230e4838a4924bd23c6a",
    "transactionHash": "0xb4e043c11de9cd80f3ab611f94283122de1ee57c6331c1bf51f0e6f5b831c7e8",
    "logs": [
      {
        "transactionIndex": 0,
        "blockNumber": 344736,
        "transactionHash": "0xb4e043c11de9cd80f3ab611f94283122de1ee57c6331c1bf51f0e6f5b831c7e8",
        "address": "0x2C9Ae8F4dEdB37B4Ca315649fC3F5fE44e9f8C7c",
        "topics": [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000b769befa05c7d9b08062630e351e865d3f49c56d"
        ],
        "data": "0x",
        "logIndex": 0,
        "blockHash": "0xfbc218316d610870364f6eb95f9baa328e738a935ad8230e4838a4924bd23c6a"
      },
      {
        "transactionIndex": 0,
        "blockNumber": 344736,
        "transactionHash": "0xb4e043c11de9cd80f3ab611f94283122de1ee57c6331c1bf51f0e6f5b831c7e8",
        "address": "0x237ee9886AEBDC8C269D58885Df53EBEeb2e9aC7",
        "topics": [
          "0x6ada868dd3058cf77a48a74489fd7963688e5464b2b0fa957ace976243270e92",
          "0x0000000000000000000000002c9ae8f4dedb37b4ca315649fc3f5fe44e9f8c7c",
          "0xcc1a71540dc67dd2700e8942afffcf52ca309fdaac39cc3f0490e73c59dcbd65"
        ],
        "data": "0x",
        "logIndex": 1,
        "blockHash": "0xfbc218316d610870364f6eb95f9baa328e738a935ad8230e4838a4924bd23c6a"
      },
      {
        "transactionIndex": 0,
        "blockNumber": 344736,
        "transactionHash": "0xb4e043c11de9cd80f3ab611f94283122de1ee57c6331c1bf51f0e6f5b831c7e8",
        "address": "0x4B10A480BDaC6cC27Be0e26F49c4fD3359Abba00",
        "topics": [
          "0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82",
          "0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2",
          "0xcbeb4c976a4b0195e3121a3c5818418ce6f1f87122ae0beb5375c58c7fdccff4"
        ],
        "data": "0x000000000000000000000000b769befa05c7d9b08062630e351e865d3f49c56d",
        "logIndex": 2,
        "blockHash": "0xfbc218316d610870364f6eb95f9baa328e738a935ad8230e4838a4924bd23c6a"
      }
    ],
    "blockNumber": 344736,
    "cumulativeGasUsed": "5487424",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0x4B10A480BDaC6cC27Be0e26F49c4fD3359Abba00",
    "0xE03C133611725147F90f86f581E739BA7e7692E9",
    "0xD143dd479688Bf1AF2616B6407cd826D9f5956ba"
  ],
  "numDeployments": 1,
  "solcInputHash": "a1e1d5b66dfd83a1d0fa11e304175e2f",
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"_ens\",\"type\":\"address\"},{\"internalType\":\"contract IBaseRegistrar\",\"name\":\"_registrar\",\"type\":\"address\"},{\"internalType\":\"contract IMetadataService\",\"name\":\"_metadataService\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"CannotUpgrade\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompatibleParent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"IncorrectTargetOwner\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncorrectTokenType\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"labelHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"expectedLabelhash\",\"type\":\"bytes32\"}],\"name\":\"LabelMismatch\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"}],\"name\":\"LabelTooLong\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LabelTooShort\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NameIsNotWrapped\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"OperationProhibited\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"Unauthorised\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"name\":\"ControllerChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"ExpiryExtended\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"}],\"name\":\"FusesSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"NameUnwrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"NameWrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_tokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint32\",\"name\":\"fuseMask\",\"type\":\"uint32\"}],\"name\":\"allFusesBurned\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"canExtendSubnames\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"canModifyName\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"controllers\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ens\",\"outputs\":[{\"internalType\":\"contract ENS\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"extendExpiry\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getData\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"}],\"name\":\"isWrapped\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"isWrapped\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"metadataService\",\"outputs\":[{\"internalType\":\"contract IMetadataService\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"names\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"recoverFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"wrappedOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"}],\"name\":\"registerAndWrapETH2LD\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"registrarExpiry\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"registrar\",\"outputs\":[{\"internalType\":\"contract IBaseRegistrar\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"renew\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"setChildFuses\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"name\":\"setController\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"}],\"name\":\"setFuses\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMetadataService\",\"name\":\"_metadataService\",\"type\":\"address\"}],\"name\":\"setMetadataService\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setRecord\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"setResolver\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"setSubnodeOwner\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"setSubnodeRecord\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setTTL\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract INameWrapperUpgrade\",\"name\":\"_upgradeAddress\",\"type\":\"address\"}],\"name\":\"setUpgradeContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"unwrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"registrant\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"unwrapETH2LD\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"upgrade\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"upgradeContract\",\"outputs\":[{\"internalType\":\"contract INameWrapperUpgrade\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"internalType\":\"address\",\"name\":\"wrappedOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"wrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"wrappedOwner\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"wrapETH2LD\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allFusesBurned(bytes32,uint32)\":{\"params\":{\"fuseMask\":\"The fuses you want to check\",\"node\":\"Namehash of the name\"},\"returns\":{\"_0\":\"Boolean of whether or not all the selected fuses are burned\"}},\"approve(address,uint256)\":{\"params\":{\"to\":\"address to approve\",\"tokenId\":\"name to approve\"}},\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.\"},\"canExtendSubnames(bytes32,address)\":{\"params\":{\"addr\":\"which address to check permissions for\",\"node\":\"namehash of the name to check\"},\"returns\":{\"_0\":\"whether or not is owner/operator or approved\"}},\"canModifyName(bytes32,address)\":{\"params\":{\"addr\":\"which address to check permissions for\",\"node\":\"namehash of the name to check\"},\"returns\":{\"_0\":\"whether or not is owner or operator\"}},\"extendExpiry(bytes32,bytes32,uint64)\":{\"params\":{\"expiry\":\"When the name will expire in seconds since the Unix epoch\",\"labelhash\":\"Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')\",\"parentNode\":\"Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')\"},\"returns\":{\"_0\":\"New expiry\"}},\"getApproved(uint256)\":{\"params\":{\"id\":\"Namehash of the name\"},\"returns\":{\"operator\":\"Approved operator of a name\"}},\"getData(uint256)\":{\"params\":{\"id\":\"Namehash of the name\"},\"returns\":{\"expiry\":\"Expiry of the name\",\"fuses\":\"Fuses of the name\",\"owner\":\"Owner of the name\"}},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"isWrapped(bytes32)\":{\"params\":{\"node\":\"Namehash of the name\"},\"returns\":{\"_0\":\"Boolean of whether or not the name is wrapped\"}},\"isWrapped(bytes32,bytes32)\":{\"params\":{\"labelhash\":\"Namehash of the name\",\"parentNode\":\"Namehash of the name\"},\"returns\":{\"_0\":\"Boolean of whether or not the name is wrapped\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"params\":{\"id\":\"Label as a string of the .eth domain to wrap\"},\"returns\":{\"owner\":\"The owner of the name\"}},\"recoverFunds(address,address,uint256)\":{\"details\":\"The contract is Ownable and only the owner can call the recover function.\",\"params\":{\"_amount\":\"The amount of tokens to recover.\",\"_to\":\"The address to send the tokens to.\",\"_token\":\"The address of the ERC20 token to recover\"}},\"registerAndWrapETH2LD(string,address,uint256,address,uint16)\":{\"details\":\"Registers a new .eth second-level domain and wraps it.      Only callable by authorised controllers.\",\"params\":{\"duration\":\"The duration, in seconds, to register the name for.\",\"label\":\"The label to register (Eg, 'foo' for 'foo.hii').\",\"ownerControlledFuses\":\"Initial owner-controlled fuses to set\",\"resolver\":\"The resolver address to set on the ENS registry (optional).\",\"wrappedOwner\":\"The owner of the wrapped name.\"},\"returns\":{\"registrarExpiry\":\"The expiry date of the new name on the .eth registrar, in seconds since the Unix epoch.\"}},\"renew(uint256,uint256)\":{\"details\":\"Only callable by authorised controllers.\",\"params\":{\"duration\":\"The number of seconds to renew the name for.\",\"tokenId\":\"The hash of the label to register (eg, `keccak256('foo')`, for 'foo.hii').\"},\"returns\":{\"expires\":\"The expiry date of the name on the .eth registrar, in seconds since the Unix epoch.\"}},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"setChildFuses(bytes32,bytes32,uint32,uint64)\":{\"params\":{\"expiry\":\"When the name will expire in seconds since the Unix epoch\",\"fuses\":\"Fuses to burn\",\"labelhash\":\"Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')\",\"parentNode\":\"Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')\"}},\"setFuses(bytes32,uint16)\":{\"params\":{\"node\":\"Namehash of the name\",\"ownerControlledFuses\":\"Owner-controlled fuses to burn\"},\"returns\":{\"_0\":\"Old fuses\"}},\"setMetadataService(address)\":{\"params\":{\"_metadataService\":\"The new metadata service\"}},\"setRecord(bytes32,address,address,uint64)\":{\"params\":{\"node\":\"Namehash of the name to set a record for\",\"owner\":\"New owner in the registry\",\"resolver\":\"Resolver contract\",\"ttl\":\"Time to live in the registry\"}},\"setResolver(bytes32,address)\":{\"params\":{\"node\":\"namehash of the name\",\"resolver\":\"the resolver contract\"}},\"setSubnodeOwner(bytes32,string,address,uint32,uint64)\":{\"params\":{\"expiry\":\"When the name will expire in seconds since the Unix epoch\",\"fuses\":\"Initial fuses for the wrapped subdomain\",\"label\":\"Label of the subdomain as a string\",\"owner\":\"New owner in the wrapper\",\"parentNode\":\"Parent namehash of the subdomain\"},\"returns\":{\"node\":\"Namehash of the subdomain\"}},\"setSubnodeRecord(bytes32,string,address,address,uint64,uint32,uint64)\":{\"params\":{\"expiry\":\"When the name will expire in seconds since the Unix epoch\",\"fuses\":\"initial fuses for the wrapped subdomain\",\"label\":\"label of the subdomain as a string\",\"owner\":\"new owner in the wrapper\",\"parentNode\":\"parent namehash of the subdomain\",\"resolver\":\"resolver contract in the registry\",\"ttl\":\"ttl in the registry\"},\"returns\":{\"node\":\"Namehash of the subdomain\"}},\"setTTL(bytes32,uint64)\":{\"params\":{\"node\":\"Namehash of the name\",\"ttl\":\"TTL in the registry\"}},\"setUpgradeContract(address)\":{\"details\":\"The default value of upgradeContract is the 0 address. Use the 0 address at any time to make the contract not upgradable.\",\"params\":{\"_upgradeAddress\":\"address of an upgraded contract\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"unwrap(bytes32,bytes32,address)\":{\"details\":\"Can be called by the owner in the wrapper or an authorised caller in the wrapper\",\"params\":{\"controller\":\"Sets the owner in the registry to this address\",\"labelhash\":\"Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')\",\"parentNode\":\"Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')\"}},\"unwrapETH2LD(bytes32,address,address)\":{\"details\":\"Can be called by the owner in the wrapper or an authorised caller in the wrapper\",\"params\":{\"controller\":\"Sets the owner in the registry to this address\",\"labelhash\":\"Labelhash of the .eth domain\",\"registrant\":\"Sets the owner in the .eth registrar to this address\"}},\"upgrade(bytes,bytes)\":{\"details\":\"Can be called by the owner or an authorised caller\",\"params\":{\"extraData\":\"Extra data to pass to the upgrade contract\",\"name\":\"The name to upgrade, in DNS format\"}},\"uri(uint256)\":{\"params\":{\"tokenId\":\"The id of the token\"},\"returns\":{\"_0\":\"string uri of the metadata service\"}},\"wrap(bytes,address,address)\":{\"details\":\"Can be called by the owner in the registry or an authorised caller in the registry\",\"params\":{\"name\":\"The name to wrap, in DNS format\",\"resolver\":\"Resolver contract\",\"wrappedOwner\":\"Owner of the name in this contract\"}},\"wrapETH2LD(string,address,uint16,address)\":{\"details\":\"Can be called by the owner of the name on the .eth registrar or an authorised caller on the registrar\",\"params\":{\"label\":\"Label as a string of the .eth domain to wrap\",\"ownerControlledFuses\":\"Initial owner-controlled fuses to set\",\"resolver\":\"Resolver contract address\",\"wrappedOwner\":\"Owner of the name in this contract\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"allFusesBurned(bytes32,uint32)\":{\"notice\":\"Checks all Fuses in the mask are burned for the node\"},\"approve(address,uint256)\":{\"notice\":\"Approves an address for a name\"},\"canExtendSubnames(bytes32,address)\":{\"notice\":\"Checks if owner/operator or approved by owner\"},\"canModifyName(bytes32,address)\":{\"notice\":\"Checks if owner or operator of the owner\"},\"extendExpiry(bytes32,bytes32,uint64)\":{\"notice\":\"Extends expiry for a name\"},\"getApproved(uint256)\":{\"notice\":\"Gets the owner of a name\"},\"getData(uint256)\":{\"notice\":\"Gets the data for a name\"},\"isWrapped(bytes32)\":{\"notice\":\"Checks if a name is wrapped\"},\"isWrapped(bytes32,bytes32)\":{\"notice\":\"Checks if a name is wrapped in a more gas efficient way\"},\"ownerOf(uint256)\":{\"notice\":\"Gets the owner of a name\"},\"recoverFunds(address,address,uint256)\":{\"notice\":\"Recover ERC20 tokens sent to the contract by mistake.\"},\"renew(uint256,uint256)\":{\"notice\":\"Renews a .eth second-level domain.\"},\"setChildFuses(bytes32,bytes32,uint32,uint64)\":{\"notice\":\"Sets fuses of a name that you own the parent of\"},\"setFuses(bytes32,uint16)\":{\"notice\":\"Sets fuses of a name\"},\"setMetadataService(address)\":{\"notice\":\"Set the metadata service. Only the owner can do this\"},\"setRecord(bytes32,address,address,uint64)\":{\"notice\":\"Sets records for the name in the ENS Registry\"},\"setResolver(bytes32,address)\":{\"notice\":\"Sets resolver contract in the registry\"},\"setSubnodeOwner(bytes32,string,address,uint32,uint64)\":{\"notice\":\"Sets the subdomain owner in the registry and then wraps the subdomain\"},\"setSubnodeRecord(bytes32,string,address,address,uint64,uint32,uint64)\":{\"notice\":\"Sets the subdomain owner in the registry with records and then wraps the subdomain\"},\"setTTL(bytes32,uint64)\":{\"notice\":\"Sets TTL in the registry\"},\"setUpgradeContract(address)\":{\"notice\":\"Set the address of the upgradeContract of the contract. only admin can do this\"},\"unwrap(bytes32,bytes32,address)\":{\"notice\":\"Unwraps a non .eth domain, of any kind. Could be a DNSSEC name vitalik.xyz or a subdomain\"},\"unwrapETH2LD(bytes32,address,address)\":{\"notice\":\"Unwraps a .eth domain. e.g. vitalik.eth\"},\"upgrade(bytes,bytes)\":{\"notice\":\"Upgrades a domain of any kind. Could be a .eth name vitalik.eth, a DNSSEC name vitalik.xyz, or a subdomain\"},\"uri(uint256)\":{\"notice\":\"Get the metadata uri\"},\"wrap(bytes,address,address)\":{\"notice\":\"Wraps a non .eth domain, of any kind. Could be a DNSSEC name vitalik.xyz or a subdomain\"},\"wrapETH2LD(string,address,uint16,address)\":{\"notice\":\"Wraps a .eth domain, creating a new token and sending the original ERC721 token to this contract\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/wrapper/NameWrapper.sol\":\"NameWrapper\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":1200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155 is IERC165 {\\n    /**\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\n     */\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\n\\n    /**\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\n     * transfers.\\n     */\\n    event TransferBatch(\\n        address indexed operator,\\n        address indexed from,\\n        address indexed to,\\n        uint256[] ids,\\n        uint256[] values\\n    );\\n\\n    /**\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\n     * `approved`.\\n     */\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\n     *\\n     * If an {URI} event was emitted for `id`, the standard\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\n     * returned by {IERC1155MetadataURI-uri}.\\n     */\\n    event URI(string value, uint256 indexed id);\\n\\n    /**\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\n     *\\n     * Requirements:\\n     *\\n     * - `accounts` and `ids` must have the same length.\\n     */\\n    function balanceOfBatch(\\n        address[] calldata accounts,\\n        uint256[] calldata ids\\n    ) external view returns (uint256[] memory);\\n\\n    /**\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `operator` cannot be the caller.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\n     *\\n     * See {setApprovalForAll}.\\n     */\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] calldata ids,\\n        uint256[] calldata amounts,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0xcab667ddad478ff0d39c2053ca77fac778af8483c18ab07d810277b4216fd582\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev _Available since v3.1._\\n */\\ninterface IERC1155Receiver is IERC165 {\\n    /**\\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\\n     *\\n     * NOTE: To accept the transfer, this must return\\n     * `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))`\\n     * (i.e. 0xf23a6e61, or its own function selector).\\n     *\\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param id The ID of the token being transferred\\n     * @param value The amount of tokens being transferred\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\\n     */\\n    function onERC1155Received(\\n        address operator,\\n        address from,\\n        uint256 id,\\n        uint256 value,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n\\n    /**\\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\\n     * been updated.\\n     *\\n     * NOTE: To accept the transfer(s), this must return\\n     * `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))`\\n     * (i.e. 0xbc197c81, or its own function selector).\\n     *\\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\\n     */\\n    function onERC1155BatchReceived(\\n        address operator,\\n        address from,\\n        uint256[] calldata ids,\\n        uint256[] calldata values,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC1155.sol\\\";\\n\\n/**\\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155MetadataURI is IERC1155 {\\n    /**\\n     * @dev Returns the URI for token type `id`.\\n     *\\n     * If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by\\n     * clients with the actual token type ID.\\n     */\\n    function uri(uint256 id) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 amount) external returns (bool);\\n}\\n\",\"keccak256\":\"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721\\n     * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must\\n     * understand this adds an external call which potentially creates a reentrancy vulnerability.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title ERC721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     *\\n     * Furthermore, `isContract` will also return true if the target contract within\\n     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\\n     * which only has an effect at the end of a transaction.\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\\"Address: call to non-contract\\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n\",\"keccak256\":\"0xa92e4fa126feb6907daa0513ddd816b2eb91f30a808de54f63c17d0e162c3439\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"contracts/ethregistrar/IBaseRegistrar.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ^0.8.4;\\n\\nimport \\\"../registry/ENS.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\\";\\n\\ninterface IBaseRegistrar is IERC721 {\\n    event ControllerAdded(address indexed controller);\\n    event ControllerRemoved(address indexed controller);\\n    event NameMigrated(\\n        uint256 indexed id,\\n        address indexed owner,\\n        uint256 expires\\n    );\\n    event NameRegistered(\\n        uint256 indexed id,\\n        address indexed owner,\\n        uint256 expires\\n    );\\n    event NameRenewed(uint256 indexed id, uint256 expires);\\n\\n    // Authorises a controller, who can register and renew domains.\\n    function addController(address controller) external;\\n\\n    // Revoke controller permission for an address.\\n    function removeController(address controller) external;\\n\\n    // Set the resolver for the TLD this registrar manages.\\n    function setResolver(address resolver) external;\\n\\n    // Returns the expiration timestamp of the specified label hash.\\n    function nameExpires(uint256 id) external view returns (uint256);\\n\\n    // Returns true if the specified name is available for registration.\\n    function available(uint256 id) external view returns (bool);\\n\\n    /// @dev Register a name.\\n    function register(\\n        uint256 id,\\n        address owner,\\n        uint256 duration\\n    ) external returns (uint256);\\n\\n    function renew(uint256 id, uint256 duration) external returns (uint256);\\n\\n    /// @dev Reclaim ownership of a name in ENS, if you own it in the registrar.\\n    function reclaim(uint256 id, address owner) external;\\n}\\n\",\"keccak256\":\"0x984447817adfb8fc76447da9c24a492379bcfa4cd4e7ed8e795ea1981be3db83\",\"license\":\"MIT\"},\"contracts/registry/ENS.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity >=0.8.4;\\n\\ninterface ENS {\\n    // Logged when the owner of a node assigns a new owner to a subnode.\\n    event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);\\n\\n    // Logged when the owner of a node transfers ownership to a new account.\\n    event Transfer(bytes32 indexed node, address owner);\\n\\n    // Logged when the resolver for a node changes.\\n    event NewResolver(bytes32 indexed node, address resolver);\\n\\n    // Logged when the TTL of a node changes\\n    event NewTTL(bytes32 indexed node, uint64 ttl);\\n\\n    // Logged when an operator is added or removed.\\n    event ApprovalForAll(\\n        address indexed owner,\\n        address indexed operator,\\n        bool approved\\n    );\\n\\n    function setRecord(\\n        bytes32 node,\\n        address owner,\\n        address resolver,\\n        uint64 ttl\\n    ) external;\\n\\n    function setSubnodeRecord(\\n        bytes32 node,\\n        bytes32 label,\\n        address owner,\\n        address resolver,\\n        uint64 ttl\\n    ) external;\\n\\n    function setSubnodeOwner(\\n        bytes32 node,\\n        bytes32 label,\\n        address owner\\n    ) external returns (bytes32);\\n\\n    function setResolver(bytes32 node, address resolver) external;\\n\\n    function setOwner(bytes32 node, address owner) external;\\n\\n    function setTTL(bytes32 node, uint64 ttl) external;\\n\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    function owner(bytes32 node) external view returns (address);\\n\\n    function resolver(bytes32 node) external view returns (address);\\n\\n    function ttl(bytes32 node) external view returns (uint64);\\n\\n    function recordExists(bytes32 node) external view returns (bool);\\n\\n    function isApprovedForAll(\\n        address owner,\\n        address operator\\n    ) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x8e208b44d5dbf22552fe72d79b45c640855b84fbc9ee21f4c3bb4bfe81cbe8db\",\"license\":\"MIT\"},\"contracts/reverseRegistrar/IReverseRegistrar.sol\":{\"content\":\"pragma solidity >=0.8.4;\\n\\ninterface IReverseRegistrar {\\n    function setDefaultResolver(address resolver) external;\\n\\n    function claim(address owner) external returns (bytes32);\\n\\n    function claimForAddr(\\n        address addr,\\n        address owner,\\n        address resolver\\n    ) external returns (bytes32);\\n\\n    function claimWithResolver(\\n        address owner,\\n        address resolver\\n    ) external returns (bytes32);\\n\\n    function setName(string memory name) external returns (bytes32);\\n\\n    function setNameForAddr(\\n        address addr,\\n        address owner,\\n        address resolver,\\n        string memory name\\n    ) external returns (bytes32);\\n\\n    function node(address addr) external pure returns (bytes32);\\n}\\n\",\"keccak256\":\"0x83adfcf6da72b1bcd1e3ac387afe5fc7fdf7f2ac28b7601544d2ca4b9d45d159\"},\"contracts/reverseRegistrar/ReverseClaimer.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity >=0.8.17 <0.9.0;\\n\\nimport {ENS} from \\\"../registry/ENS.sol\\\";\\nimport {IReverseRegistrar} from \\\"../reverseRegistrar/IReverseRegistrar.sol\\\";\\n\\ncontract ReverseClaimer {\\n    bytes32 constant ADDR_REVERSE_NODE =\\n        0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2;\\n\\n    constructor(ENS ens, address claimant) {\\n        IReverseRegistrar reverseRegistrar = IReverseRegistrar(\\n            ens.owner(ADDR_REVERSE_NODE)\\n        );\\n        reverseRegistrar.claim(claimant);\\n    }\\n}\\n\",\"keccak256\":\"0x78a28627241535b595f6fff476a1fa7acc90c80684fe7784734920fc8af6fc22\",\"license\":\"MIT\"},\"contracts/utils/BytesUtils.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ^0.8.4;\\n\\nlibrary BytesUtils {\\n    error OffsetOutOfBoundsError(uint256 offset, uint256 length);\\n\\n    /// @dev Returns the keccak-256 hash of a byte range.\\n    /// @param self The byte string to hash.\\n    /// @param offset The position to start hashing at.\\n    /// @param len The number of bytes to hash.\\n    /// @return ret The hash of the byte range.\\n    function keccak(\\n        bytes memory self,\\n        uint256 offset,\\n        uint256 len\\n    ) internal pure returns (bytes32 ret) {\\n        require(offset + len <= self.length);\\n        assembly {\\n            ret := keccak256(add(add(self, 32), offset), len)\\n        }\\n    }\\n\\n    /// @dev Returns a positive number if `other` comes lexicographically after\\n    ///      `self`, a negative number if it comes before, or zero if the\\n    ///      contents of the two bytes are equal.\\n    /// @param self The first bytes to compare.\\n    /// @param other The second bytes to compare.\\n    /// @return The result of the comparison.\\n    function compare(\\n        bytes memory self,\\n        bytes memory other\\n    ) internal pure returns (int256) {\\n        return compare(self, 0, self.length, other, 0, other.length);\\n    }\\n\\n    /// @dev Returns a positive number if `other` comes lexicographically after\\n    ///      `self`, a negative number if it comes before, or zero if the\\n    ///      contents of the two bytes are equal. Comparison is done per-rune,\\n    ///      on unicode codepoints.\\n    /// @param self The first bytes to compare.\\n    /// @param offset The offset of self.\\n    /// @param len    The length of self.\\n    /// @param other The second bytes to compare.\\n    /// @param otheroffset The offset of the other string.\\n    /// @param otherlen    The length of the other string.\\n    /// @return The result of the comparison.\\n    function compare(\\n        bytes memory self,\\n        uint256 offset,\\n        uint256 len,\\n        bytes memory other,\\n        uint256 otheroffset,\\n        uint256 otherlen\\n    ) internal pure returns (int256) {\\n        if (offset + len > self.length) {\\n            revert OffsetOutOfBoundsError(offset + len, self.length);\\n        }\\n        if (otheroffset + otherlen > other.length) {\\n            revert OffsetOutOfBoundsError(otheroffset + otherlen, other.length);\\n        }\\n\\n        uint256 shortest = len;\\n        if (otherlen < len) shortest = otherlen;\\n\\n        uint256 selfptr;\\n        uint256 otherptr;\\n\\n        assembly {\\n            selfptr := add(self, add(offset, 32))\\n            otherptr := add(other, add(otheroffset, 32))\\n        }\\n        for (uint256 idx = 0; idx < shortest; idx += 32) {\\n            uint256 a;\\n            uint256 b;\\n            assembly {\\n                a := mload(selfptr)\\n                b := mload(otherptr)\\n            }\\n            if (a != b) {\\n                uint256 rest = shortest - idx;\\n                if (rest < 32) {\\n                    // shift out the irrelevant bits\\n                    rest = (32 - rest) << 3; // bits to drop\\n                    a >>= rest;\\n                    b >>= rest;\\n                }\\n                if (a < b) {\\n                    return -1;\\n                } else if (a > b) {\\n                    return 1;\\n                }\\n            }\\n            selfptr += 32;\\n            otherptr += 32;\\n        }\\n\\n        return int256(len) - int256(otherlen);\\n    }\\n\\n    /// @dev Returns true if the two byte ranges are equal.\\n    /// @param self The first byte range to compare.\\n    /// @param offset The offset into the first byte range.\\n    /// @param other The second byte range to compare.\\n    /// @param otherOffset The offset into the second byte range.\\n    /// @param len The number of bytes to compare\\n    /// @return True if the byte ranges are equal, false otherwise.\\n    function equals(\\n        bytes memory self,\\n        uint256 offset,\\n        bytes memory other,\\n        uint256 otherOffset,\\n        uint256 len\\n    ) internal pure returns (bool) {\\n        return keccak(self, offset, len) == keccak(other, otherOffset, len);\\n    }\\n\\n    /// @dev Returns true if the two byte ranges are equal with offsets.\\n    /// @param self The first byte range to compare.\\n    /// @param offset The offset into the first byte range.\\n    /// @param other The second byte range to compare.\\n    /// @param otherOffset The offset into the second byte range.\\n    /// @return True if the byte ranges are equal, false otherwise.\\n    function equals(\\n        bytes memory self,\\n        uint256 offset,\\n        bytes memory other,\\n        uint256 otherOffset\\n    ) internal pure returns (bool) {\\n        return\\n            keccak(self, offset, self.length - offset) ==\\n            keccak(other, otherOffset, other.length - otherOffset);\\n    }\\n\\n    /// @dev Compares a range of 'self' to all of 'other' and returns True iff\\n    ///      they are equal.\\n    /// @param self The first byte range to compare.\\n    /// @param offset The offset into the first byte range.\\n    /// @param other The second byte range to compare.\\n    /// @return True if the byte ranges are equal, false otherwise.\\n    function equals(\\n        bytes memory self,\\n        uint256 offset,\\n        bytes memory other\\n    ) internal pure returns (bool) {\\n        return\\n            self.length == offset + other.length &&\\n            equals(self, offset, other, 0, other.length);\\n    }\\n\\n    /// @dev Returns true if the two byte ranges are equal.\\n    /// @param self The first byte range to compare.\\n    /// @param other The second byte range to compare.\\n    /// @return True if the byte ranges are equal, false otherwise.\\n    function equals(\\n        bytes memory self,\\n        bytes memory other\\n    ) internal pure returns (bool) {\\n        return\\n            self.length == other.length &&\\n            equals(self, 0, other, 0, self.length);\\n    }\\n\\n    /// @dev Returns the 8-bit number at the specified index of self.\\n    /// @param self The byte string.\\n    /// @param idx The index into the bytes\\n    /// @return ret The specified 8 bits of the string, interpreted as an integer.\\n    function readUint8(\\n        bytes memory self,\\n        uint256 idx\\n    ) internal pure returns (uint8 ret) {\\n        return uint8(self[idx]);\\n    }\\n\\n    /// @dev Returns the 16-bit number at the specified index of self.\\n    /// @param self The byte string.\\n    /// @param idx The index into the bytes\\n    /// @return ret The specified 16 bits of the string, interpreted as an integer.\\n    function readUint16(\\n        bytes memory self,\\n        uint256 idx\\n    ) internal pure returns (uint16 ret) {\\n        require(idx + 2 <= self.length);\\n        assembly {\\n            ret := and(mload(add(add(self, 2), idx)), 0xFFFF)\\n        }\\n    }\\n\\n    /// @dev Returns the 32-bit number at the specified index of self.\\n    /// @param self The byte string.\\n    /// @param idx The index into the bytes\\n    /// @return ret The specified 32 bits of the string, interpreted as an integer.\\n    function readUint32(\\n        bytes memory self,\\n        uint256 idx\\n    ) internal pure returns (uint32 ret) {\\n        require(idx + 4 <= self.length);\\n        assembly {\\n            ret := and(mload(add(add(self, 4), idx)), 0xFFFFFFFF)\\n        }\\n    }\\n\\n    /// @dev Returns the 32 byte value at the specified index of self.\\n    /// @param self The byte string.\\n    /// @param idx The index into the bytes\\n    /// @return ret The specified 32 bytes of the string.\\n    function readBytes32(\\n        bytes memory self,\\n        uint256 idx\\n    ) internal pure returns (bytes32 ret) {\\n        require(idx + 32 <= self.length);\\n        assembly {\\n            ret := mload(add(add(self, 32), idx))\\n        }\\n    }\\n\\n    /// @dev Returns the 32 byte value at the specified index of self.\\n    /// @param self The byte string.\\n    /// @param idx The index into the bytes\\n    /// @return ret The specified 32 bytes of the string.\\n    function readBytes20(\\n        bytes memory self,\\n        uint256 idx\\n    ) internal pure returns (bytes20 ret) {\\n        require(idx + 20 <= self.length);\\n        assembly {\\n            ret := and(\\n                mload(add(add(self, 32), idx)),\\n                0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000000\\n            )\\n        }\\n    }\\n\\n    /// @dev Returns the n byte value at the specified index of self.\\n    /// @param self The byte string.\\n    /// @param idx The index into the bytes.\\n    /// @param len The number of bytes.\\n    /// @return ret The specified 32 bytes of the string.\\n    function readBytesN(\\n        bytes memory self,\\n        uint256 idx,\\n        uint256 len\\n    ) internal pure returns (bytes32 ret) {\\n        require(len <= 32);\\n        require(idx + len <= self.length);\\n        assembly {\\n            let mask := not(sub(exp(256, sub(32, len)), 1))\\n            ret := and(mload(add(add(self, 32), idx)), mask)\\n        }\\n    }\\n\\n    function memcpy(uint256 dest, uint256 src, uint256 len) private pure {\\n        // Copy word-length chunks while possible\\n        for (; len >= 32; len -= 32) {\\n            assembly {\\n                mstore(dest, mload(src))\\n            }\\n            dest += 32;\\n            src += 32;\\n        }\\n\\n        // Copy remaining bytes\\n        unchecked {\\n            uint256 mask = (256 ** (32 - len)) - 1;\\n            assembly {\\n                let srcpart := and(mload(src), not(mask))\\n                let destpart := and(mload(dest), mask)\\n                mstore(dest, or(destpart, srcpart))\\n            }\\n        }\\n    }\\n\\n    /// @dev Copies a substring into a new byte string.\\n    /// @param self The byte string to copy from.\\n    /// @param offset The offset to start copying at.\\n    /// @param len The number of bytes to copy.\\n    function substring(\\n        bytes memory self,\\n        uint256 offset,\\n        uint256 len\\n    ) internal pure returns (bytes memory) {\\n        require(offset + len <= self.length);\\n\\n        bytes memory ret = new bytes(len);\\n        uint256 dest;\\n        uint256 src;\\n\\n        assembly {\\n            dest := add(ret, 32)\\n            src := add(add(self, 32), offset)\\n        }\\n        memcpy(dest, src, len);\\n\\n        return ret;\\n    }\\n\\n    // Maps characters from 0x30 to 0x7A to their base32 values.\\n    // 0xFF represents invalid characters in that range.\\n    bytes constant base32HexTable =\\n        hex\\\"00010203040506070809FFFFFFFFFFFFFF0A0B0C0D0E0F101112131415161718191A1B1C1D1E1FFFFFFFFFFFFFFFFFFFFF0A0B0C0D0E0F101112131415161718191A1B1C1D1E1F\\\";\\n\\n    /// @dev Decodes unpadded base32 data of up to one word in length.\\n    /// @param self The data to decode.\\n    /// @param off Offset into the string to start at.\\n    /// @param len Number of characters to decode.\\n    /// @return The decoded data, left aligned.\\n    function base32HexDecodeWord(\\n        bytes memory self,\\n        uint256 off,\\n        uint256 len\\n    ) internal pure returns (bytes32) {\\n        require(len <= 52);\\n\\n        uint256 ret = 0;\\n        uint8 decoded;\\n        for (uint256 i = 0; i < len; i++) {\\n            bytes1 char = self[off + i];\\n            require(char >= 0x30 && char <= 0x7A);\\n            decoded = uint8(base32HexTable[uint256(uint8(char)) - 0x30]);\\n            require(decoded <= 0x20);\\n            if (i == len - 1) {\\n                break;\\n            }\\n            ret = (ret << 5) | decoded;\\n        }\\n\\n        uint256 bitlen = len * 5;\\n        if (len % 8 == 0) {\\n            // Multiple of 8 characters, no padding\\n            ret = (ret << 5) | decoded;\\n        } else if (len % 8 == 2) {\\n            // Two extra characters - 1 byte\\n            ret = (ret << 3) | (decoded >> 2);\\n            bitlen -= 2;\\n        } else if (len % 8 == 4) {\\n            // Four extra characters - 2 bytes\\n            ret = (ret << 1) | (decoded >> 4);\\n            bitlen -= 4;\\n        } else if (len % 8 == 5) {\\n            // Five extra characters - 3 bytes\\n            ret = (ret << 4) | (decoded >> 1);\\n            bitlen -= 1;\\n        } else if (len % 8 == 7) {\\n            // Seven extra characters - 4 bytes\\n            ret = (ret << 2) | (decoded >> 3);\\n            bitlen -= 3;\\n        } else {\\n            revert();\\n        }\\n\\n        return bytes32(ret << (256 - bitlen));\\n    }\\n\\n    /// @dev Finds the first occurrence of the byte `needle` in `self`.\\n    /// @param self The string to search\\n    /// @param off The offset to start searching at\\n    /// @param len The number of bytes to search\\n    /// @param needle The byte to search for\\n    /// @return The offset of `needle` in `self`, or 2**256-1 if it was not found.\\n    function find(\\n        bytes memory self,\\n        uint256 off,\\n        uint256 len,\\n        bytes1 needle\\n    ) internal pure returns (uint256) {\\n        for (uint256 idx = off; idx < off + len; idx++) {\\n            if (self[idx] == needle) {\\n                return idx;\\n            }\\n        }\\n        return type(uint256).max;\\n    }\\n}\\n\",\"keccak256\":\"0x91aa93c6538538518436746a72ed262b677c5216209b7a7f32dbf5f87018ba52\",\"license\":\"MIT\"},\"contracts/utils/BytesUtils_LEGACY.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ^0.8.4;\\n\\n// ********************************************************************************\\n/// @dev DO NOT USE THIS CONTRACT\\n/// This library is provided so NameWrapper can remain unmodified.\\n/// The rest of the repo can switch to NameCoder, w/hashed label support.\\n// ********************************************************************************\\n\\nimport {BytesUtils} from \\\"./BytesUtils.sol\\\";\\n\\nlibrary BytesUtils_LEGACY {\\n    /// @dev Returns the ENS namehash of a DNS-encoded name.\\n    /// @param self The DNS-encoded name to hash.\\n    /// @param offset The offset at which to start hashing.\\n    /// @return The namehash of the name.\\n    function namehash(\\n        bytes memory self,\\n        uint256 offset\\n    ) internal pure returns (bytes32) {\\n        (bytes32 labelhash, uint256 newOffset) = readLabel(self, offset);\\n        if (labelhash == bytes32(0)) {\\n            require(offset == self.length - 1, \\\"namehash: Junk at end of name\\\");\\n            return bytes32(0);\\n        }\\n        return\\n            keccak256(abi.encodePacked(namehash(self, newOffset), labelhash));\\n    }\\n\\n    /// @dev Returns the keccak-256 hash of a DNS-encoded label, and the offset to the start of the next label.\\n    /// @param self The byte string to read a label from.\\n    /// @param idx The index to read a label at.\\n    /// @return labelhash The hash of the label at the specified index, or 0 if it is the last label.\\n    /// @return newIdx The index of the start of the next label.\\n    function readLabel(\\n        bytes memory self,\\n        uint256 idx\\n    ) internal pure returns (bytes32 labelhash, uint256 newIdx) {\\n        require(idx < self.length, \\\"readLabel: Index out of bounds\\\");\\n        uint256 len = uint256(uint8(self[idx]));\\n        if (len > 0) {\\n            labelhash = BytesUtils.keccak(self, idx + 1, len);\\n        } else {\\n            labelhash = bytes32(0);\\n        }\\n        newIdx = idx + len + 1;\\n    }\\n}\\n\",\"keccak256\":\"0x2afd587dcd016b62aa24feb262bc8d8b027dd131a0146be85b41ecbd6492880d\",\"license\":\"MIT\"},\"contracts/utils/ERC20Recoverable.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity >=0.8.17 <0.9.0;\\n\\nimport \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\n\\n/// @notice Contract is used to recover ERC20 tokens sent to the contract by mistake.\\n\\ncontract ERC20Recoverable is Ownable {\\n    /// @notice Recover ERC20 tokens sent to the contract by mistake.\\n    /// @dev The contract is Ownable and only the owner can call the recover function.\\n    /// @param _to The address to send the tokens to.\\n    /// @param _token The address of the ERC20 token to recover\\n    /// @param _amount The amount of tokens to recover.\\n    function recoverFunds(\\n        address _token,\\n        address _to,\\n        uint256 _amount\\n    ) external onlyOwner {\\n        IERC20(_token).transfer(_to, _amount);\\n    }\\n}\\n\",\"keccak256\":\"0xb4d1d380606e2c2949f97894c35cae862c2b7a8a6b034af82513f0e7d81435de\",\"license\":\"MIT\"},\"contracts/wrapper/Controllable.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ~0.8.17;\\n\\nimport \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\n\\ncontract Controllable is Ownable {\\n    mapping(address => bool) public controllers;\\n\\n    event ControllerChanged(address indexed controller, bool active);\\n\\n    function setController(address controller, bool active) public onlyOwner {\\n        controllers[controller] = active;\\n        emit ControllerChanged(controller, active);\\n    }\\n\\n    modifier onlyController() {\\n        require(\\n            controllers[msg.sender],\\n            \\\"Controllable: Caller is not a controller\\\"\\n        );\\n        _;\\n    }\\n}\\n\",\"keccak256\":\"0x9a9191656a82eda6763cda29ce893ddbfddb6c43559ff3b90c00a184e14e1fa1\",\"license\":\"MIT\"},\"contracts/wrapper/ERC1155Fuse.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ~0.8.17;\\n\\nimport \\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\\\";\\nimport \\\"@openzeppelin/contracts/utils/Address.sol\\\";\\n\\n/* This contract is a variation on ERC1155 with the additions of _setData, getData and _beforeTransfer and ownerOf. _setData and getData allows the use of the other 96 bits next to the address of the owner for extra data. We use this to store 'fuses' that control permissions that can be burnt. 32 bits are used for the fuses themselves and 64 bits are used for the expiry of the name. When a name has expired, its fuses will be be set back to 0 */\\n\\nabstract contract ERC1155Fuse is ERC165, IERC1155, IERC1155MetadataURI {\\n    using Address for address;\\n    /// @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n    event Approval(\\n        address indexed owner,\\n        address indexed approved,\\n        uint256 indexed tokenId\\n    );\\n    mapping(uint256 => uint256) public _tokens;\\n\\n    // Mapping from owner to operator approvals\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\n    // Mapping from token ID to approved address\\n    mapping(uint256 => address) internal _tokenApprovals;\\n\\n    /**************************************************************************\\n     * ERC721 methods\\n     *************************************************************************/\\n\\n    function ownerOf(uint256 id) public view virtual returns (address) {\\n        (address owner, , ) = getData(id);\\n        return owner;\\n    }\\n\\n    /// @dev See {IERC721-approve}.\\n    function approve(address to, uint256 tokenId) public virtual {\\n        address owner = ownerOf(tokenId);\\n        require(to != owner, \\\"ERC721: approval to current owner\\\");\\n\\n        require(\\n            msg.sender == owner || isApprovedForAll(owner, msg.sender),\\n            \\\"ERC721: approve caller is not token owner or approved for all\\\"\\n        );\\n\\n        _approve(to, tokenId);\\n    }\\n\\n    /// @dev See {IERC721-getApproved}.\\n    function getApproved(\\n        uint256 tokenId\\n    ) public view virtual returns (address) {\\n        return _tokenApprovals[tokenId];\\n    }\\n\\n    /// @dev See {IERC165-supportsInterface}.\\n    function supportsInterface(\\n        bytes4 interfaceId\\n    ) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC1155).interfaceId ||\\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /// @dev See {IERC1155-balanceOf}.\\n    /// Requirements:\\n    /// - `account` cannot be the zero address.\\n    function balanceOf(\\n        address account,\\n        uint256 id\\n    ) public view virtual override returns (uint256) {\\n        require(\\n            account != address(0),\\n            \\\"ERC1155: balance query for the zero address\\\"\\n        );\\n        address owner = ownerOf(id);\\n        if (owner == account) {\\n            return 1;\\n        }\\n        return 0;\\n    }\\n\\n    /// @dev See {IERC1155-balanceOfBatch}.\\n    /// Requirements:\\n    /// - `accounts` and `ids` must have the same length.\\n    function balanceOfBatch(\\n        address[] memory accounts,\\n        uint256[] memory ids\\n    ) public view virtual override returns (uint256[] memory) {\\n        require(\\n            accounts.length == ids.length,\\n            \\\"ERC1155: accounts and ids length mismatch\\\"\\n        );\\n\\n        uint256[] memory batchBalances = new uint256[](accounts.length);\\n\\n        for (uint256 i = 0; i < accounts.length; ++i) {\\n            batchBalances[i] = balanceOf(accounts[i], ids[i]);\\n        }\\n\\n        return batchBalances;\\n    }\\n\\n    /// @dev See {IERC1155-setApprovalForAll}.\\n    function setApprovalForAll(\\n        address operator,\\n        bool approved\\n    ) public virtual override {\\n        require(\\n            msg.sender != operator,\\n            \\\"ERC1155: setting approval status for self\\\"\\n        );\\n\\n        _operatorApprovals[msg.sender][operator] = approved;\\n        emit ApprovalForAll(msg.sender, operator, approved);\\n    }\\n\\n    /// @dev See {IERC1155-isApprovedForAll}.\\n    function isApprovedForAll(\\n        address account,\\n        address operator\\n    ) public view virtual override returns (bool) {\\n        return _operatorApprovals[account][operator];\\n    }\\n\\n    /// @dev Returns the Name's owner address and fuses\\n    function getData(\\n        uint256 tokenId\\n    ) public view virtual returns (address owner, uint32 fuses, uint64 expiry) {\\n        uint256 t = _tokens[tokenId];\\n        owner = address(uint160(t));\\n        expiry = uint64(t >> 192);\\n        fuses = uint32(t >> 160);\\n    }\\n\\n    /// @dev See {IERC1155-safeTransferFrom}.\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) public virtual override {\\n        require(to != address(0), \\\"ERC1155: transfer to the zero address\\\");\\n        require(\\n            from == msg.sender || isApprovedForAll(from, msg.sender),\\n            \\\"ERC1155: caller is not owner nor approved\\\"\\n        );\\n\\n        _transfer(from, to, id, amount, data);\\n    }\\n\\n    /// @dev See {IERC1155-safeBatchTransferFrom}.\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) public virtual override {\\n        require(\\n            ids.length == amounts.length,\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\n        );\\n        require(to != address(0), \\\"ERC1155: transfer to the zero address\\\");\\n        require(\\n            from == msg.sender || isApprovedForAll(from, msg.sender),\\n            \\\"ERC1155: transfer caller is not owner nor approved\\\"\\n        );\\n\\n        for (uint256 i = 0; i < ids.length; ++i) {\\n            uint256 id = ids[i];\\n            uint256 amount = amounts[i];\\n\\n            (address oldOwner, uint32 fuses, uint64 expiry) = getData(id);\\n\\n            _beforeTransfer(id, fuses, expiry);\\n\\n            require(\\n                amount == 1 && oldOwner == from,\\n                \\\"ERC1155: insufficient balance for transfer\\\"\\n            );\\n            _setData(id, to, fuses, expiry);\\n        }\\n\\n        emit TransferBatch(msg.sender, from, to, ids, amounts);\\n\\n        _doSafeBatchTransferAcceptanceCheck(\\n            msg.sender,\\n            from,\\n            to,\\n            ids,\\n            amounts,\\n            data\\n        );\\n    }\\n\\n    /**************************************************************************\\n     * Internal/private methods\\n     *************************************************************************/\\n\\n    /// @dev Sets the Name's owner address and fuses\\n    function _setData(\\n        uint256 tokenId,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal virtual {\\n        _tokens[tokenId] =\\n            uint256(uint160(owner)) |\\n            (uint256(fuses) << 160) |\\n            (uint256(expiry) << 192);\\n    }\\n\\n    function _beforeTransfer(\\n        uint256 id,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal virtual;\\n\\n    function _clearOwnerAndFuses(\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal virtual returns (address, uint32);\\n\\n    function _mint(\\n        bytes32 node,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal virtual {\\n        uint256 tokenId = uint256(node);\\n        (address oldOwner, uint32 oldFuses, uint64 oldExpiry) = getData(\\n            uint256(node)\\n        );\\n\\n        uint32 parentControlledFuses = (uint32(type(uint16).max) << 16) &\\n            oldFuses;\\n\\n        if (oldExpiry > expiry) {\\n            expiry = oldExpiry;\\n        }\\n\\n        if (oldExpiry >= block.timestamp) {\\n            fuses = fuses | parentControlledFuses;\\n        }\\n\\n        require(oldOwner == address(0), \\\"ERC1155: mint of existing token\\\");\\n        require(owner != address(0), \\\"ERC1155: mint to the zero address\\\");\\n        require(\\n            owner != address(this),\\n            \\\"ERC1155: newOwner cannot be the NameWrapper contract\\\"\\n        );\\n\\n        _setData(tokenId, owner, fuses, expiry);\\n        emit TransferSingle(msg.sender, address(0x0), owner, tokenId, 1);\\n        _doSafeTransferAcceptanceCheck(\\n            msg.sender,\\n            address(0),\\n            owner,\\n            tokenId,\\n            1,\\n            \\\"\\\"\\n        );\\n    }\\n\\n    function _burn(uint256 tokenId) internal virtual {\\n        (address oldOwner, uint32 fuses, uint64 expiry) = ERC1155Fuse.getData(\\n            tokenId\\n        );\\n        (, fuses) = _clearOwnerAndFuses(oldOwner, fuses, expiry);\\n        // Clear approvals\\n        delete _tokenApprovals[tokenId];\\n        // Fuses and expiry are kept on burn\\n        _setData(tokenId, address(0x0), fuses, expiry);\\n        emit TransferSingle(msg.sender, oldOwner, address(0x0), tokenId, 1);\\n    }\\n\\n    function _transfer(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) internal {\\n        (address oldOwner, uint32 fuses, uint64 expiry) = getData(id);\\n\\n        _beforeTransfer(id, fuses, expiry);\\n\\n        require(\\n            amount == 1 && oldOwner == from,\\n            \\\"ERC1155: insufficient balance for transfer\\\"\\n        );\\n\\n        if (oldOwner == to) {\\n            return;\\n        }\\n\\n        _setData(id, to, fuses, expiry);\\n\\n        emit TransferSingle(msg.sender, from, to, id, amount);\\n\\n        _doSafeTransferAcceptanceCheck(msg.sender, from, to, id, amount, data);\\n    }\\n\\n    function _doSafeTransferAcceptanceCheck(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) private {\\n        if (to.isContract()) {\\n            try\\n                IERC1155Receiver(to).onERC1155Received(\\n                    operator,\\n                    from,\\n                    id,\\n                    amount,\\n                    data\\n                )\\n            returns (bytes4 response) {\\n                if (\\n                    response != IERC1155Receiver(to).onERC1155Received.selector\\n                ) {\\n                    revert(\\\"ERC1155: ERC1155Receiver rejected tokens\\\");\\n                }\\n            } catch Error(string memory reason) {\\n                revert(reason);\\n            } catch {\\n                revert(\\\"ERC1155: transfer to non ERC1155Receiver implementer\\\");\\n            }\\n        }\\n    }\\n\\n    function _doSafeBatchTransferAcceptanceCheck(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) private {\\n        if (to.isContract()) {\\n            try\\n                IERC1155Receiver(to).onERC1155BatchReceived(\\n                    operator,\\n                    from,\\n                    ids,\\n                    amounts,\\n                    data\\n                )\\n            returns (bytes4 response) {\\n                if (\\n                    response !=\\n                    IERC1155Receiver(to).onERC1155BatchReceived.selector\\n                ) {\\n                    revert(\\\"ERC1155: ERC1155Receiver rejected tokens\\\");\\n                }\\n            } catch Error(string memory reason) {\\n                revert(reason);\\n            } catch {\\n                revert(\\\"ERC1155: transfer to non ERC1155Receiver implementer\\\");\\n            }\\n        }\\n    }\\n\\n    /* ERC721 internal functions */\\n\\n    /// @dev Approve `to` to operate on `tokenId`\\n    /// Emits an {Approval} event.\\n    function _approve(address to, uint256 tokenId) internal virtual {\\n        _tokenApprovals[tokenId] = to;\\n        emit Approval(ownerOf(tokenId), to, tokenId);\\n    }\\n}\\n\",\"keccak256\":\"0xf3fe5bb1154e654eb3438499db3d26cd289b3065e418719b22e228627344b9b8\",\"license\":\"MIT\"},\"contracts/wrapper/IMetadataService.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ~0.8.17;\\n\\ninterface IMetadataService {\\n    function uri(uint256) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0xb3f1cf6df01ed7b15e5f2318f6823afbdb586ca38c2124c67955c645647ae9a2\",\"license\":\"MIT\"},\"contracts/wrapper/INameWrapper.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ~0.8.17;\\n\\nimport \\\"../registry/ENS.sol\\\";\\nimport \\\"../ethregistrar/IBaseRegistrar.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\\\";\\nimport \\\"./IMetadataService.sol\\\";\\nimport \\\"./INameWrapperUpgrade.sol\\\";\\n\\nuint32 constant CANNOT_UNWRAP = 1;\\nuint32 constant CANNOT_BURN_FUSES = 2;\\nuint32 constant CANNOT_TRANSFER = 4;\\nuint32 constant CANNOT_SET_RESOLVER = 8;\\nuint32 constant CANNOT_SET_TTL = 16;\\nuint32 constant CANNOT_CREATE_SUBDOMAIN = 32;\\nuint32 constant CANNOT_APPROVE = 64;\\n//uint16 reserved for parent controlled fuses from bit 17 to bit 32\\nuint32 constant PARENT_CANNOT_CONTROL = 1 << 16;\\nuint32 constant IS_DOT_ETH = 1 << 17;\\nuint32 constant CAN_EXTEND_EXPIRY = 1 << 18;\\nuint32 constant CAN_DO_EVERYTHING = 0;\\nuint32 constant PARENT_CONTROLLED_FUSES = 0xFFFF0000;\\n// all fuses apart from IS_DOT_ETH\\nuint32 constant USER_SETTABLE_FUSES = 0xFFFDFFFF;\\n\\ninterface INameWrapper is IERC1155 {\\n    event NameWrapped(\\n        bytes32 indexed node,\\n        bytes name,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    );\\n\\n    event NameUnwrapped(bytes32 indexed node, address owner);\\n\\n    event FusesSet(bytes32 indexed node, uint32 fuses);\\n    event ExpiryExtended(bytes32 indexed node, uint64 expiry);\\n\\n    function ens() external view returns (ENS);\\n\\n    function registrar() external view returns (IBaseRegistrar);\\n\\n    function metadataService() external view returns (IMetadataService);\\n\\n    function names(bytes32) external view returns (bytes memory);\\n\\n    function name() external view returns (string memory);\\n\\n    function upgradeContract() external view returns (INameWrapperUpgrade);\\n\\n    function supportsInterface(bytes4 interfaceID) external view returns (bool);\\n\\n    function wrap(\\n        bytes calldata name,\\n        address wrappedOwner,\\n        address resolver\\n    ) external;\\n\\n    function wrapETH2LD(\\n        string calldata label,\\n        address wrappedOwner,\\n        uint16 ownerControlledFuses,\\n        address resolver\\n    ) external returns (uint64 expires);\\n\\n    function registerAndWrapETH2LD(\\n        string calldata label,\\n        address wrappedOwner,\\n        uint256 duration,\\n        address resolver,\\n        uint16 ownerControlledFuses\\n    ) external returns (uint256 registrarExpiry);\\n\\n    function renew(\\n        uint256 labelHash,\\n        uint256 duration\\n    ) external returns (uint256 expires);\\n\\n    function unwrap(bytes32 node, bytes32 label, address owner) external;\\n\\n    function unwrapETH2LD(\\n        bytes32 label,\\n        address newRegistrant,\\n        address newController\\n    ) external;\\n\\n    function upgrade(bytes calldata name, bytes calldata extraData) external;\\n\\n    function setFuses(\\n        bytes32 node,\\n        uint16 ownerControlledFuses\\n    ) external returns (uint32 newFuses);\\n\\n    function setChildFuses(\\n        bytes32 parentNode,\\n        bytes32 labelhash,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) external;\\n\\n    function setSubnodeRecord(\\n        bytes32 node,\\n        string calldata label,\\n        address owner,\\n        address resolver,\\n        uint64 ttl,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) external returns (bytes32);\\n\\n    function setRecord(\\n        bytes32 node,\\n        address owner,\\n        address resolver,\\n        uint64 ttl\\n    ) external;\\n\\n    function setSubnodeOwner(\\n        bytes32 node,\\n        string calldata label,\\n        address newOwner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) external returns (bytes32);\\n\\n    function extendExpiry(\\n        bytes32 node,\\n        bytes32 labelhash,\\n        uint64 expiry\\n    ) external returns (uint64);\\n\\n    function canModifyName(\\n        bytes32 node,\\n        address addr\\n    ) external view returns (bool);\\n\\n    function setResolver(bytes32 node, address resolver) external;\\n\\n    function setTTL(bytes32 node, uint64 ttl) external;\\n\\n    function ownerOf(uint256 id) external view returns (address owner);\\n\\n    function approve(address to, uint256 tokenId) external;\\n\\n    function getApproved(uint256 tokenId) external view returns (address);\\n\\n    function getData(\\n        uint256 id\\n    ) external view returns (address, uint32, uint64);\\n\\n    function setMetadataService(IMetadataService _metadataService) external;\\n\\n    function uri(uint256 tokenId) external view returns (string memory);\\n\\n    function setUpgradeContract(INameWrapperUpgrade _upgradeAddress) external;\\n\\n    function allFusesBurned(\\n        bytes32 node,\\n        uint32 fuseMask\\n    ) external view returns (bool);\\n\\n    function isWrapped(bytes32) external view returns (bool);\\n\\n    function isWrapped(bytes32, bytes32) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x70310eb67146d7290731c31841399640ac3b6a949eadc6598bc150123d185c57\",\"license\":\"MIT\"},\"contracts/wrapper/INameWrapperUpgrade.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ~0.8.17;\\n\\ninterface INameWrapperUpgrade {\\n    function wrapFromUpgrade(\\n        bytes calldata name,\\n        address wrappedOwner,\\n        uint32 fuses,\\n        uint64 expiry,\\n        address approved,\\n        bytes calldata extraData\\n    ) external;\\n}\\n\",\"keccak256\":\"0x42e0cec6cd9d1a62d51d45b678f69d3e4ad5555e659b197e41257b308346bb8a\",\"license\":\"MIT\"},\"contracts/wrapper/NameWrapper.sol\":{\"content\":\"//SPDX-License-Identifier: MIT\\npragma solidity ~0.8.17;\\n\\nimport {ERC1155Fuse, IERC165, IERC1155MetadataURI} from \\\"./ERC1155Fuse.sol\\\";\\nimport {Controllable} from \\\"./Controllable.sol\\\";\\nimport {INameWrapper, CANNOT_UNWRAP, CANNOT_BURN_FUSES, CANNOT_TRANSFER, CANNOT_SET_RESOLVER, CANNOT_SET_TTL, CANNOT_CREATE_SUBDOMAIN, CANNOT_APPROVE, PARENT_CANNOT_CONTROL, CAN_DO_EVERYTHING, IS_DOT_ETH, CAN_EXTEND_EXPIRY, PARENT_CONTROLLED_FUSES, USER_SETTABLE_FUSES} from \\\"./INameWrapper.sol\\\";\\nimport {INameWrapperUpgrade} from \\\"./INameWrapperUpgrade.sol\\\";\\nimport {IMetadataService} from \\\"./IMetadataService.sol\\\";\\nimport {ENS} from \\\"../registry/ENS.sol\\\";\\nimport {IReverseRegistrar} from \\\"../reverseRegistrar/IReverseRegistrar.sol\\\";\\nimport {ReverseClaimer} from \\\"../reverseRegistrar/ReverseClaimer.sol\\\";\\nimport {IBaseRegistrar} from \\\"../ethregistrar/IBaseRegistrar.sol\\\";\\nimport {IERC721Receiver} from \\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\\\";\\nimport {Ownable} from \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\nimport {BytesUtils_LEGACY} from \\\"../utils/BytesUtils_LEGACY.sol\\\";\\nimport {ERC20Recoverable} from \\\"../utils/ERC20Recoverable.sol\\\";\\n\\nerror Unauthorised(bytes32 node, address addr);\\nerror IncompatibleParent();\\nerror IncorrectTokenType();\\nerror LabelMismatch(bytes32 labelHash, bytes32 expectedLabelhash);\\nerror LabelTooShort();\\nerror LabelTooLong(string label);\\nerror IncorrectTargetOwner(address owner);\\nerror CannotUpgrade();\\nerror OperationProhibited(bytes32 node);\\nerror NameIsNotWrapped();\\nerror NameIsStillExpired();\\n\\ncontract NameWrapper is\\n    Ownable,\\n    ERC1155Fuse,\\n    INameWrapper,\\n    Controllable,\\n    IERC721Receiver,\\n    ERC20Recoverable,\\n    ReverseClaimer\\n{\\n    using BytesUtils_LEGACY for bytes;\\n\\n    ENS public immutable ens;\\n    IBaseRegistrar public immutable registrar;\\n    IMetadataService public metadataService;\\n    mapping(bytes32 => bytes) public names;\\n    string public constant name = \\\"NameWrapper\\\";\\n\\n    uint64 private constant GRACE_PERIOD = 90 days;\\n    bytes32 private constant ETH_NODE =\\n        0x753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a6;\\n    bytes32 private constant ETH_LABELHASH =\\n        0xc855b4444f7ea1818397954340357865198e56c1b27420e9ab920363d4d839ad;\\n    bytes32 private constant ROOT_NODE =\\n        0x0000000000000000000000000000000000000000000000000000000000000000;\\n\\n    INameWrapperUpgrade public upgradeContract;\\n    uint64 private constant MAX_EXPIRY = type(uint64).max;\\n\\n    constructor(\\n        ENS _ens,\\n        IBaseRegistrar _registrar,\\n        IMetadataService _metadataService\\n    ) ReverseClaimer(_ens, msg.sender) {\\n        ens = _ens;\\n        registrar = _registrar;\\n        metadataService = _metadataService;\\n\\n        /* Burn PARENT_CANNOT_CONTROL and CANNOT_UNWRAP fuses for ROOT_NODE and ETH_NODE and set expiry to max */\\n\\n        _setData(\\n            uint256(ETH_NODE),\\n            address(0),\\n            uint32(PARENT_CANNOT_CONTROL | CANNOT_UNWRAP),\\n            MAX_EXPIRY\\n        );\\n        _setData(\\n            uint256(ROOT_NODE),\\n            address(0),\\n            uint32(PARENT_CANNOT_CONTROL | CANNOT_UNWRAP),\\n            MAX_EXPIRY\\n        );\\n        names[ROOT_NODE] = \\\"\\\\x00\\\";\\n        names[ETH_NODE] = \\\"\\\\x03hii\\\\x00\\\";\\n    }\\n\\n    function supportsInterface(\\n        bytes4 interfaceId\\n    ) public view virtual override(ERC1155Fuse, INameWrapper) returns (bool) {\\n        return\\n            interfaceId == type(INameWrapper).interfaceId ||\\n            interfaceId == type(IERC721Receiver).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /* ERC1155 Fuse */\\n\\n    /// @notice Gets the owner of a name\\n    /// @param id Label as a string of the .eth domain to wrap\\n    /// @return owner The owner of the name\\n    function ownerOf(\\n        uint256 id\\n    ) public view override(ERC1155Fuse, INameWrapper) returns (address owner) {\\n        return super.ownerOf(id);\\n    }\\n\\n    /// @notice Gets the owner of a name\\n    /// @param id Namehash of the name\\n    /// @return operator Approved operator of a name\\n    function getApproved(\\n        uint256 id\\n    )\\n        public\\n        view\\n        override(ERC1155Fuse, INameWrapper)\\n        returns (address operator)\\n    {\\n        address owner = ownerOf(id);\\n        if (owner == address(0)) {\\n            return address(0);\\n        }\\n        return super.getApproved(id);\\n    }\\n\\n    /// @notice Approves an address for a name\\n    /// @param to address to approve\\n    /// @param tokenId name to approve\\n    function approve(\\n        address to,\\n        uint256 tokenId\\n    ) public override(ERC1155Fuse, INameWrapper) {\\n        (, uint32 fuses, ) = getData(tokenId);\\n        if (fuses & CANNOT_APPROVE == CANNOT_APPROVE) {\\n            revert OperationProhibited(bytes32(tokenId));\\n        }\\n        super.approve(to, tokenId);\\n    }\\n\\n    /// @notice Gets the data for a name\\n    /// @param id Namehash of the name\\n    /// @return owner Owner of the name\\n    /// @return fuses Fuses of the name\\n    /// @return expiry Expiry of the name\\n    function getData(\\n        uint256 id\\n    )\\n        public\\n        view\\n        override(ERC1155Fuse, INameWrapper)\\n        returns (address owner, uint32 fuses, uint64 expiry)\\n    {\\n        (owner, fuses, expiry) = super.getData(id);\\n\\n        (owner, fuses) = _clearOwnerAndFuses(owner, fuses, expiry);\\n    }\\n\\n    /* Metadata service */\\n\\n    /// @notice Set the metadata service. Only the owner can do this\\n    /// @param _metadataService The new metadata service\\n    function setMetadataService(\\n        IMetadataService _metadataService\\n    ) public onlyOwner {\\n        metadataService = _metadataService;\\n    }\\n\\n    /// @notice Get the metadata uri\\n    /// @param tokenId The id of the token\\n    /// @return string uri of the metadata service\\n    function uri(\\n        uint256 tokenId\\n    )\\n        public\\n        view\\n        override(INameWrapper, IERC1155MetadataURI)\\n        returns (string memory)\\n    {\\n        return metadataService.uri(tokenId);\\n    }\\n\\n    /// @notice Set the address of the upgradeContract of the contract. only admin can do this\\n    /// @dev The default value of upgradeContract is the 0 address. Use the 0 address at any time\\n    /// to make the contract not upgradable.\\n    /// @param _upgradeAddress address of an upgraded contract\\n    function setUpgradeContract(\\n        INameWrapperUpgrade _upgradeAddress\\n    ) public onlyOwner {\\n        if (address(upgradeContract) != address(0)) {\\n            registrar.setApprovalForAll(address(upgradeContract), false);\\n            ens.setApprovalForAll(address(upgradeContract), false);\\n        }\\n\\n        upgradeContract = _upgradeAddress;\\n\\n        if (address(upgradeContract) != address(0)) {\\n            registrar.setApprovalForAll(address(upgradeContract), true);\\n            ens.setApprovalForAll(address(upgradeContract), true);\\n        }\\n    }\\n\\n    /// @notice Checks if msg.sender is the owner or operator of the owner of a name\\n    /// @param node namehash of the name to check\\n    modifier onlyTokenOwner(bytes32 node) {\\n        if (!canModifyName(node, msg.sender)) {\\n            revert Unauthorised(node, msg.sender);\\n        }\\n\\n        _;\\n    }\\n\\n    /// @notice Checks if owner or operator of the owner\\n    /// @param node namehash of the name to check\\n    /// @param addr which address to check permissions for\\n    /// @return whether or not is owner or operator\\n    function canModifyName(\\n        bytes32 node,\\n        address addr\\n    ) public view returns (bool) {\\n        (address owner, uint32 fuses, uint64 expiry) = getData(uint256(node));\\n        return\\n            (owner == addr || isApprovedForAll(owner, addr)) &&\\n            !_isETH2LDInGracePeriod(fuses, expiry);\\n    }\\n\\n    /// @notice Checks if owner/operator or approved by owner\\n    /// @param node namehash of the name to check\\n    /// @param addr which address to check permissions for\\n    /// @return whether or not is owner/operator or approved\\n    function canExtendSubnames(\\n        bytes32 node,\\n        address addr\\n    ) public view returns (bool) {\\n        (address owner, uint32 fuses, uint64 expiry) = getData(uint256(node));\\n        return\\n            (owner == addr ||\\n                isApprovedForAll(owner, addr) ||\\n                getApproved(uint256(node)) == addr) &&\\n            !_isETH2LDInGracePeriod(fuses, expiry);\\n    }\\n\\n    /// @notice Wraps a .eth domain, creating a new token and sending the original ERC721 token to this contract\\n    /// @dev Can be called by the owner of the name on the .eth registrar or an authorised caller on the registrar\\n    /// @param label Label as a string of the .eth domain to wrap\\n    /// @param wrappedOwner Owner of the name in this contract\\n    /// @param ownerControlledFuses Initial owner-controlled fuses to set\\n    /// @param resolver Resolver contract address\\n    function wrapETH2LD(\\n        string calldata label,\\n        address wrappedOwner,\\n        uint16 ownerControlledFuses,\\n        address resolver\\n    ) public returns (uint64 expiry) {\\n        uint256 tokenId = uint256(keccak256(bytes(label)));\\n        address registrant = registrar.ownerOf(tokenId);\\n        if (\\n            registrant != msg.sender &&\\n            !registrar.isApprovedForAll(registrant, msg.sender)\\n        ) {\\n            revert Unauthorised(\\n                _makeNode(ETH_NODE, bytes32(tokenId)),\\n                msg.sender\\n            );\\n        }\\n\\n        // transfer the token from the user to this contract\\n        registrar.transferFrom(registrant, address(this), tokenId);\\n\\n        // transfer the ens record back to the new owner (this contract)\\n        registrar.reclaim(tokenId, address(this));\\n\\n        expiry = uint64(registrar.nameExpires(tokenId)) + GRACE_PERIOD;\\n\\n        _wrapETH2LD(\\n            label,\\n            wrappedOwner,\\n            ownerControlledFuses,\\n            expiry,\\n            resolver\\n        );\\n    }\\n\\n    /// @dev Registers a new .eth second-level domain and wraps it.\\n    ///      Only callable by authorised controllers.\\n    /// @param label The label to register (Eg, 'foo' for 'foo.hii').\\n    /// @param wrappedOwner The owner of the wrapped name.\\n    /// @param duration The duration, in seconds, to register the name for.\\n    /// @param resolver The resolver address to set on the ENS registry (optional).\\n    /// @param ownerControlledFuses Initial owner-controlled fuses to set\\n    /// @return registrarExpiry The expiry date of the new name on the .eth registrar, in seconds since the Unix epoch.\\n    function registerAndWrapETH2LD(\\n        string calldata label,\\n        address wrappedOwner,\\n        uint256 duration,\\n        address resolver,\\n        uint16 ownerControlledFuses\\n    ) external onlyController returns (uint256 registrarExpiry) {\\n        uint256 tokenId = uint256(keccak256(bytes(label)));\\n        registrarExpiry = registrar.register(tokenId, address(this), duration);\\n        _wrapETH2LD(\\n            label,\\n            wrappedOwner,\\n            ownerControlledFuses,\\n            uint64(registrarExpiry) + GRACE_PERIOD,\\n            resolver\\n        );\\n    }\\n\\n    /// @notice Renews a .eth second-level domain.\\n    /// @dev Only callable by authorised controllers.\\n    /// @param tokenId The hash of the label to register (eg, `keccak256('foo')`, for 'foo.hii').\\n    /// @param duration The number of seconds to renew the name for.\\n    /// @return expires The expiry date of the name on the .eth registrar, in seconds since the Unix epoch.\\n    function renew(\\n        uint256 tokenId,\\n        uint256 duration\\n    ) external onlyController returns (uint256 expires) {\\n        bytes32 node = _makeNode(ETH_NODE, bytes32(tokenId));\\n\\n        uint256 registrarExpiry = registrar.renew(tokenId, duration);\\n\\n        // Do not set anything in wrapper if name is not wrapped\\n        try registrar.ownerOf(tokenId) returns (address registrarOwner) {\\n            if (\\n                registrarOwner != address(this) ||\\n                ens.owner(node) != address(this)\\n            ) {\\n                return registrarExpiry;\\n            }\\n        } catch {\\n            return registrarExpiry;\\n        }\\n\\n        // Set expiry in Wrapper\\n        uint64 expiry = uint64(registrarExpiry) + GRACE_PERIOD;\\n\\n        // Use super to allow names expired on the wrapper, but not expired on the registrar to renew()\\n        (address owner, uint32 fuses, ) = super.getData(uint256(node));\\n        _setData(node, owner, fuses, expiry);\\n\\n        return registrarExpiry;\\n    }\\n\\n    /// @notice Wraps a non .eth domain, of any kind. Could be a DNSSEC name vitalik.xyz or a subdomain\\n    /// @dev Can be called by the owner in the registry or an authorised caller in the registry\\n    /// @param name The name to wrap, in DNS format\\n    /// @param wrappedOwner Owner of the name in this contract\\n    /// @param resolver Resolver contract\\n    function wrap(\\n        bytes calldata name,\\n        address wrappedOwner,\\n        address resolver\\n    ) public {\\n        (bytes32 labelhash, uint256 offset) = name.readLabel(0);\\n        bytes32 parentNode = name.namehash(offset);\\n        bytes32 node = _makeNode(parentNode, labelhash);\\n\\n        names[node] = name;\\n\\n        if (parentNode == ETH_NODE) {\\n            revert IncompatibleParent();\\n        }\\n\\n        address owner = ens.owner(node);\\n\\n        if (owner != msg.sender && !ens.isApprovedForAll(owner, msg.sender)) {\\n            revert Unauthorised(node, msg.sender);\\n        }\\n\\n        if (resolver != address(0)) {\\n            ens.setResolver(node, resolver);\\n        }\\n\\n        ens.setOwner(node, address(this));\\n\\n        _wrap(node, name, wrappedOwner, 0, 0);\\n    }\\n\\n    /// @notice Unwraps a .eth domain. e.g. vitalik.eth\\n    /// @dev Can be called by the owner in the wrapper or an authorised caller in the wrapper\\n    /// @param labelhash Labelhash of the .eth domain\\n    /// @param registrant Sets the owner in the .eth registrar to this address\\n    /// @param controller Sets the owner in the registry to this address\\n    function unwrapETH2LD(\\n        bytes32 labelhash,\\n        address registrant,\\n        address controller\\n    ) public onlyTokenOwner(_makeNode(ETH_NODE, labelhash)) {\\n        if (registrant == address(this)) {\\n            revert IncorrectTargetOwner(registrant);\\n        }\\n        _unwrap(_makeNode(ETH_NODE, labelhash), controller);\\n        registrar.safeTransferFrom(\\n            address(this),\\n            registrant,\\n            uint256(labelhash)\\n        );\\n    }\\n\\n    /// @notice Unwraps a non .eth domain, of any kind. Could be a DNSSEC name vitalik.xyz or a subdomain\\n    /// @dev Can be called by the owner in the wrapper or an authorised caller in the wrapper\\n    /// @param parentNode Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')\\n    /// @param labelhash Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')\\n    /// @param controller Sets the owner in the registry to this address\\n    function unwrap(\\n        bytes32 parentNode,\\n        bytes32 labelhash,\\n        address controller\\n    ) public onlyTokenOwner(_makeNode(parentNode, labelhash)) {\\n        if (parentNode == ETH_NODE) {\\n            revert IncompatibleParent();\\n        }\\n        if (controller == address(0x0) || controller == address(this)) {\\n            revert IncorrectTargetOwner(controller);\\n        }\\n        _unwrap(_makeNode(parentNode, labelhash), controller);\\n    }\\n\\n    /// @notice Sets fuses of a name\\n    /// @param node Namehash of the name\\n    /// @param ownerControlledFuses Owner-controlled fuses to burn\\n    /// @return Old fuses\\n    function setFuses(\\n        bytes32 node,\\n        uint16 ownerControlledFuses\\n    )\\n        public\\n        onlyTokenOwner(node)\\n        operationAllowed(node, CANNOT_BURN_FUSES)\\n        returns (uint32)\\n    {\\n        // owner protected by onlyTokenOwner\\n        (address owner, uint32 oldFuses, uint64 expiry) = getData(\\n            uint256(node)\\n        );\\n        _setFuses(node, owner, ownerControlledFuses | oldFuses, expiry, expiry);\\n        return oldFuses;\\n    }\\n\\n    /// @notice Extends expiry for a name\\n    /// @param parentNode Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')\\n    /// @param labelhash Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')\\n    /// @param expiry When the name will expire in seconds since the Unix epoch\\n    /// @return New expiry\\n    function extendExpiry(\\n        bytes32 parentNode,\\n        bytes32 labelhash,\\n        uint64 expiry\\n    ) public returns (uint64) {\\n        bytes32 node = _makeNode(parentNode, labelhash);\\n\\n        if (!_isWrapped(node)) {\\n            revert NameIsNotWrapped();\\n        }\\n\\n        // this flag is used later, when checking fuses\\n        bool canExtendSubname = canExtendSubnames(parentNode, msg.sender);\\n        // only allow the owner of the name or owner of the parent name\\n        if (!canExtendSubname && !canModifyName(node, msg.sender)) {\\n            revert Unauthorised(node, msg.sender);\\n        }\\n\\n        (address owner, uint32 fuses, uint64 oldExpiry) = getData(\\n            uint256(node)\\n        );\\n\\n        // Either CAN_EXTEND_EXPIRY must be set, or the caller must have permission to modify the parent name\\n        if (!canExtendSubname && fuses & CAN_EXTEND_EXPIRY == 0) {\\n            revert OperationProhibited(node);\\n        }\\n\\n        // Max expiry is set to the expiry of the parent\\n        (, , uint64 maxExpiry) = getData(uint256(parentNode));\\n        expiry = _normaliseExpiry(expiry, oldExpiry, maxExpiry);\\n\\n        _setData(node, owner, fuses, expiry);\\n        emit ExpiryExtended(node, expiry);\\n        return expiry;\\n    }\\n\\n    /// @notice Upgrades a domain of any kind. Could be a .eth name vitalik.eth, a DNSSEC name vitalik.xyz, or a subdomain\\n    /// @dev Can be called by the owner or an authorised caller\\n    /// @param name The name to upgrade, in DNS format\\n    /// @param extraData Extra data to pass to the upgrade contract\\n    function upgrade(bytes calldata name, bytes calldata extraData) public {\\n        bytes32 node = name.namehash(0);\\n\\n        if (address(upgradeContract) == address(0)) {\\n            revert CannotUpgrade();\\n        }\\n\\n        if (!canModifyName(node, msg.sender)) {\\n            revert Unauthorised(node, msg.sender);\\n        }\\n\\n        (address currentOwner, uint32 fuses, uint64 expiry) = getData(\\n            uint256(node)\\n        );\\n\\n        address approved = getApproved(uint256(node));\\n\\n        _burn(uint256(node));\\n\\n        upgradeContract.wrapFromUpgrade(\\n            name,\\n            currentOwner,\\n            fuses,\\n            expiry,\\n            approved,\\n            extraData\\n        );\\n    }\\n\\n    ///     /* @notice Sets fuses of a name that you own the parent of\\n    /// @param parentNode Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')\\n    /// @param labelhash Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')\\n    /// @param fuses Fuses to burn\\n    /// @param expiry When the name will expire in seconds since the Unix epoch\\n    function setChildFuses(\\n        bytes32 parentNode,\\n        bytes32 labelhash,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) public {\\n        bytes32 node = _makeNode(parentNode, labelhash);\\n        _checkFusesAreSettable(node, fuses);\\n        (address owner, uint32 oldFuses, uint64 oldExpiry) = getData(\\n            uint256(node)\\n        );\\n        if (owner == address(0) || ens.owner(node) != address(this)) {\\n            revert NameIsNotWrapped();\\n        }\\n        // max expiry is set to the expiry of the parent\\n        (, uint32 parentFuses, uint64 maxExpiry) = getData(uint256(parentNode));\\n        if (parentNode == ROOT_NODE) {\\n            if (!canModifyName(node, msg.sender)) {\\n                revert Unauthorised(node, msg.sender);\\n            }\\n        } else {\\n            if (!canModifyName(parentNode, msg.sender)) {\\n                revert Unauthorised(parentNode, msg.sender);\\n            }\\n        }\\n\\n        _checkParentFuses(node, fuses, parentFuses);\\n\\n        expiry = _normaliseExpiry(expiry, oldExpiry, maxExpiry);\\n\\n        // if PARENT_CANNOT_CONTROL has been burned and fuses have changed\\n        if (\\n            oldFuses & PARENT_CANNOT_CONTROL != 0 &&\\n            oldFuses | fuses != oldFuses\\n        ) {\\n            revert OperationProhibited(node);\\n        }\\n        fuses |= oldFuses;\\n        _setFuses(node, owner, fuses, oldExpiry, expiry);\\n    }\\n\\n    /// @notice Sets the subdomain owner in the registry and then wraps the subdomain\\n    /// @param parentNode Parent namehash of the subdomain\\n    /// @param label Label of the subdomain as a string\\n    /// @param owner New owner in the wrapper\\n    /// @param fuses Initial fuses for the wrapped subdomain\\n    /// @param expiry When the name will expire in seconds since the Unix epoch\\n    /// @return node Namehash of the subdomain\\n    function setSubnodeOwner(\\n        bytes32 parentNode,\\n        string calldata label,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) public onlyTokenOwner(parentNode) returns (bytes32 node) {\\n        bytes32 labelhash = keccak256(bytes(label));\\n        node = _makeNode(parentNode, labelhash);\\n        _checkCanCallSetSubnodeOwner(parentNode, node);\\n        _checkFusesAreSettable(node, fuses);\\n        bytes memory name = _saveLabel(parentNode, node, label);\\n        expiry = _checkParentFusesAndExpiry(parentNode, node, fuses, expiry);\\n\\n        if (!_isWrapped(node)) {\\n            ens.setSubnodeOwner(parentNode, labelhash, address(this));\\n            _wrap(node, name, owner, fuses, expiry);\\n        } else {\\n            _updateName(parentNode, node, label, owner, fuses, expiry);\\n        }\\n    }\\n\\n    /// @notice Sets the subdomain owner in the registry with records and then wraps the subdomain\\n    /// @param parentNode parent namehash of the subdomain\\n    /// @param label label of the subdomain as a string\\n    /// @param owner new owner in the wrapper\\n    /// @param resolver resolver contract in the registry\\n    /// @param ttl ttl in the registry\\n    /// @param fuses initial fuses for the wrapped subdomain\\n    /// @param expiry When the name will expire in seconds since the Unix epoch\\n    /// @return node Namehash of the subdomain\\n    function setSubnodeRecord(\\n        bytes32 parentNode,\\n        string memory label,\\n        address owner,\\n        address resolver,\\n        uint64 ttl,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) public onlyTokenOwner(parentNode) returns (bytes32 node) {\\n        bytes32 labelhash = keccak256(bytes(label));\\n        node = _makeNode(parentNode, labelhash);\\n        _checkCanCallSetSubnodeOwner(parentNode, node);\\n        _checkFusesAreSettable(node, fuses);\\n        _saveLabel(parentNode, node, label);\\n        expiry = _checkParentFusesAndExpiry(parentNode, node, fuses, expiry);\\n        if (!_isWrapped(node)) {\\n            ens.setSubnodeRecord(\\n                parentNode,\\n                labelhash,\\n                address(this),\\n                resolver,\\n                ttl\\n            );\\n            _storeNameAndWrap(parentNode, node, label, owner, fuses, expiry);\\n        } else {\\n            ens.setSubnodeRecord(\\n                parentNode,\\n                labelhash,\\n                address(this),\\n                resolver,\\n                ttl\\n            );\\n            _updateName(parentNode, node, label, owner, fuses, expiry);\\n        }\\n    }\\n\\n    /// @notice Sets records for the name in the ENS Registry\\n    /// @param node Namehash of the name to set a record for\\n    /// @param owner New owner in the registry\\n    /// @param resolver Resolver contract\\n    /// @param ttl Time to live in the registry\\n    function setRecord(\\n        bytes32 node,\\n        address owner,\\n        address resolver,\\n        uint64 ttl\\n    )\\n        public\\n        onlyTokenOwner(node)\\n        operationAllowed(\\n            node,\\n            CANNOT_TRANSFER | CANNOT_SET_RESOLVER | CANNOT_SET_TTL\\n        )\\n    {\\n        ens.setRecord(node, address(this), resolver, ttl);\\n        if (owner == address(0)) {\\n            (, uint32 fuses, ) = getData(uint256(node));\\n            if (fuses & IS_DOT_ETH == IS_DOT_ETH) {\\n                revert IncorrectTargetOwner(owner);\\n            }\\n            _unwrap(node, address(0));\\n        } else {\\n            address oldOwner = ownerOf(uint256(node));\\n            _transfer(oldOwner, owner, uint256(node), 1, \\\"\\\");\\n        }\\n    }\\n\\n    /// @notice Sets resolver contract in the registry\\n    /// @param node namehash of the name\\n    /// @param resolver the resolver contract\\n    function setResolver(\\n        bytes32 node,\\n        address resolver\\n    ) public onlyTokenOwner(node) operationAllowed(node, CANNOT_SET_RESOLVER) {\\n        ens.setResolver(node, resolver);\\n    }\\n\\n    /// @notice Sets TTL in the registry\\n    /// @param node Namehash of the name\\n    /// @param ttl TTL in the registry\\n    function setTTL(\\n        bytes32 node,\\n        uint64 ttl\\n    ) public onlyTokenOwner(node) operationAllowed(node, CANNOT_SET_TTL) {\\n        ens.setTTL(node, ttl);\\n    }\\n\\n    /// @dev Allows an operation only if none of the specified fuses are burned.\\n    /// @param node The namehash of the name to check fuses on.\\n    /// @param fuseMask A bitmask of fuses that must not be burned.\\n    modifier operationAllowed(bytes32 node, uint32 fuseMask) {\\n        (, uint32 fuses, ) = getData(uint256(node));\\n        if (fuses & fuseMask != 0) {\\n            revert OperationProhibited(node);\\n        }\\n        _;\\n    }\\n\\n    /// @notice Check whether a name can call setSubnodeOwner/setSubnodeRecord\\n    /// @dev Checks both CANNOT_CREATE_SUBDOMAIN and PARENT_CANNOT_CONTROL and whether not they have been burnt\\n    ///      and checks whether the owner of the subdomain is 0x0 for creating or already exists for\\n    ///      replacing a subdomain. If either conditions are true, then it is possible to call\\n    ///      setSubnodeOwner\\n    /// @param parentNode Namehash of the parent name to check\\n    /// @param subnode Namehash of the subname to check\\n    function _checkCanCallSetSubnodeOwner(\\n        bytes32 parentNode,\\n        bytes32 subnode\\n    ) internal view {\\n        (\\n            address subnodeOwner,\\n            uint32 subnodeFuses,\\n            uint64 subnodeExpiry\\n        ) = getData(uint256(subnode));\\n\\n        // check if the registry owner is 0 and expired\\n        // check if the wrapper owner is 0 and expired\\n        // If either, then check parent fuses for CANNOT_CREATE_SUBDOMAIN\\n        bool expired = subnodeExpiry < block.timestamp;\\n        if (\\n            expired &&\\n            // protects a name that has been unwrapped with PCC and doesn't allow the parent to take control by recreating it if unexpired\\n            (subnodeOwner == address(0) ||\\n                // protects a name that has been burnt and doesn't allow the parent to take control by recreating it if unexpired\\n                ens.owner(subnode) == address(0))\\n        ) {\\n            (, uint32 parentFuses, ) = getData(uint256(parentNode));\\n            if (parentFuses & CANNOT_CREATE_SUBDOMAIN != 0) {\\n                revert OperationProhibited(subnode);\\n            }\\n        } else {\\n            if (subnodeFuses & PARENT_CANNOT_CONTROL != 0) {\\n                revert OperationProhibited(subnode);\\n            }\\n        }\\n    }\\n\\n    /// @notice Checks all Fuses in the mask are burned for the node\\n    /// @param node Namehash of the name\\n    /// @param fuseMask The fuses you want to check\\n    /// @return Boolean of whether or not all the selected fuses are burned\\n    function allFusesBurned(\\n        bytes32 node,\\n        uint32 fuseMask\\n    ) public view returns (bool) {\\n        (, uint32 fuses, ) = getData(uint256(node));\\n        return fuses & fuseMask == fuseMask;\\n    }\\n\\n    /// @notice Checks if a name is wrapped\\n    /// @param node Namehash of the name\\n    /// @return Boolean of whether or not the name is wrapped\\n    function isWrapped(bytes32 node) public view returns (bool) {\\n        bytes memory name = names[node];\\n        if (name.length == 0) {\\n            return false;\\n        }\\n        (bytes32 labelhash, uint256 offset) = name.readLabel(0);\\n        bytes32 parentNode = name.namehash(offset);\\n        return isWrapped(parentNode, labelhash);\\n    }\\n\\n    /// @notice Checks if a name is wrapped in a more gas efficient way\\n    /// @param parentNode Namehash of the name\\n    /// @param labelhash Namehash of the name\\n    /// @return Boolean of whether or not the name is wrapped\\n    function isWrapped(\\n        bytes32 parentNode,\\n        bytes32 labelhash\\n    ) public view returns (bool) {\\n        bytes32 node = _makeNode(parentNode, labelhash);\\n        bool wrapped = _isWrapped(node);\\n        if (parentNode != ETH_NODE) {\\n            return wrapped;\\n        }\\n        try registrar.ownerOf(uint256(labelhash)) returns (address owner) {\\n            return owner == address(this);\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function onERC721Received(\\n        address to,\\n        address,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) public returns (bytes4) {\\n        //check if it's the eth registrar ERC721\\n        if (msg.sender != address(registrar)) {\\n            revert IncorrectTokenType();\\n        }\\n\\n        (\\n            string memory label,\\n            address owner,\\n            uint16 ownerControlledFuses,\\n            address resolver\\n        ) = abi.decode(data, (string, address, uint16, address));\\n\\n        bytes32 labelhash = bytes32(tokenId);\\n        bytes32 labelhashFromData = keccak256(bytes(label));\\n\\n        if (labelhashFromData != labelhash) {\\n            revert LabelMismatch(labelhashFromData, labelhash);\\n        }\\n\\n        // transfer the ens record back to the new owner (this contract)\\n        registrar.reclaim(uint256(labelhash), address(this));\\n\\n        uint64 expiry = uint64(registrar.nameExpires(tokenId)) + GRACE_PERIOD;\\n\\n        _wrapETH2LD(label, owner, ownerControlledFuses, expiry, resolver);\\n\\n        return IERC721Receiver(to).onERC721Received.selector;\\n    }\\n\\n    /***** Internal functions */\\n\\n    function _beforeTransfer(\\n        uint256 id,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal override {\\n        // For this check, treat .eth 2LDs as expiring at the start of the grace period.\\n        if (fuses & IS_DOT_ETH == IS_DOT_ETH) {\\n            expiry -= GRACE_PERIOD;\\n        }\\n\\n        if (expiry < block.timestamp) {\\n            // Transferable if the name was not emancipated\\n            if (fuses & PARENT_CANNOT_CONTROL != 0) {\\n                revert(\\\"ERC1155: insufficient balance for transfer\\\");\\n            }\\n        } else {\\n            // Transferable if CANNOT_TRANSFER is unburned\\n            if (fuses & CANNOT_TRANSFER != 0) {\\n                revert OperationProhibited(bytes32(id));\\n            }\\n        }\\n\\n        // delete token approval if CANNOT_APPROVE has not been burnt\\n        if (fuses & CANNOT_APPROVE == 0) {\\n            delete _tokenApprovals[id];\\n        }\\n    }\\n\\n    function _clearOwnerAndFuses(\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal view override returns (address, uint32) {\\n        if (expiry < block.timestamp) {\\n            if (fuses & PARENT_CANNOT_CONTROL == PARENT_CANNOT_CONTROL) {\\n                owner = address(0);\\n            }\\n            fuses = 0;\\n        }\\n\\n        return (owner, fuses);\\n    }\\n\\n    function _makeNode(\\n        bytes32 node,\\n        bytes32 labelhash\\n    ) private pure returns (bytes32) {\\n        return keccak256(abi.encodePacked(node, labelhash));\\n    }\\n\\n    function _addLabel(\\n        string memory label,\\n        bytes memory name\\n    ) internal pure returns (bytes memory ret) {\\n        if (bytes(label).length < 1) {\\n            revert LabelTooShort();\\n        }\\n        if (bytes(label).length > 255) {\\n            revert LabelTooLong(label);\\n        }\\n        return abi.encodePacked(uint8(bytes(label).length), label, name);\\n    }\\n\\n    function _mint(\\n        bytes32 node,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal override {\\n        _canFusesBeBurned(node, fuses);\\n        (address oldOwner, , ) = super.getData(uint256(node));\\n        if (oldOwner != address(0)) {\\n            // burn and unwrap old token of old owner\\n            _burn(uint256(node));\\n            emit NameUnwrapped(node, address(0));\\n        }\\n        super._mint(node, owner, fuses, expiry);\\n    }\\n\\n    function _wrap(\\n        bytes32 node,\\n        bytes memory name,\\n        address wrappedOwner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal {\\n        _mint(node, wrappedOwner, fuses, expiry);\\n        emit NameWrapped(node, name, wrappedOwner, fuses, expiry);\\n    }\\n\\n    function _storeNameAndWrap(\\n        bytes32 parentNode,\\n        bytes32 node,\\n        string memory label,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal {\\n        bytes memory name = _addLabel(label, names[parentNode]);\\n        _wrap(node, name, owner, fuses, expiry);\\n    }\\n\\n    function _saveLabel(\\n        bytes32 parentNode,\\n        bytes32 node,\\n        string memory label\\n    ) internal returns (bytes memory) {\\n        bytes memory name = _addLabel(label, names[parentNode]);\\n        names[node] = name;\\n        return name;\\n    }\\n\\n    function _updateName(\\n        bytes32 parentNode,\\n        bytes32 node,\\n        string memory label,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal {\\n        (address oldOwner, uint32 oldFuses, uint64 oldExpiry) = getData(\\n            uint256(node)\\n        );\\n        bytes memory name = _addLabel(label, names[parentNode]);\\n        if (names[node].length == 0) {\\n            names[node] = name;\\n        }\\n        _setFuses(node, oldOwner, oldFuses | fuses, oldExpiry, expiry);\\n        if (owner == address(0)) {\\n            _unwrap(node, address(0));\\n        } else {\\n            _transfer(oldOwner, owner, uint256(node), 1, \\\"\\\");\\n        }\\n    }\\n\\n    // wrapper function for stack limit\\n    function _checkParentFusesAndExpiry(\\n        bytes32 parentNode,\\n        bytes32 node,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal view returns (uint64) {\\n        (, , uint64 oldExpiry) = getData(uint256(node));\\n        (, uint32 parentFuses, uint64 maxExpiry) = getData(uint256(parentNode));\\n        _checkParentFuses(node, fuses, parentFuses);\\n        return _normaliseExpiry(expiry, oldExpiry, maxExpiry);\\n    }\\n\\n    function _checkParentFuses(\\n        bytes32 node,\\n        uint32 fuses,\\n        uint32 parentFuses\\n    ) internal pure {\\n        bool isBurningParentControlledFuses = fuses & PARENT_CONTROLLED_FUSES !=\\n            0;\\n\\n        bool parentHasNotBurnedCU = parentFuses & CANNOT_UNWRAP == 0;\\n\\n        if (isBurningParentControlledFuses && parentHasNotBurnedCU) {\\n            revert OperationProhibited(node);\\n        }\\n    }\\n\\n    function _normaliseExpiry(\\n        uint64 expiry,\\n        uint64 oldExpiry,\\n        uint64 maxExpiry\\n    ) private pure returns (uint64) {\\n        // Expiry cannot be more than maximum allowed\\n        // .eth names will check registrar, non .eth check parent\\n        if (expiry > maxExpiry) {\\n            expiry = maxExpiry;\\n        }\\n        // Expiry cannot be less than old expiry\\n        if (expiry < oldExpiry) {\\n            expiry = oldExpiry;\\n        }\\n\\n        return expiry;\\n    }\\n\\n    function _wrapETH2LD(\\n        string memory label,\\n        address wrappedOwner,\\n        uint32 fuses,\\n        uint64 expiry,\\n        address resolver\\n    ) private {\\n        bytes32 labelhash = keccak256(bytes(label));\\n        bytes32 node = _makeNode(ETH_NODE, labelhash);\\n        // hardcode dns-encoded eth string for gas savings\\n        bytes memory name = _addLabel(label, \\\"\\\\x03hii\\\\x00\\\");\\n        names[node] = name;\\n\\n        _wrap(\\n            node,\\n            name,\\n            wrappedOwner,\\n            fuses | PARENT_CANNOT_CONTROL | IS_DOT_ETH,\\n            expiry\\n        );\\n\\n        if (resolver != address(0)) {\\n            ens.setResolver(node, resolver);\\n        }\\n    }\\n\\n    function _unwrap(bytes32 node, address owner) private {\\n        if (allFusesBurned(node, CANNOT_UNWRAP)) {\\n            revert OperationProhibited(node);\\n        }\\n\\n        // Burn token and fuse data\\n        _burn(uint256(node));\\n        ens.setOwner(node, owner);\\n\\n        emit NameUnwrapped(node, owner);\\n    }\\n\\n    function _setFuses(\\n        bytes32 node,\\n        address owner,\\n        uint32 fuses,\\n        uint64 oldExpiry,\\n        uint64 expiry\\n    ) internal {\\n        _setData(node, owner, fuses, expiry);\\n        emit FusesSet(node, fuses);\\n        if (expiry > oldExpiry) {\\n            emit ExpiryExtended(node, expiry);\\n        }\\n    }\\n\\n    function _setData(\\n        bytes32 node,\\n        address owner,\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal {\\n        _canFusesBeBurned(node, fuses);\\n        super._setData(uint256(node), owner, fuses, expiry);\\n    }\\n\\n    function _canFusesBeBurned(bytes32 node, uint32 fuses) internal pure {\\n        // If a non-parent controlled fuse is being burned, check PCC and CU are burnt\\n        if (\\n            fuses & ~PARENT_CONTROLLED_FUSES != 0 &&\\n            fuses & (PARENT_CANNOT_CONTROL | CANNOT_UNWRAP) !=\\n            (PARENT_CANNOT_CONTROL | CANNOT_UNWRAP)\\n        ) {\\n            revert OperationProhibited(node);\\n        }\\n    }\\n\\n    function _checkFusesAreSettable(bytes32 node, uint32 fuses) internal pure {\\n        if (fuses | USER_SETTABLE_FUSES != USER_SETTABLE_FUSES) {\\n            // Cannot directly burn other non-user settable fuses\\n            revert OperationProhibited(node);\\n        }\\n    }\\n\\n    function _isWrapped(bytes32 node) internal view returns (bool) {\\n        return\\n            ownerOf(uint256(node)) != address(0) &&\\n            ens.owner(node) == address(this);\\n    }\\n\\n    function _isETH2LDInGracePeriod(\\n        uint32 fuses,\\n        uint64 expiry\\n    ) internal view returns (bool) {\\n        return\\n            fuses & IS_DOT_ETH == IS_DOT_ETH &&\\n            expiry - GRACE_PERIOD < block.timestamp;\\n    }\\n}\\n\",\"keccak256\":\"0x77d41253e41a4a893ce18a1b3019b0dab8abb18c3e317dc289fd15f4140feb47\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60c06040523480156200001157600080fd5b5060405162006503380380620065038339810160408190526200003491620002f9565b8233620000418162000290565b6040516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260048201526000906001600160a01b038416906302571be390602401602060405180830381865afa158015620000a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cf91906200034d565b604051630f41a04d60e11b81526001600160a01b03848116600483015291925090821690631e83409a906024016020604051808303816000875af11580156200011c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000142919062000374565b505050506001600160a01b0383811660805282811660a052600580546001600160a01b031916918316919091179055600163fffeffff60a01b03197f08a097a4cbd4b70d4748512b23858651117a63606ace227000ebc8ba0610746f8190557fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4955604080518082019091526001815260006020808301829052908052600690527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f89062000210908262000433565b506040805180820190915260058152630368696960e01b6020808301919091527f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a6600052600690527f208bc3db0a7841ecce102e3f1c1035d0560f58369a553c1eeb36410438bab1329062000286908262000433565b50505050620004ff565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620002f657600080fd5b50565b6000806000606084860312156200030f57600080fd5b83516200031c81620002e0565b60208501519093506200032f81620002e0565b60408501519092506200034281620002e0565b809150509250925092565b6000602082840312156200036057600080fd5b81516200036d81620002e0565b9392505050565b6000602082840312156200038757600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620003b957607f821691505b602082108103620003da57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200042e57600081815260208120601f850160051c81016020861015620004095750805b601f850160051c820191505b818110156200042a5782815560010162000415565b5050505b505050565b81516001600160401b038111156200044f576200044f6200038e565b6200046781620004608454620003a4565b84620003e0565b602080601f8311600181146200049f5760008415620004865750858301515b600019600386901b1c1916600185901b1785556200042a565b600085815260208120601f198616915b82811015620004d057888601518255948401946001909101908401620004af565b5085821015620004ef5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a051615ef76200060c6000396000818161050601528181610c1501528181610cef01528181610d7901528181611c6601528181611cfc01528181611daa01528181611ecc01528181611f4201528181611fc20152818161224401528181612380015281816124b2015281816126970152818161271d0152612f5201526000818161055301528181610b9b01528181610ed70152818161108b0152818161113d015281816115550152818161240501528181612537015281816127c8015281816129bf01528181612ccd0152818161317d0152818161322b015281816132f40152818161336d015281816139ca01528181613ae501528181613d4d015261438d0152615ef76000f3fe608060405234801561001057600080fd5b506004361061031f5760003560e01c80636352211e116101a7578063c93ab3fd116100ee578063e985e9c511610097578063f242432a11610071578063f242432a146107d7578063f2fde38b146107ea578063fd0cd0d9146107fd57600080fd5b8063e985e9c514610768578063eb8ae530146107a4578063ed70554d146107b757600080fd5b8063d9a50c12116100c8578063d9a50c121461071f578063da8c229e14610732578063e0dba60f1461075557600080fd5b8063c93ab3fd146106e6578063cf408823146106f9578063d8c9921a1461070c57600080fd5b8063a22cb46511610150578063b6bcad261161012a578063b6bcad26146106ad578063c475abff146106c0578063c658e086146106d357600080fd5b8063a22cb46514610674578063a401498214610687578063adf4960a1461069a57600080fd5b80638b4dfa75116101815780638b4dfa751461063d5780638cf8b41e146106505780638da5cb5b1461066357600080fd5b80636352211e146105f65780636e5d6ad214610609578063715018a61461063557600080fd5b80631f4e15041161026b5780633f15457f116102145780634e1273f4116101ee5780634e1273f4146105b057806353095467146105d05780635d3590d5146105e357600080fd5b80633f15457f1461054e578063402906fc1461057557806341415eab1461059d57600080fd5b80632b20e397116102455780632b20e397146105015780632eb2c2d61461052857806333c69ea91461053b57600080fd5b80631f4e1504146104c857806320c38e2b146104db57806324c1af44146104ee57600080fd5b80630e4cd725116102cd578063150b7a02116102a7578063150b7a02146104765780631534e177146104a25780631896f70a146104b557600080fd5b80630e4cd7251461043d5780630e89341c1461045057806314ab90381461046357600080fd5b806306fdde03116102fe57806306fdde03146103b4578063081812fc146103fd578063095ea7b31461042857600080fd5b8062fdd58e146103245780630178fe3f1461034a57806301ffc9a714610391575b600080fd5b610337610332366004614d26565b610810565b6040519081526020015b60405180910390f35b61035d610358366004614d52565b6108cf565b604080516001600160a01b03909416845263ffffffff909216602084015267ffffffffffffffff1690820152606001610341565b6103a461039f366004614d81565b6108ff565b6040519015158152602001610341565b6103f06040518060400160405280600b81526020017f4e616d655772617070657200000000000000000000000000000000000000000081525081565b6040516103419190614dee565b61041061040b366004614d52565b610958565b6040516001600160a01b039091168152602001610341565b61043b610436366004614d26565b61099d565b005b6103a461044b366004614e01565b6109e3565b6103f061045e366004614d52565b610a7d565b61043b610471366004614e4e565b610aef565b610489610484366004614ec3565b610c08565b6040516001600160e01b03199091168152602001610341565b61043b6104b0366004614f36565b610e1a565b61043b6104c3366004614e01565b610e44565b600754610410906001600160a01b031681565b6103f06104e9366004614d52565b610f06565b6103376104fc36600461502e565b610fa0565b6104107f000000000000000000000000000000000000000000000000000000000000000081565b61043b610536366004615156565b6111b4565b61043b610549366004615204565b6114de565b6104107f000000000000000000000000000000000000000000000000000000000000000081565b61058861058336600461525c565b6116d3565b60405163ffffffff9091168152602001610341565b6103a46105ab366004614e01565b611775565b6105c36105be36600461527f565b6117d2565b604051610341919061537d565b600554610410906001600160a01b031681565b61043b6105f1366004615390565b611910565b610410610604366004614d52565b6119aa565b61061c6106173660046153d1565b6119b5565b60405167ffffffffffffffff9091168152602001610341565b61043b611b0a565b61043b61064b366004615406565b611b1e565b61061c61065e366004615448565b611cc8565b6000546001600160a01b0316610410565b61043b6106823660046154d1565b612094565b6103376106953660046154ff565b61217e565b6103a46106a8366004615580565b612319565b61043b6106bb366004614f36565b61233e565b6103376106ce3660046155a3565b612596565b6103376106e13660046155c5565b61288d565b61043b6106f4366004615638565b612a9a565b61043b6107073660046156a4565b612c0b565b61043b61071a3660046156dc565b612dc4565b6103a461072d3660046155a3565b612ed4565b6103a4610740366004614f36565b60046020526000908152604090205460ff1681565b61043b6107633660046154d1565b612fe1565b6103a461077636600461570a565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b61043b6107b2366004615738565b613049565b6103376107c5366004614d52565b60016020526000908152604090205481565b61043b6107e53660046157a0565b613414565b61043b6107f8366004614f36565b613531565b6103a461080b366004614d52565b6135be565b60006001600160a01b0383166108935760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600061089e836119aa565b9050836001600160a01b0316816001600160a01b0316036108c35760019150506108c9565b60009150505b92915050565b60008181526001602052604090205460a081901c60c082901c6108f3838383613696565b90959094509092509050565b60006001600160e01b031982167fd82c42d800000000000000000000000000000000000000000000000000000000148061094957506001600160e01b03198216630a85bd0160e11b145b806108c957506108c9826136cd565b600080610964836119aa565b90506001600160a01b03811661097d5750600092915050565b6000838152600360205260409020546001600160a01b03165b9392505050565b60006109a8826108cf565b50915050603f1960408216016109d45760405163a2a7201360e01b81526004810183905260240161088a565b6109de838361374f565b505050565b60008080806109f1866108cf565b925092509250846001600160a01b0316836001600160a01b03161480610a3c57506001600160a01b0380841660009081526002602090815260408083209389168352929052205460ff165b80610a6057506001600160a01b038516610a5587610958565b6001600160a01b0316145b8015610a735750610a718282613899565b155b9695505050505050565b6005546040516303a24d0760e21b8152600481018390526060916001600160a01b031690630e89341c90602401600060405180830381865afa158015610ac7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108c99190810190615809565b81610afa8133611775565b610b205760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8260106000610b2e836108cf565b5091505063ffffffff8282161615610b5c5760405163a2a7201360e01b81526004810184905260240161088a565b6040517f14ab90380000000000000000000000000000000000000000000000000000000081526004810187905267ffffffffffffffff861660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906314ab9038906044015b600060405180830381600087803b158015610be857600080fd5b505af1158015610bfc573d6000803e3d6000fd5b50505050505050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c6c576040517f1931a53800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808080610c7d86880188615881565b83516020850120939750919550935091508890808214610cd3576040517fc65c3ccc000000000000000000000000000000000000000000000000000000008152600481018290526024810183905260440161088a565b604051630a3b53db60e21b8152600481018390523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906328ed4f6c90604401600060405180830381600087803b158015610d3b57600080fd5b505af1158015610d4f573d6000803e3d6000fd5b5050604051636b727d4360e11b8152600481018d9052600092506276a70091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d6e4fa8690602401602060405180830381865afa158015610dc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de491906158e9565b610dee9190615918565b9050610e0187878761ffff1684886138ca565b50630a85bd0160e11b9c9b505050505050505050505050565b610e22613a30565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b81610e4f8133611775565b610e755760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8260086000610e83836108cf565b5091505063ffffffff8282161615610eb15760405163a2a7201360e01b81526004810184905260240161088a565b604051630c4b7b8560e11b8152600481018790526001600160a01b0386811660248301527f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90604401610bce565b60066020526000908152604090208054610f1f90615940565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4b90615940565b8015610f985780601f10610f6d57610100808354040283529160200191610f98565b820191906000526020600020905b815481529060010190602001808311610f7b57829003601f168201915b505050505081565b600087610fad8133611775565b610fd35760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8751602089012061100b8a82604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b92506110178a84613a8a565b6110218386613bc9565b61102c8a848b613bfc565b506110398a848787613cc9565b935061104483613d0f565b6110fa576040516305ef2c7f60e41b8152600481018b9052602481018290523060448201526001600160a01b03888116606483015267ffffffffffffffff881660848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b1580156110cf57600080fd5b505af11580156110e3573d6000803e3d6000fd5b505050506110f58a848b8b8989613dc8565b6111a7565b6040516305ef2c7f60e41b8152600481018b9052602481018290523060448201526001600160a01b03888116606483015267ffffffffffffffff881660848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b15801561118157600080fd5b505af1158015611195573d6000803e3d6000fd5b505050506111a78a848b8b8989613dff565b5050979650505050505050565b815183511461122b5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161088a565b6001600160a01b03841661128f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161088a565b6001600160a01b0385163314806112c957506001600160a01b038516600090815260026020908152604080832033845290915290205460ff165b61133b5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000606482015260840161088a565b60005b835181101561147157600084828151811061135b5761135b61597a565b6020026020010151905060008483815181106113795761137961597a565b602002602001015190506000806000611391856108cf565b9250925092506113a2858383613ec3565b8360011480156113c357508a6001600160a01b0316836001600160a01b0316145b6114225760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161088a565b60008581526001602052604090206001600160a01b038b1663ffffffff60a01b60a085901b16176001600160c01b031960c084901b1617905550505050508061146a90615990565b905061133e565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516114c19291906159a9565b60405180910390a46114d7338686868686613fb0565b5050505050565b604080516020808201879052818301869052825180830384018152606090920190925280519101206115108184613bc9565b6000808061151d846108cf565b919450925090506001600160a01b03831615806115cc57506040516302571be360e01b81526004810185905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa15801561159c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c091906159d7565b6001600160a01b031614155b156115ea57604051635374b59960e01b815260040160405180910390fd5b6000806115f68a6108cf565b90935091508a90506116375761160c8633611775565b6116325760405163168ab55d60e31b81526004810187905233602482015260440161088a565b611667565b6116418a33611775565b6116675760405163168ab55d60e31b8152600481018b905233602482015260440161088a565b611672868984614155565b61167d878483614190565b9650620100008416158015906116a157508363ffffffff1688851763ffffffff1614155b156116c25760405163a2a7201360e01b81526004810187905260240161088a565b96831796610bfc86868a868b6141da565b6000826116e08133611775565b6117065760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8360026000611714836108cf565b5091505063ffffffff82821616156117425760405163a2a7201360e01b81526004810184905260240161088a565b6000808061174f8a6108cf565b9250925092506117688a84848c61ffff161784856141da565b5098975050505050505050565b6000808080611783866108cf565b925092509250846001600160a01b0316836001600160a01b03161480610a6057506001600160a01b0380841660009081526002602090815260408083209389168352929052205460ff16610a60565b6060815183511461184b5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161088a565b6000835167ffffffffffffffff81111561186757611867614f53565b604051908082528060200260200182016040528015611890578160200160208202803683370190505b50905060005b8451811015611908576118db8582815181106118b4576118b461597a565b60200260200101518583815181106118ce576118ce61597a565b6020026020010151610810565b8282815181106118ed576118ed61597a565b602090810291909101015261190181615990565b9050611896565b509392505050565b611918613a30565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015611980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a491906159f4565b50505050565b60006108c982614284565b604080516020808201869052818301859052825180830384018152606090920190925280519101206000906119e981613d0f565b611a0657604051635374b59960e01b815260040160405180910390fd5b6000611a1286336109e3565b905080158015611a295750611a278233611775565b155b15611a505760405163168ab55d60e31b81526004810183905233602482015260440161088a565b60008080611a5d856108cf565b92509250925083158015611a745750620400008216155b15611a955760405163a2a7201360e01b81526004810186905260240161088a565b6000611aa08a6108cf565b92505050611aaf888383614190565b9750611abd8685858b61429a565b60405167ffffffffffffffff8916815286907ff675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b1329060200160405180910390a2509598975050505050505050565b611b12613a30565b611b1c60006142e2565b565b604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a660208083019190915281830186905282518083038401815260609092019092528051910120611b728133611775565b611b985760405163168ab55d60e31b81526004810182905233602482015260440161088a565b306001600160a01b03841603611bcc57604051632ca49b0d60e11b81526001600160a01b038416600482015260240161088a565b604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a660208083019190915281830187905282518083038401815260609092019092528051910120611c21905b83614332565b6040517f42842e0e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038481166024830152604482018690527f000000000000000000000000000000000000000000000000000000000000000016906342842e0e90606401600060405180830381600087803b158015611caa57600080fd5b505af1158015611cbe573d6000803e3d6000fd5b5050505050505050565b6000808686604051611cdb929190615a11565b6040519081900381206331a9108f60e11b82526004820181905291506000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015611d4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6f91906159d7565b90506001600160a01b0381163314801590611e17575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa158015611df1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1591906159f4565b155b15611e8757604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a66020808301919091528183018590528251808303840181526060830193849052805191012063168ab55d60e31b909252606481019190915233608482015260a40161088a565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b038281166004830152306024830152604482018490527f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90606401600060405180830381600087803b158015611f1057600080fd5b505af1158015611f24573d6000803e3d6000fd5b5050604051630a3b53db60e21b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692506328ed4f6c9150604401600060405180830381600087803b158015611f9057600080fd5b505af1158015611fa4573d6000803e3d6000fd5b5050604051636b727d4360e11b8152600481018590526276a70092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316915063d6e4fa8690602401602060405180830381865afa158015612012573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203691906158e9565b6120409190615918565b925061208988888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250505061ffff881686886138ca565b505095945050505050565b6001600160a01b03821633036121125760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161088a565b3360008181526002602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b3360009081526004602052604081205460ff166121ee5760405162461bcd60e51b815260206004820152602860248201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604482015267373a3937b63632b960c11b606482015260840161088a565b60008787604051612200929190615a11565b6040519081900381207ffca247ac000000000000000000000000000000000000000000000000000000008252600482018190523060248301526044820187905291507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063fca247ac906064016020604051808303816000875af1158015612295573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122b991906158e9565b915061230e88888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250505061ffff86166123086276a70087615918565b886138ca565b509695505050505050565b600080612325846108cf565b50841663ffffffff908116908516149250505092915050565b612346613a30565b6007546001600160a01b0316156124665760075460405163a22cb46560e01b81526001600160a01b039182166004820152600060248201527f00000000000000000000000000000000000000000000000000000000000000009091169063a22cb46590604401600060405180830381600087803b1580156123c657600080fd5b505af11580156123da573d6000803e3d6000fd5b505060075460405163a22cb46560e01b81526001600160a01b039182166004820152600060248201527f0000000000000000000000000000000000000000000000000000000000000000909116925063a22cb4659150604401600060405180830381600087803b15801561244d57600080fd5b505af1158015612461573d6000803e3d6000fd5b505050505b600780546001600160a01b0319166001600160a01b038316908117909155156125935760075460405163a22cb46560e01b81526001600160a01b039182166004820152600160248201527f00000000000000000000000000000000000000000000000000000000000000009091169063a22cb46590604401600060405180830381600087803b1580156124f857600080fd5b505af115801561250c573d6000803e3d6000fd5b505060075460405163a22cb46560e01b81526001600160a01b039182166004820152600160248201527f0000000000000000000000000000000000000000000000000000000000000000909116925063a22cb4659150604401600060405180830381600087803b15801561257f57600080fd5b505af11580156114d7573d6000803e3d6000fd5b50565b3360009081526004602052604081205460ff166126065760405162461bcd60e51b815260206004820152602860248201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604482015267373a3937b63632b960c11b606482015260840161088a565b604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a6602080830191909152818301869052825180830384018152606090920190925280519101206000906040517fc475abff00000000000000000000000000000000000000000000000000000000815260048101869052602481018590529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c475abff906044016020604051808303816000875af11580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061270491906158e9565b6040516331a9108f60e11b8152600481018790529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa925050508015612788575060408051601f3d908101601f19168201909252612785918101906159d7565b60015b6127955791506108c99050565b6001600160a01b0381163014158061283f57506040516302571be360e01b81526004810184905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa15801561280f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061283391906159d7565b6001600160a01b031614155b1561284e575091506108c99050565b50600061285e6276a70083615918565b60008481526001602052604090205490915060a081901c6128818583838661429a565b50919695505050505050565b60008661289a8133611775565b6128c05760405163168ab55d60e31b81526004810182905233602482015260440161088a565b600087876040516128d2929190615a11565b6040518091039020905061290d8982604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b92506129198984613a8a565b6129238386613bc9565b60006129668a858b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250613bfc92505050565b90506129748a858888613cc9565b945061297f84613d0f565b612a47576040517f06ab5923000000000000000000000000000000000000000000000000000000008152600481018b9052602481018390523060448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906306ab5923906064016020604051808303816000875af1158015612a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a3491906158e9565b50612a428482898989614424565b612a8d565b612a8d8a858b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d92508c91508b9050613dff565b5050509695505050505050565b6000612ae0600086868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506144669050565b6007549091506001600160a01b0316612b25576040517f24c1d6d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b2f8133611775565b612b555760405163168ab55d60e31b81526004810182905233602482015260440161088a565b60008080612b62846108cf565b919450925090506000612b7485610958565b9050612b7f85614525565b600760009054906101000a90046001600160a01b03166001600160a01b0316639198c2768a8a878787878e8e6040518963ffffffff1660e01b8152600401612bce989796959493929190615a4a565b600060405180830381600087803b158015612be857600080fd5b505af1158015612bfc573d6000803e3d6000fd5b50505050505050505050505050565b83612c168133611775565b612c3c5760405163168ab55d60e31b81526004810182905233602482015260440161088a565b84601c6000612c4a836108cf565b5091505063ffffffff8282161615612c785760405163a2a7201360e01b81526004810184905260240161088a565b6040517fcf408823000000000000000000000000000000000000000000000000000000008152600481018990523060248201526001600160a01b03878116604483015267ffffffffffffffff871660648301527f0000000000000000000000000000000000000000000000000000000000000000169063cf40882390608401600060405180830381600087803b158015612d1157600080fd5b505af1158015612d25573d6000803e3d6000fd5b5050506001600160a01b0388169050612d8c576000612d43896108cf565b509150506201ffff1962020000821601612d7b57604051632ca49b0d60e11b81526001600160a01b038916600482015260240161088a565b612d86896000614332565b50611cbe565b6000612d97896119aa565b9050612db981898b60001c6001604051806020016040528060008152506145e7565b505050505050505050565b60408051602080820186905281830185905282518083038401815260609092019092528051910120612df68133611775565b612e1c5760405163168ab55d60e31b81526004810182905233602482015260440161088a565b7f8ac29740f863baaa5e7f7859fc73ae6c0c5f2039527b4a0d6b173d3335a1dd5a8401612e5c5760405163615a470360e01b815260040160405180910390fd5b6001600160a01b0382161580612e7a57506001600160a01b03821630145b15612ea357604051632ca49b0d60e11b81526001600160a01b038316600482015260240161088a565b604080516020808201879052818301869052825180830384018152606090920190925280519101206119a490611c1b565b604080516020808201859052818301849052825180830384018152606090920190925280519101206000906000612f0a82613d0f565b90507f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a68514612f3c5791506108c99050565b6040516331a9108f60e11b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa925050508015612fbd575060408051601f3d908101601f19168201909252612fba918101906159d7565b60015b612fcc576000925050506108c9565b6001600160a01b0316301492506108c9915050565b612fe9613a30565b6001600160a01b038216600081815260046020908152604091829020805460ff191685151590811790915591519182527f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf8791015b60405180910390a25050565b600080613090600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506147399050565b9150915060006130d98288888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506144669050565b604080516020808201849052818301879052825180830384018152606090920190925280519101209091506000906000818152600660205260409020909150613123888a83615af9565b507f8ac29740f863baaa5e7f7859fc73ae6c0c5f2039527b4a0d6b173d3335a1dd5a82016131645760405163615a470360e01b815260040160405180910390fd5b6040516302571be360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906302571be390602401602060405180830381865afa1580156131cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131f091906159d7565b90506001600160a01b0381163314801590613298575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa158015613272573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061329691906159f4565b155b156132bf5760405163168ab55d60e31b81526004810183905233602482015260440161088a565b6001600160a01b0386161561335157604051630c4b7b8560e11b8152600481018390526001600160a01b0387811660248301527f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90604401600060405180830381600087803b15801561333857600080fd5b505af115801561334c573d6000803e3d6000fd5b505050505b604051635b0fc9c360e01b8152600481018390523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690635b0fc9c390604401600060405180830381600087803b1580156133b957600080fd5b505af11580156133cd573d6000803e3d6000fd5b50505050612db9828a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052508d93509150819050614424565b6001600160a01b0384166134785760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161088a565b6001600160a01b0385163314806134b257506001600160a01b038516600090815260026020908152604080832033845290915290205460ff165b6135245760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f7665640000000000000000000000000000000000000000000000606482015260840161088a565b6114d785858585856145e7565b613539613a30565b6001600160a01b0381166135b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161088a565b612593816142e2565b600081815260066020526040812080548291906135da90615940565b80601f016020809104026020016040519081016040528092919081815260200182805461360690615940565b80156136535780601f1061362857610100808354040283529160200191613653565b820191906000526020600020905b81548152906001019060200180831161363657829003601f168201915b50505050509050805160000361366c5750600092915050565b6000806136798382614739565b9092509050600061368a8483614466565b9050610a738184612ed4565b600080428367ffffffffffffffff1610156136c45761ffff19620100008516016136bf57600094505b600093505b50929391925050565b60006001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000148061371757506001600160e01b031982166303a24d0760e21b145b806108c957507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146108c9565b600061375a826119aa565b9050806001600160a01b0316836001600160a01b0316036137e35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161088a565b336001600160a01b038216148061381d57506001600160a01b038116600090815260026020908152604080832033845290915290205460ff165b61388f5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161088a565b6109de83836147f0565b6000620200008381161480156109965750426138b86276a70084615bb9565b67ffffffffffffffff16109392505050565b8451602086012060006139247f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a683604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b90506000613967886040518060400160405280600581526020017f036869690000000000000000000000000000000000000000000000000000000081525061485e565b60008381526006602052604090209091506139828282615bda565b50613995828289620300008a1789614424565b6001600160a01b03841615611cbe57604051630c4b7b8560e11b8152600481018390526001600160a01b0385811660248301527f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90604401600060405180830381600087803b158015613a0e57600080fd5b505af1158015613a22573d6000803e3d6000fd5b505050505050505050505050565b6000546001600160a01b03163314611b1c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088a565b60008080613a97846108cf565b919450925090504267ffffffffffffffff821610808015613b5b57506001600160a01b0384161580613b5b57506040516302571be360e01b8152600481018690526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015613b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613b5091906159d7565b6001600160a01b0316145b15613b9a576000613b6b876108cf565b509150506020811615613b945760405163a2a7201360e01b81526004810187905260240161088a565b50613bc1565b62010000831615613bc15760405163a2a7201360e01b81526004810186905260240161088a565b505050505050565b63fffdffff81811763ffffffff1614613bf85760405163a2a7201360e01b81526004810183905260240161088a565b5050565b60606000613ca583600660008881526020019081526020016000208054613c2290615940565b80601f0160208091040260200160405190810160405280929190818152602001828054613c4e90615940565b8015613c9b5780601f10613c7057610100808354040283529160200191613c9b565b820191906000526020600020905b815481529060010190602001808311613c7e57829003601f168201915b505050505061485e565b6000858152600660205260409020909150613cc08282615bda565b50949350505050565b600080613cd5856108cf565b92505050600080613ce88860001c6108cf565b9250925050613cf8878784614155565b613d03858483614190565b98975050505050505050565b600080613d1b836119aa565b6001600160a01b0316141580156108c957506040516302571be360e01b81526004810183905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015613d94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613db891906159d7565b6001600160a01b03161492915050565b60008681526006602052604081208054613de7918791613c2290615940565b9050613df68682868686614424565b50505050505050565b60008080613e0c886108cf565b9250925092506000613e3688600660008d81526020019081526020016000208054613c2290615940565b60008a8152600660205260409020805491925090613e5390615940565b9050600003613e76576000898152600660205260409020613e748282615bda565b505b613e85898588861785896141da565b6001600160a01b038716613ea357613e9e896000614332565b610bfc565b610bfc84888b60001c6001604051806020016040528060008152506145e7565b6201ffff1962020000831601613ee357613ee06276a70082615bb9565b90505b428167ffffffffffffffff161015613f605762010000821615613f5b5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161088a565b613f85565b6004821615613f855760405163a2a7201360e01b81526004810184905260240161088a565b604082166000036109de575050600090815260036020526040902080546001600160a01b0319169055565b6001600160a01b0384163b15613bc15760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190613ff49089908990889088908890600401615c9a565b6020604051808303816000875af192505050801561402f575060408051601f3d908101601f1916820190925261402c91810190615cec565b60015b6140e45761403b615d09565b806308c379a003614074575061404f615d25565b8061405a5750614076565b8060405162461bcd60e51b815260040161088a9190614dee565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161088a565b6001600160e01b0319811663bc197c8160e01b14613df65760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161088a565b63ffff0000821615801590600183161590829061416f5750805b156114d75760405163a2a7201360e01b81526004810186905260240161088a565b60008167ffffffffffffffff168467ffffffffffffffff1611156141b2578193505b8267ffffffffffffffff168467ffffffffffffffff1610156141d2578293505b509192915050565b6141e68585858461429a565b60405163ffffffff8416815285907f39873f00c80f4f94b7bd1594aebcf650f003545b74824d57ddf4939e3ff3a34b9060200160405180910390a28167ffffffffffffffff168167ffffffffffffffff1611156114d75760405167ffffffffffffffff8216815285907ff675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b132906020015b60405180910390a25050505050565b600080614290836108cf565b5090949350505050565b6142a48483614907565b60008481526001602052604090206001600160a01b03841663ffffffff60a01b60a085901b16176001600160c01b031960c084901b161790556119a4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61433d826001612319565b1561435e5760405163a2a7201360e01b81526004810183905260240161088a565b61436782614525565b604051635b0fc9c360e01b8152600481018390526001600160a01b0382811660248301527f00000000000000000000000000000000000000000000000000000000000000001690635b0fc9c390604401600060405180830381600087803b1580156143d157600080fd5b505af11580156143e5573d6000803e3d6000fd5b50506040516001600160a01b03841681528492507fee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c4915060200161303d565b61443085848484614940565b847f8ce7013e8abebc55c3890a68f5a27c67c3f7efa64e584de5fb22363c606fd340858585856040516142759493929190615daf565b60008060006144758585614739565b9092509050816144e7576001855161448d9190615df7565b84146144db5760405162461bcd60e51b815260206004820152601d60248201527f6e616d65686173683a204a756e6b20617420656e64206f66206e616d65000000604482015260640161088a565b50600091506108c99050565b6144f18582614466565b6040805160208101929092528101839052606001604051602081830303815290604052805190602001209250505092915050565b60008181526001602052604090205460a081901c60c082901c614549838383613696565b600086815260036020908152604080832080546001600160a01b03191690556001909152902063ffffffff60a01b60a083901b166001600160c01b031960c086901b1617905592506145989050565b60408051858152600160208201526000916001600160a01b0386169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b60008060006145f5866108cf565b925092509250614606868383613ec3565b8460011480156146275750876001600160a01b0316836001600160a01b0316145b6146865760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161088a565b866001600160a01b0316836001600160a01b0316036146a7575050506114d7565b60008681526001602052604090206001600160a01b03881663ffffffff60a01b60a085901b16176001600160c01b031960c084901b1617905560408051878152602081018790526001600160a01b03808a1692908b169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611cbe3389898989896149b4565b6000808351831061478c5760405162461bcd60e51b815260206004820152601e60248201527f726561644c6162656c3a20496e646578206f7574206f6620626f756e64730000604482015260640161088a565b60008484815181106147a0576147a061597a565b016020015160f81c905080156147cc576147c5856147bf866001615e0a565b83614ab0565b92506147d1565b600092505b6147db8185615e0a565b6147e6906001615e0a565b9150509250929050565b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190614825826119aa565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060018351101561489c576040517f280dacb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60ff835111156148da57826040517fe3ba295f00000000000000000000000000000000000000000000000000000000815260040161088a9190614dee565b825183836040516020016148f093929190615e1d565b604051602081830303815290604052905092915050565b61ffff81161580159061491f57506201000181811614155b15613bf85760405163a2a7201360e01b81526004810183905260240161088a565b61494a8483614907565b6000848152600160205260409020546001600160a01b038116156149a85761497185614525565b6040516000815285907fee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c49060200160405180910390a25b6114d785858585614ad4565b6001600160a01b0384163b15613bc15760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906149f89089908990889088908890600401615e7e565b6020604051808303816000875af1925050508015614a33575060408051601f3d908101601f19168201909252614a3091810190615cec565b60015b614a3f5761403b615d09565b6001600160e01b0319811663f23a6e6160e01b14613df65760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161088a565b8251600090614abf8385615e0a565b1115614aca57600080fd5b5091016020012090565b8360008080614ae2846108cf565b9194509250905063ffff0000821667ffffffffffffffff8087169083161115614b09578195505b428267ffffffffffffffff1610614b1f57958617955b6001600160a01b03841615614b765760405162461bcd60e51b815260206004820152601f60248201527f455243313135353a206d696e74206f66206578697374696e6720746f6b656e00604482015260640161088a565b6001600160a01b038816614bf25760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161088a565b306001600160a01b03891603614c705760405162461bcd60e51b815260206004820152603460248201527f455243313135353a206e65774f776e65722063616e6e6f74206265207468652060448201527f4e616d655772617070657220636f6e7472616374000000000000000000000000606482015260840161088a565b60008581526001602052604090206001600160a01b03891663ffffffff60a01b60a08a901b16176001600160c01b031960c089901b1617905560408051868152600160208201526001600160a01b038a169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612db93360008a886001604051806020016040528060008152506149b4565b6001600160a01b038116811461259357600080fd5b60008060408385031215614d3957600080fd5b8235614d4481614d11565b946020939093013593505050565b600060208284031215614d6457600080fd5b5035919050565b6001600160e01b03198116811461259357600080fd5b600060208284031215614d9357600080fd5b813561099681614d6b565b60005b83811015614db9578181015183820152602001614da1565b50506000910152565b60008151808452614dda816020860160208601614d9e565b601f01601f19169290920160200192915050565b6020815260006109966020830184614dc2565b60008060408385031215614e1457600080fd5b823591506020830135614e2681614d11565b809150509250929050565b803567ffffffffffffffff81168114614e4957600080fd5b919050565b60008060408385031215614e6157600080fd5b82359150614e7160208401614e31565b90509250929050565b60008083601f840112614e8c57600080fd5b50813567ffffffffffffffff811115614ea457600080fd5b602083019150836020828501011115614ebc57600080fd5b9250929050565b600080600080600060808688031215614edb57600080fd5b8535614ee681614d11565b94506020860135614ef681614d11565b935060408601359250606086013567ffffffffffffffff811115614f1957600080fd5b614f2588828901614e7a565b969995985093965092949392505050565b600060208284031215614f4857600080fd5b813561099681614d11565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715614f8f57614f8f614f53565b6040525050565b600067ffffffffffffffff821115614fb057614fb0614f53565b50601f01601f191660200190565b600082601f830112614fcf57600080fd5b8135614fda81614f96565b604051614fe78282614f69565b828152856020848701011115614ffc57600080fd5b82602086016020830137600092810160200192909252509392505050565b803563ffffffff81168114614e4957600080fd5b600080600080600080600060e0888a03121561504957600080fd5b87359650602088013567ffffffffffffffff81111561506757600080fd5b6150738a828b01614fbe565b965050604088013561508481614d11565b9450606088013561509481614d11565b93506150a260808901614e31565b92506150b060a0890161501a565b91506150be60c08901614e31565b905092959891949750929550565b600067ffffffffffffffff8211156150e6576150e6614f53565b5060051b60200190565b600082601f83011261510157600080fd5b8135602061510e826150cc565b60405161511b8282614f69565b83815260059390931b850182019282810191508684111561513b57600080fd5b8286015b8481101561230e578035835291830191830161513f565b600080600080600060a0868803121561516e57600080fd5b853561517981614d11565b9450602086013561518981614d11565b9350604086013567ffffffffffffffff808211156151a657600080fd5b6151b289838a016150f0565b945060608801359150808211156151c857600080fd5b6151d489838a016150f0565b935060808801359150808211156151ea57600080fd5b506151f788828901614fbe565b9150509295509295909350565b6000806000806080858703121561521a57600080fd5b84359350602085013592506152316040860161501a565b915061523f60608601614e31565b905092959194509250565b803561ffff81168114614e4957600080fd5b6000806040838503121561526f57600080fd5b82359150614e716020840161524a565b6000806040838503121561529257600080fd5b823567ffffffffffffffff808211156152aa57600080fd5b818501915085601f8301126152be57600080fd5b813560206152cb826150cc565b6040516152d88282614f69565b83815260059390931b85018201928281019150898411156152f857600080fd5b948201945b8386101561531f57853561531081614d11565b825294820194908201906152fd565b9650508601359250508082111561533557600080fd5b506147e6858286016150f0565b600081518084526020808501945080840160005b8381101561537257815187529582019590820190600101615356565b509495945050505050565b6020815260006109966020830184615342565b6000806000606084860312156153a557600080fd5b83356153b081614d11565b925060208401356153c081614d11565b929592945050506040919091013590565b6000806000606084860312156153e657600080fd5b83359250602084013591506153fd60408501614e31565b90509250925092565b60008060006060848603121561541b57600080fd5b83359250602084013561542d81614d11565b9150604084013561543d81614d11565b809150509250925092565b60008060008060006080868803121561546057600080fd5b853567ffffffffffffffff81111561547757600080fd5b61548388828901614e7a565b909650945050602086013561549781614d11565b92506154a56040870161524a565b915060608601356154b581614d11565b809150509295509295909350565b801515811461259357600080fd5b600080604083850312156154e457600080fd5b82356154ef81614d11565b91506020830135614e26816154c3565b60008060008060008060a0878903121561551857600080fd5b863567ffffffffffffffff81111561552f57600080fd5b61553b89828a01614e7a565b909750955050602087013561554f81614d11565b935060408701359250606087013561556681614d11565b91506155746080880161524a565b90509295509295509295565b6000806040838503121561559357600080fd5b82359150614e716020840161501a565b600080604083850312156155b657600080fd5b50508035926020909101359150565b60008060008060008060a087890312156155de57600080fd5b86359550602087013567ffffffffffffffff8111156155fc57600080fd5b61560889828a01614e7a565b909650945050604087013561561c81614d11565b925061562a6060880161501a565b915061557460808801614e31565b6000806000806040858703121561564e57600080fd5b843567ffffffffffffffff8082111561566657600080fd5b61567288838901614e7a565b9096509450602087013591508082111561568b57600080fd5b5061569887828801614e7a565b95989497509550505050565b600080600080608085870312156156ba57600080fd5b8435935060208501356156cc81614d11565b9250604085013561523181614d11565b6000806000606084860312156156f157600080fd5b8335925060208401359150604084013561543d81614d11565b6000806040838503121561571d57600080fd5b823561572881614d11565b91506020830135614e2681614d11565b6000806000806060858703121561574e57600080fd5b843567ffffffffffffffff81111561576557600080fd5b61577187828801614e7a565b909550935050602085013561578581614d11565b9150604085013561579581614d11565b939692955090935050565b600080600080600060a086880312156157b857600080fd5b85356157c381614d11565b945060208601356157d381614d11565b93506040860135925060608601359150608086013567ffffffffffffffff8111156157fd57600080fd5b6151f788828901614fbe565b60006020828403121561581b57600080fd5b815167ffffffffffffffff81111561583257600080fd5b8201601f8101841361584357600080fd5b805161584e81614f96565b60405161585b8282614f69565b82815286602084860101111561587057600080fd5b610a73836020830160208701614d9e565b6000806000806080858703121561589757600080fd5b843567ffffffffffffffff8111156158ae57600080fd5b6158ba87828801614fbe565b94505060208501356158cb81614d11565b92506158d96040860161524a565b9150606085013561579581614d11565b6000602082840312156158fb57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff81811683821601908082111561593957615939615902565b5092915050565b600181811c9082168061595457607f821691505b60208210810361597457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6000600182016159a2576159a2615902565b5060010190565b6040815260006159bc6040830185615342565b82810360208401526159ce8185615342565b95945050505050565b6000602082840312156159e957600080fd5b815161099681614d11565b600060208284031215615a0657600080fd5b8151610996816154c3565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60c081526000615a5e60c083018a8c615a21565b6001600160a01b03898116602085015263ffffffff8916604085015267ffffffffffffffff881660608501528616608084015282810360a0840152615aa4818587615a21565b9b9a5050505050505050505050565b601f8211156109de57600081815260208120601f850160051c81016020861015615ada5750805b601f850160051c820191505b81811015613bc157828155600101615ae6565b67ffffffffffffffff831115615b1157615b11614f53565b615b2583615b1f8354615940565b83615ab3565b6000601f841160018114615b595760008515615b415750838201355b600019600387901b1c1916600186901b1783556114d7565b600083815260209020601f19861690835b82811015615b8a5786850135825560209485019460019092019101615b6a565b5086821015615ba75760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b67ffffffffffffffff82811682821603908082111561593957615939615902565b815167ffffffffffffffff811115615bf457615bf4614f53565b615c0881615c028454615940565b84615ab3565b602080601f831160018114615c3d5760008415615c255750858301515b600019600386901b1c1916600185901b178555613bc1565b600085815260208120601f198616915b82811015615c6c57888601518255948401946001909101908401615c4d565b5085821015615c8a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006001600160a01b03808816835280871660208401525060a06040830152615cc660a0830186615342565b8281036060840152615cd88186615342565b90508281036080840152613d038185614dc2565b600060208284031215615cfe57600080fd5b815161099681614d6b565b600060033d1115615d225760046000803e5060005160e01c5b90565b600060443d1015615d335790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715615d6357505050505090565b8285019150815181811115615d7b5750505050505090565b843d8701016020828501011115615d955750505050505090565b615da460208286010187614f69565b509095945050505050565b608081526000615dc26080830187614dc2565b6001600160a01b039590951660208301525063ffffffff92909216604083015267ffffffffffffffff16606090910152919050565b818103818111156108c9576108c9615902565b808201808211156108c9576108c9615902565b7fff000000000000000000000000000000000000000000000000000000000000008460f81b16815260008351615e5a816001850160208801614d9e565b835190830190615e71816001840160208801614d9e565b0160010195945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152615eb660a0830184614dc2565b97965050505050505056fea26469706673582212206541bbe35456b3cf20b5ea8eccc16f9039d49e9b63c5a20cbeb08eccc22440c264736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061031f5760003560e01c80636352211e116101a7578063c93ab3fd116100ee578063e985e9c511610097578063f242432a11610071578063f242432a146107d7578063f2fde38b146107ea578063fd0cd0d9146107fd57600080fd5b8063e985e9c514610768578063eb8ae530146107a4578063ed70554d146107b757600080fd5b8063d9a50c12116100c8578063d9a50c121461071f578063da8c229e14610732578063e0dba60f1461075557600080fd5b8063c93ab3fd146106e6578063cf408823146106f9578063d8c9921a1461070c57600080fd5b8063a22cb46511610150578063b6bcad261161012a578063b6bcad26146106ad578063c475abff146106c0578063c658e086146106d357600080fd5b8063a22cb46514610674578063a401498214610687578063adf4960a1461069a57600080fd5b80638b4dfa75116101815780638b4dfa751461063d5780638cf8b41e146106505780638da5cb5b1461066357600080fd5b80636352211e146105f65780636e5d6ad214610609578063715018a61461063557600080fd5b80631f4e15041161026b5780633f15457f116102145780634e1273f4116101ee5780634e1273f4146105b057806353095467146105d05780635d3590d5146105e357600080fd5b80633f15457f1461054e578063402906fc1461057557806341415eab1461059d57600080fd5b80632b20e397116102455780632b20e397146105015780632eb2c2d61461052857806333c69ea91461053b57600080fd5b80631f4e1504146104c857806320c38e2b146104db57806324c1af44146104ee57600080fd5b80630e4cd725116102cd578063150b7a02116102a7578063150b7a02146104765780631534e177146104a25780631896f70a146104b557600080fd5b80630e4cd7251461043d5780630e89341c1461045057806314ab90381461046357600080fd5b806306fdde03116102fe57806306fdde03146103b4578063081812fc146103fd578063095ea7b31461042857600080fd5b8062fdd58e146103245780630178fe3f1461034a57806301ffc9a714610391575b600080fd5b610337610332366004614d26565b610810565b6040519081526020015b60405180910390f35b61035d610358366004614d52565b6108cf565b604080516001600160a01b03909416845263ffffffff909216602084015267ffffffffffffffff1690820152606001610341565b6103a461039f366004614d81565b6108ff565b6040519015158152602001610341565b6103f06040518060400160405280600b81526020017f4e616d655772617070657200000000000000000000000000000000000000000081525081565b6040516103419190614dee565b61041061040b366004614d52565b610958565b6040516001600160a01b039091168152602001610341565b61043b610436366004614d26565b61099d565b005b6103a461044b366004614e01565b6109e3565b6103f061045e366004614d52565b610a7d565b61043b610471366004614e4e565b610aef565b610489610484366004614ec3565b610c08565b6040516001600160e01b03199091168152602001610341565b61043b6104b0366004614f36565b610e1a565b61043b6104c3366004614e01565b610e44565b600754610410906001600160a01b031681565b6103f06104e9366004614d52565b610f06565b6103376104fc36600461502e565b610fa0565b6104107f000000000000000000000000000000000000000000000000000000000000000081565b61043b610536366004615156565b6111b4565b61043b610549366004615204565b6114de565b6104107f000000000000000000000000000000000000000000000000000000000000000081565b61058861058336600461525c565b6116d3565b60405163ffffffff9091168152602001610341565b6103a46105ab366004614e01565b611775565b6105c36105be36600461527f565b6117d2565b604051610341919061537d565b600554610410906001600160a01b031681565b61043b6105f1366004615390565b611910565b610410610604366004614d52565b6119aa565b61061c6106173660046153d1565b6119b5565b60405167ffffffffffffffff9091168152602001610341565b61043b611b0a565b61043b61064b366004615406565b611b1e565b61061c61065e366004615448565b611cc8565b6000546001600160a01b0316610410565b61043b6106823660046154d1565b612094565b6103376106953660046154ff565b61217e565b6103a46106a8366004615580565b612319565b61043b6106bb366004614f36565b61233e565b6103376106ce3660046155a3565b612596565b6103376106e13660046155c5565b61288d565b61043b6106f4366004615638565b612a9a565b61043b6107073660046156a4565b612c0b565b61043b61071a3660046156dc565b612dc4565b6103a461072d3660046155a3565b612ed4565b6103a4610740366004614f36565b60046020526000908152604090205460ff1681565b61043b6107633660046154d1565b612fe1565b6103a461077636600461570a565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b61043b6107b2366004615738565b613049565b6103376107c5366004614d52565b60016020526000908152604090205481565b61043b6107e53660046157a0565b613414565b61043b6107f8366004614f36565b613531565b6103a461080b366004614d52565b6135be565b60006001600160a01b0383166108935760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600061089e836119aa565b9050836001600160a01b0316816001600160a01b0316036108c35760019150506108c9565b60009150505b92915050565b60008181526001602052604090205460a081901c60c082901c6108f3838383613696565b90959094509092509050565b60006001600160e01b031982167fd82c42d800000000000000000000000000000000000000000000000000000000148061094957506001600160e01b03198216630a85bd0160e11b145b806108c957506108c9826136cd565b600080610964836119aa565b90506001600160a01b03811661097d5750600092915050565b6000838152600360205260409020546001600160a01b03165b9392505050565b60006109a8826108cf565b50915050603f1960408216016109d45760405163a2a7201360e01b81526004810183905260240161088a565b6109de838361374f565b505050565b60008080806109f1866108cf565b925092509250846001600160a01b0316836001600160a01b03161480610a3c57506001600160a01b0380841660009081526002602090815260408083209389168352929052205460ff165b80610a6057506001600160a01b038516610a5587610958565b6001600160a01b0316145b8015610a735750610a718282613899565b155b9695505050505050565b6005546040516303a24d0760e21b8152600481018390526060916001600160a01b031690630e89341c90602401600060405180830381865afa158015610ac7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108c99190810190615809565b81610afa8133611775565b610b205760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8260106000610b2e836108cf565b5091505063ffffffff8282161615610b5c5760405163a2a7201360e01b81526004810184905260240161088a565b6040517f14ab90380000000000000000000000000000000000000000000000000000000081526004810187905267ffffffffffffffff861660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906314ab9038906044015b600060405180830381600087803b158015610be857600080fd5b505af1158015610bfc573d6000803e3d6000fd5b50505050505050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c6c576040517f1931a53800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808080610c7d86880188615881565b83516020850120939750919550935091508890808214610cd3576040517fc65c3ccc000000000000000000000000000000000000000000000000000000008152600481018290526024810183905260440161088a565b604051630a3b53db60e21b8152600481018390523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906328ed4f6c90604401600060405180830381600087803b158015610d3b57600080fd5b505af1158015610d4f573d6000803e3d6000fd5b5050604051636b727d4360e11b8152600481018d9052600092506276a70091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d6e4fa8690602401602060405180830381865afa158015610dc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de491906158e9565b610dee9190615918565b9050610e0187878761ffff1684886138ca565b50630a85bd0160e11b9c9b505050505050505050505050565b610e22613a30565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b81610e4f8133611775565b610e755760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8260086000610e83836108cf565b5091505063ffffffff8282161615610eb15760405163a2a7201360e01b81526004810184905260240161088a565b604051630c4b7b8560e11b8152600481018790526001600160a01b0386811660248301527f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90604401610bce565b60066020526000908152604090208054610f1f90615940565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4b90615940565b8015610f985780601f10610f6d57610100808354040283529160200191610f98565b820191906000526020600020905b815481529060010190602001808311610f7b57829003601f168201915b505050505081565b600087610fad8133611775565b610fd35760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8751602089012061100b8a82604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b92506110178a84613a8a565b6110218386613bc9565b61102c8a848b613bfc565b506110398a848787613cc9565b935061104483613d0f565b6110fa576040516305ef2c7f60e41b8152600481018b9052602481018290523060448201526001600160a01b03888116606483015267ffffffffffffffff881660848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b1580156110cf57600080fd5b505af11580156110e3573d6000803e3d6000fd5b505050506110f58a848b8b8989613dc8565b6111a7565b6040516305ef2c7f60e41b8152600481018b9052602481018290523060448201526001600160a01b03888116606483015267ffffffffffffffff881660848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b15801561118157600080fd5b505af1158015611195573d6000803e3d6000fd5b505050506111a78a848b8b8989613dff565b5050979650505050505050565b815183511461122b5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161088a565b6001600160a01b03841661128f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161088a565b6001600160a01b0385163314806112c957506001600160a01b038516600090815260026020908152604080832033845290915290205460ff165b61133b5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000606482015260840161088a565b60005b835181101561147157600084828151811061135b5761135b61597a565b6020026020010151905060008483815181106113795761137961597a565b602002602001015190506000806000611391856108cf565b9250925092506113a2858383613ec3565b8360011480156113c357508a6001600160a01b0316836001600160a01b0316145b6114225760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161088a565b60008581526001602052604090206001600160a01b038b1663ffffffff60a01b60a085901b16176001600160c01b031960c084901b1617905550505050508061146a90615990565b905061133e565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516114c19291906159a9565b60405180910390a46114d7338686868686613fb0565b5050505050565b604080516020808201879052818301869052825180830384018152606090920190925280519101206115108184613bc9565b6000808061151d846108cf565b919450925090506001600160a01b03831615806115cc57506040516302571be360e01b81526004810185905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa15801561159c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c091906159d7565b6001600160a01b031614155b156115ea57604051635374b59960e01b815260040160405180910390fd5b6000806115f68a6108cf565b90935091508a90506116375761160c8633611775565b6116325760405163168ab55d60e31b81526004810187905233602482015260440161088a565b611667565b6116418a33611775565b6116675760405163168ab55d60e31b8152600481018b905233602482015260440161088a565b611672868984614155565b61167d878483614190565b9650620100008416158015906116a157508363ffffffff1688851763ffffffff1614155b156116c25760405163a2a7201360e01b81526004810187905260240161088a565b96831796610bfc86868a868b6141da565b6000826116e08133611775565b6117065760405163168ab55d60e31b81526004810182905233602482015260440161088a565b8360026000611714836108cf565b5091505063ffffffff82821616156117425760405163a2a7201360e01b81526004810184905260240161088a565b6000808061174f8a6108cf565b9250925092506117688a84848c61ffff161784856141da565b5098975050505050505050565b6000808080611783866108cf565b925092509250846001600160a01b0316836001600160a01b03161480610a6057506001600160a01b0380841660009081526002602090815260408083209389168352929052205460ff16610a60565b6060815183511461184b5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161088a565b6000835167ffffffffffffffff81111561186757611867614f53565b604051908082528060200260200182016040528015611890578160200160208202803683370190505b50905060005b8451811015611908576118db8582815181106118b4576118b461597a565b60200260200101518583815181106118ce576118ce61597a565b6020026020010151610810565b8282815181106118ed576118ed61597a565b602090810291909101015261190181615990565b9050611896565b509392505050565b611918613a30565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015611980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a491906159f4565b50505050565b60006108c982614284565b604080516020808201869052818301859052825180830384018152606090920190925280519101206000906119e981613d0f565b611a0657604051635374b59960e01b815260040160405180910390fd5b6000611a1286336109e3565b905080158015611a295750611a278233611775565b155b15611a505760405163168ab55d60e31b81526004810183905233602482015260440161088a565b60008080611a5d856108cf565b92509250925083158015611a745750620400008216155b15611a955760405163a2a7201360e01b81526004810186905260240161088a565b6000611aa08a6108cf565b92505050611aaf888383614190565b9750611abd8685858b61429a565b60405167ffffffffffffffff8916815286907ff675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b1329060200160405180910390a2509598975050505050505050565b611b12613a30565b611b1c60006142e2565b565b604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a660208083019190915281830186905282518083038401815260609092019092528051910120611b728133611775565b611b985760405163168ab55d60e31b81526004810182905233602482015260440161088a565b306001600160a01b03841603611bcc57604051632ca49b0d60e11b81526001600160a01b038416600482015260240161088a565b604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a660208083019190915281830187905282518083038401815260609092019092528051910120611c21905b83614332565b6040517f42842e0e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038481166024830152604482018690527f000000000000000000000000000000000000000000000000000000000000000016906342842e0e90606401600060405180830381600087803b158015611caa57600080fd5b505af1158015611cbe573d6000803e3d6000fd5b5050505050505050565b6000808686604051611cdb929190615a11565b6040519081900381206331a9108f60e11b82526004820181905291506000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015611d4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6f91906159d7565b90506001600160a01b0381163314801590611e17575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa158015611df1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1591906159f4565b155b15611e8757604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a66020808301919091528183018590528251808303840181526060830193849052805191012063168ab55d60e31b909252606481019190915233608482015260a40161088a565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b038281166004830152306024830152604482018490527f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90606401600060405180830381600087803b158015611f1057600080fd5b505af1158015611f24573d6000803e3d6000fd5b5050604051630a3b53db60e21b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692506328ed4f6c9150604401600060405180830381600087803b158015611f9057600080fd5b505af1158015611fa4573d6000803e3d6000fd5b5050604051636b727d4360e11b8152600481018590526276a70092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316915063d6e4fa8690602401602060405180830381865afa158015612012573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203691906158e9565b6120409190615918565b925061208988888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250505061ffff881686886138ca565b505095945050505050565b6001600160a01b03821633036121125760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161088a565b3360008181526002602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b3360009081526004602052604081205460ff166121ee5760405162461bcd60e51b815260206004820152602860248201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604482015267373a3937b63632b960c11b606482015260840161088a565b60008787604051612200929190615a11565b6040519081900381207ffca247ac000000000000000000000000000000000000000000000000000000008252600482018190523060248301526044820187905291507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063fca247ac906064016020604051808303816000875af1158015612295573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122b991906158e9565b915061230e88888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250505061ffff86166123086276a70087615918565b886138ca565b509695505050505050565b600080612325846108cf565b50841663ffffffff908116908516149250505092915050565b612346613a30565b6007546001600160a01b0316156124665760075460405163a22cb46560e01b81526001600160a01b039182166004820152600060248201527f00000000000000000000000000000000000000000000000000000000000000009091169063a22cb46590604401600060405180830381600087803b1580156123c657600080fd5b505af11580156123da573d6000803e3d6000fd5b505060075460405163a22cb46560e01b81526001600160a01b039182166004820152600060248201527f0000000000000000000000000000000000000000000000000000000000000000909116925063a22cb4659150604401600060405180830381600087803b15801561244d57600080fd5b505af1158015612461573d6000803e3d6000fd5b505050505b600780546001600160a01b0319166001600160a01b038316908117909155156125935760075460405163a22cb46560e01b81526001600160a01b039182166004820152600160248201527f00000000000000000000000000000000000000000000000000000000000000009091169063a22cb46590604401600060405180830381600087803b1580156124f857600080fd5b505af115801561250c573d6000803e3d6000fd5b505060075460405163a22cb46560e01b81526001600160a01b039182166004820152600160248201527f0000000000000000000000000000000000000000000000000000000000000000909116925063a22cb4659150604401600060405180830381600087803b15801561257f57600080fd5b505af11580156114d7573d6000803e3d6000fd5b50565b3360009081526004602052604081205460ff166126065760405162461bcd60e51b815260206004820152602860248201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604482015267373a3937b63632b960c11b606482015260840161088a565b604080517f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a6602080830191909152818301869052825180830384018152606090920190925280519101206000906040517fc475abff00000000000000000000000000000000000000000000000000000000815260048101869052602481018590529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c475abff906044016020604051808303816000875af11580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061270491906158e9565b6040516331a9108f60e11b8152600481018790529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa925050508015612788575060408051601f3d908101601f19168201909252612785918101906159d7565b60015b6127955791506108c99050565b6001600160a01b0381163014158061283f57506040516302571be360e01b81526004810184905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa15801561280f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061283391906159d7565b6001600160a01b031614155b1561284e575091506108c99050565b50600061285e6276a70083615918565b60008481526001602052604090205490915060a081901c6128818583838661429a565b50919695505050505050565b60008661289a8133611775565b6128c05760405163168ab55d60e31b81526004810182905233602482015260440161088a565b600087876040516128d2929190615a11565b6040518091039020905061290d8982604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b92506129198984613a8a565b6129238386613bc9565b60006129668a858b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250613bfc92505050565b90506129748a858888613cc9565b945061297f84613d0f565b612a47576040517f06ab5923000000000000000000000000000000000000000000000000000000008152600481018b9052602481018390523060448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906306ab5923906064016020604051808303816000875af1158015612a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a3491906158e9565b50612a428482898989614424565b612a8d565b612a8d8a858b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d92508c91508b9050613dff565b5050509695505050505050565b6000612ae0600086868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506144669050565b6007549091506001600160a01b0316612b25576040517f24c1d6d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b2f8133611775565b612b555760405163168ab55d60e31b81526004810182905233602482015260440161088a565b60008080612b62846108cf565b919450925090506000612b7485610958565b9050612b7f85614525565b600760009054906101000a90046001600160a01b03166001600160a01b0316639198c2768a8a878787878e8e6040518963ffffffff1660e01b8152600401612bce989796959493929190615a4a565b600060405180830381600087803b158015612be857600080fd5b505af1158015612bfc573d6000803e3d6000fd5b50505050505050505050505050565b83612c168133611775565b612c3c5760405163168ab55d60e31b81526004810182905233602482015260440161088a565b84601c6000612c4a836108cf565b5091505063ffffffff8282161615612c785760405163a2a7201360e01b81526004810184905260240161088a565b6040517fcf408823000000000000000000000000000000000000000000000000000000008152600481018990523060248201526001600160a01b03878116604483015267ffffffffffffffff871660648301527f0000000000000000000000000000000000000000000000000000000000000000169063cf40882390608401600060405180830381600087803b158015612d1157600080fd5b505af1158015612d25573d6000803e3d6000fd5b5050506001600160a01b0388169050612d8c576000612d43896108cf565b509150506201ffff1962020000821601612d7b57604051632ca49b0d60e11b81526001600160a01b038916600482015260240161088a565b612d86896000614332565b50611cbe565b6000612d97896119aa565b9050612db981898b60001c6001604051806020016040528060008152506145e7565b505050505050505050565b60408051602080820186905281830185905282518083038401815260609092019092528051910120612df68133611775565b612e1c5760405163168ab55d60e31b81526004810182905233602482015260440161088a565b7f8ac29740f863baaa5e7f7859fc73ae6c0c5f2039527b4a0d6b173d3335a1dd5a8401612e5c5760405163615a470360e01b815260040160405180910390fd5b6001600160a01b0382161580612e7a57506001600160a01b03821630145b15612ea357604051632ca49b0d60e11b81526001600160a01b038316600482015260240161088a565b604080516020808201879052818301869052825180830384018152606090920190925280519101206119a490611c1b565b604080516020808201859052818301849052825180830384018152606090920190925280519101206000906000612f0a82613d0f565b90507f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a68514612f3c5791506108c99050565b6040516331a9108f60e11b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa925050508015612fbd575060408051601f3d908101601f19168201909252612fba918101906159d7565b60015b612fcc576000925050506108c9565b6001600160a01b0316301492506108c9915050565b612fe9613a30565b6001600160a01b038216600081815260046020908152604091829020805460ff191685151590811790915591519182527f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf8791015b60405180910390a25050565b600080613090600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506147399050565b9150915060006130d98288888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506144669050565b604080516020808201849052818301879052825180830384018152606090920190925280519101209091506000906000818152600660205260409020909150613123888a83615af9565b507f8ac29740f863baaa5e7f7859fc73ae6c0c5f2039527b4a0d6b173d3335a1dd5a82016131645760405163615a470360e01b815260040160405180910390fd5b6040516302571be360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906302571be390602401602060405180830381865afa1580156131cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131f091906159d7565b90506001600160a01b0381163314801590613298575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa158015613272573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061329691906159f4565b155b156132bf5760405163168ab55d60e31b81526004810183905233602482015260440161088a565b6001600160a01b0386161561335157604051630c4b7b8560e11b8152600481018390526001600160a01b0387811660248301527f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90604401600060405180830381600087803b15801561333857600080fd5b505af115801561334c573d6000803e3d6000fd5b505050505b604051635b0fc9c360e01b8152600481018390523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690635b0fc9c390604401600060405180830381600087803b1580156133b957600080fd5b505af11580156133cd573d6000803e3d6000fd5b50505050612db9828a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052508d93509150819050614424565b6001600160a01b0384166134785760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161088a565b6001600160a01b0385163314806134b257506001600160a01b038516600090815260026020908152604080832033845290915290205460ff165b6135245760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f7665640000000000000000000000000000000000000000000000606482015260840161088a565b6114d785858585856145e7565b613539613a30565b6001600160a01b0381166135b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161088a565b612593816142e2565b600081815260066020526040812080548291906135da90615940565b80601f016020809104026020016040519081016040528092919081815260200182805461360690615940565b80156136535780601f1061362857610100808354040283529160200191613653565b820191906000526020600020905b81548152906001019060200180831161363657829003601f168201915b50505050509050805160000361366c5750600092915050565b6000806136798382614739565b9092509050600061368a8483614466565b9050610a738184612ed4565b600080428367ffffffffffffffff1610156136c45761ffff19620100008516016136bf57600094505b600093505b50929391925050565b60006001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000148061371757506001600160e01b031982166303a24d0760e21b145b806108c957507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146108c9565b600061375a826119aa565b9050806001600160a01b0316836001600160a01b0316036137e35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161088a565b336001600160a01b038216148061381d57506001600160a01b038116600090815260026020908152604080832033845290915290205460ff165b61388f5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161088a565b6109de83836147f0565b6000620200008381161480156109965750426138b86276a70084615bb9565b67ffffffffffffffff16109392505050565b8451602086012060006139247f753d68bf079c4555a18087a6038c5193f3a0dfc6ad84b5f294e8c2ccca5e22a683604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b90506000613967886040518060400160405280600581526020017f036869690000000000000000000000000000000000000000000000000000000081525061485e565b60008381526006602052604090209091506139828282615bda565b50613995828289620300008a1789614424565b6001600160a01b03841615611cbe57604051630c4b7b8560e11b8152600481018390526001600160a01b0385811660248301527f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90604401600060405180830381600087803b158015613a0e57600080fd5b505af1158015613a22573d6000803e3d6000fd5b505050505050505050505050565b6000546001600160a01b03163314611b1c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088a565b60008080613a97846108cf565b919450925090504267ffffffffffffffff821610808015613b5b57506001600160a01b0384161580613b5b57506040516302571be360e01b8152600481018690526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015613b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613b5091906159d7565b6001600160a01b0316145b15613b9a576000613b6b876108cf565b509150506020811615613b945760405163a2a7201360e01b81526004810187905260240161088a565b50613bc1565b62010000831615613bc15760405163a2a7201360e01b81526004810186905260240161088a565b505050505050565b63fffdffff81811763ffffffff1614613bf85760405163a2a7201360e01b81526004810183905260240161088a565b5050565b60606000613ca583600660008881526020019081526020016000208054613c2290615940565b80601f0160208091040260200160405190810160405280929190818152602001828054613c4e90615940565b8015613c9b5780601f10613c7057610100808354040283529160200191613c9b565b820191906000526020600020905b815481529060010190602001808311613c7e57829003601f168201915b505050505061485e565b6000858152600660205260409020909150613cc08282615bda565b50949350505050565b600080613cd5856108cf565b92505050600080613ce88860001c6108cf565b9250925050613cf8878784614155565b613d03858483614190565b98975050505050505050565b600080613d1b836119aa565b6001600160a01b0316141580156108c957506040516302571be360e01b81526004810183905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015613d94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613db891906159d7565b6001600160a01b03161492915050565b60008681526006602052604081208054613de7918791613c2290615940565b9050613df68682868686614424565b50505050505050565b60008080613e0c886108cf565b9250925092506000613e3688600660008d81526020019081526020016000208054613c2290615940565b60008a8152600660205260409020805491925090613e5390615940565b9050600003613e76576000898152600660205260409020613e748282615bda565b505b613e85898588861785896141da565b6001600160a01b038716613ea357613e9e896000614332565b610bfc565b610bfc84888b60001c6001604051806020016040528060008152506145e7565b6201ffff1962020000831601613ee357613ee06276a70082615bb9565b90505b428167ffffffffffffffff161015613f605762010000821615613f5b5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161088a565b613f85565b6004821615613f855760405163a2a7201360e01b81526004810184905260240161088a565b604082166000036109de575050600090815260036020526040902080546001600160a01b0319169055565b6001600160a01b0384163b15613bc15760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190613ff49089908990889088908890600401615c9a565b6020604051808303816000875af192505050801561402f575060408051601f3d908101601f1916820190925261402c91810190615cec565b60015b6140e45761403b615d09565b806308c379a003614074575061404f615d25565b8061405a5750614076565b8060405162461bcd60e51b815260040161088a9190614dee565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161088a565b6001600160e01b0319811663bc197c8160e01b14613df65760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161088a565b63ffff0000821615801590600183161590829061416f5750805b156114d75760405163a2a7201360e01b81526004810186905260240161088a565b60008167ffffffffffffffff168467ffffffffffffffff1611156141b2578193505b8267ffffffffffffffff168467ffffffffffffffff1610156141d2578293505b509192915050565b6141e68585858461429a565b60405163ffffffff8416815285907f39873f00c80f4f94b7bd1594aebcf650f003545b74824d57ddf4939e3ff3a34b9060200160405180910390a28167ffffffffffffffff168167ffffffffffffffff1611156114d75760405167ffffffffffffffff8216815285907ff675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b132906020015b60405180910390a25050505050565b600080614290836108cf565b5090949350505050565b6142a48483614907565b60008481526001602052604090206001600160a01b03841663ffffffff60a01b60a085901b16176001600160c01b031960c084901b161790556119a4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61433d826001612319565b1561435e5760405163a2a7201360e01b81526004810183905260240161088a565b61436782614525565b604051635b0fc9c360e01b8152600481018390526001600160a01b0382811660248301527f00000000000000000000000000000000000000000000000000000000000000001690635b0fc9c390604401600060405180830381600087803b1580156143d157600080fd5b505af11580156143e5573d6000803e3d6000fd5b50506040516001600160a01b03841681528492507fee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c4915060200161303d565b61443085848484614940565b847f8ce7013e8abebc55c3890a68f5a27c67c3f7efa64e584de5fb22363c606fd340858585856040516142759493929190615daf565b60008060006144758585614739565b9092509050816144e7576001855161448d9190615df7565b84146144db5760405162461bcd60e51b815260206004820152601d60248201527f6e616d65686173683a204a756e6b20617420656e64206f66206e616d65000000604482015260640161088a565b50600091506108c99050565b6144f18582614466565b6040805160208101929092528101839052606001604051602081830303815290604052805190602001209250505092915050565b60008181526001602052604090205460a081901c60c082901c614549838383613696565b600086815260036020908152604080832080546001600160a01b03191690556001909152902063ffffffff60a01b60a083901b166001600160c01b031960c086901b1617905592506145989050565b60408051858152600160208201526000916001600160a01b0386169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b60008060006145f5866108cf565b925092509250614606868383613ec3565b8460011480156146275750876001600160a01b0316836001600160a01b0316145b6146865760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161088a565b866001600160a01b0316836001600160a01b0316036146a7575050506114d7565b60008681526001602052604090206001600160a01b03881663ffffffff60a01b60a085901b16176001600160c01b031960c084901b1617905560408051878152602081018790526001600160a01b03808a1692908b169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611cbe3389898989896149b4565b6000808351831061478c5760405162461bcd60e51b815260206004820152601e60248201527f726561644c6162656c3a20496e646578206f7574206f6620626f756e64730000604482015260640161088a565b60008484815181106147a0576147a061597a565b016020015160f81c905080156147cc576147c5856147bf866001615e0a565b83614ab0565b92506147d1565b600092505b6147db8185615e0a565b6147e6906001615e0a565b9150509250929050565b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190614825826119aa565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060018351101561489c576040517f280dacb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60ff835111156148da57826040517fe3ba295f00000000000000000000000000000000000000000000000000000000815260040161088a9190614dee565b825183836040516020016148f093929190615e1d565b604051602081830303815290604052905092915050565b61ffff81161580159061491f57506201000181811614155b15613bf85760405163a2a7201360e01b81526004810183905260240161088a565b61494a8483614907565b6000848152600160205260409020546001600160a01b038116156149a85761497185614525565b6040516000815285907fee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c49060200160405180910390a25b6114d785858585614ad4565b6001600160a01b0384163b15613bc15760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906149f89089908990889088908890600401615e7e565b6020604051808303816000875af1925050508015614a33575060408051601f3d908101601f19168201909252614a3091810190615cec565b60015b614a3f5761403b615d09565b6001600160e01b0319811663f23a6e6160e01b14613df65760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161088a565b8251600090614abf8385615e0a565b1115614aca57600080fd5b5091016020012090565b8360008080614ae2846108cf565b9194509250905063ffff0000821667ffffffffffffffff8087169083161115614b09578195505b428267ffffffffffffffff1610614b1f57958617955b6001600160a01b03841615614b765760405162461bcd60e51b815260206004820152601f60248201527f455243313135353a206d696e74206f66206578697374696e6720746f6b656e00604482015260640161088a565b6001600160a01b038816614bf25760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161088a565b306001600160a01b03891603614c705760405162461bcd60e51b815260206004820152603460248201527f455243313135353a206e65774f776e65722063616e6e6f74206265207468652060448201527f4e616d655772617070657220636f6e7472616374000000000000000000000000606482015260840161088a565b60008581526001602052604090206001600160a01b03891663ffffffff60a01b60a08a901b16176001600160c01b031960c089901b1617905560408051868152600160208201526001600160a01b038a169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612db93360008a886001604051806020016040528060008152506149b4565b6001600160a01b038116811461259357600080fd5b60008060408385031215614d3957600080fd5b8235614d4481614d11565b946020939093013593505050565b600060208284031215614d6457600080fd5b5035919050565b6001600160e01b03198116811461259357600080fd5b600060208284031215614d9357600080fd5b813561099681614d6b565b60005b83811015614db9578181015183820152602001614da1565b50506000910152565b60008151808452614dda816020860160208601614d9e565b601f01601f19169290920160200192915050565b6020815260006109966020830184614dc2565b60008060408385031215614e1457600080fd5b823591506020830135614e2681614d11565b809150509250929050565b803567ffffffffffffffff81168114614e4957600080fd5b919050565b60008060408385031215614e6157600080fd5b82359150614e7160208401614e31565b90509250929050565b60008083601f840112614e8c57600080fd5b50813567ffffffffffffffff811115614ea457600080fd5b602083019150836020828501011115614ebc57600080fd5b9250929050565b600080600080600060808688031215614edb57600080fd5b8535614ee681614d11565b94506020860135614ef681614d11565b935060408601359250606086013567ffffffffffffffff811115614f1957600080fd5b614f2588828901614e7a565b969995985093965092949392505050565b600060208284031215614f4857600080fd5b813561099681614d11565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715614f8f57614f8f614f53565b6040525050565b600067ffffffffffffffff821115614fb057614fb0614f53565b50601f01601f191660200190565b600082601f830112614fcf57600080fd5b8135614fda81614f96565b604051614fe78282614f69565b828152856020848701011115614ffc57600080fd5b82602086016020830137600092810160200192909252509392505050565b803563ffffffff81168114614e4957600080fd5b600080600080600080600060e0888a03121561504957600080fd5b87359650602088013567ffffffffffffffff81111561506757600080fd5b6150738a828b01614fbe565b965050604088013561508481614d11565b9450606088013561509481614d11565b93506150a260808901614e31565b92506150b060a0890161501a565b91506150be60c08901614e31565b905092959891949750929550565b600067ffffffffffffffff8211156150e6576150e6614f53565b5060051b60200190565b600082601f83011261510157600080fd5b8135602061510e826150cc565b60405161511b8282614f69565b83815260059390931b850182019282810191508684111561513b57600080fd5b8286015b8481101561230e578035835291830191830161513f565b600080600080600060a0868803121561516e57600080fd5b853561517981614d11565b9450602086013561518981614d11565b9350604086013567ffffffffffffffff808211156151a657600080fd5b6151b289838a016150f0565b945060608801359150808211156151c857600080fd5b6151d489838a016150f0565b935060808801359150808211156151ea57600080fd5b506151f788828901614fbe565b9150509295509295909350565b6000806000806080858703121561521a57600080fd5b84359350602085013592506152316040860161501a565b915061523f60608601614e31565b905092959194509250565b803561ffff81168114614e4957600080fd5b6000806040838503121561526f57600080fd5b82359150614e716020840161524a565b6000806040838503121561529257600080fd5b823567ffffffffffffffff808211156152aa57600080fd5b818501915085601f8301126152be57600080fd5b813560206152cb826150cc565b6040516152d88282614f69565b83815260059390931b85018201928281019150898411156152f857600080fd5b948201945b8386101561531f57853561531081614d11565b825294820194908201906152fd565b9650508601359250508082111561533557600080fd5b506147e6858286016150f0565b600081518084526020808501945080840160005b8381101561537257815187529582019590820190600101615356565b509495945050505050565b6020815260006109966020830184615342565b6000806000606084860312156153a557600080fd5b83356153b081614d11565b925060208401356153c081614d11565b929592945050506040919091013590565b6000806000606084860312156153e657600080fd5b83359250602084013591506153fd60408501614e31565b90509250925092565b60008060006060848603121561541b57600080fd5b83359250602084013561542d81614d11565b9150604084013561543d81614d11565b809150509250925092565b60008060008060006080868803121561546057600080fd5b853567ffffffffffffffff81111561547757600080fd5b61548388828901614e7a565b909650945050602086013561549781614d11565b92506154a56040870161524a565b915060608601356154b581614d11565b809150509295509295909350565b801515811461259357600080fd5b600080604083850312156154e457600080fd5b82356154ef81614d11565b91506020830135614e26816154c3565b60008060008060008060a0878903121561551857600080fd5b863567ffffffffffffffff81111561552f57600080fd5b61553b89828a01614e7a565b909750955050602087013561554f81614d11565b935060408701359250606087013561556681614d11565b91506155746080880161524a565b90509295509295509295565b6000806040838503121561559357600080fd5b82359150614e716020840161501a565b600080604083850312156155b657600080fd5b50508035926020909101359150565b60008060008060008060a087890312156155de57600080fd5b86359550602087013567ffffffffffffffff8111156155fc57600080fd5b61560889828a01614e7a565b909650945050604087013561561c81614d11565b925061562a6060880161501a565b915061557460808801614e31565b6000806000806040858703121561564e57600080fd5b843567ffffffffffffffff8082111561566657600080fd5b61567288838901614e7a565b9096509450602087013591508082111561568b57600080fd5b5061569887828801614e7a565b95989497509550505050565b600080600080608085870312156156ba57600080fd5b8435935060208501356156cc81614d11565b9250604085013561523181614d11565b6000806000606084860312156156f157600080fd5b8335925060208401359150604084013561543d81614d11565b6000806040838503121561571d57600080fd5b823561572881614d11565b91506020830135614e2681614d11565b6000806000806060858703121561574e57600080fd5b843567ffffffffffffffff81111561576557600080fd5b61577187828801614e7a565b909550935050602085013561578581614d11565b9150604085013561579581614d11565b939692955090935050565b600080600080600060a086880312156157b857600080fd5b85356157c381614d11565b945060208601356157d381614d11565b93506040860135925060608601359150608086013567ffffffffffffffff8111156157fd57600080fd5b6151f788828901614fbe565b60006020828403121561581b57600080fd5b815167ffffffffffffffff81111561583257600080fd5b8201601f8101841361584357600080fd5b805161584e81614f96565b60405161585b8282614f69565b82815286602084860101111561587057600080fd5b610a73836020830160208701614d9e565b6000806000806080858703121561589757600080fd5b843567ffffffffffffffff8111156158ae57600080fd5b6158ba87828801614fbe565b94505060208501356158cb81614d11565b92506158d96040860161524a565b9150606085013561579581614d11565b6000602082840312156158fb57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff81811683821601908082111561593957615939615902565b5092915050565b600181811c9082168061595457607f821691505b60208210810361597457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6000600182016159a2576159a2615902565b5060010190565b6040815260006159bc6040830185615342565b82810360208401526159ce8185615342565b95945050505050565b6000602082840312156159e957600080fd5b815161099681614d11565b600060208284031215615a0657600080fd5b8151610996816154c3565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60c081526000615a5e60c083018a8c615a21565b6001600160a01b03898116602085015263ffffffff8916604085015267ffffffffffffffff881660608501528616608084015282810360a0840152615aa4818587615a21565b9b9a5050505050505050505050565b601f8211156109de57600081815260208120601f850160051c81016020861015615ada5750805b601f850160051c820191505b81811015613bc157828155600101615ae6565b67ffffffffffffffff831115615b1157615b11614f53565b615b2583615b1f8354615940565b83615ab3565b6000601f841160018114615b595760008515615b415750838201355b600019600387901b1c1916600186901b1783556114d7565b600083815260209020601f19861690835b82811015615b8a5786850135825560209485019460019092019101615b6a565b5086821015615ba75760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b67ffffffffffffffff82811682821603908082111561593957615939615902565b815167ffffffffffffffff811115615bf457615bf4614f53565b615c0881615c028454615940565b84615ab3565b602080601f831160018114615c3d5760008415615c255750858301515b600019600386901b1c1916600185901b178555613bc1565b600085815260208120601f198616915b82811015615c6c57888601518255948401946001909101908401615c4d565b5085821015615c8a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006001600160a01b03808816835280871660208401525060a06040830152615cc660a0830186615342565b8281036060840152615cd88186615342565b90508281036080840152613d038185614dc2565b600060208284031215615cfe57600080fd5b815161099681614d6b565b600060033d1115615d225760046000803e5060005160e01c5b90565b600060443d1015615d335790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715615d6357505050505090565b8285019150815181811115615d7b5750505050505090565b843d8701016020828501011115615d955750505050505090565b615da460208286010187614f69565b509095945050505050565b608081526000615dc26080830187614dc2565b6001600160a01b039590951660208301525063ffffffff92909216604083015267ffffffffffffffff16606090910152919050565b818103818111156108c9576108c9615902565b808201808211156108c9576108c9615902565b7fff000000000000000000000000000000000000000000000000000000000000008460f81b16815260008351615e5a816001850160208801614d9e565b835190830190615e71816001840160208801614d9e565b0160010195945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152615eb660a0830184614dc2565b97965050505050505056fea26469706673582212206541bbe35456b3cf20b5ea8eccc16f9039d49e9b63c5a20cbeb08eccc22440c264736f6c63430008110033",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allFusesBurned(bytes32,uint32)": {
        "params": {
          "fuseMask": "The fuses you want to check",
          "node": "Namehash of the name"
        },
        "returns": {
          "_0": "Boolean of whether or not all the selected fuses are burned"
        }
      },
      "approve(address,uint256)": {
        "params": {
          "to": "address to approve",
          "tokenId": "name to approve"
        }
      },
      "balanceOf(address,uint256)": {
        "details": "See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address."
      },
      "balanceOfBatch(address[],uint256[])": {
        "details": "See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length."
      },
      "canExtendSubnames(bytes32,address)": {
        "params": {
          "addr": "which address to check permissions for",
          "node": "namehash of the name to check"
        },
        "returns": {
          "_0": "whether or not is owner/operator or approved"
        }
      },
      "canModifyName(bytes32,address)": {
        "params": {
          "addr": "which address to check permissions for",
          "node": "namehash of the name to check"
        },
        "returns": {
          "_0": "whether or not is owner or operator"
        }
      },
      "extendExpiry(bytes32,bytes32,uint64)": {
        "params": {
          "expiry": "When the name will expire in seconds since the Unix epoch",
          "labelhash": "Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')",
          "parentNode": "Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')"
        },
        "returns": {
          "_0": "New expiry"
        }
      },
      "getApproved(uint256)": {
        "params": {
          "id": "Namehash of the name"
        },
        "returns": {
          "operator": "Approved operator of a name"
        }
      },
      "getData(uint256)": {
        "params": {
          "id": "Namehash of the name"
        },
        "returns": {
          "expiry": "Expiry of the name",
          "fuses": "Fuses of the name",
          "owner": "Owner of the name"
        }
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC1155-isApprovedForAll}."
      },
      "isWrapped(bytes32)": {
        "params": {
          "node": "Namehash of the name"
        },
        "returns": {
          "_0": "Boolean of whether or not the name is wrapped"
        }
      },
      "isWrapped(bytes32,bytes32)": {
        "params": {
          "labelhash": "Namehash of the name",
          "parentNode": "Namehash of the name"
        },
        "returns": {
          "_0": "Boolean of whether or not the name is wrapped"
        }
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "params": {
          "id": "Label as a string of the .eth domain to wrap"
        },
        "returns": {
          "owner": "The owner of the name"
        }
      },
      "recoverFunds(address,address,uint256)": {
        "details": "The contract is Ownable and only the owner can call the recover function.",
        "params": {
          "_amount": "The amount of tokens to recover.",
          "_to": "The address to send the tokens to.",
          "_token": "The address of the ERC20 token to recover"
        }
      },
      "registerAndWrapETH2LD(string,address,uint256,address,uint16)": {
        "details": "Registers a new .eth second-level domain and wraps it.      Only callable by authorised controllers.",
        "params": {
          "duration": "The duration, in seconds, to register the name for.",
          "label": "The label to register (Eg, 'foo' for 'foo.hii').",
          "ownerControlledFuses": "Initial owner-controlled fuses to set",
          "resolver": "The resolver address to set on the ENS registry (optional).",
          "wrappedOwner": "The owner of the wrapped name."
        },
        "returns": {
          "registrarExpiry": "The expiry date of the new name on the .eth registrar, in seconds since the Unix epoch."
        }
      },
      "renew(uint256,uint256)": {
        "details": "Only callable by authorised controllers.",
        "params": {
          "duration": "The number of seconds to renew the name for.",
          "tokenId": "The hash of the label to register (eg, `keccak256('foo')`, for 'foo.hii')."
        },
        "returns": {
          "expires": "The expiry date of the name on the .eth registrar, in seconds since the Unix epoch."
        }
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "details": "See {IERC1155-safeBatchTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "details": "See {IERC1155-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC1155-setApprovalForAll}."
      },
      "setChildFuses(bytes32,bytes32,uint32,uint64)": {
        "params": {
          "expiry": "When the name will expire in seconds since the Unix epoch",
          "fuses": "Fuses to burn",
          "labelhash": "Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')",
          "parentNode": "Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')"
        }
      },
      "setFuses(bytes32,uint16)": {
        "params": {
          "node": "Namehash of the name",
          "ownerControlledFuses": "Owner-controlled fuses to burn"
        },
        "returns": {
          "_0": "Old fuses"
        }
      },
      "setMetadataService(address)": {
        "params": {
          "_metadataService": "The new metadata service"
        }
      },
      "setRecord(bytes32,address,address,uint64)": {
        "params": {
          "node": "Namehash of the name to set a record for",
          "owner": "New owner in the registry",
          "resolver": "Resolver contract",
          "ttl": "Time to live in the registry"
        }
      },
      "setResolver(bytes32,address)": {
        "params": {
          "node": "namehash of the name",
          "resolver": "the resolver contract"
        }
      },
      "setSubnodeOwner(bytes32,string,address,uint32,uint64)": {
        "params": {
          "expiry": "When the name will expire in seconds since the Unix epoch",
          "fuses": "Initial fuses for the wrapped subdomain",
          "label": "Label of the subdomain as a string",
          "owner": "New owner in the wrapper",
          "parentNode": "Parent namehash of the subdomain"
        },
        "returns": {
          "node": "Namehash of the subdomain"
        }
      },
      "setSubnodeRecord(bytes32,string,address,address,uint64,uint32,uint64)": {
        "params": {
          "expiry": "When the name will expire in seconds since the Unix epoch",
          "fuses": "initial fuses for the wrapped subdomain",
          "label": "label of the subdomain as a string",
          "owner": "new owner in the wrapper",
          "parentNode": "parent namehash of the subdomain",
          "resolver": "resolver contract in the registry",
          "ttl": "ttl in the registry"
        },
        "returns": {
          "node": "Namehash of the subdomain"
        }
      },
      "setTTL(bytes32,uint64)": {
        "params": {
          "node": "Namehash of the name",
          "ttl": "TTL in the registry"
        }
      },
      "setUpgradeContract(address)": {
        "details": "The default value of upgradeContract is the 0 address. Use the 0 address at any time to make the contract not upgradable.",
        "params": {
          "_upgradeAddress": "address of an upgraded contract"
        }
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      },
      "unwrap(bytes32,bytes32,address)": {
        "details": "Can be called by the owner in the wrapper or an authorised caller in the wrapper",
        "params": {
          "controller": "Sets the owner in the registry to this address",
          "labelhash": "Labelhash of the name, e.g. vitalik.xyz would be keccak256('vitalik')",
          "parentNode": "Parent namehash of the name e.g. vitalik.xyz would be namehash('xyz')"
        }
      },
      "unwrapETH2LD(bytes32,address,address)": {
        "details": "Can be called by the owner in the wrapper or an authorised caller in the wrapper",
        "params": {
          "controller": "Sets the owner in the registry to this address",
          "labelhash": "Labelhash of the .eth domain",
          "registrant": "Sets the owner in the .eth registrar to this address"
        }
      },
      "upgrade(bytes,bytes)": {
        "details": "Can be called by the owner or an authorised caller",
        "params": {
          "extraData": "Extra data to pass to the upgrade contract",
          "name": "The name to upgrade, in DNS format"
        }
      },
      "uri(uint256)": {
        "params": {
          "tokenId": "The id of the token"
        },
        "returns": {
          "_0": "string uri of the metadata service"
        }
      },
      "wrap(bytes,address,address)": {
        "details": "Can be called by the owner in the registry or an authorised caller in the registry",
        "params": {
          "name": "The name to wrap, in DNS format",
          "resolver": "Resolver contract",
          "wrappedOwner": "Owner of the name in this contract"
        }
      },
      "wrapETH2LD(string,address,uint16,address)": {
        "details": "Can be called by the owner of the name on the .eth registrar or an authorised caller on the registrar",
        "params": {
          "label": "Label as a string of the .eth domain to wrap",
          "ownerControlledFuses": "Initial owner-controlled fuses to set",
          "resolver": "Resolver contract address",
          "wrappedOwner": "Owner of the name in this contract"
        }
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "allFusesBurned(bytes32,uint32)": {
        "notice": "Checks all Fuses in the mask are burned for the node"
      },
      "approve(address,uint256)": {
        "notice": "Approves an address for a name"
      },
      "canExtendSubnames(bytes32,address)": {
        "notice": "Checks if owner/operator or approved by owner"
      },
      "canModifyName(bytes32,address)": {
        "notice": "Checks if owner or operator of the owner"
      },
      "extendExpiry(bytes32,bytes32,uint64)": {
        "notice": "Extends expiry for a name"
      },
      "getApproved(uint256)": {
        "notice": "Gets the owner of a name"
      },
      "getData(uint256)": {
        "notice": "Gets the data for a name"
      },
      "isWrapped(bytes32)": {
        "notice": "Checks if a name is wrapped"
      },
      "isWrapped(bytes32,bytes32)": {
        "notice": "Checks if a name is wrapped in a more gas efficient way"
      },
      "ownerOf(uint256)": {
        "notice": "Gets the owner of a name"
      },
      "recoverFunds(address,address,uint256)": {
        "notice": "Recover ERC20 tokens sent to the contract by mistake."
      },
      "renew(uint256,uint256)": {
        "notice": "Renews a .eth second-level domain."
      },
      "setChildFuses(bytes32,bytes32,uint32,uint64)": {
        "notice": "Sets fuses of a name that you own the parent of"
      },
      "setFuses(bytes32,uint16)": {
        "notice": "Sets fuses of a name"
      },
      "setMetadataService(address)": {
        "notice": "Set the metadata service. Only the owner can do this"
      },
      "setRecord(bytes32,address,address,uint64)": {
        "notice": "Sets records for the name in the ENS Registry"
      },
      "setResolver(bytes32,address)": {
        "notice": "Sets resolver contract in the registry"
      },
      "setSubnodeOwner(bytes32,string,address,uint32,uint64)": {
        "notice": "Sets the subdomain owner in the registry and then wraps the subdomain"
      },
      "setSubnodeRecord(bytes32,string,address,address,uint64,uint32,uint64)": {
        "notice": "Sets the subdomain owner in the registry with records and then wraps the subdomain"
      },
      "setTTL(bytes32,uint64)": {
        "notice": "Sets TTL in the registry"
      },
      "setUpgradeContract(address)": {
        "notice": "Set the address of the upgradeContract of the contract. only admin can do this"
      },
      "unwrap(bytes32,bytes32,address)": {
        "notice": "Unwraps a non .eth domain, of any kind. Could be a DNSSEC name vitalik.xyz or a subdomain"
      },
      "unwrapETH2LD(bytes32,address,address)": {
        "notice": "Unwraps a .eth domain. e.g. vitalik.eth"
      },
      "upgrade(bytes,bytes)": {
        "notice": "Upgrades a domain of any kind. Could be a .eth name vitalik.eth, a DNSSEC name vitalik.xyz, or a subdomain"
      },
      "uri(uint256)": {
        "notice": "Get the metadata uri"
      },
      "wrap(bytes,address,address)": {
        "notice": "Wraps a non .eth domain, of any kind. Could be a DNSSEC name vitalik.xyz or a subdomain"
      },
      "wrapETH2LD(string,address,uint16,address)": {
        "notice": "Wraps a .eth domain, creating a new token and sending the original ERC721 token to this contract"
      }
    },
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 444,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "_owner",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      },
      {
        "astId": 25494,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "_tokens",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_uint256)"
      },
      {
        "astId": 25500,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 25504,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "_tokenApprovals",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 25425,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "controllers",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_address,t_bool)"
      },
      {
        "astId": 26966,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "metadataService",
        "offset": 0,
        "slot": "5",
        "type": "t_contract(IMetadataService)26468"
      },
      {
        "astId": 26970,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "names",
        "offset": 0,
        "slot": "6",
        "type": "t_mapping(t_bytes32,t_bytes_storage)"
      },
      {
        "astId": 26988,
        "contract": "contracts/wrapper/NameWrapper.sol:NameWrapper",
        "label": "upgradeContract",
        "offset": 0,
        "slot": "7",
        "type": "t_contract(INameWrapperUpgrade)26860"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_bytes_storage": {
        "encoding": "bytes",
        "label": "bytes",
        "numberOfBytes": "32"
      },
      "t_contract(IMetadataService)26468": {
        "encoding": "inplace",
        "label": "contract IMetadataService",
        "numberOfBytes": "20"
      },
      "t_contract(INameWrapperUpgrade)26860": {
        "encoding": "inplace",
        "label": "contract INameWrapperUpgrade",
        "numberOfBytes": "20"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_bool))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => bool))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_bool)"
      },
      "t_mapping(t_bytes32,t_bytes_storage)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => bytes)",
        "numberOfBytes": "32",
        "value": "t_bytes_storage"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}
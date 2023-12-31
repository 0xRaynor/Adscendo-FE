const publicSaleABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address"
      },
      { internalType: "address", name: "_base", type: "address" },
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      },
      { internalType: "uint128", name: "_cap", type: "uint128" },
      {
        internalType: "uint128",
        name: "_whitelistSaleCap",
        type: "uint128"
      },
      { internalType: "uint64", name: "_whitelistSaleTime", type: "uint64" },
      {
        internalType: "uint64",
        name: "_publicSaleTime",
        type: "uint64"
      },
      { internalType: "uint64", name: "_publicSaleDuration", type: "uint64" },
      {
        internalType: "uint96",
        name: "_initialPrice",
        type: "uint96"
      },
      { internalType: "uint32", name: "_upRatio", type: "uint32" },
      {
        internalType: "uint128",
        name: "_variation",
        type: "uint128"
      },
      { internalType: "address[]", name: "_tokens", type: "address[]" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_refundAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256"
      }
    ],
    name: "Buy",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_claimAmount",
        type: "uint256"
      }
    ],
    name: "Claim",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "_cap",
        type: "uint128"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_whitelistSaleCap",
        type: "uint256"
      }
    ],
    name: "UpdateCap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_initialPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_upRatio",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_variation",
        type: "uint256"
      }
    ],
    name: "UpdatePrice",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_whitelistSaleTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_publicSaleTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_publicSaleDuration",
        type: "uint256"
      }
    ],
    name: "UpdateSaleTime",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_status",
        type: "bool"
      }
    ],
    name: "UpdateSupportedToken",
    type: "event"
  },
  {
    inputs: [{ internalType: "bytes", name: "signature", type: "bytes" }],
    name: "_isValidSignature",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "base",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_token", type: "address" },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256"
      },
      { internalType: "uint256", name: "_minOut", type: "uint256" },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "buy",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "cap",
    outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "claimed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isSupported",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "priceData",
    outputs: [
      { internalType: "uint96", name: "initialPrice", type: "uint96" },
      {
        internalType: "uint32",
        name: "upRatio",
        type: "uint32"
      },
      { internalType: "uint128", name: "variation", type: "uint128" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "quota",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "saleTimeData",
    outputs: [
      { internalType: "uint64", name: "whitelistSaleTime", type: "uint64" },
      {
        internalType: "uint64",
        name: "publicSaleTime",
        type: "uint64"
      },
      { internalType: "uint64", name: "saleDuration", type: "uint64" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "shares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "signer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSold",
    outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint128", name: "_cap", type: "uint128" },
      {
        internalType: "uint128",
        name: "_whitelistSaleCap",
        type: "uint128"
      }
    ],
    name: "updateCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint96", name: "_initialPrice", type: "uint96" },
      {
        internalType: "uint32",
        name: "_upRatio",
        type: "uint32"
      },
      { internalType: "uint128", name: "_variation", type: "uint128" }
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_quota", type: "address" }],
    name: "updateQuotaToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint64", name: "_whitelistSaleTime", type: "uint64" },
      {
        internalType: "uint64",
        name: "_publicSaleTime",
        type: "uint64"
      },
      { internalType: "uint64", name: "_publicSaleDuration", type: "uint64" }
    ],
    name: "updateSaleTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_signer", type: "address" }],
    name: "updateSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "_tokens", type: "address[]" },
      {
        internalType: "bool",
        name: "_status",
        type: "bool"
      }
    ],
    name: "updateSupportedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "weth",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "whitelistSaleCap",
    outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "whitelistSold",
    outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "_tokens", type: "address[]" },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      }
    ],
    name: "withdrawFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
] as const;

export default publicSaleABI;

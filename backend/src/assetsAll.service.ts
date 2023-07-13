// import { Injectable } from '@nestjs/common';
// import axios from 'axios';

// @Injectable()
// export class AssetsAllService {
//   async fetchAssetsAll(): Promise<void> {
//     try {
//       const walletAddress =
//       const provider =
//       const tokenAddressBTC = '0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8';
//       const tokenAddressETH = '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378';
//       const tokenAddressXRP = '0xa83575490D7df4E2F47b7D38ef351a2722cA45b9'
//       const tokenAddressBUSD = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
//       const tokenAddressUSDT = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd'
//       const tokenAddressUSDC = '0x64544969ed7EBf5f083679233325356EbE738930'
//       const tokenAddressDAI = '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867'

//       const tokenABI = [
//         {
//           constant: true,
//           inputs: [],
//           name: 'name',
//           outputs: [
//             {
//               name: '',
//               type: 'string',
//             },
//           ],
//           payable: false,
//           stateMutability: 'view',
//           type: 'function',
//         },
//         {
//           constant: false,
//           inputs: [
//             {
//               name: '_spender',
//               type: 'address',
//             },
//             {
//               name: '_value',
//               type: 'uint256',
//             },
//           ],
//           name: 'approve',
//           outputs: [
//             {
//               name: '',
//               type: 'bool',
//             },
//           ],
//           payable: false,
//           stateMutability: 'nonpayable',
//           type: 'function',
//         },
//         {
//           constant: true,
//           inputs: [],
//           name: 'totalSupply',
//           outputs: [
//             {
//               name: '',
//               type: 'uint256',
//             },
//           ],
//           payable: false,
//           stateMutability: 'view',
//           type: 'function',
//         },
//         {
//           constant: false,
//           inputs: [
//             {
//               name: '_from',
//               type: 'address',
//             },
//             {
//               name: '_to',
//               type: 'address',
//             },
//             {
//               name: '_value',
//               type: 'uint256',
//             },
//           ],
//           name: 'transferFrom',
//           outputs: [
//             {
//               name: '',
//               type: 'bool',
//             },
//           ],
//           payable: false,
//           stateMutability: 'nonpayable',
//           type: 'function',
//         },
//         {
//           constant: true,
//           inputs: [],
//           name: 'decimals',
//           outputs: [
//             {
//               name: '',
//               type: 'uint8',
//             },
//           ],
//           payable: false,
//           stateMutability: 'view',
//           type: 'function',
//         },
//         {
//           constant: true,
//           inputs: [
//             {
//               name: '_owner',
//               type: 'address',
//             },
//           ],
//           name: 'balanceOf',
//           outputs: [
//             {
//               name: 'balance',
//               type: 'uint256',
//             },
//           ],
//           payable: false,
//           stateMutability: 'view',
//           type: 'function',
//         },
//         {
//           constant: true,
//           inputs: [],
//           name: 'symbol',
//           outputs: [
//             {
//               name: '',
//               type: 'string',
//             },
//           ],
//           payable: false,
//           stateMutability: 'view',
//           type: 'function',
//         },
//         {
//           constant: false,
//           inputs: [
//             {
//               name: '_to',
//               type: 'address',
//             },
//             {
//               name: '_value',
//               type: 'uint256',
//             },
//           ],
//           name: 'transfer',
//           outputs: [
//             {
//               name: '',
//               type: 'bool',
//             },
//           ],
//           payable: false,
//           stateMutability: 'nonpayable',
//           type: 'function',
//         },
//         {
//           constant: true,
//           inputs: [
//             {
//               name: '_owner',
//               type: 'address',
//             },
//             {
//               name: '_spender',
//               type: 'address',
//             },
//           ],
//           name: 'allowance',
//           outputs: [
//             {
//               name: '',
//               type: 'uint256',
//             },
//           ],
//           payable: false,
//           stateMutability: 'view',
//           type: 'function',
//         },
//         {
//           payable: true,
//           stateMutability: 'payable',
//           type: 'fallback',
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               name: 'owner',
//               type: 'address',
//             },
//             {
//               indexed: true,
//               name: 'spender',
//               type: 'address',
//             },
//             {
//               indexed: false,
//               name: 'value',
//               type: 'uint256',
//             },
//           ],
//           name: 'Approval',
//           type: 'event',
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               name: 'from',
//               type: 'address',
//             },
//             {
//               indexed: true,
//               name: 'to',
//               type: 'address',
//             },
//             {
//               indexed: false,
//               name: 'value',
//               type: 'uint256',
//             },
//           ],
//           name: 'Transfer',
//           type: 'event',
//         },
//       ];
//       const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
//     //   const nameToken = await tokenContract.name
//       const balance = await tokenContract.balanceOf(walletAddress);
//       const balanceFormatted= ethers.utils.formatUnits(balance, 18)
//       console.log('Wallet Balance:', balanceFormatted);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

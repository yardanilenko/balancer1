import React, { useState } from 'react';
import { ethers } from 'ethers';
import {tokenABI} from '../tokenAddresses'
import { Table } from '@nextui-org/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'


export default function BalanceTable() {
  const [balances, setBalances] = useState<
    Array<{ balanceFormatted: string; address: string; token: string }>
  >([]);
  const router = useRouter();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        if ((window as any).ethereum && (window as any).ethereum.selectedAddress) {
          const walletAddress = (window as any).ethereum.selectedAddress;
          const tokenAddressBTC = '0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8';
          const tokenAddressETH = '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378';
          const tokenAddressXRP = '0xa83575490D7df4E2F47b7D38ef351a2722cA45b9';
          const tokenAddressBUSD = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee';
          const tokenAddressUSDT = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd';
          const tokenAddressUSDC = '0x64544969ed7EBf5f083679233325356EbE738930';
          const tokenAddressDAI = '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867';
          const provider = new ethers.providers.Web3Provider((window as any).ethereum);
          
  
          const contracts = [
            { address: tokenAddressBTC, token: 'BTC' },
            { address: tokenAddressETH, token: 'ETH' },
            { address: tokenAddressXRP, token: 'XRP' },
            { address: tokenAddressBUSD, token: 'BUSD' },
            { address: tokenAddressUSDT, token: 'USDT' },
            { address: tokenAddressUSDC, token: 'USDC' },
            { address: tokenAddressDAI, token: 'DAI' },
          ];
  
          const signedContracts = await Promise.all(
            contracts.map(async (contract) => {
              const tokenContract = new ethers.Contract(contract.address, tokenABI, provider);
              const balance = await tokenContract.balanceOf(walletAddress);
              const balanceFormatted= ethers.utils.formatUnits(balance, 18)
              return {
                ...contract,
                balanceFormatted,
              };
            })
          );
  
          console.log()
  
  
          console.log('Signed Contracts sent to backend:', signedContracts);
          setBalances(signedContracts);
        } else {
          console.warn('MetaMask not connected or wallet address not available');
        }
      } catch (error) {
        console.error('Failed to fetch contracts:', error);
      }
    };
    fetchContracts();
  }, [])
  

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        router.push('/');
      }
    };


    const handleChainChanged = (chainId) => {
      router.push('/');
    };

    if (typeof (window as any).ethereum !== 'undefined') {
      (window as any).ethereum.addListener('accountsChanged', handleAccountsChanged);
      (window as any).ethereum.addListener('chainChanged', handleChainChanged);
    }

    return () => {
      if (typeof (window as any).ethereum !== 'undefined') {
        (window as any).ethereum.removeListener('accountsChanged', handleAccountsChanged);
        (window as any).ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [router]);


  return (
    <div style={{ marginBottom: '20px', marginTop:'20px' }}>
    <Table
      bordered
      shadow={false}
      color="secondary"
      aria-label="Example pagination  table"
      css={{
        height: "auto",
        minWidth: "70%",
      }}
      selectionMode="multiple"
      
    >
      <Table.Header>
        <Table.Column>Token</Table.Column>
        <Table.Column>Balance</Table.Column>
      </Table.Header>
      <Table.Body>
        {balances.map((contract, index) => (
            <Table.Row key={index}>
                <Table.Cell>{contract.token}</Table.Cell>
                <Table.Cell>{contract.balanceFormatted}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={4}
      />
    </Table>
    </div>
  );
}

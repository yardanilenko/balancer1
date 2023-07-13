import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WalletWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #000;
  opacity: 0.5;
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.26px;
  text-transform: uppercase;
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.26px;
  text-transform: uppercase;
  margin-top: 51px;
  margin-left:13px;
`;

const TitleWallet = styled.div`
padding: 4px;
`;

export default function Wallet() {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const address = (window as any).ethereum.selectedAddress;
    setWalletAddress(address);
  }, []);

  const formatWalletAddress = (address:string) => {
    const prefix = address.slice(0, 6);
    const suffix = address.slice(-6);
    return `${prefix}...${suffix}`;
  };

  return <WalletWrapper><TitleWallet>{formatWalletAddress(walletAddress)}</TitleWallet></WalletWrapper>;
}

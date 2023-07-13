'use client'

import React from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';
import store from '../../store/store';
import { connectToMetaMask } from '../../utils/connectToMetamask';

import {
  MainWrapper,
  WrapperHeader,
  Title,
  WrapperBody,
  LeftBlock,
  LeftBlockTitle,
  ButtonMain,
  Button,
  RightBlock,
  FrameWrapper,
  Frame,
  Ellipse,
  EllipseDiv,
  Ellipse2,
  Ellipse3,
  Rectangle,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  WrapperFooter,
  Privacy,
  Rights
} from './startPageStyles';

const StartPage = () => {
  
  const router = useRouter();
  const handleConnectToMetaMask = async () => {
    try {
      const connected = await connectToMetaMask();
      if (!connected) return;

      router.push('/assets');
    } catch (error) {
      console.log('Failed to connect to MetaMask:', error);
    }
  };

  return (
    <Provider store={store}>
      <MainWrapper>
        <WrapperHeader>
          <Title>BALANCER</Title>
        </WrapperHeader>
        <WrapperBody>
          <LeftBlock>
            <LeftBlockTitle>Track Your Crypto Wealth<br/> with Our Wallet Balance<br/> Service</LeftBlockTitle>
            <ButtonMain>
              <Button onClick={handleConnectToMetaMask}>Metamask</Button>
            </ButtonMain>
          </LeftBlock>
          <RightBlock>
            <FrameWrapper>
              <Frame>
                <Ellipse></Ellipse>
                <EllipseDiv></EllipseDiv>
                <Ellipse2></Ellipse2>
                <Ellipse3></Ellipse3>
                <Rectangle></Rectangle>
                <Rectangle2></Rectangle2>
                <Rectangle3></Rectangle3>
                <Rectangle4></Rectangle4>
              </Frame>
            </FrameWrapper>
          </RightBlock>
        </WrapperBody>
        <WrapperFooter>
          <Privacy>PRIVACY POLICY</Privacy>
          <Rights>© 2023 All rights reserved</Rights>
        </WrapperFooter>
      </MainWrapper>
    </Provider>
  );
};

export default StartPage;

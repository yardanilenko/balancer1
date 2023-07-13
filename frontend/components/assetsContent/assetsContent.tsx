import React from 'react'
import Wallet from '../wallet'
import BalanceTable from '@/components/balanceTable'
import CurrTable from '@/components/CurrTable'

import {
    MainWrapper,
    HeaderWrapper,
    Name,
    Info,
    Account,
    TitleWrapper,
    BodyWrapper,
    FooterWrapper,
    Privacy,
    Rights
  } from "./assetsContentStyles";

export default function AssetsContent() {



  return (
    <MainWrapper>
        <HeaderWrapper>
            <Name>BALANCER</Name>
            <Info>
                <Account>Account</Account>
                <Wallet></Wallet>
            </Info>
        </HeaderWrapper>
        <TitleWrapper>Assets</TitleWrapper>
        <BodyWrapper>
            <BalanceTable></BalanceTable>
            <CurrTable></CurrTable>
        </BodyWrapper>
        <FooterWrapper>
            <Privacy>Privacy Policy</Privacy>
            <Rights>© 2023 All rights reserved</Rights>
        </FooterWrapper>
    </MainWrapper>
  )
}

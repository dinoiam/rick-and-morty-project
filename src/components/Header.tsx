import React from 'react';
import styled from 'styled-components';
import { colors } from '@root/styles/colors';
import HeroSvg from '@root/images/hero.svg';

const HeaderComponent = styled.section`
  height: 200px;
  background-color: ${colors.background_variant};
  position: relative;
  padding: 20px;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeaderTitle = styled.span`
  color: ${colors.black};
  font-size: 50px;
`;

const Hero = styled(HeroSvg)`
  fill: ${colors.primary_variant};
  height: inherit;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

export default function Header(): JSX.Element {
  return (
    <HeaderComponent>
      <HeaderTitle>THE RICK AND MORTY</HeaderTitle>
      <Hero></Hero>
    </HeaderComponent>
  );
}

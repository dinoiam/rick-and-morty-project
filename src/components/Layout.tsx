import React from 'react';
import styled from 'styled-components';
import Header from '@components/Header';

const LayoutComponent = styled.section``;

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <LayoutComponent>
      <Header />
      {children}
    </LayoutComponent>
  );
}

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@root/utils/apollo';
import Index from '@root/pages';
import { GlobalStyle } from '@components/CSSReset';
import Layout from '@components/Layout';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Layout>
        <Index />
      </Layout>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header.component';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => {
  const { data: { cartHidden } } = useQuery(GET_CART_HIDDEN);
  //console.log("hidden=", cartHidden);
  return <Header hidden = { cartHidden } />;
};

export default HeaderContainer;
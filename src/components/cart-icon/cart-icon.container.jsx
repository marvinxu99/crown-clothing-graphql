import React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CardIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  const [ toggleCartHidden ] = useMutation(TOGGLE_CART_HIDDEN);
  const {data: { itemCount }} = useQuery(GET_CART_ITEM_COUNT);

  return <CardIcon 
      toggleCartHidden={ toggleCartHidden } 
      itemCount = { itemCount }
    />
/*
  <Mutation mutation={ TOGGLE_CART_HIDDEN } >
    {
      toggleCartHidden => <CardIcon toggleCartHidden={ toggleCartHidden } />
    }
  </Mutation>
*/
};

export default CartIconContainer;
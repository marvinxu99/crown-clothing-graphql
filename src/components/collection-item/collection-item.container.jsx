import React from 'react';

import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => {
  const [ addItemToCart ] = useMutation(ADD_ITEM_TO_CART);

  return  <CollectionItem 
    { ...props} 
    addItem={ item => addItemToCart({ variables: { item } })} 
  />

  /** 
  <Mutation mutation={ ADD_ITEM_TO_CART }>
    { addItemToCart =>(
        <CollectionItem 
          { ...props} 
          addItem={ item => addItemToCart({ variables: { item } }) } 
        />
      )
    }
  </Mutation>
  **/
};

export default CollectionItemContainer;
import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  console.log({ loading });
  console.log({ error });
  console.log(data);
  
  if (loading) return <Spinner />
  
  return <CollectionsOverview collections={ data.collections } />
}

/****
const CollectionsOverviewContainer = () => (
  <Query query={ GET_COLLECTIONS }>
    {
      ({ loading, error, data }) => {
        console.log({ loading });
        console.log({ error });
        console.log(data);
        if (loading) return <Spinner />
        return <CollectionsOverview collections={ data.collections } />
      }
    }
  </Query>
);
****/

export default CollectionsOverviewContainer;


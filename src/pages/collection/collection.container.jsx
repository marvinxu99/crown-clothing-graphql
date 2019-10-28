import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });
      
  if (loading) return <Spinner />;

  if (error) {
    console.log("error getting data")
    return <div>error</div>;
  } 

  const { getCollectionsByTitle } = data;

  return <CollectionPage collection={ getCollectionsByTitle } />
};

/*
const CollectionPageContainer = ({ match }) => (
  <Query 
    query={ GET_COLLECTION_BY_TITLE } 
    variables={{ title: match.params.collectionId }}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Spinner />;

        if (error) {
          console.log("error getting data")
          return;
        } 

        const { getCollectionsByTitle } = data;
        return <CollectionPage collection={ getCollectionsByTitle } />
      }
    }
  </Query>
)
*/

export default CollectionPageContainer;
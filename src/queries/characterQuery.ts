import { gql } from '@apollo/client';

const characterQuery = gql`
  query AllCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          dimension
          residents {
            id
            name
          }
        }
        location {
          name
          dimension
          residents {
            id
            name
          }
        }
        image
        episode {
          id
          name
        }
      }
      info {
        next
      }
    }
  }
`;

export default characterQuery;

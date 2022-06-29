import { gql } from '@apollo/client';

const PHOTO_QUERY = gql`
  query Query {
    photos {
      name
      description
      id
      filename
      isPublished
    }
  }
`;
export default PHOTO_QUERY;

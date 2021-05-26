import gql from 'graphql-tag';

export const QUERY_SHOES = gql`
  query shoes($username: String) {
    shoes(username: $username) {
      _id
      name
      size
      description
      price
      sold
      createdAt
      username
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    toSell {
      _id
      name
      size
      description
      price
      sold
      username
      createdAt
    }
    bought {
      _id
      name
      size
      description
      price
      sold
      username
      createdAt
    }
  }
}
`;

export const QUERY_SHOE = gql`
  query shoe($id: ID!) {
    shoe(_id: $id) {
      _id
      name
      size
      description
      price
      sold
      createdAt
      username
    }
  }
`;
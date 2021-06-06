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
      image
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
      image
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
    sellCount
    buyCount
    createdAt
    avatar
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
      image
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      avatar
    }
  }
`;

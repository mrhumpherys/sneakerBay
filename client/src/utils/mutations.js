import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
      name
      description
      price
      quantity
      category {
        name
      } 
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SHOE = gql`
  mutation addShoe($input: shoeInput!) {
    addShoe(input: $input ) {
      name
      username
      _id
      size
      description
      price
      sold
      createdAt
    }
  }
`;

export const DELETE_SHOE = gql`
  mutation removeShoe($_id: ID!) {
    removeShoe(_id: $_id ) {
        _id
        username
      email
      toSell {
        _id
      }
      bought {
        name
      }
    }
  }
`;

export const BUY_SHOE = gql`
mutation buyShoe($_id: ID!) {
  buyShoe(_id: $_id) {
    _id
    username
    email
    toSell {
      _id
      
    }
    bought {
      _id
    }
  }
}
`;

import { gql } from "@apollo/client";

export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      itemName
      itemDesc
      itemPrice
    }
  }
`;

export const QUERY_ITEM = gql`
  query item($_id: ID!) {
    item(_id: $_id) {
      itemName
      itemDesc
      itemPrice
      itemImage
    }
  }
`;

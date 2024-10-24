import { gql } from '@apollo/client';

export const ADD_TICKET_TO_CART = gql`
  mutation AddTicketToCart($ticketId: ID!, $userId: ID!) {
    addTicketToCart(ticketId: $ticketId, userId: $userId) {
      userId
      items {
        ticketId
        quantity
      }
    }
  }
`;

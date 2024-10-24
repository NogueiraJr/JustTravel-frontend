import { gql } from '@apollo/client';

export const GET_TICKETS_BY_CITY = gql`
  query GetTicketsByCity($cityName: String!, $page: Int, $limit: Int) {
    ticketsByCity(cityName: $cityName, page: $page, limit: $limit) {
      id
      name
      description
      price
      city
      imageUrl
      rating
    }
  }
`;

export const GET_TICKET_BY_ID = gql`
  query GetTicketById($id: ID!) {
    ticketById(id: $id) {
      id
      name
      description
      price
      city
      imageUrl
      rating
    }
  }
`;

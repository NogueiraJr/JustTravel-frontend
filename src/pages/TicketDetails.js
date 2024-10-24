import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_TICKET_BY_ID } from '../graphql/queries';

const TicketDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TICKET_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const { ticketById } = data;

  return (
    <div className="ticket-details">
      <img src={ticketById.imageUrl} alt={ticketById.name} />
      <h2>{ticketById.name}</h2>
      <p>{ticketById.description}</p>
      <p>Cidade: {ticketById.city}</p>
      <p>Preço: R$ {ticketById.price.toFixed(2)}</p>
      <p>Avaliação: {ticketById.rating}</p>
    </div>
  );
};

export default TicketDetails;

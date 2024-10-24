import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_TICKET_BY_ID } from '../graphql/queries';
import '../style/TicketDetails.css';

const TicketDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TICKET_BY_ID, {
    variables: { id },
  });

  if (loading) return <p className="loading">Carregando...</p>;
  if (error) return <p className="error">Erro: {error.message}</p>;

  const { ticketById } = data;

  return (
    <div className="ticket-details">
      <img
        className="ticket-details__image"
        src={ticketById.imageUrl}
        alt={ticketById.name}
      />
      <div className="ticket-details__info">
        <h2 className="ticket-details__title">{ticketById.name}</h2>
        <p className="ticket-details__description">{ticketById.description}</p>
        <p className="ticket-details__city">Cidade: {ticketById.city}</p>
        <p className="ticket-details__price">
          Preço: R$ {ticketById.price.toFixed(2)}
        </p>
        <p className="ticket-details__rating">
          Avaliação: {ticketById.rating}
        </p>
      </div>
    </div>
  );
};

export default TicketDetails;

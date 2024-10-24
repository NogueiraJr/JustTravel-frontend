import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/ticket/${ticket.id}`);
  };

  return (
    <div className="ticket-item">
      <img src={ticket.imageUrl} alt={ticket.name} />
      <div>
        <h3>{ticket.name}</h3>
        <p>{ticket.description}</p>
        <p>Preço: R$ {ticket.price.toFixed(2)}</p>
        <button onClick={handleViewDetails}>Saber Mais</button>
      </div>
    </div>
  );
};

export default TicketItem;

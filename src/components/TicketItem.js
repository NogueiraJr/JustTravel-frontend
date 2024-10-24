import React from 'react';

const TicketItem = ({ ticket }) => {
  return (
    <div className="ticket-item">
      <img src={ticket.imageUrl} alt={ticket.name} />
      <div>
        <h3>{ticket.name}</h3>
        <p>{ticket.description}</p>
        <p>Preço: R$ {ticket.price.toFixed(2)}</p>
        <button>Saber Mais</button>
      </div>
    </div>
  );
};

export default TicketItem;

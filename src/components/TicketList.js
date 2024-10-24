import React from 'react';
import TicketItem from './TicketItem';

const TicketList = ({ tickets }) => {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;

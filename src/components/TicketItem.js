import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/TicketItem.css';

const TicketItem = ({ ticket }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/ticket/${ticket.id}`);
  };

  return (
    <div className="ticket-item">
      <img
        className="ticket-item__image"
        src={ticket.imageUrl}
        alt={ticket.name}
      />
      <div className="ticket-item__info">
        <h3 className="ticket-item__title">{ticket.name}</h3>
        <p className="ticket-item__description">{ticket.description}</p>
        <p className="ticket-item__price">Preço: R$ {ticket.price.toFixed(2)}</p>
        <button className="ticket-item__button" onClick={handleViewDetails}>
          Saber Mais
        </button>
      </div>
    </div>
  );
};

TicketItem.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default TicketItem;

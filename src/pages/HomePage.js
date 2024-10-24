import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import SearchBar from '../components/SearchBar';
import TicketList from '../components/TicketList';
import { GET_TICKETS_BY_CITY } from '../graphql/queries';

const HomePage = () => {
  const [cityName, setCityName] = useState('');
  const { loading, error, data } = useQuery(GET_TICKETS_BY_CITY, {
    variables: { cityName, page: 1, limit: 10 },
    skip: !cityName,
  });

  const handleSearch = (query) => {
    setCityName(query);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {data && <TicketList tickets={data.ticketsByCity} />}
    </div>
  );
};

export default HomePage;

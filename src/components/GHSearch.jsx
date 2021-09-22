import React, { useState } from 'react';
import { Button, Container, Header, Input } from 'semantic-ui-react';
import axios from 'axios';

const GHSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchUser = async (query) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    setResults(response.data.items);
  };

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };
  let displayResults = results.map((user, i) => {
    return (
      <Container text>
        <Header>User {i}:</Header>
        <p>{JSON.stringify(user)}</p>
      </Container>
    );
  });
  return (
    <>
      <Input
        onChange={(event) => inputHandler(event)}
        data-cy='user-search-input'
        type='text'
        name='search'
        placeholder='Input GH username'
      />
      <Button onClick={() => searchUser()} data-cy='search-button' name='search'>
        Search
      </Button>
      {displayResults.length > 0 && (
        <div data-cy='results'>{displayResults}</div>
      )}
    </>
  );
};

export default GHSearch;

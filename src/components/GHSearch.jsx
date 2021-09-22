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
    searchUser(query);
    setQuery('');
  };
  let displayResults = results.map((user, i) => {
    return (
      <Container text>
        <Header data-cy='serial-no-of-user'>User {i+1}:</Header>
        <h1 data-cy='user-name'>{user.login}</h1>
        <div data-cy='img-of-user'>
          <img src={user.avatar_url} alt={user.publicPath} />
        </div>
        <p></p>
      </Container>
    );
  });
  return (
    <>
      <Input
        onChange={(event) => setQuery(event.target.value)}
        data-cy='user-search-input'
        type='text'
        name='search'
        placeholder='Input GH username'
      />
      <Button
        onClick={() => inputHandler()}
        data-cy='search-button'
        name='search'>
        Search
      </Button>
      {displayResults.length > 0 && (
        <div data-cy='results'>{displayResults}</div>
      )}
    </>
  );
};

export default GHSearch;

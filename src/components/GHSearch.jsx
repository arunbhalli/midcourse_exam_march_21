import React from 'react';
import { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

class GHSearch extends Component {
  state = {
  }
	render() {
		return (
			<>
				<Input type="text" name="search" placeholder="Input GH username" />
				<Button name="search">Search</Button>
			</>
		);
	}
}

export default GHSearch;

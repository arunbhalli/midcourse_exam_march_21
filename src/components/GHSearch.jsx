import React from 'react';
import { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

class GHSearch extends Component {
  
  constructor (props){
    
    this.state = {
      username:'',
    };
  }
  getUser(username){
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      return response
    })
  }
  async handleSearch(){
    this.setState({username:user.login})
  }
	render() {
		return (
			<>
				<Input type="text" name="search" placeholder="Input GH username" />
				<Button name="search" onClick={() => {this.handleSearch()}}>Search </Button>
			</>
		);
	}
}

export default GHSearch;

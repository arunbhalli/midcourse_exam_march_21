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
    let user
    if (this.state.username){
      user = 
      <p>this.state.username</p>
    }
		return (
			<>
				<Input type="text" name="search" placeholder="Input GH username" />
				<Button name="search" onClick={() => {this.handleSearch()}}>Search </Button>
        <h1>User Name: {this.state.username}</h1>
			</>
		);
	}
}

export default GHSearch;

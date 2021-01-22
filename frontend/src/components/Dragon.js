import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: ['']
};

class Dragon extends Component {
  state = {
    dragon: DEFAULT_DRAGON 
  };

  componentDidMount() {
    this.fetchDragon();
  }

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
    .then(response => response.json())
    .then(json => this.setState({dragon: json.dragon}))
    .catch(error => console.error('error', error));
  }

  render() {
    const { dragon } = this.props;

    // if (dragon.status === fetchStates.error) {
    //   return (
    //     <div>{ dragon.message }</div>
    //     );
    // }

    return (
      <div>
        <Button onClick={this.fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={this.state.dragon}/>
      </div>
    );  
  }
}


const mapStateToProps = state => {
  const dragon = state.dragon;
  return { dragon }
};

const componentConnector = connect(
  mapStateToProps, 
  { fetchDragon }
);

export default componentConnector(Dragon);
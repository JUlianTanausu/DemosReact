import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render(){
    return(
      <div>
        <input type={this.props.type} id={this.props.id}/>
      </div>
    );
  }
}

Input.PropTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;

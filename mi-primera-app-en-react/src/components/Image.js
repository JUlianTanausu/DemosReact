import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(){
    super();

    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    this.props.onClickChild();
  }
  render(){
    return(
      <div onClick={this.onClick}>
        <p>{"Id: " + this.props.id}</p>
        <img src={this.props.src}/>
      </div>
    );
  }
}

Image.PropTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onClickChild: PropTypes.func.isRequired
};

export default Image;

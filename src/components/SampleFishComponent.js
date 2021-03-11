import React, { Component } from 'react'
import PropTypes from "prop-types"
import {formatPrice} from "../helpers"
export default class SampleFishComponent extends Component {
  static propTypes={
    details:PropTypes.shape({
      image:PropTypes.string,
      name:PropTypes.string,
      desc:PropTypes.string,
      status:PropTypes.string,
      price:PropTypes.number,
    }),
    addToOrder:PropTypes.func
  }
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
   }
  handleClick(){
    this.props.addToOrder(this.props.index)
  }
  render() {
  
    
      const {name,image,description,price,status}=this.props.fishesDetails
    
    const isAvailable=status==="available"
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
        <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{description}</p>
        <button type="submit" disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'ADD TO ORDER' : 'SOLD OUT'}</button>
      </li>
    )
  }
}

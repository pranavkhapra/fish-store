import React, { Component } from 'react'

export default class EditFishForm extends Component {
    constructor(props) {
        super()
        this.handleChange=this.handleChange.bind(this)
            
    }
    handleChange(event){
      const updatedFish={
          ...this.props.fishes,
          [event.currentTarget.name]:event.currentTarget.value
      }
      this.props.updateFish(this.props.index,updatedFish)
    }

    
    render() {
        return (
            <div className="fish-edit">
            <input type="text"  name="name" onChange={this.handleChange} value={this.props.fishes.name}/>
            <input type="text"  name="price" onChange={this.handleChange} value={this.props.fishes.price}/>
            <select name="status" onChange={this.handleChange} value={this.props.fishes.status}>
                <option value="available">Fresh!!</option>
                <option value="unavailable">Sold Out!!</option>
            </select>
            <textarea  name="description" onChange={this.handleChange} value={this.props.fishes.description}/>
            <input type="text"  name="image" onChange={this.handleChange} value={this.props.fishes.image}/>
            <button onClick={() =>this.props.deleteFish(this.props.index)}>REMOVE FISH!</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import AddFish from './AddFish'
import EditFishForm from './EditFishForm'
export default class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!!</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} fishes={this.props.fishes[key]} index={key} updateFish={this.props.updateFish}/>)}
                <AddFish addFish={this.props.addFish}/>
                <button type="button" onClick={this.props.loadSampleFishes}>LOAD SAMPLE FISHES</button>
            </div>
        )
    }
}

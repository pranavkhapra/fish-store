import React, { Component } from 'react'
import firebase from 'firebase'
import PropTypes from "prop-types"
import AddFish from './AddFish'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, {fireBaseApp} from '../base'
export default class Inventory extends Component {
static propTypes={
    fishes: PropTypes.object,
    updateFish:PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
}
state={
    uid:null,
    owner:null
}

authHandler= async (authData)=>{
     //1.Look up the current store in the firebase database 
     const store=await base.fetch(this.props.storeId,{context:this})
     //2. claim if there is no owner then we will set the owner bascially
     if(!store.owner){
         //save it as our own
         await base.post(`${this.props.storeId}/owner`,{
             data:authData.user.uid
         })
     }
     //3. set the state of the inventory component to reflect tthe current user
     this.setState({
         uid:authData.user.uid,
         owner:store.owner || authData.user.id
     })
}
authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    fireBaseApp 
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

    render() {
        //1.check if theu are already logged in or not
        if(!this.state.uid){
        return(<Login authenticate={this.authenticate}/>)
        }
        //2. check is the are the owner or not
        if(this.state.uid !== this.state.owner){
            return(
                <div>
                    <p>Sorry you are not the owner!</p>
                </div>
            )
        }
        //3. they must be the owner just render the inventory
        return (
            
            <div className="inventory">
                <h2>Inventory!!</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} fishes={this.props.fishes[key]} index={key} 
                deleteFish={this.props.deleteFish}
                updateFish={this.props.updateFish}/>)}
                <AddFish addFish={this.props.addFish}/>
                <button type="button" onClick={this.props.loadSampleFishes}>LOAD SAMPLE FISHES</button>
            </div>
        )
    }
}


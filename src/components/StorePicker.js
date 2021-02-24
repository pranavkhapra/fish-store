import React, { createRef } from 'react'
import {getFunName} from '../helpers'
class StorePicker extends React.Component{
    constructor(){
        super()
        this.goToStore=this.goToStore.bind(this)
    }
    myInput=React.createRef()
    //the important thing is we have acced to router as we are its children and also you can see this in the react dev tools
    goToStore(event){
        //--things we have to achieve
        //1.stop the form to automatic refreshing 
        //2.get the text we are getting in the form
        //3.Also change the page from StorePicker to the store page we are going to
        event.preventDefault()
        console.log(this.myInput.current.value)
        const storeName=this.myInput.current.value
        this.props.history.push(`/store/${storeName}`)

    }
    render() {
       
        return(
            <>
        <form action="" className="store-selector" onSubmit={this.goToStore} >
            
            <h2>Please Enter A Store</h2>
            <input 
            ref={this.myInput}
            type="text" placeholder="Store Name" defaultValue={getFunName()}></input>
            <button type="submit">Visit Store </button>
        </form>
        </>
        )
    }
}

export default StorePicker


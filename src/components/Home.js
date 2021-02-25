import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super()
        this.storeNameEntered=this.storeNameEntered.bind(this)
    }
    storeName=React.createRef()

    storeNameEntered(event){
     event.preventDefault()
     console.log(this.storeName.current.value)
     const storeName = this.storeName.current.value
     this.props.history.push(`/store/${storeName}`)

    }
  render() {
    return (
        <>
      <form className="store-selector" onSubmit={this.storeNameEntered}>
          <h2>Please Enter A Store</h2>
         <input type="text" ref={this.storeName} placeholder="Store Name" required ></input>
         <button type="submit">Visit Store</button>
      </form>
      </>
    )
  }
}

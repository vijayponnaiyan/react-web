import React, { Component } from 'react'

export default class Class extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      first: "vijay"
   }
 }


  render() {
        
    

    return (
      <div>{this.state.first}</div>
    )
  }
}

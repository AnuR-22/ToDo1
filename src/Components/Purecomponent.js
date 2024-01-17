import React, { PureComponent } from 'react'

export  default class  Purecomponent extends PureComponent {
constructor(props){
  super(props)
  this.state = { 
    id:10
   };
}

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.id}</h1>
        <button onClick={()=>this.setState({id:14})}>Change</button>
      </div>
    )
  }
}



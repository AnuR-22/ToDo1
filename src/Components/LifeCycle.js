import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        console.log("This is donstructor")
        super(props)
        this.state={
            count:0,
            count2:100
        }
        console.log(this.state.count)
    }
    componentDidMount(){
        console.log("Component upload..")
    }
    componentDidUpdate(){
        console.log("Component update exceuted..")
    }
    shouldComponentUpdate(){
        console.log("Should mount")
        if(this.state.count<5)
        return true
      else
    return false
    }
    componentWillUnmount(){
        console.log("life Cycle component unmounted....")
    }
  render() {
    console.log("Render executed...")
    return (
      <div>
        <h1>This is Life Cycle component{this.state.count} </h1>
        <h1>This is Life Cycle component{this.state.count2} </h1>
        <button onClick={()=>this.setState({
            count:this.state.count+1
        })}>click</button>
        <button onClick={()=>this.setState({
            count2:this.state.count2+1
        })}>click2</button>
      </div>
    )
  }
}

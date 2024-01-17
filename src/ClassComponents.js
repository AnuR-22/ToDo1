import React,{Component} from 'react'
export default class ClassComponents extends Component{
constructor(props){
    super(props)
    this.state={
        name:'Anu',
        age:20,
        salary:4000
    }
}
render(){
    const changeInfo=()=>{
        this.setState(
            {
                name:'AnuSha',
                age:67,
                salary:2000
            }
        )
    }
    
    return(
        <div>
            <h1>This is Class Component</h1>
            <p>Name is:{this.state.name}</p>
            <p>Age is:{this.state.age}</p>
            <p>Salary is:{this.state.salary}</p>
            <button onClick={changeInfo}>Click to change info</button>
        </div>
    )
}
}
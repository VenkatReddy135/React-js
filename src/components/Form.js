import React, { Component } from 'react'

 class Form extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name:'',
            age:''
       }
   }
   
    name=(e)=>{
        this.setState({name:e.target.value})
    }
    age=(e)=>{
        this.setState({age:e.target.value})
    }
    addForm=()=>{
       console.log(this.state)
    }
    render() {
        return (
            <div>
          
                  <h1>Form Submit</h1>
                 
                  Name: <input value={this.state.name} type="text" onChange={(e)=>this.name(e)} /><br></br><br></br>
                  
                  Age: <input value={this.state.age} type="num"  onChange={(e)=>this.age(e)} /><br></br><br></br>
                   <button onClick={this.addForm}>Click</button>
              
            </div>
        )
    }
}

export default Form

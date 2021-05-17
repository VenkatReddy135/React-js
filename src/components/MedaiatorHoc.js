import React, { Component } from 'react'

const MedaiatorHoc=(OldComponent)=> {
 class NewComponent extends Component{

   constructor(props) {
       super(props)
   
       this.state = {
            count:0,
            name:"venkat"
       }
   }
   
    Click=()=>{
      this.setState((preState)=>{
         return {count:preState.count+1}
      })
    }


    render(){
        return (
            <OldComponent  click={this.Click} count={this.state.count} />
        )
    }
 }

 return NewComponent;
}

export default MedaiatorHoc;

import React, { Component } from 'react'
import {MyContextConsumer} from './Context'
import UseState from './Hooks'
export class ContextConsumer extends Component {
    render() {
        return (
           
                <MyContextConsumer>
                  {(username)=>{
                      return (
                          <div>
                            <h1>My name is {username}</h1>
                            
                          </div>
                      )
                  }}
                </MyContextConsumer>

          
            
        )
    }
}

export default ContextConsumer

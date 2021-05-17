import React, { Component } from 'react'
import {MyContextProvider} from './Context'
import ContextConsumer from './ContextConsumer'

export class ContextProvider extends Component {
    render() {
        return (
                <MyContextProvider value="venkat">
                    <ContextConsumer />
                </MyContextProvider>
                
        
        )
    }
}

export default ContextProvider

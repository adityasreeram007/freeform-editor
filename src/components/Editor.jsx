import React from 'react'
import {Component} from 'react'
import Rectangle from './Rectangle'
import Image from './Image'
import Text from './Text'
import Button from './Button'
import ReactDOM from 'react-dom'

class Editor extends Component{
    
    state={
        elements:this.props.elements,
      
    }
    renderElements=()=>{
        
        
        var elements=this.state.elements
        var tags=[]
        for (var element in elements){

            if(elements[element].type==="text"){
                tags.push( <Text id={elements[element].id} />)
            }
            else if(elements[element].type==="image"){
                tags.push(<Image id={elements[element].id} />)

            }
            else if(elements[element].type==="rectangle"){
                tags.push(<Rectangle id={elements[element].id} />)

            }
            else if(elements[element].type==="button"){
                tags.push(<Button id={elements[element].id} />) 

            }
        }
        console.log(tags)
        return tags
    }
    render(){
        return (
           <div className="area" id="area">

            {this.renderElements()}
           </div>
        )
    }
}

export default Editor
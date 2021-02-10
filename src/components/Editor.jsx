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
        verticalline:false,
        horizontalline:false,
        leftverticalline:true,
        rightverticalline:true
      
    }
    showhorizontalline=()=>{
        this.setState({
            horizontalline:true,
            
          })
    }
    showverticalline=()=>{
        this.setState({
            verticalline:true,
            
          })
    }
    hidehorizontalline=()=>{
        this.setState({
            horizontalline:false,
            
          })
    }
    hideverticalline=()=>{
        this.setState({
            verticalline:false,
            
          })
    }
    renderElements=()=>{
        
        
        var elements=this.state.elements
        var tags=[]
        for (var element in elements){

            if(elements[element].type==="text"){
                tags.push( <Text id={elements[element].id} showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline}/>)
            }
            else if(elements[element].type==="image"){
                tags.push(<Image id={elements[element].id}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline}/>)

            }
            else if(elements[element].type==="rectangle"){
                tags.push(<Rectangle id={elements[element].id}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline}/>)

            }
            else if(elements[element].type==="button"){
                tags.push(<Button id={elements[element].id}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline}/>) 

            }
        }
        console.log(tags)
        return tags
    }
    render(){
        return (<>
           
           <div className="area" id="area">

               {this.state.verticalline?
           <div className="verticalcenter"></div>:""}


                {this.state.horizontalline?<div className="horizontalcenter">
    
</div>:""}
{this.state.leftverticalline?<div className="leftvertical">
    
</div>:""}
{this.state.rightverticalline?<div className="rightvertical">
    
</div>:""}

            {this.renderElements()}
           </div>
           </>
        )
    }
}

export default Editor
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
        leftverticalline:false,
        rightverticalline:false,
        centerline:false,
        leftverticalx:0,
        rightverticalx:0,
        centerlinex:0
      
    }
    showleftverticalline=(x)=>{
        this.setState({
            leftverticalline:true,
            leftverticalx:x
            
          })
    }
    showcenterline=(x)=>{
        this.setState({
            centerline:true,
            centerlinex:x
            
          })
    }
    hidecenterline=()=>{
        this.setState({
            centerline:false,
            
          })

    }
    showrightverticalline=(x)=>{
        this.setState({
            rightverticalline:true,
            rightverticalx:x
            
          })
    }
    hideleftverticalline=()=>{
        this.setState({
            leftverticalline:false,
            
          })

    }
    hiderightverticalline=()=>{
        this.setState({
            rightverticalline:false,
            
          })
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
    // addcoords=(id,x,y)=>{
    //     console.log('adcords')
    //     console.log(this.props)
    //     this.
        

    // }
    renderElements=()=>{
        
        
        var elements=this.state.elements
        var tags=[]
        // console.log(elements)
        for (var element in elements){

            if(elements[element].type==="text"){
                tags.push( <Text id={element} showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords}
                    showleftverticalline={this.showleftverticalline}  showrightvertical={this.showrightverticalline} hiderightverticalline={this.hiderightverticalline} hideleftvertical={this.hideleftverticalline} elements={this.props.elements} setOffset={this.props.setOffset}
                    showcenterline={this.showcenterline} hidecenterline={this.hidecenterline}
                
                />)
            }
            else if(elements[element].type==="image"){
                tags.push(<Image id={element}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords} 
                    showleftverticalline={this.showleftverticalline} showcenterline={this.showcenterline} hidecenterline={this.hidecenterline} showrightvertical={this.showrightverticalline} hiderightverticalline={this.hiderightverticalline} hideleftvertical={this.hideleftverticalline} elements={this.props.elements} setOffset={this.props.setOffset}/>)

            }
            else if(elements[element].type==="rectangle"){
                tags.push(<Rectangle id={element}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords}
                    showleftverticalline={this.showleftverticalline} showcenterline={this.showcenterline} hidecenterline={this.hidecenterline} showrightvertical={this.showrightverticalline} hiderightverticalline={this.hiderightverticalline} hideleftvertical={this.hideleftverticalline} elements={this.props.elements} setOffset={this.props.setOffset}/>)

            }
            else if(elements[element].type==="button"){
                tags.push(<Button id={element}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords}
                    showleftverticalline={this.showleftverticalline} showcenterline={this.showcenterline} hidecenterline={this.hidecenterline} showrightvertical={this.showrightverticalline} hiderightverticalline={this.hiderightverticalline} hideleftvertical={this.hideleftverticalline} elements={this.props.elements} setOffset={this.props.setOffset}/>) 

            }
        }
        // console.log(tags)
        return tags
    }
    render(){
        return (<>
           
           <div className="area" id="area">

               {this.state.verticalline?
           <div className="verticalcenter" ></div>:""}


                {this.state.horizontalline?<div className="horizontalcenter">
    
</div>:""}
{this.state.leftverticalline?<div className="leftvertical" style={{marginLeft:this.state.leftverticalx}}>
    
</div>:""}
{this.state.rightverticalline?<div className="rightvertical" style={{marginLeft:this.state.rightverticalx}}>
    
</div>:""}
{this.state.centerline?<div className="centervertical" style={{marginLeft:this.state.centerlinex}}>
    
</div>:""}

            {this.renderElements()}
           </div>
           </>
        )
    }
}

export default Editor
import React from 'react'
import {Component} from 'react'
import Rectangle from './Rectangle'
import Image from './Image'
import Text from './Text'
import Button from './Button'
import ReactDOM from 'react-dom'
import Draggable from 'react-draggable'

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
        centerlinex:0,
        selected:"None",
        group:[],
        showgroupbox:true,
        groupboxcolor:"transparent",
        groupboxx:0,
        groupboxy:0,
        groupboxheight:0,
        groupboxwidth:0
       
      
    }
    componentDidUpdate(){
        
        if(this.state.group.length>1  && this.state.groupboxcolor==="transparent"){
            var minx=this.props.elements[this.state.group[0]].x,miny=this.props.elements[this.state.group[0]].y,maxx=0,maxy=0
            for (var element in this.props.elements){
                if(this.props.elements[element].x<minx){
                    minx=this.props.elements[element].x
                }
                if(this.props.elements[element].y<miny){
                    miny=this.props.elements[element].y
                }
                if(this.props.elements[element].x+this.props.elements[element].offsetWidth>maxx){
                    maxx=this.props.elements[element].x+this.props.elements[element].offsetWidth
                }
                if(this.props.elements[element].y+this.props.elements[element].offsetHeight>maxy){
                    maxy=this.props.elements[element].y+this.props.elements[element].offsetHeight
                }

            }
            console.log(minx,miny,maxx,maxy)
            this.setState({
                showgroupbox:true,
                groupboxcolor:"blue",
                groupboxx:minx,
                groupboxy:miny,
                groupboxheight:maxy-miny ,
                groupboxwidth:maxx-minx
            })
            
        }
    }
    hidelines=()=>{
               this.setState({
            leftverticalline:false,
            rightverticalline:false,
            centerline:false,
            leftverticalx:0,
            rightverticalx:0,
            centerlinex:0
            
          })
    }
    showlines=(leftv,centerv,rightv,leftx,centerx,rightx)=>{
     //   console.log("centers asda")
     //   console.log(leftv,centerv,rightv,leftx,centerx,rightx)
        this.setState({
            leftverticalline:leftv,
            rightverticalline:rightv,
            centerline:centerv,
            leftverticalx:leftx,
            rightverticalx:rightx,
            centerlinex:centerx
        })

    }
    // showleftverticalline=(x)=>{
    //     this.setState({
    //         leftverticalline:true,
    //         leftverticalx:x
            
    //       })
    // }
    // showcenterline=(x)=>{
    //     this.setState({
    //         centerline:true,
    //         centerlinex:x
            
    //       })
    // }
    // hidecenterline=()=>{
    //     this.setState({
    //         centerline:false,
            
    //       })

    // }
    // showrightverticalline=(x)=>{
    //     this.setState({
    //         rightverticalline:true,
    //         rightverticalx:x
            
    //       })
    // }
    // hideleftverticalline=()=>{
    //     this.setState({
    //         leftverticalline:false,
            
    //       })

    // }
    // hiderightverticalline=()=>{
    //     this.setState({
    //         rightverticalline:false,
            
    //       })
    // }
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

    groupDrag=(e,data)=>{
        console.log("datax datay "+data.x,data.y)
        var xdiff=data.x-this.state.groupboxx
        var ydiff=data.y-this.state.groupboxy
        console.log("diffs",xdiff,ydiff)

        var elements=this.state.elements
        for (var elementid in this.state.group){
            elements[this.state.group[elementid]].x=parseInt(elements[this.state.group[elementid]].x)+parseInt(xdiff)
            elements[this.state.group[elementid]].y=parseInt(elements[this.state.group[elementid]].y)+parseInt(ydiff)

            
        }
        console.log("jkhvdflsd")
        console.log(elements)
        this.props.setGroupMovement(elements)


    }
    addSelected=(elementid)=>{
        var selected=this.state.group
        var len=selected.length
        selected = selected.filter(item => item !== elementid)
        if(selected.length===len){
            selected.push(elementid)
        }
        
        this.setState({
                group:selected
        })
    }
    goback=()=>{
        this.props.setZindex("backward",this.state.selected)
    }
    gofront=()=>{
        this.props.setZindex("forward",this.state.selected)
    }
    selectElement=(elementid)=>{
        console.log("element id "+elementid)
        this.setState({
            selected:elementid
        })
    }
    renderElements=()=>{
        
        
        var elements=this.state.elements
        var tags=[]
        // console.log(elements)
        for (var element in elements){

            if(elements[element].type==="text"){
                tags.push( <Text id={element} showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords}
                   setOffset={this.props.setOffset} elements={this.props.elements} showlines={this.showlines} hidelines={this.hidelines} maxindex={this.props.maxindex} selectElement={this.selectElement} setInitialOffset={this.props.setInitialOffset}
                   addSelected={this.addSelected}
                
                />)
            }
            else if(elements[element].type==="image"){
                tags.push(<Image id={element}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords} 
                    setOffset={this.props.setOffset}  elements={this.props.elements}   showlines={this.showlines} hidelines={this.hidelines} maxindex={this.props.maxindex} selectElement={this.selectElement} setInitialOffset={this.props.setInitialOffset}
                    addSelected={this.addSelected}/>)

            }
            else if(elements[element].type==="rectangle"){
                tags.push(<Rectangle id={element}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords}
                    setOffset={this.props.setOffset}   elements={this.props.elements} showlines={this.showlines} hidelines={this.hidelines} maxindex={this.props.maxindex} selectElement={this.selectElement} setInitialOffset={this.props.setInitialOffset}
                    addSelected={this.addSelected}/>)

            }
            else if(elements[element].type==="button"){
                tags.push(<Button id={element}  showhorizontal={this.showhorizontalline}  showvertical={this.showverticalline} hidehorizontal={this.hidehorizontalline} hidevertical={this.hideverticalline} addcoords={this.props.addcoords}
                    setOffset={this.props.setOffset}  elements={this.props.elements} showlines={this.showlines} hidelines={this.hidelines} maxindex={this.props.maxindex} selectElement={this.selectElement} setInitialOffset={this.props.setInitialOffset}
                    addSelected={this.addSelected}/>) 

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
         {this.state.showgroupbox?           
        <Draggable 
        onDrag={this.groupDrag}
        axis="both"
        position={{x:this.state.groupboxx,y:this.state.groupboxy}}
        bounds={{left:0,right:230,top:0,bottom:480}}
        scale={1}
        >
            <div className="groupbox" style={{Top:this.state.groupboxy,Left:this.state.groupboxx,height:this.state.groupboxheight,width:this.state.groupboxwidth,outline:"2px solid",outlineColor:this.state.groupboxcolor}}>
            </div></Draggable>:""}
            {this.renderElements()}
            
           </div>
           <div className="selected">
               <h2> Element Selected <br/>{this.state.selected}</h2>
               <h2>Elements Grouped <br/> <p Style="font-size:14px;width:500px">{JSON.stringify(this.state.group)}</p></h2>
               <button className="frontbackbuttons" onClick={this.goback}>Go back</button>
               <button className="frontbackbuttons" onClick={this.gofront}>bring front</button>
           </div>
           </>
        )
    }
}

export default Editor
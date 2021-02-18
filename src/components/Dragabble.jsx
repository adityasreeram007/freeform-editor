import { Component } from "react";
import DraggableCore from 'react-draggable';
import Draggable from 'react-draggable';
import React from 'react'
var Dragabble=ComposedComponent => class  extends Component{

  
  constructor(props){
    super(props)
    this.myInput = React.createRef()


  }
  state = {
    x:this.props.elements[this.props.id].x ,
            y:this.props.elements[this.props.id].y ,
    
   id:this.props.id,
   offsetHeight:0,
   offsetWidth:0,
   axis:"both",
   zindex:this.props.elements[this.props.id].zindex+1,
   max:this.props.maxindex,
   bordercolor:"transparent"
   
   };

    
      componentDidMount() {
        this.props.setInitialOffset(this.props.id,this.myInput.current.offsetWidth,this.myInput.current.offsetHeight)
        
      }
      componentDidUpdate(){
        console.log("inside drag update")
        
        
        console.log(this.props)
        if(this.state.zindex!=this.props.elements[this.props.id].zindex){
        this.setState({
          zindex:this.props.elements[this.props.id].zindex
        })}
        console.log("propsporps "+this.state.x,this.props.elements[this.props.id].x,this.state.y,this.props.elements[this.props.id].y)
        if(this.props.group.includes(this.props.id) && this.props.group.length>1){
        if(this.props.elements[this.props.id].x!==this.state.x || this.props.elements[this.props.id].y!==this.state.y){
         
          this.setState({
            x:this.props.elements[this.props.id].x ,
            y:this.props.elements[this.props.id].y ,
            axis:"none"
          })
        }}
        // else{
        //   this.props.setInitialOffset(this.props.id,this.myInput.current.offsetWidth,this.myInput.current.offsetHeight)
        // }
      }
    
      disableDragabble=()=>{
       // console.log("mouseup")
        this.setState({
          Dragabble:false
        })
      }

    eventLogger = (e, data) => {
      // console.log('Event: ', e);
      // console.log('Data: ', data);
      this.setState({scale:1})
      // this.props.addcoords(this.state.id,this.state.x,this.state.y,this.state.offsetHeight,this.state.offsetWidth)
      this.props.hidehorizontal()
      this.props.hidevertical()
     this.props.hidelines()
      if(parseInt(data.node.offsetWidth/2)+data.x>173 && parseInt(data.node.offsetWidth/2)+data.x<177){
        this.props.showvertical()}
        if(parseInt(data.node.offsetHeight/2)+data.y>248 && parseInt(data.node.offsetHeight/2)+data.y<256){
          this.props.showhorizontal()}
          // console.log("propsss")
          // console.log(this.props.elements)
        var xdata=data.x;
          var leftv=false
          var rightv=false
          var centerv=false
          var leftx=0
          var rightx=0
          var centerx=0
        var ydata=data.y
      //  console.log(this.props.elements)
      for (var element in this.props.elements){
      //  console.log("events")
       // console.log(this.props.elements[element],data.x)
         if(element!=this.state.id){
        //  console.log(this.props.elements[element])
        if(this.props.elements[element].x>data.x-5 && this.props.elements[element].x<data.x+5)//left left
        {
         xdata=this.props.elements[element].x
         ydata=data.y
        leftv=true
        leftx=this.props.elements[element].x

        }
        if(this.props.elements[element].x+this.props.elements[element].offsetWidth>data.x-5 && this.props.elements[element].x+this.props.elements[element].offsetWidth<data.x+5)//left right
        {
         xdata=this.props.elements[element].x+this.props.elements[element].offsetWidth
         ydata=data.y
         leftv=true
         leftx=this.props.elements[element].x+this.props.elements[element].offsetWidth

        }
        if(this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)>data.x-5 && this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)<data.x+5)//left center
        {
          xdata=this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)
          ydata=data.y
          leftv=true
          leftx=this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)

        }
        // console.log("rightvertical")
        // console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
        if(this.props.elements[element].x+this.props.elements[element].offsetWidth>data.x+data.node.offsetWidth-5 && this.props.elements[element].x+this.props.elements[element].offsetWidth<data.x+data.node.offsetWidth+5   )//right right
        {
          xdata=this.props.elements[element].x+this.props.elements[element].offsetWidth-data.node.offsetWidth
          ydata=data.y
          rightv=true
          rightx=this.props.elements[element].x+this.props.elements[element].offsetWidth
          // this.props.showrightvertical(data.x+data.node.offsetWidth)
          // this.setState({
          //   x:data.x+data.node.offsetWidth
          // })
          // console.log("leftleft")
          // console.log(this.state)

        }
        if(this.props.elements[element].x>data.x+data.node.offsetWidth-5 && this.props.elements[element].x<data.x+data.node.offsetWidth+5 )//right left
        {
          xdata= this.props.elements[element].x-data.node.offsetWidth
          ydata=data.y
          rightv=true
          rightx=this.props.elements[element].x
          // this.props.showrightvertical(data.x+data.node.offsetWidth)
          // this.setState({
          //   x:data.x+data.node.offsetWidth
          // })

        }
        
        if(this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)>data.x+data.node.offsetWidth-5 && this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)<data.x+data.node.offsetWidth+5 )//right center
        {
          xdata= this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)-data.node.offsetWidth
          ydata=data.y
          rightv=true

          rightx=this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)
          // this.props.showcenterline(data.x+data.node.offsetWidth)
          // this.setState({
          //   x:parseInt(data.x+data.node.offsetWidth)
          // })

        }
        
        if(this.props.elements[element].x+((this.props.elements[element].offsetWidth)/2)>(data.x+(data.node.offsetWidth)/2)-5 &&this.props.elements[element].x+((this.props.elements[element].offsetWidth)/2)<(data.x+(data.node.offsetWidth)/2)+5)//center
        {
          xdata= this.props.elements[element].x+(this.props.elements[element].offsetWidth)/2-(data.node.offsetWidth/2)
          ydata=data.y
          centerv=true
          centerx=this.props.elements[element].x+((this.props.elements[element].offsetWidth)/2)
          // console.log('centers')
          // console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
          // this.props.showcenterline(data.x+(data.node.offsetWidth/2))
          // this.setState({
          //   x:parseInt(data.x+(data.node.offsetWidth/2))
          // })
          

        }
        if(data.x>=173 && data.x<179)//left center
        {
          xdata=175
          ydata=data.y
          // this.props.showcenterline(175)
          // this.setState({
          //   x:175
          // })
          centerv=true
          centerx=175

        }
        
        if(data.x+data.node.offsetWidth>=173 && data.x+data.node.offsetWidth<=179)//right center
        {
          xdata=175-data.node.offsetWidth
          ydata=data.y
          // this.props.showcenterline(175)
          // this.setState({
          //   x:175
          // })
          centerv=true
          centerx=175
        }
        if(data.x+(data.node.offsetWidth/2)>this.props.elements[element].x-5 && data.x+(data.node.offsetWidth/2)<this.props.elements[element].x+5){
          xdata=this.props.elements[element].x-(data.node.offsetWidth/2)
          ydata=data.y
          // this.props.showcenterline(175)
          // this.setState({
          //   x:175
          // })
          centerv=true
          centerx=this.props.elements[element].x
        }
        if(data.x+(data.node.offsetWidth/2)>this.props.elements[element].x+this.props.elements[element].offsetWidth-5 && data.x+(data.node.offsetWidth/2)<this.props.elements[element].x+this.props.elements[element].offsetWidth+5){
          xdata=this.props.elements[element].x+this.props.elements[element].offsetWidth-(data.node.offsetWidth/2)
          ydata=data.y
          // this.props.showcenterline(175)
          // this.setState({
          //   x:175
          // })
          centerv=true
          centerx=this.props.elements[element].x+this.props.elements[element].offsetWidth
        }
      }
        
      
      }
      var axis="both"
      if(leftv===true || centerv===true || rightv===true){
        axis="none"
      }
      this.setState({
          x:xdata,
          y:ydata,
          axis:axis
          
        }) 
        
      this.props.showlines(leftv,centerv,rightv,leftx,centerx,rightx)
      
      

    };
    stopdrag=()=>{
      this.props.hidehorizontal()
      this.props.hidevertical()
      // this.props.hiderightverticalline()
      // this.props.hideleftvertical()
      // this.props.hidecenterline()
      // console.log(this.props)
      this.props.hidelines()
      this.props.addcoords(this.state.id,this.state.x,this.state.y,this.state.offsetHeight,this.state.offsetWidth)
    }
    
    setOffset=(e,data)=>{
     
      this.setState({
        axis:"both",
        zindex:this.props.maxindex+1,
        
      })
      console.log("zind "+this.state.zindex,this.props.maxindex)
      this.props.setOffset(this.state.id,data.node.offsetWidth,data.node.offsetHeight,this.props.maxindex+1)
      

    }
    selectElement=(e)=>{
     if(e.shiftKey){
      if(this.state.bordercolor==="transparent"){
      this.setState({
        bordercolor:"blue",

      })}
      else{
        this.setState({
          bordercolor:"transparent",
  
        })
      }
      this.props.addSelected(this.state.id)
      this.props.selectElement(this.state.id)
    }
  }
    render()
    {
      
        const { children } = this.props;
    const { translateX, translateY, isDragging } = this.state;
      var x=this.state.x+"px"
      var y=this.state.y+"px"
      var coords={
        top:x,
        left:y
      }
      // console.log(coords)
        return (

          <Draggable
          axis={this.state.axis}
          position={{x:this.state.x,y:this.state.y}}
          onStart={this.setOffset}
          onDrag={this.eventLogger}
          onStop={this.stopdrag}
          bounds={{left:0,right:230,top:0,bottom:480}}
          scale={this.state.scale}
          key={this.state.id}
          
         
         >
            <div className="setpos"  ref={this.myInput} onClick={this.selectElement} style={{zIndex:this.state.zindex,outline:"1px solid",outlineColor:this.state.bordercolor}} key={`setpos${this.state.id}`}>
            
              
              
             <ComposedComponent   {...this.state} {...this.props}
             
              />
             </div>
              </Draggable>
            
        )
    }
} 

export default Dragabble










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
        // ////////console.log(this.myInput)
        this.props.setInitialOffset(this.props.id,this.myInput.current.offsetWidth,this.myInput.current.offsetHeight)
        
      }
      componentDidUpdate(prev){
        // ////////console.log("inside drag update")
        if(this.props.group.includes(this.props.id) && prev.group.includes(this.props.id)===false){
          this.setState({
            axis:"none"
          })
        }
        if(this.props.group.includes(this.props.id)===false && prev.group.includes(this.props.id)===true){
          this.setState({
            axis:"both"
          })
        }
        
        // ////////console.log(this.props)
        if(this.state.zindex!=this.props.elements[this.props.id].zindex){
        this.setState({
          zindex:this.props.elements[this.props.id].zindex
        })}
        // ////////console.log("propsporps "+this.state.x,this.props.elements[this.props.id].x,this.state.y,this.props.elements[this.props.id].y)
        // if(this.props.group.includes(this.props.id) && this.props.group.length>1){
        // if(this.props.elements[this.props.id].x!==this.state.x || this.props.elements[this.props.id].y!==this.state.y){
         
        //   this.setState({
        //     x:this.props.elements[this.props.id].x ,
        //     y:this.props.elements[this.props.id].y ,
        //     axis:"none"
        //   })
        // }}
        // else{
        //   this.props.setInitialOffset(this.props.id,this.myInput.current.offsetWidth,this.myInput.current.offsetHeight)
        // }
      }
    
      disableDragabble=()=>{
       // ////////console.log("mouseup")
        this.setState({
          Dragabble:false
        })
      }

    eventLogger = (e, data) => {
      // ////////console.log('Event: ', e);
      // ////////console.log('Data: ', data);
      // console.log("selectio")
      // console.log(this.props.selection)
      if(this.props.group.includes(this.props.id)===false || this.props.group.length==1)
{      this.setState({scale:1})
      // this.props.addcoords(this.state.id,this.state.x,this.state.y,this.state.offsetHeight,this.state.offsetWidth)
      this.props.hidehorizontal()
      this.props.hidevertical()
     this.props.hidelines()
      if(parseInt(data.node.offsetWidth/2)+data.x>173 && parseInt(data.node.offsetWidth/2)+data.x<177){
        this.props.showvertical()}
        if(parseInt(data.node.offsetHeight/2)+data.y>248 && parseInt(data.node.offsetHeight/2)+data.y<256){
          this.props.showhorizontal()}
          // ////////console.log("propsss")
          // ////////console.log(this.props.elements)
        var xdata=data.x;
          var leftv=false
          var rightv=false
          var centerv=false
          var leftx=0
          var rightx=0
          var centerx=0
        var ydata=data.y
      //  ////////console.log(this.props.elements)
      for (var element in this.props.elements){
      //  ////////console.log("events")
       // ////////console.log(this.props.elements[element],data.x)
         if(element!=this.state.id && this.props.group.includes(element)===false){
        //  //////console.log(this.props.elements[element])
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
        // //////console.log("rightvertical")
        // //////console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
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
          // //////console.log("leftleft")
          // //////console.log(this.state)

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
          // //////console.log('centers')
          // //////console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
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
      console.log("rightright",data.x+data.node.offsetWidth,this.props.finalgroup.finalx)
      if(this.props.group.length>1){
      if(this.props.finalgroup.finalx===data.x+data.node.offsetWidth)
      // || this.props.finalgroup.finalx<data.x+data.node.offsetwidth+5)
      {
        console.log("true")
        xdata=this.props.finalgroup.finalx-data.node.offsetWidth
        ydata=data.y
        rightv=true
        rightx=this.props.finalgroup.finalx
      }
      if(data.x+data.node.offsetWidth===this.props.finalgroup.finalx+(this.props.selection.width/2))//-5 && data.x+data.node.offsetwidth<this.props.finalgroup.finalx+(this.props.selection.width/2)+5){
      {  xdata=this.props.finalgroup.finalx-(data.node.offsetWidth)
        ydata=data.y
        rightv=true
        rightx=this.props.finalgroup.finalx+(this.props.selection.width/2)
      }
      if(data.x+data.node.offsetWidth===this.props.finalgroup.finalx+this.props.selection.width){//-5 || data.x+data.node.offsetwidth<this.props.finalgroup.finalx+this.props.selection.width+5){
        xdata=this.props.finalgroup.finalx+this.props.selection.width/2
        ydata=data.y
        rightv=true
        rightx=this.props.finalgroup.finalx+this.props.selection.width
      }
    
      if(data.x>this.props.finalgroup.finalx-5 && data.x<this.props.finalgroup.finalx+5){
        xdata=this.props.finalgroup.finalx
        ydata=data.y
        leftv=true
        leftx=this.props.finalgroup.finalx
      }
      if(data.x>this.props.finalgroup.finalx+(this.props.selection.width/2)-5 && data.x<this.props.finalgroup.finalx+(this.props.selection.width/2)+5){
        xdata=this.props.finalgroup.finalx+(this.props.selection.width/2)
        ydata=data.y
        leftv=true
        leftx=this.props.finalgroup.finalx+(this.props.selection.width/2)
      }
      if(data.x>this.props.finalgroup.finalx+this.props.selection.width-5 && data.x<this.props.finalgroup.finalx+this.props.selection.width+5){
        xdata=this.props.finalgroup.finalx+(this.props.selection.width)
        ydata=data.y
        leftv=true
        leftx=this.props.finalgroup.finalx+(this.props.selection.width)
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
      console.log(rightv,rightx)
      this.props.showlines(leftv,centerv,rightv,leftx,centerx,rightx)
      
}

    };
    stopdrag=()=>{
      if(this.props.group.includes(this.props.id)===false  || this.props.group.length==1){
      this.props.hidehorizontal()
      this.props.hidevertical()
      // this.props.hiderightverticalline()
      // this.props.hideleftvertical()
      // this.props.hidecenterline()
      // //////console.log(this.props)
      this.props.hidelines()
      this.props.addcoords(this.state.id,this.state.x,this.state.y,this.state.offsetHeight,this.state.offsetWidth)
    }
  }
    
    setOffset=(e,data)=>{
     if(this.props.group.includes(this.props.id)===false || this.props.group.length==1){
      this.setState({
        axis:"both",
        zindex:this.props.maxindex+1,
        
      })
      // //////console.log("zind "+this.state.zindex,this.props.maxindex)
      this.props.setOffset(this.state.id,data.node.offsetWidth,data.node.offsetHeight,this.props.maxindex+1)
    }

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
      
    //     const { children } = this.props;
    // const { translateX, translateY, isDragging } = this.state;
    //   var x=this.state.x+"px"
    //   var y=this.state.y+"px"
    //   var coords={
    //     top:x,
    //     left:y
    //   }
      var position = {
        x: this.state.x,
        y: this.state.y
      };
      // console.log(this.props.groupoffset)
      if(this.props.group.includes(this.props.id) && this.props.group.length>=2){
        // console.log(this.props.groupoffset)
        position={
          x:this.props.groupoffset[this.props.id].x,
          y:this.props.groupoffset[this.props.id].y
        }
      }
      // if(this.props.group.includes(this.props.id)===true || this.props.group.length===1) {
      //   // console.log("equalrqqequalrquall")
      //   // console.log(this.props.elements)
      //   // console.log(this.props.selection)
      //   var tempx=(this.state.x-this.props.finalgroup.finalx)//+(this.props.finalgroup.finalx)//-this.props.finalgroup.finalx)
       
      //   var tempy=(this.state.y-this.props.selection.groupy)//+(this.props.finalgroup.finaly)//-this.props.selection.groupy)
       
      //   position={
      //   x:tempx,
      //   y:tempy
      //   }
        
        
      // }
      // if(this.props.group.includes(this.props.id)===true && (this.props.finalgroup.finalx===this.props.groupprevpos.x || this.props.selection.groupy===this.props.groupprevpos.y) && this.props.group.length>2 ){
      //  console.log("equalrqqequalrquall")
      //  console.log(this.props.elements)
      //  console.log(this.props.groupprevpos)
      //  console.log(this.props.groupinit)
       
      //   if(this.props.group[this.props.group.length-1]!=this.props.id ){

      //   var tempx=(this.state.x-this.props.groupprevpos.x)+(this.props.groupprevpos.x-this.props.groupinit.x)//+(this.props.finalgroup.finalx)//-this.props.finalgroup.finalx)
       
      //   var tempy=(this.state.y-this.props.groupprevpos.y)+(this.props.groupprevpos.y-this.props.groupinit.y)//+(this.props.finalgroup.finaly)//-this.props.selection.groupy)
       
      //   position={
      //   x:tempx,
      //   y:tempy
      //   }
      // }
      // }
   
      // // //////console.log(this.props.selection,this.props.groupprevpos)
      // if(this.props.group.includes(this.props.id)===true  )
      // {
       
           
      //       position={
      //       x:tempx,
      //       y:tempy
      //       }
            
      //     }
      // }
      // //////console.log("position position position")
      // //////console.log(this.props.selection)
      
      // //////console.log(coords)
        return (

          <Draggable
          axis={this.state.axis}
          position={position}
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










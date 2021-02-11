import { Component } from "react";
import DraggableCore from 'react-draggable';
import Draggable from 'react-draggable';
var Dragabble=ComposedComponent => class  extends Component{
    state = {
       x:70,
       y:220,
       
      id:this.props.id,
      offsetHeight:0,
      offsetWidth:0,
      scale:1
      
      };
    
      componentWillUnmount() {
      
      }
      disableDragabble=()=>{
        console.log("mouseup")
        this.setState({
          Dragabble:false
        })
      }

    eventLogger = (e, data) => {
      // console.log('Event: ', e);
      // console.log('Data: ', data);
      this.setState({scale:1})
      this.props.hidehorizontal()
      this.props.hidevertical()
      this.props.hideleftvertical()
      this.props.hiderightverticalline()
      this.props.hidecenterline()
      if(parseInt(data.node.offsetWidth/2)+data.x>173 && parseInt(data.node.offsetWidth/2)+data.x<177){
        this.props.showvertical()}
        if(parseInt(data.node.offsetHeight/2)+data.y>248 && parseInt(data.node.offsetHeight/2)+data.y<256){
          this.props.showhorizontal()}
          // console.log("propsss")
          // console.log(this.props.elements)
      for (var element in this.props.elements){
       
         if(element!=this.state.id){
          console.log(this.props.elements[element])
        if(this.props.elements[element].x>data.x-1 && this.props.elements[element].x<data.x+1)//left left
        {
          this.props.showleftverticalline(data.x)
          this.setState({
            x:data.x
          
          })

        }
        if(this.props.elements[element].x+this.props.elements[element].offsetWidth>data.x-1 && this.props.elements[element].x+this.props.elements[element].offsetWidth<data.x+1)//left right
        {
          this.props.showleftverticalline(data.x)
          this.setState({
            x:data.x
          })

        }
        if(this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)>data.x-1 && this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)<data.x+1)//left center
        {
          this.props.showcenterline(data.x)
          this.setState({
            x:data.x
          })

        }
        // console.log("rightvertical")
        // console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
        if(this.props.elements[element].x+this.props.elements[element].offsetWidth>data.x+data.node.offsetWidth-1 && this.props.elements[element].x+this.props.elements[element].offsetWidth<data.x+data.node.offsetWidth+1   )//right right
        {
          this.props.showrightvertical(data.x+data.node.offsetWidth)
          this.setState({
            x:data.x+data.node.offsetWidth
          })
          console.log("leftleft")
          console.log(this.state)

        }
        if(this.props.elements[element].x>data.x+data.node.offsetWidth-1 && this.props.elements[element].x<data.x+data.node.offsetWidth+1 )//right left
        {
          this.props.showrightvertical(data.x+data.node.offsetWidth)
          this.setState({
            x:data.x+data.node.offsetWidth
          })

        }
        if(this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)>data.x+data.node.offsetWidth-1 && this.props.elements[element].x+(this.props.elements[element].offsetWidth/2)<data.x+data.node.offsetWidth+1 )//right center
        {
          this.props.showcenterline(data.x+data.node.offsetWidth)
          this.setState({
            x:parseInt(data.x+data.node.offsetWidth)
          })

        }
        if(this.props.elements[element].x+((this.props.elements[element].offsetWidth)/2)===data.x+(data.node.offsetWidth)/2)//center
        {
          console.log('centers')
          console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
          this.props.showcenterline(data.x+(data.node.offsetWidth/2))
          this.setState({
            x:parseInt(data.x+(data.node.offsetWidth/2))
          })
          

        }
        if(data.x>=173 && data.x<179)//left center
        {
          this.props.showcenterline(175)
          this.setState({
            x:175
          })
          

        }
        if(data.x+data.node.offsetWidth>=173 && data.x+data.node.offsetWidth<=179)//right center
        {
          this.props.showcenterline(175)
          this.setState({
            x:175
          })
        }
      }
        
      
      }
  
      this.setState({
          x:data.x,
          y:data.y
        }) 
        
      
      
      

    };
    stopdrag=()=>{
      this.props.hidehorizontal()
      this.props.hidevertical()
      this.props.hiderightverticalline()
      this.props.hideleftvertical()
      this.props.hidecenterline()
      // console.log(this.props)
      this.props.addcoords(this.state.id,this.state.x,this.state.y,this.state.offsetHeight,this.state.offsetWidth)
    }
    
    setOffset=(e,data)=>{
      // console.log(data)
      this.props.setOffset(this.state.id,data.node.offsetWidth,data.node.offsetHeight)
      

    }
    
    
    render()
    {
        // console.log(111)
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
          defaultPosition={{x:70,y:220}}
          position={{x:this.state.x,y:this.state.y}}
          onStart={this.setOffset}
          onDrag={this.eventLogger}
          onStop={this.stopdrag}
          bounds={{left:0,right:230,top:0,bottom:480}}
          scale={this.state.scale}
          
         
         >
            <div className="setpos">
            
              
              
             <ComposedComponent   {...this.state} {...this.props}
             
              />
             </div>
              </Draggable>
            
        )
    }
} 

export default Dragabble










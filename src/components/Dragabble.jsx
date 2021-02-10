import { Component } from "react";
import Draggable from 'react-draggable';
var Dragabble=ComposedComponent => class  extends Component{
    state = {
       x:0,
       y:0,
       
      id:this.props.id,
      offsetHeight:0,
      offsetWidth:0
      
      };
    
      componentWillUnmount() {
      
      }
      disableDragabble=()=>{
        console.log("mouseup")
        this.setState({
          Dragabble:false
        })
      }
      // moveElement=(e)=>{
      //   // console.log(e)
      //   // console.log(this.state)
      //   var elem=document.getElementById('element-0')
      //   // let deltaY = this.state.y - e.clientX
        
      //   // console.log(blockpos)
      //   // let left= blockpos.left - deltaY 
      //   // let top = blockpos.top - deltaX 
      //   console.log(e)
      //   let shiftX = e.clientX - elem.getBoundingClientRect().left;
      //   let shiftY = e.clientY - elem.getBoundingClientRect().top;
      //   console.log(shiftY,shiftX)
      //   if(this.state.Dragabble===true){
      //     this.setState({x:e.pageX+e.movementX*25,y:e.pageY+e.movementY*25})
      //   }
      // }


//       startMoving(){
//         if(this.state.Dragabble==false){
//           return 
//         }
      
//       }
//       moveUp=(e)=>{
//         console.log(e)
//       }
//       moveDown=(e)=>{
//         if(this.state.Dragabble===true){
//         this.setState({x:e.clientX+5,y:e.clientY+5})
      
//       }
// console.log(e)
//       }
      // handleMouseMove(){
      //   if(this.state.Dragabble===true){

      //   }
        
      // }
    // setDragabble=()=>{
     
    //     this.setState({
    //     Dragabble:true
    //   })
     
    // }
    eventLogger = (e, data) => {
      // console.log('Event: ', e);
      // console.log('Data: ', data);
      this.props.hidehorizontal()
      this.props.hidevertical()
      this.props.hideleftvertical()
      this.props.hiderightverticalline()
      this.props.hidecenterline()
      if(parseInt(data.node.offsetWidth/2)+data.x>164 && parseInt(data.node.offsetWidth/2)+data.x<170){
        this.props.showvertical()}
        if(parseInt(data.node.offsetHeight/2)+data.y>248 && parseInt(data.node.offsetHeight/2)+data.y<256){
          this.props.showhorizontal()}
          // console.log("propsss")
          // console.log(this.props.elements)
      for (var element in this.props.elements){
       
         if(element!=this.state.id){
          console.log(this.props.elements[element])
        if(this.props.elements[element].x>data.x-3 && this.props.elements[element].x<data.x+3){
          this.props.showleftverticalline(data.x)

        }
        // console.log("rightvertical")
        // console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
        if(this.props.elements[element].x+this.props.elements[element].offsetWidth>data.x+data.node.offsetWidth-3 && this.props.elements[element].x+this.props.elements[element].offsetWidth<data.x+data.node.offsetWidth+3  && data.x+data.node.offsetWidth<350 ){
          this.props.showrightvertical(data.x+data.node.offsetWidth)

        }
        if(this.props.elements[element].x+this.props.elements[element].offsetWidth>data.x-3 && this.props.elements[element].x+this.props.elements[element].offsetWidth<data.x+3 && data.x+data.node.offsetWidth<350){
          this.props.showrightvertical(data.x+data.node.offsetWidth)

        }
        if(this.props.elements[element].x+((this.props.elements[element].offsetWidth)/2)===data.x+(data.node.offsetWidth)/2){
          console.log('centers')
          console.log(this.props.elements[element].x+this.props.elements[element].offsetWidth,data.x+data.node.offsetWidth)
          this.props.showcenterline(data.x+(data.node.offsetWidth/2))

        }
        if(data.x>=173 && data.x<179){
          this.props.showcenterline(175)

        }
        if(data.x+data.node.offsetWidth>=173 && data.x+data.node.offsetWidth<=179){
          this.props.showcenterline(175)
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
          onStart={this.setOffset}
          onDrag={this.eventLogger}
          onStop={this.stopdrag}
          bounds={{left:0,right:230,top:0,bottom:480}}
          scale={1}
          
         
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
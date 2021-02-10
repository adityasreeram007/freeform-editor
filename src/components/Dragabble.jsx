import { Component } from "react";
import Draggable from 'react-draggable';
var Dragabble=ComposedComponent => class  extends Component{
    state = {
       x:0,
       y:0,
      
      };
    
      componentWillUnmount() {
      
      }
      disableDragabble=()=>{
        console.log("mouseup")
        this.setState({
          Dragabble:false
        })
      }
      moveElement=(e)=>{
        // console.log(e)
        // console.log(this.state)
        var elem=document.getElementById('element-0')
        // let deltaY = this.state.y - e.clientX
        
        // console.log(blockpos)
        // let left= blockpos.left - deltaY 
        // let top = blockpos.top - deltaX 
        console.log(e)
        let shiftX = e.clientX - elem.getBoundingClientRect().left;
        let shiftY = e.clientY - elem.getBoundingClientRect().top;
        console.log(shiftY,shiftX)
        if(this.state.Dragabble===true){
          this.setState({x:e.pageX+e.movementX*25,y:e.pageY+e.movementY*25})
        }
      }


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
      console.log('Event: ', e);
      console.log('Data: ', data);
      this.props.hidehorizontal()
      this.props.hidevertical()
      if(parseInt(data.node.offsetWidth/2)+data.x>164 && parseInt(data.node.offsetWidth/2)+data.x<170){
        this.props.showvertical()}
        if(parseInt(data.node.offsetHeight/2)+data.y>248 && parseInt(data.node.offsetHeight/2)+data.y<256){
          this.props.showhorizontal()}
  

      
      
      this.setState({
        x:data.x,
        y:data.y
      })
    };
    stopdrag=()=>{
      this.props.hidehorizontal()
      this.props.hidevertical()
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
      console.log(coords)
        return (

          <Draggable
          defaultPosition={{x:70,y:220}}
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
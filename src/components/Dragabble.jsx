import { Component } from "react";

var Dragabble=ComposedComponent => class  extends Component{
    state = {
        Dragabble: false,
    
       startx:0,
       starty:0,
       endx:350,
       endy:500,
       x:170,
       y:500
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
        var blockpos=document.getElementById('area')
        let deltaX = this.state.x - e.clientY
        let deltaY = this.state.y - e.clientX
        
        let left= blockpos.left - deltaY 
        let top = blockpos.top - deltaX 
        if(this.state.Dragabble===true){
          this.setState({x:top+50,y:left})
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
    setDragabble=()=>{
     
        this.setState({
        Dragabble:true
      })
     
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

          <div className="Dragger" onMouseDown={this.setDragabble} style={coords} onMouseOut={this.disableDragabble} onMouseMove={this.moveElement} onMouseUp={this.disableDragabble}  >
             <ComposedComponent   {...this.state} {...this.props}
             
              />
             </div>
        )
    }
} 

export default Dragabble
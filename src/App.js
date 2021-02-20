import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Editor from './components/Editor'
import ElementsTab from './components/ElementsTab'
class App extends Component{
  constructor(props){
    super(props)
    this.addelement=this.addelement.bind(this)
  }
  state={
    elements:{},
    selection:{
      groupx:0,
      groupy:0
    },
    finalgroup:{
      finalx:0,
      finaly:0
    },
    groups:{},
    maxindex:99999

}
addSelection=(groupx,groupy)=>{
  this.setState({
    selection:{groupx:groupx,groupy:groupy},
   
  })

}
  addelement=(value)=>{
    var count=0
    for (var c in this.state.elements){
            count+=1
    }
    var elementid=`element-${count}`
    var newlist=this.state.elements
    newlist[elementid]={
        type:value,
        id:elementid,
        x:70,
        y:220,
        offsetHeight:0,
        offsetWidth:0,
        zindex:this.state.maxindex

    }
    this.setState({
        elements:newlist
    })
    // console.log(this.state)
    

}
addgroups=()=>{

}
addfinalSelection=(x,y)=>{
  var finalselect={}
  finalselect={
    finalx:x,
    finaly:y
  }
  console.log("final final final")
  console.log(this.state.selection)
  console.log(finalselect)
this.setState({
  finalgroup:finalselect
  
})
}
setOffset=(elementid,width,height,zindex)=>{
  var stateelements=this.state.elements
    stateelements[elementid].offsetWidth=width
    stateelements[elementid].offsetHeight=height
    stateelements[elementid].zindex=zindex
    if(this.state.maxindex<zindex){
      this.setState({
        elements:stateelements,
        maxindex:zindex+1
      
      })
    }
    else{
      this.setState({
        elements:stateelements,
       
      
      })
    }
    
  
}
setGroupMovement=(elements)=>{
  console.log("statwte")
  console.log(this.state.elements)
  this.setState({
    elements:elements
  })
  console.log(this.state.elements)
  
}
setInitialOffset=(elementid,width,height)=>{
  var stateelements=this.state.elements
  if(stateelements[elementid].offsetWidth!==width || stateelements[elementid].offsetHeight!==height){
  stateelements[elementid].offsetWidth=width
  stateelements[elementid].offsetHeight=height
  this.setState({
    elements:stateelements
  })}
console.log(this.state)
}
doOverlap=(x1,y1,x2,y2,x3,y3,x4,y4)=>{
  console.log(x1,y1,x2,y2,x3,y3,x4,y4)
  if(x1>=x4 || x3>=x2){
    return false
  }
  if(y1>=y4 || y3>=y2){
    return false
  }
  return true
}
setZindex=(direction,elementid)=>{
  console.log("setz")
  var elements=this.state.elements
  if(direction==="forward"){
    var max=elements[elementid].zindex
    for (var element in elements){
      if(this.doOverlap(elements[elementid].x,elements[elementid].y,elements[elementid].x+elements[elementid].offsetWidth,
        elements[elementid].y+elements[elementid].offsetHeight,elements[element].x,elements[element].y,elements[element].x+elements[element].offsetWidth,
        elements[element].y+elements[element].offsetHeight) && elements[element].zindex>max){
          max=elements[element].zindex
          
        }
    }
    elements[elementid].zindex=max
    this.setState({
      elements:elements
    })
    console.log(this.state)
  }
  else{
    var min=elements[elementid].zindex
    for (var element in elements){
      console.log(this.doOverlap(elements[elementid].x,elements[elementid].y,elements[elementid].x+elements[elementid].offsetWidth,
        elements[elementid].y+elements[elementid].offsetHeight,elements[element].x,elements[element].y,elements[element].x+elements[element].offsetWidth,
        elements[element].y+elements[element].offsetHeight))
      if(this.doOverlap(elements[elementid].x,elements[elementid].y,elements[elementid].x+elements[elementid].offsetWidth,
        elements[elementid].y+elements[elementid].offsetHeight,elements[element].x,elements[element].y,elements[element].x+elements[element].offsetWidth,
        elements[element].y+elements[element].offsetHeight) && elements[element].zindex<min){
          min=elements[element].zindex
          
        }
    }
    if(min>=1){
    elements[elementid].zindex=min-1}
    else{
      elements[elementid].zindex=0
    }
    console.log(min)
    this.setState({
      elements:elements
    })
    console.log(this.state)
  }

}
  addcoords=(elementid,x,y)=>{
    var stateelements=this.state.elements
    stateelements[elementid]['x']=x
    stateelements[elementid]['y']=y
    this.setState({
      elements:stateelements
    })
    // console.log("app state")
    // console.log(this.state)
  
  }
  setElementCoords=()=>{
    var ele="element-0"
    var elements=this.state.elements
    if(ele in elements){
      this.state.elements[ele].x=0
     this.state.elements[ele].y=0
      this.setState({
        elements:elements
      })
    }
  }
  render(){
    return (
      <div class="flexbox">
        <div classname="flexitem">
      <ElementsTab addelement={this.addelement} />
      </div>
      <div className="flexitem">
        <Editor elements={this.state.elements} addfinalSelection={this.addfinalSelection} finalgroup={this.state.finalgroup} selection={this.state.selection} addcoords={this.addcoords} setOffset={this.setOffset} maxindex={this.state.maxindex} setInitialOffset={this.setInitialOffset} setZindex={this.setZindex} setGroupMovement={this.setGroupMovement} addSelection={this.addSelection}/>
      </div>
      
      </div>

    )
  }
}
export default App;

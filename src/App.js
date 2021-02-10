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
    elements:{}

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
        id:`element-${elementid}`,
        x:70,
        y:220,
        offsetHeight:0,
        offsetWidth:0

    }
    this.setState({
        elements:newlist
    })
    // console.log(this.state)

}
setOffset=(elementid,width,height)=>{
  var stateelements=this.state.elements
    stateelements[elementid].offsetWidth=width
    stateelements[elementid].offsetHeight=height
    this.setState({
      elements:stateelements
    })
  
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
  render(){
    return (
      <div class="flexbox">
        <div classname="flexitem">
      <ElementsTab addelement={this.addelement} />
      </div>
      <div className="flexitem">
        <Editor elements={this.state.elements} addcoords={this.addcoords} setOffset={this.setOffset}/>
      </div>
      
      </div>

    )
  }
}
export default App;

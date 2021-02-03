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
    elements:[]

}
  addelement=(value)=>{
    var elementid=this.state.elements.length
    var newlist=this.state.elements
    newlist.push({
        type:value,
        id:`element-${elementid}`

    })
    this.setState({
        elements:newlist
    })
    console.log(this.state)

}
  render(){
    return (
      <div class="flexbox">
        <div classname="flexitem">
      <ElementsTab addelement={this.addelement}/>
      </div>
      <div className="flexitem">
        <Editor elements={this.state.elements}/>
      </div>
      
      </div>

    )
  }
}
export default App;


import {Component} from "react"
class ElementsTab extends Component{

    
 
    render(){
        return(
            <>
            <div className="tab">
            <div className="buttonslist">
                <button className="element" onClick={()=>this.props.addelement('text')}>Text</button>
                <button className="element" onClick={()=>this.props.addelement('image')}>Image</button>
                <button className="element" onClick={()=>this.props.addelement('rectangle')}>Rectangle</button>
                <button className="element" onClick={()=>this.props.addelement('button')}>Button</button>
            </div>
            </div>
            </>
        )
    }
}


export default ElementsTab
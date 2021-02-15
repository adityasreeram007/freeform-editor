import {Component} from 'react'
import Draggable from 'react-draggable';
import Dragabble from './Dragabble'
class Image extends Component{
    render(){
        return (
            
             <div className="image">
            <div className={this.props.id} id={this.props.id} Style={{zIndex:this.props.maxindex+1}}> 
            {this.props.id}
          </div>
           </div>
        )

        
    }
}

export default Dragabble(Image)
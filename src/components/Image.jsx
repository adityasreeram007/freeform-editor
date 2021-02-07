import {Component} from 'react'
import Draggable from 'react-draggable';
import Dragabble from './Dragabble'
class Image extends Component{
    render(){
        return (
            
             
            <img className={this.props.id} id={this.props.id} 
            src='https://www.vinylhome.co.nz/image/cache/catalog/products/GreyMatte-500x500.jpg' 
            height="200px" width="100px" />
           
        )

        
    }
}

export default Dragabble(Image)
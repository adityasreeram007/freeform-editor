import {Component} from 'react'
import Dragabble from './Dragabble'
class Rectangle extends Component{
    render(){
        return (
            <div className={this.props.id} id={this.props.id}  Style="background-color:blue">{this.props.id}
            </div>
        )

        
    }
}

export default Dragabble(Rectangle)
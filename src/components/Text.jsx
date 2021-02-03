import {Component} from 'react'
import Dragabble from './Dragabble'
class Text extends Component{
    render(){
        return (
            <p className={this.props.id} id={this.props.id} >{this.props.id}
            </p>
        )

        
    }
}
export default Dragabble(Text)
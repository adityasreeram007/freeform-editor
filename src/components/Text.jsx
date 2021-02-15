import {Component} from 'react'
import Dragabble from './Dragabble'
class Text extends Component{
    render(){
        //console.log(this.props)
        return (
            <p className={this.props.id} id={this.props.id} >{this.props.id}
            </p>
        )

        
    }
}
export default Dragabble(Text)
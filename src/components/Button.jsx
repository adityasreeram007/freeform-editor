import {Component} from 'react'
import Dragabble from './Dragabble'
class Button extends Component{
    render(){
        return (
            <button className={this.props.id} style={{width:100}}>
                {this.props.id}

            </button>
        )

        
    }
}

export default Dragabble( Button)
import {Component} from 'react'
import Dragabble from 'react-draggable'
import Rectangle from './Rectangle'
import Image from './Image'
import Text from './Text'
import Button from './Button'
class GroupDraggable extends Component{
    state={
        groupx:0,
        groupy:0,
        showgroupbox:true,
        groupboxcolor:"transparent",
        groupboxx:0,
        groupboxy:0,
        groupboxheight:0,
        groupboxwidth:0,
        group:this.props.group,
        elements:this.props.elements
    }
    componentDidMount(){
            if(this.state.group.length>1  && this.state.groupboxcolor==="transparent"){
            var minx=this.props.elements[this.state.group[0]].x,miny=this.props.elements[this.state.group[0]].y,maxx=0,maxy=0
            for (var element in this.props.elements){
                if(this.props.elements[element].x<minx){
                    minx=this.props.elements[element].x
                }
                if(this.props.elements[element].y<miny){
                    miny=this.props.elements[element].y
                }
                if(this.props.elements[element].x+this.props.elements[element].offsetWidth>maxx){
                    maxx=this.props.elements[element].x+this.props.elements[element].offsetWidth
                }
                if(this.props.elements[element].y+this.props.elements[element].offsetHeight>maxy){
                    maxy=this.props.elements[element].y+this.props.elements[element].offsetHeight
                }

            }
            console.log(minx,miny,maxx,maxy)
            this.setState({
                showgroupbox:true,
                groupboxcolor:"blue",
                groupboxx:minx,
                groupboxy:miny,
                groupboxheight:maxy-miny ,
                groupboxwidth:maxx-minx
            })
            
        }
    }
    render(){
        console.log("groupppupup")
        console.log(this.props.tags)
        return (
            <Dragabble   >
                <div className="groupdrag" style={{height:this.state.groupboxheight,width:this.state.groupboxwidth,outline:"2px solid",outlineColor:this.state.groupboxcolor}} id={this.props.id}>
                    {this.props.tags}

                </div>

            </Dragabble>
        )
    }

}

export default GroupDraggable
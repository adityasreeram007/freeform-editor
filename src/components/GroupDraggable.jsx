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
            console.log("propsssss")
            console.log(this.props)
            var elements=this.props.elements
            for (var element in this.props.group){
                elements[this.props.group[element]].x=elements[this.props.group[element]].x-minx
                elements[this.props.group[element]].y=elements[this.props.group[element]].y-miny
            }
            this.props.setGroupMovement(elements)
        }
    }
    onDrag=(e,data)=>{
        console.log("data")
        console.log(data)
        this.setState({
            groupboxx:data.x,
            groupboxy:data.y
        })
      
      
    }
    onStopDrag=()=>{
        // var elements=this.props.elements
        // for (var element in this.props.group){
        //     elements[this.props.group[element]].x=elements[this.props.group[element]].x+this.state.groupboxx
        //     elements[this.props.group[element]].y=elements[this.props.group[element]].y+this.state.groupboxy
        // }
        // this.props.setGroupMovement(elements)
        this.props.addSelection(this.state.groupboxx,this.state.groupboxy)
        
    }
    render(){
        console.log("groupppupup")
        console.log(this.props.tags)
        return (<>
            <Dragabble axis="both" onStop={this.onStopDrag} position={{x:this.state.groupboxx,y:this.state.groupboxy}} onDrag={this.onDrag} bounds={{left:0,right:230,top:0,bottom:480}} >
                <div className="groupdrag" style={{height:this.state.groupboxheight,width:this.state.groupboxwidth,outline:"2px solid",outlineColor:this.state.groupboxcolor}} id={this.props.id}>
                {this.props.tags}

                </div>
                
            </Dragabble>
            </>
        )
    }

}

export default GroupDraggable
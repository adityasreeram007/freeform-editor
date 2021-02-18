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
            if(this.state.group.length>1 ){
            var minx=this.props.elements[this.state.group[0]].x,miny=this.props.elements[this.state.group[0]].y,maxx=0,maxy=0
            for (var elementind in this.props.group){
                var element=this.props.group[elementind]
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
            
            this.setState({
                showgroupbox:true,
                groupboxcolor:"blue",
                groupboxx:minx,
                groupboxy:miny,
                groupboxheight:maxy-miny ,
                groupboxwidth:maxx-minx
            })
            console.log("propsssss")
            var elements=this.props.elements
            console.log(elements)
            
            for (var element in this.props.group){
                elements[this.props.group[element]].x=elements[this.props.group[element]].x-minx
                elements[this.props.group[element]].y=elements[this.props.group[element]].y-miny
            }
            console.log(elements)
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
        var grouptags=this.props.tags
        var renderlist=grouptags.map((item,index)=>{
                return (<span key={index}>{item}</span>)
        })
        console.log(renderlist)

        return (<>
            <Dragabble axis="both" onStop={this.onStopDrag} position={{x:this.state.groupboxx,y:this.state.groupboxy}} onDrag={this.onDrag} bounds={{left:0,right:230,top:0,bottom:480}} key={"grp1"} >
                <div className="groupdrag" style={{height:this.state.groupboxheight,width:this.state.groupboxwidth,outline:"2px solid",outlineColor:this.state.groupboxcolor}} key={"grp2"} >
                {renderlist}

                </div>
                
            </Dragabble>
            </>
        )
    }

}

export default GroupDraggable
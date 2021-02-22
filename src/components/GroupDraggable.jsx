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
        elements:this.props.elements,
        axis:"both"
    }
    componentDidMount(){
        if(this.props.group.length>1 ){
            var minx=this.props.elements[this.props.group[0]].x,miny=this.props.elements[this.props.group[0]].y,maxx=0,maxy=0
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
            // console.log("propsssss")
            var elements=this.props.elements
            // console.log(elements)
            
            // for (var element in this.props.group){
            //     elements[this.props.group[element]].x=elements[this.props.group[element]].x-minx
            //     elements[this.props.group[element]].y=elements[this.props.group[element]].y-miny
            // }
            // console.log(elements)
            // this.props.setGroupMovement(elements)
            var groupoffset=this.props.groupoffset
            groupoffset[this.props.group[0]]={x:this.props.elements[this.props.group[0]].x-minx,y:this.props.elements[this.props.group[0]].y-miny}
            // groupoffset[this.props.group[0]]['y']=
            groupoffset[this.props.group[1]]={x:this.props.elements[this.props.group[1]].x-minx,y:this.props.elements[this.props.group[1]].y-miny}
            // groupoffset[this.props.group[1]]['y']=
            this.props.addGroupOffset(groupoffset)
            // console.log(groupoffset)
            this.props.addSelection(minx,miny,maxy-miny,maxx-minx)
            this.props.addfinalSelection(minx,miny)
        }
        
    }
    componentDidUpdate=(prev)=>{
        // console.log("updateupdateupdate")
        // console.log(prev)

        
        if(this.props.group.length>1 && prev.group.length<this.props.group.length){
            // this.props.addfinalSelection(this.state.groupboxx,this.state.groupboxy)
            this.props.addGroupInit(this.props.selection.groupx,this.props.selection.groupy)
            var minx=this.state.groupboxx,miny=this.state.groupboxy,maxx=this.state.groupboxwidth+minx,maxy=this.state.groupboxheight+miny
            if(this.props.elements[this.props.group[this.props.group.length-1]].x<minx){
                minx=this.props.elements[this.props.group[this.props.group.length-1]].x
            }
            if(this.props.elements[this.props.group[this.props.group.length-1]].y<miny){
                miny=this.props.elements[this.props.group[this.props.group.length-1]].y
            }
            if(this.props.elements[this.props.group[this.props.group.length-1]].x+this.props.elements[this.props.group[this.props.group.length-1]].offsetWidth>maxx){
                maxx=this.props.elements[this.props.group[this.props.group.length-1]].x+this.props.elements[this.props.group[this.props.group.length-1]].offsetWidth
            }
            if(this.props.elements[this.props.group[this.props.group.length-1]].y+this.props.elements[this.props.group[this.props.group.length-1]].offsetHeight>maxy){
                maxy=this.props.elements[this.props.group[this.props.group.length-1]].y+this.props.elements[this.props.group[this.props.group.length-1]].offsetHeight
            }
            
            this.setState({
                showgroupbox:true,
                groupboxcolor:"blue",
                groupboxx:minx,
                groupboxy:miny,
                groupboxheight:maxy-miny ,
                groupboxwidth:maxx-minx,
                axis:"both"
            })
            // console.log("propsssss")
            // this.props.addSelection(this.state.groupboxx,this.state.groupboxy)
            var elements=this.props.elements
            // console.log(elements)
            
            // for (var element in this.props.group){
            //     elements[this.props.group[element]].x=elements[this.props.group[element]].x-minx
            //     elements[this.props.group[element]].y=elements[this.props.group[element]].y-miny
            // }
            // console.log(elements)
            // this.props.setGroupMovement(elements)
            var groupoffset=this.props.groupoffset
            if(minx<this.state.groupboxx || miny<this.state.groupboxy){
                
                for (var grpelements in groupoffset){
                    groupoffset[grpelements].x+=(this.state.groupboxx-minx)
                    groupoffset[grpelements].y+=(this.state.groupboxy-miny)
                }
              
            
            }
            groupoffset[this.props.group[this.props.group.length-1]].x=this.props.elements[this.props.group[this.props.group.length-1]].x-minx
            groupoffset[this.props.group[this.props.group.length-1]].y=this.props.elements[this.props.group[this.props.group.length-1]].y-miny

            this.props.addGroupOffset(groupoffset)
            this.props.addSelection(minx,miny,maxy-miny,maxx-minx)
        }
        if(this.props.group.length>1 && prev.group.length>this.props.group.length){
            // this.props.addGroupInit(this.props.selection.groupx,this.props.selection.groupy)
            // console.log(this.props.groupoffset)
            var minx=this.state.groupboxx+this.props.groupoffset[this.props.group[0]].x,miny=this.state.groupboxy+this.props.groupoffset[this.props.group[0]].y,maxx=0,maxy=0
            for (var elementind in this.props.group){
                var element=this.props.group[elementind]
                if(this.state.groupboxx+this.props.groupoffset[element].x<minx){
                    minx=this.state.groupboxx+this.props.groupoffset[element].x
                }
                if(this.state.groupboxy+this.props.groupoffset[element].y<miny){
                    miny=this.state.groupboxy+this.props.groupoffset[element].y
                }
                if(this.state.groupboxx+this.props.groupoffset[element].x+this.props.elements[element].offsetWidth>maxx){
                    maxx=this.state.groupboxx+this.props.groupoffset[element].x+this.props.elements[element].offsetWidth
                }
                if(this.state.groupboxy+this.props.groupoffset[element].y+this.props.elements[element].offsetHeight>maxy){
                    maxy=this.state.groupboxy+this.props.groupoffset[element].y+this.props.elements[element].offsetHeight
                }
            

            }
            // console.log(minx,miny)
            
            this.setState({
                showgroupbox:true,
                groupboxcolor:"blue",
                groupboxx:minx,
                groupboxy:miny,
                groupboxheight:maxy-miny ,
                groupboxwidth:maxx-minx
            })
            //console.log("propsssss")
            var elements=this.props.elements
            //console.log(elements)
            
            // for (var element in this.props.group){
            //     elements[this.props.group[element]].x=elements[this.props.group[element]].x-minx
            //     elements[this.props.group[element]].y=elements[this.props.group[element]].y-miny
            // }
            // console.log(elements)
            // this.props.setGroupMovement(elements)
            var groupoffset=this.props.groupoffset
            if(minx>this.state.groupboxx || miny>this.state.groupboxy){
                
                for (var grpelements in groupoffset){
                    groupoffset[grpelements].x+=(this.state.groupboxx-minx)
                    groupoffset[grpelements].y+=(this.state.groupboxy-miny)
                }
              
            
            }
            // groupoffset[this.props.group[this.props.group.length-1]].x=this.props.elements[this.props.group[this.props.group.length-1]].x-minx
            // groupoffset[this.props.group[this.props.group.length-1]].y=this.props.elements[this.props.group[this.props.group.length-1]].y-miny

            this.props.addGroupOffset(groupoffset)

            this.props.addSelection(minx,miny,maxy-miny,maxx-minx)
        }
    }
    onDrag=(e,data)=>{
        
        // console.log("data")
        // console.log(data)
        this.setState({
            axis:"both"
        })
        this.setState({
            groupboxx:data.x,
            groupboxy:data.y
        })
        this.props.hidelines()
        var xdata=data.x
        var ydata=data.y
        var leftv=false
        var rightv=false
        var centerv=false
        var leftx=0
        var rightx=0
        var centerx=0
        for (var element in this.props.elements){
            if(this.props.group.includes(element)===false){
            if(this.props.elements[element].x>this.state.groupboxx-5 && this.props.elements[element].x<this.state.groupboxx+5){
                    xdata=this.props.elements[element].x
                    leftv=true
                    leftx=this.props.elements[element].x

            }
            if(this.props.elements[element].x+this.props.elements[element].offsetWidth>this.state.groupboxx-5 && this.props.elements[element].x+this.props.elements[element].offsetWidth<this.state.groupboxx+5){
                xdata=this.props.elements[element].x+this.props.elements[element].offsetWidth
                leftv=true
                leftx=this.props.elements[element].x+this.props.elements[element].offsetWidth
            }
            if(this.props.elements[element].x+this.props.elements[element].offsetWidth/2>this.state.groupboxx-5 && this.props.elements[element].x+this.props.elements[element].offsetWidth/2<this.state.groupboxx+5){
                xdata=this.props.elements[element].x+this.props.elements[element].offsetWidth/2
                leftv=true
                leftx=this.props.elements[element].x+this.props.elements[element].offsetWidth/2
            }

        }}
        var axis="both"
        if(leftv===true || centerv===true || rightv===true){
            axis="none"
          }
        this.setState({
            groupboxx:xdata,
            groupboxy:ydata,
            axis:axis
        })
       
        this.props.showlines(leftv,centerv,rightv,leftx,centerx,rightx)
        
        
      
    }
    onStart=()=>{
        this.setState({
            axis:"both"})
    }
    onStopDrag=()=>{
        // var elements=this.props.elements
        // for (var element in this.props.group){
        //     elements[this.props.group[element]].x=elements[this.props.group[element]].x+this.state.groupboxx
        //     elements[this.props.group[element]].y=elements[this.props.group[element]].y+this.state.groupboxy
        // }
        // this.props.setGroupMovement(elements)
        this.props.hidelines()
        this.setState({
            axis:"both"
        })
        this.props.addfinalSelection(this.state.groupboxx,this.state.groupboxy)
        
    }
    render(){
        //console.log("groupppupup")
        //console.log(this.props.tags)
        var renderlist=this.props.tags
        
        //console.log(renderlist)

        return (<>
            <Dragabble axis={this.state.axis} onStart={this.onStart} onStop={this.onStopDrag} position={{x:this.state.groupboxx,y:this.state.groupboxy}} onDrag={this.onDrag} bounds={{left:0,right:230,top:0,bottom:480}} key={"grp1"} >
                <div className="groupdrag" style={{height:this.state.groupboxheight,width:this.state.groupboxwidth,outline:"2px solid",outlineColor:this.state.groupboxcolor}} key={"grp2"} >
                {renderlist}

                </div>
                
            </Dragabble>
            </>
        )
    }

}

export default GroupDraggable
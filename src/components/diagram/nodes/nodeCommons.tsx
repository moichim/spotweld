import { DiagramNodeProps } from "./DiagramNode";
import {Handle,Position} from "reactflow";

type NodeCommonsProps = {
    definition: DiagramNodeProps
}

type NodeWrapperProps = React.PropsWithChildren & NodeCommonsProps

/** The base wrapper for all node types. */
export const NodeWrapper: React.FC<NodeWrapperProps> = ( props ) => {
    return <div className="w-[200px] rounded-lg overflow-hidden" style={props.definition.data.css} >
        {props.children}
        <LeftHandle definition={props.definition} />
        <RightHandle definition={props.definition} />
    </div>
}


const LeftHandle: React.FC<NodeCommonsProps> = props => {
    if ( props.definition.data.left !== true ) return undefined;
    return <Handle position={Position.Left} type="target" id="in" />;
}


const RightHandle: React.FC<NodeCommonsProps> = props => {
    if ( props.definition.data.right !== true ) return undefined;
    return <Handle position={Position.Right} type="source" id="out" />;
}
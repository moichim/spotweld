import { CSSProperties, ReactNode, useEffect, useMemo, useRef } from "react";
import { NodeProps } from "reactflow";
import { useDiagram } from "../diagramContext";
import { NodeWrapper } from "./nodeCommons";

export type DiagramInputs = {
    left?: boolean,
    right?: boolean
}

export type DiagramTextualContentType = ReactNode;

export type DiagramData = {
    section?: DiagramTextualContentType,
    title?: DiagramTextualContentType,
    content?: DiagramTextualContentType,
    description?: DiagramTextualContentType,
    imagePath?: string,
    css?: CSSProperties
}

export type DiagramNodeProps = NodeProps<DiagramData & DiagramInputs>;

const DiagramNode: React.FC<DiagramNodeProps> = (props) => {

    const context = useDiagram();

    const alt = useMemo(() => props.data.title?.toString() ?? props.data.description?.toString() ?? "Obrázek", [props.data.title, props.data.description]);

    const { current: image } = useRef( new Image );

    useEffect( () => {

        image.src = props.data.imagePath ?? "";

        image.onload = () => {
            context.imageLoaded();
        };

    }, [props.data.imagePath, context, image] );

    // Do not show the node when image is not loaded
    if ( ! context.isComplete ) {
        return undefined;
    }


    return <NodeWrapper definition={props}>

        {props.data.section && <div
            className="absolute text-diagram-300 text-3xl font-bold"
            style={{ top: "-3rem", width: "500px" }}>
            {props.data.section}
        </div>}

        <div className={`rounded-lg overflow-hidden`}>

            {props.data.title && <div className="p-3">{props.data.title}</div>}

            {(props.data.imagePath && context.isComplete ) &&
                <img src={props.data.imagePath} alt={alt} />
            }

            {props.data.content && <div className="p-3">{props.data.content}</div>}
        </div>

        {props.data.description && <div className="mt-3 text-sm absolute text-diagram-200">{props.data.description}</div>}

    </NodeWrapper>

}

export default DiagramNode;
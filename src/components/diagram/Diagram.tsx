"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import ReactFlow, { Controls, MiniMap, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { DiagramContextProvider } from "./diagramContext";
import DiagramFactory from "./factory/diagramFactory";
import { useRouter } from "next/navigation";


export type DiagramProps = {
    fullPage?: boolean,
    url?: string
}

const diagram = DiagramFactory.generateDefinitions();

const Diagram: React.FC<DiagramProps> = ({
    fullPage = true,
    url
}) => {

    const router = useRouter();

    const nodeTypes = useMemo(() => (diagram.types), []);

    const [nodes, , onNodesChange] = useNodesState(diagram.nodes);
    const [edges, , onEdgesChange] = useEdgesState(diagram.edges as any);

    const containerClasses = fullPage
        ? "w-full h-[100vh]"
        : "w-full h-[30rem] lg:h-[35rem]"


    return (
        <div className={`bg-diagram-900 relative ${containerClasses}`} style={{
            backgroundSize: "40px 40px",
            backgroundImage: "linear-gradient(to right, #9d174d 1px, transparent 1px),linear-gradient(to bottom, #9d174d 1px, transparent 1px)"
        }}>

            <DiagramContextProvider total={diagram.imagesCount}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    draggable={fullPage}

                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={false}

                    fitView={true}

                    zoomOnScroll={false}

                >
                    {fullPage && <>
                        <Controls />
                        <MiniMap />
                    </>}
                </ReactFlow>
            </DiagramContextProvider>
            
            {!fullPage && <Link 
                href={url ?? "#"}
                className="absolute w-full h-full min-h-fit top-0 left-0 bg-gradient-to-b from-transparent to-diagram-950 group">
                    <div className="absolute bottom-0 l-0 w-full h-2/3 flex items-center justify-center">
                        <div className="rounded-lg text-black bg-yellow-500 p-4 group-hover:bg-white group-hover:scale-110 group-focus:bg-white group-focus:scale-110 ease-in-out duration-400 transition-all">Více informací</div>
                    </div>
            </Link>
            }

            {fullPage && <Link
                href={url ?? "#"}
                className="absolute top-0 right-0 p-3 bg-yellow-500 ease-in-out duration-400 hover:bg-white transition-all"
                onClick={ url === undefined ? () => router.back() : undefined }
            >
                Zpět
            </Link>}

        </div>
    );
}

export default Diagram;
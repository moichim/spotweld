import { CSSProperties } from "react";
import { DiagramData, DiagramInputs, DiagramTextualContentType } from "../nodes/DiagramNode";
import DiagramFactory from "./diagramFactory";

export type NodeDefinitionType = {
    data: DiagramData & DiagramInputs,
    id: string,
    type: string,
    position: {
        x: number,
        y: number
    }
}

export type ConnectionDefinitionType = {
    id: string,
    source: string,
    target: string,
    sourceHandle: string
}

class NodeDefinition {

    protected id: string;
    protected data: DiagramData = {
        css: {
            backgroundColor: "white"
        }
    };
    protected connections: {
        target: string
    }[] = [];
    protected isTarget: boolean = false;
    protected type: string = "base";
    protected colorClass: string = "text-black";
    protected backgroundClass: string = "bg-white";

    protected x: number = 0;
    protected y: number = 0;

    protected _col: number = 0;
    public set col( column: number ) {
        this._col = column;
        this.x = DiagramFactory.calculateXFromColumn( column );
    }
    public get col() { return this._col}

    protected _top: number = 0;
    public set top( top: number ) {
        this._top = top;
        this.y = DiagramFactory.calculateYFromStep( top );
    }
    public get top() { return this._top; }


    protected constructor(
        id: string,
        column: number,
        top: number
    ) {
        this.id = id;
        this.col = column;
        this.top = top;
    }

    public static normal(
        id: string,
        column: number,
        top: number
    ): NodeDefinition {
        const item = new NodeDefinition(id, column, top);

        return item;
        
    }

    // Data setters

    public setTitle( content: DiagramTextualContentType ) {
        this.data.title = content;
        return this;
    }

    public setSection( content: DiagramTextualContentType ) {
        this.data.section = content;
        return this;
    }

    public setDescription( content: DiagramTextualContentType ) {
        this.data.description = content;
        return this;
    }

    public setContent( content: DiagramTextualContentType ) {
        this.data.content = content;
        return this;
    }

    public setCss( value: CSSProperties ) {
        this.data.css = value;
        return this;
    }

    public setData(
        data: DiagramData
    ) {
        this.data = data;
        return this;
    }

    public setColor( value: string ) {
        this.colorClass = `text-${value}`;
        return this;
    }

    public setBackground( value: string ) {
        this.backgroundClass = `bg-${value}`;
        return this;
    }

    public setImagePath( value: string ) {
        this.data.imagePath = `/images/${value}`;
        return this;
    }

    // Data getters

    public getData() {
        return this.data;
    }

    /** These data should go to the diagram instance */
    public getDefinition(): NodeDefinitionType {

        console.log( this.data );

        return {
            id: this.id,
            type: this.type,
            data: {
                ...this.data,
                right: this.connections.length > 0,
                left: this.isTarget
            },
            position: {
                x: this.x,
                y: this.y
            }
        }
    }

    public connect( to: string ) {
        this.connections.push({target: to});
        return this;
    }

    public markAsTarget() {
        this.isTarget = true;
    }

    public getConnections(): ConnectionDefinitionType[] {
        return this.connections.map( (conn, index) => ({
            id: `${this.id}_${conn.target}_${index}`,
            source: this.id,
            target: conn.target,
            sourceHandle: "out"
        }) );
    }

}

export default NodeDefinition;
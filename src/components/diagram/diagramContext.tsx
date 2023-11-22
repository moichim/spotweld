import React, { createContext, useContext, useEffect, useState } from "react";

type DiagramContextType = {
    countTotal: number,
    countLoaded: number,
    imageLoaded: () => void,
    isComplete: boolean
}

const diagrramContextDefaults: DiagramContextType = {
    countTotal: 0,
    countLoaded: 0,
    imageLoaded: () => {},
    isComplete: false
}

const DiagramContext = createContext<DiagramContextType>(diagrramContextDefaults);

type DiagramContextProps = React.PropsWithChildren & {
    total: number
}

export const DiagramContextProvider: React.FC<DiagramContextProps> = props => {

    const [ countLoaded, setCountloaded ] = useState<number>(0);
    const [ isComplete, setCimplete ] = useState<boolean>(false);

    const imageLoaded = () => {
        console.log( "image loaded" );
        setCountloaded( v => v+1 );
    }

    useEffect( () => {
        if ( countLoaded >= props.total ) {

            setCimplete( true );

        }
    }, [ countLoaded, props.total ]);

    const context: DiagramContextType = {
        countLoaded,
        imageLoaded,
        isComplete,
        countTotal: props.total
    }

    return <DiagramContext.Provider value={context}>{props.children}</DiagramContext.Provider>
}

/** Access current diagram state from the context */
export const useDiagram = () => {
    return useContext( DiagramContext );
}
"use client";

import { useEffect, useState, useReducer } from "react";

const breakpoint = 900;

const checkIsMobile = ( width: number ) => width < breakpoint;



/**
 * Constantly validate if the window is mobile or not
 */
const useWindowSize = () => {

    const [ isMobile, setisMobile ] = useState<boolean>( false );

    useEffect( () => {

        const resize = () => {
            setisMobile( checkIsMobile( window.innerWidth ) );
        };

        // Initial validation
        resize();

        // validate on every window resizing
        window.addEventListener( "resize", resize );

        return () => window.removeEventListener( "resize", resize );

    }, [] );

    return { isMobile }


}

export default useWindowSize;
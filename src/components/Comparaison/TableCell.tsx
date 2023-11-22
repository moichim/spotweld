import { Popover, Transition } from '@headlessui/react';
import _ from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";

import {
    CheckIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

import {
    InformationCircleIcon
} from '@heroicons/react/24/solid';

import { ComparaisonPropertyValue } from "./Comparaison";

export default function TableCell(props: ComparaisonPropertyValue) {

    let key = `key__${_.floor(_.random(1000, 9990)).toString()}`;

    let timeout: NodeJS.Timeout;
    const timeoutDuration = 100;

    const buttonRef = useRef<HTMLButtonElement>(null);

    const [ openState, setOpenState ] = useState( false );

    const toggleMenu = (open: boolean) => {
        setOpenState( (openState) => !openState );
        buttonRef?.current?.click();
    }

    const onHover = ( open:boolean, action: "onMouseEnter"|"onMouseLeave" ) => {
        if ( 
            ( !open && !openState && action === "onMouseEnter" )
            || ( open && openState && action === "onMouseLeave" )
         ) {
            clearTimeout( timeout );
            timeout = setTimeout( () => toggleMenu( open ), timeoutDuration );
        }
    }

    const handleClick = ( open: boolean ) => {
        setOpenState( !open );
        clearTimeout( timeout );
    }

    const handleClickOutside = ( event: MouseEvent ) => {

        if ( buttonRef.current && !buttonRef.current.contains( event.target as Node ) ) {
            event.stopPropagation();
        }
    }


    
    useEffect( () => {
        document.addEventListener( "mousedown", handleClickOutside );

        return () => {
            document.removeEventListener( "mousedown", handleClickOutside );
        }
    } );
    

    

    /**
     * Gets icons and returns them as array
     */
    const getIcons = () => {

        let icons: React.ReactNode[] = [];

        let cell_classes: string[] = [
            "border",
            "text-center",
            "relative",
        ];

        if ( props.true === undefined ) {
            cell_classes.push( "bg-light text-gray-500" );
        } else {

                cell_classes.push( props.isHighlighted ? "bg-success-100" : "bg-white" );

                if ( props.true ) {
                    icons.push(<CheckIcon key={`${key}__true`} />);
                    cell_classes.push("text-success-500")
                } else {
                    icons.push(<XMarkIcon key={`${key}__false`} />);
                    cell_classes.push("text-error-500");
                }

                if ( props.description ) {
                    icons.push( <InformationCircleIcon className="__compare-info" key={`${key}__info`} /> );

                    cell_classes.push( "cursor-pointer" );

                    cell_classes.push( "ease-in-out duration-100" );

                    cell_classes.push( props.true ? "hover:bg-success-200" : "hover:bg-error-200" );
                }

        }

        return {
            icons: icons,
            classes: cell_classes.join( " " )
        }

    }

    const { icons, classes } = getIcons();

    if ( props.description ) {
        return <Popover
            as={Fragment}
        >
            {({open})=>{
                return (
                    <td
                        onMouseEnter={ () => onHover( open, "onMouseEnter" ) }
                        onMouseLeave={ () => onHover( open, "onMouseLeave" ) }
                        className={classes}
                    >
                        <Popover.Button
                            ref={buttonRef}
                            className="focus:outline-none"
                        >

                            <div onClick={() => handleClick( open )}>
                                {icons}
                            </div>

                        </Popover.Button>

                        <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

                        <Popover.Panel className={`z-10 w-48 p-4 ${props.true ? "bg-success-500" : "bg-error-500" } text-white rounded-lg absolute left-[-1rem]`}>
                            {props.description}
                        </Popover.Panel>

                        </Transition>
                    </td>
                );
            }}
        </Popover>
    }

    return <td
        key={key}
        className={classes}
    >
        {icons}
    </td>

}
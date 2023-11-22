import React from "react";
import {
    ArrowDownIcon
} from '@heroicons/react/20/solid';

type OfferItemPropsType = {
    title: string,
    subtitle: string,
    what: string,
    children: React.ReactNode
}


/**
 * Person grid item
 */
const OfferItem: React.FC< OfferItemPropsType > = ( props ) => {

    let classes = {
        element: [
            "text-center",
            "px-8"
            // props.className ?? "",
        ],
        text: [],
        button: []
    };

    return <div className={ classes.element.join( " " ) }>
        
        <div className="h-40  content-end flex flex-wrap">
            <div className={`text-2xl font-extrabold pt-4 grow`}>{props.title}</div>
            <div className={`pt-2 grow`}>... {props.subtitle}</div>
        </div>
        <div className="text-center pt-4 grow">
            <ArrowDownIcon className="text-primary-500 max-h-[1.5rem] text-center display-inline-block mx-auto"/>
        </div>

        <div className="pt-4 text-primary-500">{props.what}</div>
        <div className="text-center pt-4">
            <ArrowDownIcon className="text-primary-500 max-h-[1.5rem] text-center display-inline-block mx-auto"/>
        </div>
        <div className="text-gray-500 pt-4">{props.children}</div>
    </div>

}

export default OfferItem;
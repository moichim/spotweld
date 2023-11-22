import React from "react";
import { NavigationItemType } from "../Navigation";

type MobileLinkType = NavigationItemType & {
    buttonRef: React.MutableRefObject<any>
}

const MobileLink: React.FC< MobileLinkType > = ( props ) => {

    const onClick = (event: React.SyntheticEvent, target: string) => {
        // event.preventDefault();
        props.buttonRef.current.click();
        // scrollTo( target );
    }

    if ( props.children === undefined ) {
        return <a
            className="inline-block w-full sm:w-1/2 py-3 text-base font-medium text-primary-100 hover:text-white"
            href={props.href}
            onClick={ event => onClick( event, props.href ) }
        >
            {props.name}
        </a>
    }

    return <nav className="my-6 pb-6 border-b grid gap-y-8">
        {props.children!.map( item => <a
            className="-m-3 p-3 rounded-md hover:bg-primary-600"
            href={item.href}
            key={item.name}
            onClick={ event => onClick( event, item.href ) }
        >
            <div className="flex items-center">
                <item.icon className="flex-shrink-0 h-6 w-6 text-primary-100" aria-hidden="true" />
                <span className="ml-3 text-base font-medium text-white">{item.name}</span>
            </div>
            <p className="mt-1 ml-9 text-sm text-primary-300">{item.description}</p>
        </a> )}
    </nav>

}

export default MobileLink;
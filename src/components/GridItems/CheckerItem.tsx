import _ from "lodash";
import React from "react";

import {
    CheckIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

type CheckerItemProps = {
    label: string,
    description?: React.ReactNode,
    true?: boolean,
    className?: string
}

/**
 * A check component
 */
const CheckerItem: React.FC<CheckerItemProps> = ( props ) => {

    let classes = [
        props.className ?? "",
        "flex",
        "flex-row",
        // "bg-red-500",
        // "rounded-lg"
    ]

    let truthy = props.true !== undefined
        ? props.true
        : true;

    let icon = truthy
        ? <CheckIcon className="text-success-500 text-sm"/>
        : <XMarkIcon className="text-error-700"/>;

    let has_description = ! _.isEmpty( props.description );

    return <div className={classes.join( " " ) }>
        <div className="basis-8 md:basis-10 lg:basis-12">
            {icon}
        </div>
        <div className="pl-2 max-w-[calc(100%_-_2rem)] md:max-w-[calc(100%_-_2.5rem)] lg:max-w-[calc(100%_-_3rem)]">
            <div className="text-lg font-medium pt-1 md:pt-2">{props.label}</div>
            { has_description && <p className="pt-2 text-gray-500">{props.description}</p> }
        </div>
    </div>

}

export default CheckerItem;
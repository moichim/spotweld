import PropTypes from "prop-types";
import React from "react";

import {
    PlusIcon
} from '@heroicons/react/24/outline';

type LogoItemEmptyProps = {
    label: string,
    anchor?: string
}

/**
 * Alternative of `LogoItem` used in `¨Hero` as a call to action
 */
const LogoItemEmpty: React.FC<LogoItemEmptyProps> = props => {
    return <div className="text-center __logoitem">
        <a href={props.anchor}>
            <div className="rounded-lg h-20 border border-solid p-5 ease-in duration-300">
                <PlusIcon className="text-lg max-h-[2.5rem] text-center inline-block text-gray-400"/>
            </div>
            <div className="text-sm text-gray-400 text-center pt-4 ease-in duration-300">{props.label}</div>
        </a>
    </div>
}

export default LogoItemEmpty;
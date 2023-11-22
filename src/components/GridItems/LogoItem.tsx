import classNames from "classnames";
import Image from "next/image";
import React from "react";

type LogoItemProps = {
    institution: string,
    image: string,
    description?: string,
    url: string,
    className?: string
}

/**
 * A logo item for the intro section
 */
const LogoItem: React.FC<LogoItemProps> = props => {

    let classes = classNames(
        {"__logoitem": true },
        "relative"
    );

    return <a className={ classes } href={props.url} target="_blank" rel="noreferrer">
        <div className="relative rounded-lg bg-white overflow-hidden border p-4 w-full">
            <Image 
                src={props.image} 
                alt={props.institution} 
                className="object-contain object-center h-16 md:h-20 lg:h-24 mx-auto"
            />
        </div>
        { props.description && <div 
            className="text-sm text-gray-500 pt-4 px-4 text-center"
        >
            {props.description}
        </div>}
    </a>

}



export default LogoItem;
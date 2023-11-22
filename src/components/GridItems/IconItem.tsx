import React from "react";

type IconItemProps = {
    label: string,
    icon: React.ReactNode,
    description: string,
    link: {
        href: string,
        target?: string,
        label?: string
    },
    className?: string,
    scope: "primary"|"success"|"error"
};

/**
 * Provide a custom icon and texts
 */
const IconItem: React.FC<IconItemProps> = props => {

    let classes = {
        element: [
            "text-center",
            props.className ?? "",
        ],
        text: [],
        button: []
    } as {
        element: string[],
        text: string[],
        button: string[]
    };

    if ( props.scope === undefined || props.scope === "primary" ) {
        classes.text.push( "text-primary-500" );
        classes.button.push( "bg-primary-500 hover:bg-primary-700" );
    } else if ( props.scope === "success" ) {
        classes.text.push( "text-success-500" );
        classes.button.push( "bg-success-500 hover:bg-success-700" );
    } else if ( props.scope === "error" ) {
        classes.text.push( "text-error-500" );
        classes.button.push( "bg-error-500 hover:bg-error-700" );
    }

    return <div className={ classes.element.join( " " ) }>
        
        <div className={`${classes.text.join( " " )}`}>{props.icon}</div>
        <div className={`text-lg font-medium pt-4`}>{props.label}</div>
        <div className="text-gray-500 pt-4">{props.description}</div>
        { props.link &&
            <div>
                <a 
                    href={ props.link.href } 
                    target={ props.link.target }
                >
                    { props.link.label ?? "Více informací" }
                </a>
            </div>
        }
    </div>

}

export default IconItem;
import PropTypes from "prop-types";
import _ from "lodash";
import React from "react";

type PersonLink = {
    href: string,
    name: string,
    icon: React.ReactNode
}

type PersonItemPropsType = {
    name: string,
    position: string,
    description?: React.ReactNode,
    portrait: React.ReactNode,
    className?: string,
    links: PersonLink[]
}


const PersonItem: React.FC<PersonItemPropsType> = props => {


    return <div className={ props.className ?? "" }>
        <div className="relative w-1/1 overflow-hidden bg-slate-400 rounded-lg aspect-square">
            {props.portrait}
        </div>
        <h4 className="font-medium text-lg pt-2">{props.name}</h4>
        <p className="text-lg text-primary-300">{props.position}</p>
        { ! _.isEmpty( props.description ) && 
            <p className="text-sm text-muted-500 pt-2">{props.description}</p>
        }
        <div className="pt-6">
            {props.links.map( l=>{
                return <a 
                    key={l.href}
                    href={l.href} 
                    target="_blank" 
                    rel="noreferrer"
                    title={l.name}
                    className="inline-block text-2xl pr-4 text-primary-100 hover:text-white"
                >{l.icon}</a>
            } )}
        </div>
    </div>
};

export default PersonItem;
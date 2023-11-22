import React, {Fragment, useRef} from "react";
import { NavigationItemType } from "../Navigation";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const DesktopLink = ( props: NavigationItemType ) => {

  const ref = useRef<any>();

    // Simple links are rendered straight
    if ( props.children === undefined ) {
        return <a
            href={props.href}
            className="text-base font-medium text-primary-500 hover:text-gray-900"
            // onClick={(event)=>{
                // event.preventDefault();
                // scrollTo( props.href );
            // }}
        >
            {props.name}
        </a>
    }

    // Links with nesting are rendered as popovers
    return <Popover className="relative">

            {({open}) => <>
                <Popover.Button
                    ref={ref}
                    className={classNames(
                        open ? 'text-gray-900' : 'text-primary-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100'
                      )}
                >
                    <span>{props.name}</span>
                    <ChevronDownIcon
                        aria-hidden={true}
                        className={classNames(
                            open ? 'text-primary-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                    />
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {props.children!.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              onClick={ (event) => {
                                // event.preventDefault();
                                // ref?.current?.click();
                                // scrollTo( item.href );
                              } }
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                </Transition>
            </>}

        </Popover>

}

export default DesktopLink;
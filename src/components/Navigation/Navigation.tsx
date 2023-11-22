"use client";

/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  ChartBarIcon,
  LifebuoyIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useRef } from 'react';

import logo from "@/images/logo.svg"; // eslint-disable-line
import Image from 'next/image';
import React from 'react';
import { container_classes } from '../Utils/Container';
import DesktopLink from './Links/DesktopLink';
import MobileLink from './Links/MobileLink';
import Link from 'next/link';

const menu: NavigationItemType[] = [
  {
    name: 'O naší technologii',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#contact',
    icon: LifebuoyIcon,
    children: [
      {
        name: 'Jak to funguje',
        description: 'unikátní technologie založená na laserovém ohřevu',
        href: '#how',
        icon: AcademicCapIcon,
      },
      {
        name: 'Přínosy',
        description: 'Spolehlivá technologie šetří náklady a řeší omezení existujících metod.',
        href: '#advantages',
        icon: ChartBarIcon,
      },
      {
        name: 'Srovnání s konkurenčními metodami',
        description: "LabIR SpotWELD je nový druh IR NDT",
        href: '#comparaison',
        icon: ChartBarIcon
      },
    ]
  },
  {
    name: 'Nabídka',
    description: 'Implementujte LabIR SpotWeld do Vašich procesů',
    href: '#offer',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'O nás',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#about',
    icon: LifebuoyIcon,
  }
]

export type NavigationItemType = {
  name: string,
  description: string,
  href: string,
  icon: any, // () => JSX.Element,
  children?: NavigationItemType[]
}

/**
 * A complete site navigation solution
 */
const Navigation: React.FC = () => {

  const mobileRef = useRef<any>();

  return (
    <Popover className="fixed z-50 w-full bg-white">
      <div className={container_classes.join(" ")}>
        <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" title="LabIR Spotweld">
              <span className="sr-only">LabIR Spot Weld</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="LabIR Spot Weld"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary-400 hover:text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex justify-self-end space-x-8">

            {menu.map((item) => (
              <DesktopLink {...item} key={item.name} />
            ))}

          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end">
            <a
              href="#contact"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary-500 text-primary-200 ">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="text-primary-800">
                  {/*title*/}
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary-400 hover:text-primary-500 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    ref={mobileRef}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              {menu.map(item => <MobileLink {...item} buttonRef={mobileRef} key={item.name} />)}

              <div className="py-6">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                  onClick={ () => mobileRef.current.click() }
                >
                  Kontaktujte nás
                </a>
              </div>

            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navigation;

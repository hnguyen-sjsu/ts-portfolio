import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const resumeUrl =
    'https://docs.google.com/document/d/e/2PACX-1vRsdtnCp72i188eMOYqyAo2DXV4o2_G6tUf-Psf15aGeZy75eQEU-cyCIgtNZGrxP-0_-UqylPoXRMQ/pub'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 nav_bar'>
            <Disclosure as='nav'>
                {({ open }) => (
                    <>
                        <div className='px-2 sm:px-6 lg:px-8'>
                            <div className='relative flex h-16 items-center justify-between'>
                                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-blue-500 focus:outline-none'>
                                        <span className='sr-only'>
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                    <div className='flex flex-shrink-0'>
                                        <a
                                            href='/'
                                            className='font-bold text-xl '
                                        >{`<knny/>`}</a>
                                    </div>
                                    <div className='grow hidden sm:ml-6 sm:block '>
                                        <div className='flex space-x-4 justify-end items-center'>
                                            {navigationItems.map((item) => (
                                                <div key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className='nav_item '
                                                    >
                                                        {item.name}
                                                    </a>
                                                </div>
                                            ))}
                                            <a
                                                href={resumeUrl}
                                                className='bg-blue-300 rounded-md py-1 px-2 align-middle text-white resume_btn_bg shadow-sm'
                                            >
                                                Resume
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className='sm:hidden'>
                            <div className='space-y-1 px-2 pb-3 pt-2'>
                                {navigationItems.map((item, idx) => (
                                    <Disclosure.Button
                                        as='a'
                                        href={item.href}
                                        key={`nav-item-${idx}`}
                                        className={classNames(
                                            'hover:blue_gradient',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                                <Disclosure.Button
                                    as='a'
                                    href={resumeUrl}
                                    className={classNames(
                                        'hover:resume_btn_bg hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium text-teal-400'
                                    )}
                                >
                                    Resume
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

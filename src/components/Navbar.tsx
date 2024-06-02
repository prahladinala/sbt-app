"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import InnovationsDDContent from './InnovationsDDContent';
import PlatformsDDContent from './PlatformsDDContent';
import ServicesDDContent from './ServicesDDContent';

const Navbar = () => {
  const pathname = usePathname();
 
  const [openHome, setOpenHome] = useState<boolean>(pathname === '/' ? true : false);
  const [openServices, setOpenServices] = useState<boolean>(false);
  const [openPlatforms, setOpenPlatforms] = useState<boolean>(false);
  const [openInnovations, setOpenInnovations] = useState<boolean>(false);
  
  const handleHome = () => {
    setOpenHome(prevState => true);
    setOpenServices(prevState => false);
    setOpenPlatforms(prevState => false);
    setOpenInnovations(prevState => false);    
  }

  const handleServicesDropdownEnter = () => {
    setOpenServices(prevState => true);
    setOpenPlatforms(prevState => false);
    setOpenInnovations(prevState => false);
    setOpenHome(prevState => false);
  }

  const handleServicesDropdownLeave = () => {
    setOpenServices(prevState => false);
    setOpenPlatforms(prevState => false);
    setOpenInnovations(prevState => false);
    setOpenHome(prevState => false);
  }

  const handlePlatformsDropdown = () => {
    setOpenPlatforms(prevState => !prevState);
    setOpenServices(prevState => false);
    setOpenInnovations(prevState => false);
    setOpenHome(prevState => false);
  }

  const handleInnovationsDropdown = () => {
    setOpenInnovations(prevState => !prevState);
    setOpenServices(prevState => false);
    setOpenPlatforms(prevState => false);
    setOpenHome(prevState => false);
  }


  return (
    <>
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link onClick={handleHome} href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Sifting Bytes Logo" width={32} height={32}/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sifting Bytes</span>
                </Link>
                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {/* Navbar elements */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <Link onClick={handleHome} href="/" className={`block py-2 px-3 'text-gray-900' ${openHome ? 'text-blue-600' : 'text-gray-900'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">Home</Link>
                        </li>
                        <li>                            
                            <button onMouseEnter={handleServicesDropdownEnter} onMouseLeave={handleServicesDropdownLeave} className={`flex items-center justify-between w-full py-2 px-3 font-medium ${openServices ? 'text-blue-600' : 'text-gray-900'} border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-gray-900 md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}>Services 
                                {!openServices && (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                                    </svg>                                  
                                )}
                                {openServices && (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
                                    </svg>                                  
                                )}
                            </button>
                        </li>
                        <li>                            
                            <button onClick={handlePlatformsDropdown} className={`flex items-center justify-between w-full py-2 px-3 font-medium ${openPlatforms ? 'text-blue-600' : 'text-gray-900'} border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}>Platforms 
                                {!openPlatforms && (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                                    </svg>                                  
                                )}
                                {openPlatforms && (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
                                    </svg>                                  
                                )}
                            </button>
                        </li>
                        <li>                            
                            <button onClick={handleInnovationsDropdown} className={`flex items-center justify-between w-full py-2 px-3 font-medium ${openInnovations ? 'text-blue-600' : 'text-gray-900'} border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}>Innovations 
                                {!openInnovations && (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                                    </svg>                                  
                                )}
                                {openInnovations && (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
                                    </svg>                                  
                                )}
                            </button>
                        </li>
                                               
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Jobs</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Services Dropsdown Content */}
            {openServices && <ServicesDDContent setOpenServices={setOpenServices}/>}            
            {/* Platforms Dropdown Content */}
            {openPlatforms && <PlatformsDDContent />}
            {/* Innovations Dropsdown Content */}
            {openInnovations && <InnovationsDDContent />}
        </nav>
    </>
  )
}

export default Navbar;
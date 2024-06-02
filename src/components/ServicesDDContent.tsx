import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { eventNames } from 'process';

/* type ServicesDDContentProps = {
    setOpenServices: React.Dispatch<React.SetStateAction<boolean>>;
} */

interface ServicesDDContentProps {
    setOpenServices: React.Dispatch<React.SetStateAction<boolean>>;
}

// Component 
const ServicesDDContent = ({ setOpenServices }: ServicesDDContentProps) => { 
  const ddMenuRef = useRef<HTMLInputElement>(null);   // ddMenuRef.current

 /*  window.addEventListener("click", (event) => {
    if (event.target !== ddMenuRef.current) {
      //setOpenServices(false);     
      console.log("Clicked!!")       
    }
  }); */
   

  return (
    <div className="absolute z-10 left-0 right-0 bg-green-200 border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div ref={ddMenuRef} className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <Link onClick={() => setOpenServices(prevState => false)} href="/services/online" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Services - Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
            </ul>
            <ul className="hidden md:block">
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Audience Management</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Creative Tools</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setOpenServices(false)} href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing Automation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ServicesDDContent;
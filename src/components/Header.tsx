import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import { COMPANY, MAIN_NAVIGATION } from "@/src/constants";

function LogoLink() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">{COMPANY.NAME}</span>
      <Image className="h-8" src="/images/logo.svg" width={47} height={40} alt=""/>
    </Link>
  );
}

function DesktopNavigation() {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/25">
        <ul className="space-y-2 py-6">
          {MAIN_NAVIGATION.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathName = usePathname()
  const isRoot = pathName === '/'

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.query]);

  return (
    <div className={`px-6 lg:px-8${isRoot ? ' absolute top-0 left-0 w-full z-10' : ''}`}>
      <nav className="flex items-center justify-between pt-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <LogoLink/>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6${isRoot ? ' text-white' : ''}`} aria-hidden="true"/>
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          {MAIN_NAVIGATION.map((item) => (
            <li key={item.name}>
              <Link href={item.href}
                    className={`group text-sm font-semibold leading-6${isRoot ? ' text-white' : ''}${pathName === item.href ? ' text-indigo-500' : ''}`}>
                {item.name}
                <span
                  className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-indigo-500"/>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"/>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <LogoLink/>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
          </div>
          
          <DesktopNavigation/>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}


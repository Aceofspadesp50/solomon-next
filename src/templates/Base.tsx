import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { useState, useEffect } from "react"
// import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Roadmaps } from './Roadmaps';
// import { Team } from './Team';
// import { VerticalFeatures } from './VerticalFeatures';
import { Showcase } from './Showcase';
import { Story } from './Story';
import { Twitter, Discord } from './SocialIcons';
// import Parallax from 'react-springy-parallax';
// import Parallax from '../components/parallax';
import Link from 'next/link';
import { Section } from '../layout/Section';
import { Button } from '../button/Button';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { Transition } from "@headlessui/react";

const Base = () => {
  const [navbar, setNavbar] = useState(false)
  // const [iconColor, setIconColor] = useState("white")
  const [isOpen, setIsOpen] = useState(false)
  const offset = 1
  const navbarStatusAction = (flag:boolean) => {
    if(flag) {
      setNavbar(true)
      // setIconColor("black")
    }
    else {
      setNavbar(false)
      // setIconColor("white")
    }
  }

  const changeBackground = () => {
    setIsOpen(false)
    if (window.scrollY >= offset) {
      navbarStatusAction(true)
    } else {
      navbarStatusAction(false)
    }
  }

  const menuOpenHandler = () => {
    if(isOpen) {
      if (window.scrollY >= offset) navbarStatusAction(true)
      else navbarStatusAction(false)
      setIsOpen(false)
    }
    else {
      navbarStatusAction(true)
      setIsOpen(true)
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
  }, [])
  
  return (
  <div className="antialiased font-body">
    <div className={navbar ? "fixed z-10 w-screen bg-navbar text-white" : "fixed z-10 w-screen text-white"}>
      <Section yPadding="py-3">
        <div>
          <div className="max-w-7xl mx-auto">
            <div className="h-16">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <Link href="/#hero">
                    <a><Logo xl /></a>
                  </Link>
                </div>
                <nav className="hidden md:block">
                  <ul className="navbar flex items-center font-medium text-xl text-shadow-link">
                    <li>
                      <Link href="/#project">
                        <a>PROJECT</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#story">
                        <a>STORY</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#roadmap">
                        <a>ROADMAP</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a><Twitter color="white" /></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a><Discord color="white" /></a>
                      </Link>
                    </li>
                    <li>
                      <Button texture>Connect Wallet</Button>
                    </li>
                  </ul>
                </nav>
                <div className="text-shadow-link md:hidden">
                  <Button texture>Connect</Button>
                </div>
                <div className="mr-2 flex md:hidden">
                  <button
                    onClick={menuOpenHandler}
                    type="button"
                    className={`inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white ${navbar? 'text-gray-400' : 'text-gray-400 hover:text-white'}`}
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="text-shadow-link md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="/#project"
                    className="text-gray-300 hover:bg-gray-400 text-white block px-3 py-2 rounded-md text-xl font-medium"
                  >
                    PROJECT
                  </a>

                  <a
                    href="/#story"
                    className="text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
                  >
                    STORY
                  </a>

                  <a
                    href="/#roadmap"
                    className="text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
                  >
                    ROADMAP
                  </a>

                  
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-xl font-medium flex flex-wrap item-center"
                  >
                    <div className="mt-1 mr-3"><Twitter color="white" /></div> <span>Twitter</span>
                  </a>

                  <a
                    href="/"
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-xl font-medium flex flex-wrap item-center"
                  >
                    <div className="mt-1 mr-2"><Discord color="white" /></div> <span>Discord</span>
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </Section>
    </div>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Showcase />
    <Story />
    <Roadmaps />
    {/* <Team /> */}
    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
    {/* <Banner /> */}
    <Footer />
  </div>
);
}

export { Base };

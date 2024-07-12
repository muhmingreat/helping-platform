import React,{useState, useContext}from 'react'
import {Logo ,Menu} from  './index'
import { HelpingPlatformContext } from '../Context/HelpingPlatform'

const menuList = ['White Paper', 'Project', 'Donation','Membetrs']
 const Navbar = () => {

  const  {currentAccount, connectWallet} = useContext(HelpingPlatformContext)
  const  [isMenuOpen, setIsMenuOpen] = useState(false)

  console.log(menuList)
  return (
    <div className="bg-green-500">
      <div
        className="px-4  py-5 mx-auto
    sm:max-w-xl md:max-w-full lg:max-w-screen-xl
    md:px-24 lg:px-8"
      >
        <div className="relative flex items-center justify-between">
          <div className="flex items-center ">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8 "
            >
              {/* <Logo color="text-white" /> */}
              <span
                className="ml-2 text-xl font-bold 
           tracking-wide text-gray-100 uppercase"
              >
                Company
              </span>
            </a>
            <ul
              className=" flex items-center sm:hidden
               space-x-8 lg:flex"
            >
              <li>
                <a
                  href="/"
                  className="font-medium tracking-wide
                 text-gray-500 transition-colors duration-200
                hover:text-green-100 "
                >
                  {" "}
                  White Paper
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium tracking-wide
                 text-gray-500 transition-colors duration-200
                hover:text-green-100 "
                >
                  {" "}
                  Project
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium tracking-wide
                 text-gray-500 transition-colors duration-200
                hover:text-green-100 "
                >
                  {" "}
                  Donation
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium tracking-wide
                 text-gray-500 transition-colors duration-200
                hover:text-green-100 "
                >
                  {" "}
                  Member
                </a>
              </li>
            </ul>
          </div>

          {!currentAccount && (
            <ul className="flex items-center md:hidden sm:hidden space-x-8 lg:flex">
              <li>
                <button
                  className="inline-flex items-center
              justify-center h-12 px-8 font-medium
             transition duration-200 tracking-wide 
             rounded-md shadow-md  bg-green-100
             hover:bg-lime-50 text-black focus:shadow-outline focus:outline-none"
                  onClick={connectWallet}
                  aria-label="sign-up"
                  title="Sign Up"
                >
                  {" "}
                  Connect Wallect
                </button>
              </li>
            </ul>
          )}
          <div className="lg:hidden  z-40">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none
          focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-3 bg-white border shadow-sm">
                  <div className="flex items-center justify-between mb-4" >
                    <div>
                      <a
                        href="/"
                        aria-labal="Company"
                        title="company"
                        className="inline-flex items-center"
                      >
                        {/* <Logo color="text-black" /> */}
                        <span
                          className="ml-2 text-xl font-bold
                              tracking-wide text-gray-800 "
                        >
                          Company
                        </span>
                      </a>
                    </div>
                   <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded 
                hover:bg-gray-100 focus:bg-200
                 focus:outline-none focus-shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
                
              <nav>
              <ul className="space-y-4 ">
                {menuList.map((el, i) => (
                  <li key={i }>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our Product"
                      className="font-medium  tracking-wide 
                    text-gray-700 transition-colors duration-200
                    hover:text-blue-500"
                    >
                      {el}
                    </a>
                  </li>
                ))}
                <li>
                  <a className='inline-flex
                  items-center bg-red-200
                  justify-center w-full h-12
                  px-4 font-medium tracking-wide
                  text-white 
                  transition duration-200 rounded
                  bg:green-500 hover:bg-green-100
                  focus:outline-none focus:shadow-outline'>
                    Connect Wallet
                  </a>
                </li>
              </ul>

            </nav>
            </div>
            </div>
              )}
            
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Navbar
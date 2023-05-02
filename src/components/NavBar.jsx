import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Leafleft from "../media/leafleft.svg"
import Menu from "../media/menu.svg";
import Close from "../media/close.svg";

export default function NavBar() {
    const location = useLocation();
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const links = document.querySelectorAll('nav ul li a');

    function setActiveLink() {
        const currentLocation = location.href;

        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('load', setActiveLink);
    window.addEventListener('hashchange', setActiveLink);

    return (
        <div className="navbar bg-[#C5D1C9]">
            <nav className="nav bg-[#C5D1C9]">
                <div className='flex items-center h-24 text-[#3A493F] bg-[#C5D1C9]'>
                    <h1 className=' text-3xl text-[#586C5E] bg-[#C5D1C9]'><img className='inline w-20 bg-transparent h-[15px]' src={Leafleft} alt="/" />Danielle Leslie</h1>
                    <h6 className='inline text-1xl p-0 text-[#586C5E] bg-[#C5D1C9] pl-4'>&#125; developer</h6>
                    <ul className='hidden md:flex bg-[#C5D1C9] w-0 pl-[1100px]'>
                        <Link to='/about'>
                            <li className={`p-4 ${location.pathname === '/about' ? 'text-[#586C5E] border-solid border-t-[3px] border-[#586C5E] border-spacing-0' : 'hover:text-[#96B09E] border-solid border-t-[3px] border-transparent hover:border-solid hover:border-[#96B09E] hover:border-t-[3px] hover:border-spacing-0'} bg-[#C5D1C9]`}>About</li>
                        </Link>
                        <Link to='/resume'>
                            <li className={`p-4 ${location.pathname === '/resume' ? 'text-[#96B09E] border-solid border-t-[3px] border-[#96B09E] border-spacing-0' : 'hover:text-[#96B09E] border-solid border-t-[3px] border-transparent hover:border-solid hover:border-[#96B09E] hover:border-t-[3px] hover:border-spacing-0'} bg-[#C5D1C9]`}>Resume</li>
                        </Link>
                        <Link to='/projects'>
                            <li className={`p-4 ${location.pathname === '/projects' ? 'text-[#96B09E] border-solid border-t-[3px] border-[#96B09E] border-spacing-0' : 'hover:text-[#96B09E] border-solid border-t-[3px] border-transparent hover:border-solid hover:border-[#96B09E] hover:border-t-[3px] hover:border-spacing-0'} bg-[#C5D1C9]`}>Projects</li>
                        </Link>
                        <Link to='/contact'>
                            <li className={`p-4 ${location.pathname === '/contact' ? 'text-[#96B09E] border-solid border-t-[3px] border-[#96B09E] border-spacing-0' : 'hover:text-[#96B09E] border-solid border-t-[3px] border-transparent hover:border-solid hover:border-[#96B09E] hover:border-t-[3px] hover:border-spacing-0'} bg-[#C5D1C9]`}>Contact</li>
                        </Link>
                    </ul>


                    <img onClick={handleNav} className='block md:hidden bg-transparent w-10' src={nav ? Close : Menu} alt={nav ? 'Close' : 'Menu'} />


                    <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#E6DACE] bg-[#F4ECE6] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] px-4'}>
                        <Link to='/about'><li className='p-4 border-b border-[#E6DACE] hover:text-[#96B09E]'>About</li></Link>
                        <Link to='/resume'><li className='p-4 border-b border-[#E6DACE] hover:text-[#96B09E]'>Resume</li></Link>
                        <Link to='/projects'><li className='p-4 border-b border-[#E6DACE] hover:text-[#96B09E]'>Projects</li></Link>
                        <Link to='/contact'><li className='p-4 hover:text-[#96B09E]'>Contact</li></Link>
                    </ul>
                </div>
            </nav >
        </div >
    );
}
import { useState } from 'react';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className='bg-white shadow-md p-4 flex justify-between items-center w-full'>
      <div className='flex items-center'>
        <FiMenu className='text-2xl mr-4 md:hidden' />
        <a href='/' className='font-bold text-xl'>JobPortal</a>
      </div>
      <nav className='hidden md:flex space-x-4'>
        <a href='#' className='text-gray-500'>Job Search</a>
        <a href='#' className='text-gray-500'>About Us</a>
        <a href='#' className='text-gray-500'>Career Advice</a>
      </nav>
      <div className='flex items-center'>
        <FiSearch className='text-2xl mr-4 hidden md:block' />
        <div onClick={toggleDropdown} className='relative'>
          <FiUser className='text-2xl cursor-pointer' />
          {isOpen && (
            <div className='absolute right-0 mt-2 py-2 w-48 bg-white shadow-xl rounded-md'>
              <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700'>Settings</a>
              <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700'>Contact</a>
              <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700'>Help</a>
              <a href='#' className='flex items-center px-4 py-2 text-sm hover:bg-gray-100 text-gray-700'><HiOutlineLogout className='mr-2' />Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
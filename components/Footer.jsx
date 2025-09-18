import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from "./ui/navbar-menu";
import logo from '@/public/ACMlogo1.png';
import { FaInstagram, FaTwitter, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-[rgba(16,18,24,1)] text-white">
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <Image src={logo} alt="College Club" width={150} height={150} className='mr-20' />

        <div className=' flex space-x-4'>
          <Link href={"/"}>
          <FaInstagram className='text-2xl' />
          </Link>
          <Link href={"/"}>
          <FaTwitter className='text-2xl' />
          </Link>
          <Link href={"/"}>
          <FaGithub className='text-2xl' />
          </Link>
          <Link href={"/"}>
          <FaYoutube className='text-2xl' />
          </Link>
          <Link href={"/"}>
          <FaLinkedin className='text-2xl' />
          </Link>
        </div>
      </div>
      <div className='items-center justify-center flex gap-16'>
      <div className="flex flex-col text-center md:text-left mb-8 md:mb-0">
        <h3 className="mb-4 font-bold text-blue-500 text-lg">Connect With Us</h3>
        <ul className="list-none p-0 space-y-2">
          <li>
            <Link href={"/"}>
              <MenuItem item="Instagram" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MenuItem item="Twitter" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MenuItem item="Youtube" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MenuItem item="Linkedin" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MenuItem item='Github' />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-center md:text-left">
        <h4 className="mb-4 text-lg">Resources</h4>
        <ul className="list-none p-0 space-y-2">
          <li>
            <Link href={"/blog"}>
              <MenuItem item='Blog' />
            </Link>
          </li>
          <li>
            <Link href={"/faq"}>
              <MenuItem item='FAQ' />
            </Link>
          </li>
          <li>
            <Link href="/support">
              <MenuItem item='Support' />
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;


'use client';
import React from 'react'
import Link from 'next/link'
import { IoIosBug } from "react-icons/io";
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const navbar = () => {

  const Links = [
    {title : 'Dashboard' , href : '/'},
    {title : 'Issues' , href : '/issues'}
  ]

  const currentpath = usePathname();
  

  return (
    <nav className='flex border-b space-x-6 h-20 items-center p-5 text-2xl '>
      <Link href='/'><IoIosBug /></Link>
       <ol className='flex-row space-x-6 text-lg'>
        {Links.map(link =>
             <Link className= {classNames({
                'text-zinc-500' : link.href !== currentpath, 
                'text-zinc-950' : link.href === currentpath,
                'hover:text-zinc-900 transition-colors' : true  
             })} 
             key = {link.href} href = {link.href}> {link.title} </Link>
        )}
       </ol>
    </nav>
  )
}

export default navbar

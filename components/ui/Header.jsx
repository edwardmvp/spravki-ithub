import Link from 'next/link'
import React from 'react'
import Logout from '../Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'

export default async function Header() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <div className='container mx-auto mt-10'>
            <nav className=''>
                <ul className='flex justify-between border p-4 rounded-xl items-center'>

                    <Link href={'/'}>Справки IThub</Link>
                    <Link href={'/reference'}>Заказать справку</Link>
                    {/* {
                        !session && <Link className='bg-[#adc8ed] rounded-xl font-semibold text-[16px] cursor-pointer px-5 py-2' href="/Login">ВОЙТИ</Link>
                    } */}
                    {
                        !!session && <Logout />
                    }

                </ul>
            </nav>
        </div>
    )
}

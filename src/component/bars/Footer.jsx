import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-20 bg-gray-600 flex items-center justify-center text-center text-white'>
        <p>
            A product of <Link href={'https://disibin/com'}>Disibin</Link>
        </p>
        
    </div>
  )
}

export default Footer
import Footer from '@/component/bars/Footer'
import Navbar from '@/component/bars/Navbar'
import React from 'react'

const HomePageLayout = ({children}) => {
  return (
    <div className='w-full overflow-x-hidden relative pt-14'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default HomePageLayout
import SignInForm from '@/component/forms/SignInForm'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='w-full min-h-screen flex flex-row items-center justify-center'>
      <div className='w-full hidden md:flex flex-col items-center justify-center min-h-screen bg-emerald-400'>
        <div className='w-auto mx-auto flex flex-col gap-3 text-white'>
          <h1>Welcome to</h1>
          <p>Tribin</p>
          <p>A product of <Link href={'https://disibin.com'}>DIsibin</Link></p>
          <p>Manage your tour and travel business with us!</p>
          <p>100% Secured business data and policy.</p>
          <p>We care every customer.</p>
          <p>24/7 Support system activated.</p>
        </div>
      </div>
      <SignInForm />
    </div>
  )
}

export default SignInPage
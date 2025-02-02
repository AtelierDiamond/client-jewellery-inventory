import Profile from '@/components/common/Profile'
import Banner from '@/components/pages/home/Banner'
import JewellsCategory from '@/components/pages/home/JewellsCategory'
import React from 'react'

function page() {
  return (
    <>
      <Profile customClass='text-white' />
      <div className='h-screen'>
        <Banner />
        <JewellsCategory />
      </div>
    </>
  )
}

export default page
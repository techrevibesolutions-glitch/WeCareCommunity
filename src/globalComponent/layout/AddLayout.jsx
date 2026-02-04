import React from 'react'
import { Outlet,ScrollRestoration} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
function AppLayout() {
  return (
    <>
      <Header />
      <main className='mt-10'>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer />
    </>
  )
}

export default AppLayout;

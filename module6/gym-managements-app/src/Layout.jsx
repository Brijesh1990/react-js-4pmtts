import React from 'react'
import Header from './components/customers/Header'
import Content from './components/customers/Content'
import Footer from './components/customers/Footer'
import Login from './components/customers/Login'
export default function Layout() {
  return (
    <div>
    {/* header */}
    <Header />
    {/* content */}
    <Content />
    {/* footer */}
    <Footer />
    <Login />
    </div>
  )
}

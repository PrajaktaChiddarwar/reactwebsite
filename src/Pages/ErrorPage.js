import React from 'react'
import Navbar from '../component/Navbar';
import Error404 from '../Error404';
import Footer from '../Footer';


const ErrorPage = () => {
  return (
    <>
    <Navbar/>
      <Error404/>
      <Footer/>
    </>
  )
}

export default ErrorPage
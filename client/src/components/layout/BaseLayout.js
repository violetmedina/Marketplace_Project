import React from 'react'
import NavbarComponent from './NavbarComponent'

const BaseLayout = (props) => {
  return (
    <>
   <NavbarComponent/>
    {props.children}
    Footer
    </>
  )
}

export default BaseLayout
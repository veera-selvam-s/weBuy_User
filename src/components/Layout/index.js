import React from 'react';
import Headers from '../Headers';
import MenuHeader from '../MenuHeader';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Headers />
        <MenuHeader />
        {props.children}
    </>
   )

 }

export default Layout
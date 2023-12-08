import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import BacktoTop from './BackToTop/BackToTop';
import Switcher from './Switcher/Switcher';
import CustomSwitcher from './Switcher/CustomSwitcher';

const ErrorPages = () => {
document.querySelector("body")?.classList.remove("layout-boxed");
  return (
    <Fragment>
      <CustomSwitcher/>
      <div className='page'>
        <div className='page-main'>
          <div className='main-content mt-0' 
          onClick={()=>ErrorPages()}
       >
            <Outlet />
          </div>
        </div>
        <BacktoTop />
       </div>
    </Fragment>
  )
}
export default ErrorPages;
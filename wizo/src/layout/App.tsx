import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Switcher from './Switcher/Switcher';
import * as SwitcherData from './Switcher/Data/SwitcherData';
function App() {

  document.querySelector("body")?.classList.remove("landing-page" ,"horizontal");
  document.querySelector("body")?.classList.remove("h-100vh" ,"bg-primary", "login-page");
  document.querySelector("body")?.classList.remove("h-100vh" ,"bg-light", "login-page");
  document.body.classList.remove("register1", "login-page");
  document.body.classList.remove("register-2", "login-page");
  document.body.classList.remove("bg-white","register-3", "login-page");
  document.body.classList.remove("comming", "login-page");
  document.body.classList.remove("construction", "login-page");
  
// Switcher
 const SwitcherMenuclose = () => {
  
  document.querySelector(".demo_changer")?.classList.remove("active");
  let demo_changer = document.querySelector(".demo_changer") as HTMLInputElement
    demo_changer.style.right = "-270px";
  }
  //
  const Sideabr = () => {
    document.querySelector("body")?.classList.remove("sidenav-toggled");
  }
  return (
<Fragment>
    <div className='horizontalMenucontainer'>

      <Switcher/>
      <div className='page'>
        <div className='page-main'>
          <Header/>
          <SideBar/>
          <div className='jumps-prevent' style={{ paddingTop: "0px" }}></div>
          <div className='app-content main-content' onClick = {() => {
          SwitcherMenuclose();
          Sideabr();
          }}>
            <div className='side-app'>
              <div className='main-container container-fluid px-0'>
              <Outlet/>

              </div>
            </div>
          </div>
        
        </div>
        <Footer/>
      </div>
    </div>
    </Fragment>
  )
}

export default App;


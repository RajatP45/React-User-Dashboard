
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react';
import * as SwitcherData from '../Switcher/Data/SwitcherData';;
import { Button, Dropdown, Form, InputGroup, ListGroup, Nav, Navbar } from 'react-bootstrap';
import { ImagesData } from '../../CommonComponents/Images/CommonImages';
import { Scrollbar } from 'react-scrollbars-custom';
import MenuItems from "../SideBar/SidebarData";

function Header() {
  useEffect(() => {
    SwitcherData.localStorageBackup();
  })


  //Search functionality
  const [show1, setShow1] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);
  
  document.querySelector(".search-result")?.classList.remove("d-none")
  document.addEventListener("click", function(){
          document.querySelector(".search-result")?.classList.add("d-none")
      });
  
  let myfunction = (inputvalue) => {

   document.querySelector(".search-result")?.classList.remove("d-none")

    let i: any = []
    let allElement2: any = [];

    MenuItems.map(mainlevel => {
      if (mainlevel.Items) {
        setShow1(true)
        mainlevel.Items.map(sublevel => {

          if (sublevel.children) {
            sublevel.children.map(sublevel1 => {

              i.push(sublevel1)
              if (sublevel1.children) {
                sublevel1.children.map(sublevel2 => {

                  i.push(sublevel2)
                  return sublevel2;
                })
              }
              return sublevel1;
            })
          }
          return sublevel;
        })
      }
      return mainlevel;
    }
    )
    for (let allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          setShow2(true)
          allElement2.push(allElement)
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if ({ inputvalue } + '/' === "") {
        setShow2(false);
        setsearchval("Type something")
        setsearchcolor('text-dark')
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor('text-danger')
        setsearchval("There is no component with this name")
      }
    }
    setNavData(allElement2)

  }

  // Darkmode
  const DarkMode = () => {


    if (document.querySelector("body")?.classList.contains('dark-mode')) {
      document.querySelector("body")?.classList.remove('dark-mode');
      
      let myonoffswitch2 = document.querySelector("#myonoffswitch1") as HTMLInputElement
      myonoffswitch2.checked = true;
      let myonoffswitch5 = document.querySelector("#myonoffswitch3") as HTMLInputElement
      myonoffswitch5.checked = true;
      let myonoffswitch8 = document.querySelector("#myonoffswitch6") as HTMLInputElement
      myonoffswitch8.checked = true;
    }
    else {
      document.querySelector("body")?.classList.add('dark-mode');
      let myonoffswitch2 = document.querySelector("#myonoffswitch2") as HTMLInputElement
      myonoffswitch2.checked = true;
      let myonoffswitch5 = document.querySelector("#myonoffswitch5") as HTMLInputElement
      myonoffswitch5.checked = true;
      let myonoffswitch8 = document.querySelector("#myonoffswitch8") as HTMLInputElement
      myonoffswitch8.checked = true;
    }
  };

  // FullScreen
  const elem: any = document.documentElement;
  let i = true;
  const Fullscreen: any = (vale: any) => {
    switch (vale) {
      case true:
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
        i = false;
        break;
      case false:
        document.exitFullscreen();
        i = true;
        break;
    }
  };

  //Switcher Icon

  const SwitcherIcon = () => {
    document.querySelector(".demo_changer")?.classList.add("active");
    let demoChanger = document.querySelector(".demo_changer") as HTMLInputElement
    demoChanger.style.right = "0px";
  }
  //leftsidemenu
  const openSidebar = () => {
    document.querySelector("body")?.classList.toggle("sidenav-toggled");
  };
  // responsivesearch
  const responsivesearch = () => {
    document.querySelector(".header-search")?.classList.toggle("show");
  };
  return (
    <Fragment>
      <div className="app-header header">
        <div className="container-fluid main-container">
          <div className="d-flex">
            <div className="app-sidebar__toggle d-flex align-items-center" data-bs-toggle="sidebar">
              <Link className="open-toggle" to="#"
                onClick={() => {
                  openSidebar();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="feather feather-align-left header-icon"
                  width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                </svg>
              </Link>
            </div>
            <div className="logo-horizontal">
              <Link to={`${import.meta.env.BASE_URL}dashboard`}>
                <img src={ImagesData('logo')} className="header-brand-img desktop-lgo"
                  alt="Azea logo" />
                <img src={ImagesData('logo1')} className="header-brand-img dark-logo "
                  alt="Azea logo" />
              </Link>
            </div>
            <div className="main-header-center ms-3 d-none d-lg-block">
              <div className="form-inline">
                <div className="search-element">
                  <Form.Control type="text" defaultValue={InputValue} id="typehead" placeholder="Search for results..."
                    autoComplete="off" onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value) })} />
                  <Button variant='' className="btn px-2 ">	<svg xmlns="http://www.w3.org/2000/svg" className="header-icon search-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                    </path>
                  </svg></Button>
                </div>
              </div>
              {show1 ?
                <div className="card search-result position-absolute z-index-9 search-fix  border mt-1">
                  <div className="card-header">
                    <h4 className="card-title me-2 text-break">Search result of {InputValue}</h4>
                  </div>
                  <ListGroup className='mt-2 search_bar'>
                    {show2 ?
                      NavData.map((e: any) =>
                        <ListGroup.Item key={Math.random()} className="">
                          <Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue("") }}>{e.title}</Link>
                        </ListGroup.Item>
                      )
                      : <b className={`${searchcolor} `}>{searchval}</b>}
                  </ListGroup>

                </div>
                : ""}
            </div>
            <Navbar className="d-flex order-lg-2 ms-auto main-header-end p-0" expand="lg">
              <Navbar.Toggle className=" navresponsive-toggler d-lg-none" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="true"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon header-iocns fe fe-more-vertical mt-1"></span>
              </Navbar.Toggle>


              <div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0" >
                <Navbar.Collapse className="collapse navbar-collapse "
                  id="navbarSupportedContent-4" >
                  <div className="d-flex order-lg-2">
                    <div className="dropdown d-block d-lg-none">
                      <Link
                        to="#"
                        className="nav-link icon"
                        onClick={() => responsivesearch()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon search-icon" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                          </path>
                        </svg>
                      </Link>
                      <div className="dropdown-menu header-search dropdown-menu-start">
                        <div className="input-group w-100 p-2 border">
                          <input style={{ height: '30px' }}
                            type="text"
                            className="form-control"
                            placeholder="Search...."
                          />
                          <div className="input-group-text btn btn-primary">
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown theme-setting">
                      <a className="nav-link icon theme-layout nav-link-bg layout-setting" onClick={() => DarkMode()}>
                        <span className="light-layout"><svg xmlns="http://www.w3.org/2000/svg"
                          className="header-icon" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z">
                          </path>
                        </svg></span>
                        <span className="dark-layout"><svg xmlns="http://www.w3.org/2000/svg"
                          className="header-icon" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
                          </path>
                        </svg></span>
                      </a>
                    </div>

                    <div className="dropdown  header-fullscreen d-flex ">
                      <a className="nav-link icon full-screen-link p-0" id="fullscreen-button" onClick={() => Fullscreen(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" width="24"
                          height="24" viewBox="0 0 24 24">
                          <path
                            d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z">
                          </path>
                        </svg>
                      </a>
                    </div>
                    <Dropdown className="dropdown country-selector d-flex">
                      <Dropdown.Toggle as='a' className="nav-link leading-none no-caret" variant="" id="dropdown-basic"
                      >
                        <span className="header-avatar1 ">
                          <img src={ImagesData('flag5')} alt="img"
                            className=" country" />
                          <span className="fs-14 font-weight-semibold country-text"> English</span>
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow animated">
                        <Dropdown.Item className="dropdown-item d-flex" href="#">
                          <img src={ImagesData('flag1')} alt="img"
                            className="me-2 country mt-1" />
                          <span className="fs-13 text-wrap"> Germany</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item d-flex" href="#">
                          <img src={ImagesData('flag2')} alt="img"
                            className="me-2 country mt-1" />
                          <span className="fs-13 text-wrap"> Italy</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item d-flex" href="#">
                          <img src={ImagesData('flag3')} alt="img"
                            className="me-2 country mt-1" />
                          <span className="fs-13 text-wrap"> Russia</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item d-flex" href="#">
                          <img src={ImagesData('flag4')} alt="img"
                            className=" me-2 country mt-1" />
                          <span className="fs-13 text-wrap"> Spain</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="header-message d-flex">
                      <Dropdown.Toggle as="a" className="nav-link icon no-caret" variant="" id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" width="24"
                          height="24" viewBox="0 0 24 24">
                          <path
                            d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z">
                          </path>
                        </svg>
                        <span className="badge bg-success side-badge">5</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className=" dropdown-menu-end dropdown-menu-arrow  animated ps ps--active-y">
                        <Scrollbar style={{ width: 325, height: 350 }}>
                          <div className="dropdown-header ">
                            <h6 className="mb-0">Messages</h6>
                            <span className="badge fs-10 bg-secondary br-7 ms-auto">New</span>
                          </div>
                          <Link className="dropdown-item border-bottom" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}><div className="d-flex align-items-center">
                            <div>
                              <span
                              ><img className="avatar avatar-md brround align-self-center cover-image" src={ImagesData('users1')} /></span>
                            </div>
                            <div className="d-flex mt-1 mb-1">
                              <div className="ps-3">
                                <span className="mb-1 fs-13 text-wrap">Joan Powell</span>
                                <p className="fs-12 mb-1 text-wrap">All the best your
                                  template awesome</p>
                                <div className="fs-11 text-muted">
                                  3 hours ago
                                </div>
                              </div>
                            </div>
                          </div>
                          </Link>
                          <Link className="dropdown-item border-bottom" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}>
                            <div className="d-flex align-items-center">

                              <div>
                                <span

                                  data-bs-image-src="../assets/images/users/2.jpg"> <img className="avatar avatar-md brround align-self-center cover-image" src={ImagesData('users2')} />
                                </span>
                              </div>
                              <div className="d-flex mt-1 mb-1">
                                <div className="ps-3">
                                  <span className="mb-1 fs-13 text-wrap">Gavin Sibson</span>
                                  <p className="fs-12 mb-1 text-wrap">Hey! there I'm
                                    available</p>
                                  <div className="fs-11 text-muted">
                                    5 hour ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <Link className=" dropdown-item border-bottom" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}><div className="d-flex align-items-center">
                            <div>
                              <span
                                data-bs-image-src="../assets/images/users/3.jpg"
                              ><img className="avatar avatar-md brround align-self-center cover-image" src={ImagesData('users3')} /></span>
                            </div>
                            <div className="d-flex mt-1 mb-1">
                              <div className="ps-3">
                                <span className="mb-1 fs-13 text-wrap">Julian Kerr</span>
                                <p className="fs-12 mb-1 text-wrap">Just created a new
                                  blog post</p>
                                <div className="fs-11 text-muted">
                                  45 mintues ago
                                </div>
                              </div>
                            </div>
                          </div></Link>
                          <Link className=" dropdown-item border-bottom" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}>
                            <div className="d-flex align-items-center">
                              <div>
                                <span

                                  data-bs-image-src="../assets/images/users/4.jpg"

                                ><img className="avatar avatar-md brround align-self-center cover-image" src={ImagesData('users4')} /></span>
                              </div>
                              <div className="d-flex mt-1 mb-1">
                                <div className="ps-3">
                                  <span className="fs-13 mb-1 text-wrap">Cedric
                                    Kelly</span>
                                  <p className="fs-12 mb-1 text-wrap">Added new comment on
                                    your photo</p>
                                  <div className="fs-11 text-muted">
                                    2 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <Link className=" dropdown-item border-bottom" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}>
                            <div className="d-flex align-items-center">
                              <div>
                                <span

                                  data-bs-image-src="../assets/images/users/6.jpg"
                                ><img className="avatar avatar-md brround align-self-center cover-image" src={ImagesData('users6')}/></span>
                              </div>
                              <div className="d-flex mt-1 mb-1">
                                <div className="ps-3">
                                  <span className="mb-1 fs-13 text-wrap">Julian Kerr</span>
                                  <p className="fs-12 mb-1 text-wrap">Your payment invoice
                                    is generated</p>
                                  <div className="fs-11 text-muted">
                                    3 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <Link className=" dropdown-item border-bottom" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}>
                            <div className="d-flex align-items-center">
                              <div>
                                <span
                                  data-bs-image-src="../assets/images/users/7.jpg"
                                ><img className="avatar avatar-md brround align-self-center cover-image" src={ImagesData('users7')} /></span>
                              </div>
                              <div className="d-flex mt-1 mb-1">
                                <div className="ps-3">
                                  <span className="mb-1 fs-13 text-wrap">Faith
                                    Dickens</span>
                                  <p className="fs-12 mb-1 text-wrap">Please check your
                                    mail....</p>
                                  <div className="fs-11 text-muted">
                                    4 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className=" text-center p-2 pt-3 border-top">
                            <Link to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}
                              className="' dropdown-item border-bottom fs-13 btn btn-primary btn-md btn-block">See
                              More</Link>
                          </div>
                        </Scrollbar>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="header-notify d-flex">
                      <Dropdown.Toggle as="a" className="nav-link icon no-caret" variant="" id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" width="24"
                          height="24" viewBox="0 0 24 24">
                          <path
                            d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z">
                          </path>
                        </svg><span className="pulse"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className=" dropdown-menu-end dropdown-menu-arrow  animated">
                        <div className="dropdown-header">
                          <h6 className="mb-0">Notifications</h6>
                          <span className="badge fs-10 bg-secondary br-7 ms-auto">New</span>
                        </div>
                        <Link className="dropdown-item border-bottom d-flex ps-4" to={`${import.meta.env.BASE_URL}Pages/Email/emailinbox`}>
                          <div
                            className="notifyimg  text-primary bg-primary-transparent border-primary">
                            <i className="fa fa-envelope"></i>
                          </div>
                          <div className="w-70">
                            <span className="fs-13 text-wrap">Message Sent.</span>
                            <div className="small text-muted">3 hours ago</div>
                          </div>
                        </Link>
                        <Link className="dropdown-item border-bottom d-flex ps-4" to={`${import.meta.env.BASE_URL}Pages/Email/emailinbox`}>
                          <div
                            className="notifyimg  text-secondary bg-secondary-transparent border-secondary">
                            <i className="fa fa-shopping-cart"></i>
                          </div>
                          <div className="w-70">
                            <span className="fs-13 text-wrap">Order Placed</span>
                            <div className="small text-muted">5 hour ago</div>
                          </div>
                        </Link >
                        <Link className="dropdown-item border-bottom d-flex ps-4" to={`${import.meta.env.BASE_URL}Pages/Email/emailinbox`}>
                          <div
                            className="notifyimg text-danger bg-danger-transparent border-danger">
                            <i className="fa fa-gift"></i>
                          </div>
                          <div className="w-70">
                            <span className="fs-13 text-wrap">Event Started</span>
                            <div className="small text-muted">45 mintues ago</div>
                          </div>
                        </Link>
                        <Link className="dropdown-item border-bottom d-flex ps-4 mb-2" to={`${import.meta.env.BASE_URL}Pages/Email/emailinbox`}>
                          <div
                            className="notifyimg  text-success  bg-success-transparent border-success">
                            <i className="fa fa-windows"></i>
                          </div>
                          <div className="w-70">
                            <span className="fs-13 text-wrap">Your Admin lanuched</span>
                            <div className="small text-muted">1 daya ago</div>
                          </div>
                        </Link>

                        <Link to={`${import.meta.env.BASE_URL}Pages/Email/emailinbox`}
                          className="dropdown-item text-center p-2 btn btn-primary btn-md fs-13 btn-block">View
                          All</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="profile-dropdown d-flex">
                      <Dropdown.Toggle as="a" className="nav-link pe-0 leading-none no-caret" >
                        <span className="header-avatar1">
                          <img src={ImagesData("users2")} alt="img"
                            className="avatar avatar-md brround" />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className=" dropdown-menu-end dropdown-menu-arrow animated">
                        <div className="text-center">
                          <div className="text-center user pb-0 font-weight-bold">Patrenna
                          </div>
                          <span className="text-center user-semi-title">Web
                            Designer</span>
                          <div className="dropdown-divider"></div>
                        </div>
                        <Dropdown.Item className="text-center user pb-0 font-weight-bold" href="#/action-1"> </Dropdown.Item>
                        <Link className="dropdown-item d-flex" to={`${import.meta.env.BASE_URL}Pages/profile/profile01`}><svg className="header-icon me-2" xmlns="http://www.w3.org/2000/svg"
                          height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z">
                          </path>
                        </svg>Profile</Link>
                        <Link className="dropdown-item  d-flex" to={`${import.meta.env.BASE_URL}Pages/search`}><svg className="header-icon me-2" xmlns="http://www.w3.org/2000/svg"
                          height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                          </path>
                        </svg>Settings</Link>
                        <Link className="dropdown-item d-flex" to={`${import.meta.env.BASE_URL}Apps/chats/chat01`}><svg className="header-icon me-2" xmlns="http://www.w3.org/2000/svg"
                          height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z">
                          </path>
                        </svg>Messages</Link>
                        <Link className="dropdown-item d-flex" to={`${import.meta.env.BASE_URL}CustomPages/login/login01`}>
                          <svg className="header-icon me-2" xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24" height="24"
                            viewBox="0 0 24 24" width="24">
                            <g>
                              <rect fill="none" height="24" width="24"></rect>
                            </g>
                            <g>
                              <path
                                d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z">
                              </path>
                            </g>
                          </svg>Sign Out</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Navbar.Collapse>
              </div>
              <div className="d-flex" onClick={() => SwitcherIcon()}>
                <Link className="nav-link icon demo-icon" to="#" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="header-icon fa-spin" width="24"
                    height="24" viewBox="0 0 24 24">
                    <path
                      d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z">
                    </path>
                    <path
                      d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z">
                    </path>
                  </svg>
                </Link>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Header;

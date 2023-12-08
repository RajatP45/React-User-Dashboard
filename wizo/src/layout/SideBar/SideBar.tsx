
import React, { ElementRef, Fragment, useEffect, useState, } from 'react';
import MenuItems from './SidebarData';
import { Link, useLocation } from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import { horizontalmenusticky } from '../Switcher/Data/SwitcherData';
import { ImagesData } from '../../CommonComponents/Images/CommonImages';

let history:any = [];

function SideBar() {
	const location = useLocation();
	const [menuitems, setMenuitems] = useState(MenuItems);

  useEffect(() => {
    history.push(location.pathname);  // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history
    if (history.length > 2) {   
      history.shift();
    }
    let mainContent:HTMLElement | null = document.querySelector(".main-content");
    // //when we click on the body to remove
    mainContent!.addEventListener("click", mainContentClickFn);
    return () => {
      mainContent!.removeEventListener("click", mainContentClickFn);
    };
  }, [location, mainContentClickFn, setSidemenu]);

  useEffect(() => {
    setSidemenu(location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname);
    if (
      document.body.classList.contains("horizontal") &&
      window.innerWidth >= 992
    ) {
		checkHoriMenu();
		clearMenuActive();
    }
  }, []);
  // every chnage this effect calls
  if (document.querySelector("body")?.classList.contains("horizontal")) {
  } 
  //  In Horizontal When we click the body it should we Closed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function mainContentClickFn() {
    if (
      document.body.classList.contains("horizontal") &&
      window.innerWidth >= 992
    ) {
      clearMenuActive();
    }
  }


  function setSidemenu(pathname) {
    if (MenuItems) {
      MenuItems.filter((mainlevel) => {
        if (mainlevel.Items) {
          mainlevel.Items.filter((items) => {
            items.active = false;
            items.selected = false;
            if (pathname === "/") {
              pathname = "/dashboard";
            }
            if (pathname === items.path) {
              items.active = true;
              items.selected = true;
            }
            else if (items.children) {
              items.children.filter((submenu) => {

                submenu.active = false;
                submenu.selected = false;
                if (pathname == submenu.path) {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                else if (submenu.children) {
                  submenu.children.filter((submenu1) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (pathname === submenu1.path) {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  });
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuitems((arr) => [...arr]);
        if (document.body.classList.contains('horizontal-hover')) {

          clearMenuActive();
        }
        return mainlevel;
      });
    }
  }

	function toggleSidemenu(item) {

		if (
			!document.body.classList.contains("horizontal-hover") ||
			window.innerWidth < 992
		) {
			// To show/hide the menu

			if (!item.active) {
				MenuItems.filter((mainlevel) => {
				
					if (mainlevel.Items) {
						mainlevel.Items.filter(sublevel => {
							sublevel.active = false;
							if (item === sublevel) {
								sublevel.active = true;
							}
							if (sublevel.children) {
								sublevel.children.filter((sublevel1) => {
									sublevel1.active = false;
									if (item === sublevel1) {
										sublevel.active = true;
										sublevel1.active = true;
									}
									if (sublevel1.children) {
										sublevel1.children.filter(sublevel2 => {
											sublevel2.active = false;
											if (item === sublevel2) {
												sublevel.active = true;
												sublevel1.active = true;
												sublevel2.active = true;
											}
											if (sublevel2.children) {
												sublevel2.children.filter(sublevel3 => {
													sublevel3.active = false;
													if (item === sublevel3) {
														sublevel.active = true;
														sublevel1.active = true;
														sublevel2.active = true;
														sublevel3.active = true;
													}
													return sublevel2;
												});
											}
											return sublevel2;
										});
									}
									return sublevel1;
								});
							}
							return sublevel;
						});
					}
					return mainlevel;
				});
			}
			else {
				item.active = !item.active;
			}
		}

		setMenuitems(menuitems => [...menuitems]);
	}
  //Hover effect
  function Onhover() {
      document.querySelector("body")?.classList.contains("sidenav-toggled");
      document.querySelector("body")?.classList.add("sidenav-toggled1");
  }
  function Outhover() {
      document.querySelector("body")?.classList.remove("sidenav-toggled1");
  }
  
  function clearMenuActive() {
    MenuItems.filter((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.filter((sublevel) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.filter((sublevel1) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.filter((sublevel2) => {
                  sublevel2.active = false;
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    setMenuitems((arr) => [...arr]);
  }
  function checkHoriMenu() {
    let menuWidth:any = document.querySelector(".horizontal-main");
    let menuItems:any = document.querySelector(".side-menu");
    let mainSidemenuWidth:any = document.querySelector(".main-sidemenu");
    if (menuWidth&& menuItems && mainSidemenuWidth){
      let menuContainerWidth:any = menuWidth.offsetWidth - mainSidemenuWidth.offsetWidth;
      let marginLeftValue = menuItems ? Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) : 0;
      let marginRightValue = menuItems ? Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) : 0;
      let check = menuItems!.scrollWidth + (0 - menuWidth!.offsetWidth) + menuContainerWidth;
      if (menuWidth.offsetWidth - menuContainerWidth >= menuItems?.scrollWidth) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-right")?.classList.add("d-none");
        menuItems!.style.marginRight = '0px';
        menuItems!.style.marginLeft = '0px';

      }
      else {
        document.querySelector(".slide-right")!.classList.remove("d-none");
      }
      if (document.querySelector("html")!.getAttribute("dir") === "rtl") {
        if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth.offsetWidth - menuContainerWidth < menuItems!.scrollWidth)
        ) {
          menuItems!.style.marginRight = -check + 'px';
          document.querySelector(".slide-left")!.classList.remove("d-none");
        } else {
          menuItems!.style.marginRight = '0px';
        }
      } else {
        if (
          (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
          (menuWidth.offsetWidth - menuContainerWidth < menuItems!.scrollWidth)
        ) {
          menuItems!.style.marginLeft = -check + 'px';
          document.querySelector(".slide-right")!.classList.add("d-none");
        } else {
          menuItems!.style.marginLeft = '0px';
        }
      }}
  }

  function slideLeft() {
    // slideClick();
    let menuWidth:any = document.querySelector(".horizontal-main");
    let menuItems:any = document.querySelector(".side-menu");
    let mainSidemenuWidth:any = document.querySelector(".main-sidemenu");
    let menuContainerWidth:any = menuWidth.offsetWidth - mainSidemenuWidth.offsetWidth;
    let marginLeftValue = menuItems ? Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100 : 0;
    let marginRightValue = menuItems ? Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100 : 0;

    if (document.querySelector('html')!.getAttribute('dir') === "rtl") {
      if (marginRightValue < 0) {
        menuItems!.style.marginLeft = "0px";
        menuItems!.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
        document.querySelector(".slide-right")!.classList.remove("d-none");
        document.querySelector(".slide-left")!.classList.remove("d-none");
      } else {
        document.querySelector(".slide-left")!.classList.add("d-none");
      }

      if (marginRightValue >= 0) {
        menuItems!.style.marginLeft = "0px";
        menuItems!.style.marginRight = "0px";
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub: HTMLElement[] = Array.from(document.querySelectorAll(".sub-nav-sub"));
      subNavSub.forEach((e : HTMLElement) => {
        e.style.display = "";
      });
      let subNav: HTMLElement[] = Array.from(document.querySelectorAll(".nav-sub"));
      subNav.forEach((e: HTMLElement) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue < 0) {
        menuItems!.style.marginLeft = Number(menuItems!.style.marginLeft.split("px")[0]) + 100 + "px";
        if (menuWidth.offsetWidth - menuContainerWidth < menuItems?.scrollWidth) {
          document.querySelector(".slide-left")!.classList.remove("d-none");
          document.querySelector(".slide-right")!.classList.remove("d-none");
        }
      }
      else {
        document.querySelector(".slide-left")!.classList.add("d-none");
      }

      if (marginLeftValue >= 0) {
        menuItems!.style.marginLeft = "0px";
        if (menuWidth.offsetWidth < menuItems!.scrollWidth) {
          document.querySelector(".slide-left")!.classList.add("d-none");
        }
      }

      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub: HTMLElement[] = Array.from(document.querySelectorAll(".sub-nav-sub"));
      subNavSub.forEach((e:HTMLElement) => {
        e.style.display = "";
      });
      let subNav: HTMLElement[] = Array.from(document.querySelectorAll(".nav-sub"));
      subNav.forEach((e:HTMLElement) => {
        e.style.display = "";
      });
    }
  }

  function slideRight() {
    // slideClick();
    let menuWidth:any = document.querySelector(".horizontal-main");
    let menuItems:any = document.querySelector(".side-menu");
    let mainSidemenuWidth:any = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = menuItems ? Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100 : 0;
    let marginRightValue = menuItems ? Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100 : 0;
    let check = menuItems.scrollWidth + (0 - menuWidth.offsetWidth) + menuContainerWidth;
    if (document.querySelector('html')!.getAttribute('dir') === "rtl") {
      if (marginRightValue > -check) {
        menuItems!.style.marginLeft = "0px";
        menuItems!.style.marginRight =
          Number(menuItems!.style.marginRight.split("px")[0]) - 100 + "px";
      } else {
        menuItems!.style.marginLeft = "0px";
        menuItems!.style.marginRight = -check + "px";
        document.querySelector(".slide-right")!.classList.add("d-none");
        document.querySelector(".slide-left")!.classList.remove("d-none");
      }

      if (marginRightValue !== 0) {
        document.querySelector(".slide-left")!.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub: HTMLElement[] = Array.from(document.querySelectorAll(".sub-nav-sub"));
      subNavSub.forEach((e:HTMLElement) => {
        e.style.display = "";
      });
      let subNav : HTMLElement[] = Array.from(document.querySelectorAll(".nav-sub"));
      subNav.forEach((e:HTMLElement) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue > -check) {
        menuItems!.style.marginLeft =
          Number(menuItems!.style.marginLeft.split("px")[0]) - 100 + "px";
      } else {
        menuItems!.style.marginLeft = -check + "px";
        document.querySelector(".slide-right")!.classList.add("d-none");
      }
      if (marginLeftValue !== 0) {
        document.querySelector(".slide-left")!.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub : HTMLElement[] = Array.from(document.querySelectorAll(".sub-nav-sub"));
      subNavSub.forEach((e:HTMLElement) => {
        e.style.display = "";
      });
      let subNav: HTMLElement[] = Array.from(document.querySelectorAll(".nav-sub"));
      subNav.forEach((e:HTMLElement) => {
        e.style.display = "";
      });
      //
    }
  }
  window.addEventListener("resize", () => {
    checkHoriMenu();
  });


  
	return (
		<Fragment>
			<div className="sticky" 
      onScroll={() => horizontalmenusticky()}
      >
				<div className="app-sidebar"
				 onMouseOver={() => Onhover()}
				 onMouseOut={() => Outhover()}
				>
             <PerfectScrollbar>
						<div className="app-sidebar__logo">
							<Link className="header-brand" to={`${import.meta.env.BASE_URL}dashboard`}	onClick={() => setSidemenu(`${import.meta.env.BASE_URL}dashboard`) } >
								<img src={ImagesData('logo')} className="header-brand-img desktop-lgo"
									alt="Azea logo" />
								<img src={ImagesData('logo1')} className="header-brand-img dark-logo"
									alt="Azea logo" />

								<img src={ImagesData('favicon')} className="header-brand-img mobile-logo"
									alt="Azea logo" />
								<img src={ImagesData('favicon1')} className="header-brand-img darkmobile-logo"
									alt="Azea logo" />

							</Link>
						</div>
						
						<div className="main-sidemenu "
						>
							<div className="slide-left disabled" id="slide-left" onClick={slideLeft}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
									viewBox="0 0 24 24">
									<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
								</svg>
							</div>

						<ul className='side-menu app-sidebar3'>

							{MenuItems.map((levelone) => (

								<Fragment key={Math.random()} >

									<li className='side-item side-item-category'>
										{levelone.menutitle}

									</li>
									{levelone.Items.map((menuitems) => (
										<li  key={Math.random()}
										className={`slide ${menuitems.active ? "is-expanded" : ""
									}`}
										>
											{menuitems.type === "link" ? (
												
												<Link to={menuitems.path + "/"}  className={`side-menu__item ${menuitems.selected ? "active" : ""
											}`}
													onClick={() => {
														setSidemenu(menuitems.path);
													}}
												>
													{menuitems.icon}
													<span className='side-menu__label'>{menuitems.title}</span>
												</Link>
											) : (
												""
											)}
											{menuitems.type === "sub" ? (
												
												<Link to={menuitems.path}
												className={`side-menu__item ${menuitems.selected ? "active" : ""
								}`}
													onClick={(event) => {
														event.preventDefault();
														toggleSidemenu(menuitems);
													}}
												>
													{menuitems.icon}
													<span className="side-menu__label">
														{menuitems.title}
													</span>
													<i className='angle fe fe-chevron-right'></i>
												</Link>
											) : (
												""
											)}

											{menuitems.children ? (
												<ul  className={`slide-menu ${menuitems.active ? "open" : " "
											}`}
													style={
														menuitems.active
															? {
																opacity: 1,
																transition: "opacity 500ms ease-in",
																display: "block",
															}
															: { display: "none" }
													}

												>

													{menuitems.children.map((childrenItem) => {

														return (

															<li  
															className={`sub-slide ${childrenItem.active ? "is-expanded" : "" }`}
															key={Math.random()}>
																{childrenItem.type === "sub" ? (
																	<Link to="#"
																		className={`sub-side-menu__item ${childrenItem.selected ? "active" : ""}`}
																		onClick={(event) => {
																			event.preventDefault();
																			toggleSidemenu(childrenItem);
																		}}
																	>
																		<span className='sub-side-menu__label'>
																			{childrenItem.title}
																			</span>
																			<i className="sub-angle fe fe-chevron-right"></i>
																	</Link>
																) : (
																	""
																)}

																{childrenItem.type === "link" ? (
																	<Link to={childrenItem.path + "/"} className={`slide-item ${childrenItem.active ? "active" : "	 "}`}

																	
																		onClick={() =>
																			setSidemenu(childrenItem.path)
																		}
																	>
																		{childrenItem.title}
																	</Link>
																) : (
																	""
																)}
																{childrenItem.children ? (
																	<ul  className={`sub-slide-menu ${menuitems.active ? "" : "open"
																}`}
																		style={
																			childrenItem.active
																				? { display: "block" }
																				: { display: "none" }
																		}
																	>
																		{childrenItem.children.map((subchildrenitem) =>
																			<li key={Math.random()}>
																				{subchildrenitem.type === "link" ? (
																					<Link to={subchildrenitem.path + "/"}   className={`${`sub-slide-item ${subchildrenitem.selected ? "active" : " " }`
																				}`}
																						onClick={() =>
																							setSidemenu(subchildrenitem.path)}
																					>
																						{subchildrenitem.title}
																					</Link>
																				) : (
																					""
																				)}

																			</li>
																		)}
																	</ul>
																) : (
																	""
																)}
															</li>
														);
													})}
												</ul>
											) : (
												""
											)}

										</li>
									))}
								</Fragment>
							))}

						</ul>

            <div className="slide-right" onClick={slideRight} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
						</div>

						</div>  
            </PerfectScrollbar>
				</div>
				
			</div>
		</Fragment>

	);

}



export default SideBar;




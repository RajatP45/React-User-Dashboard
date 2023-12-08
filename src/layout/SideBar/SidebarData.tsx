import React from 'react';

const MenuItems : any = [
    {
        menutitle: "MAIN",
        id: 1,
        Items: [
            {
                path: `${import.meta.env.BASE_URL}dashboard`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" /></svg>),
                type: 'link',
                active: false,
                selected: false,
                title: 'Dashboard'
            },
        ]
    },
    {
        menutitle: "COMPONENTS",
        id: 2,
        Items: [
            {
                path: `${import.meta.env.BASE_URL}elements`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24"
                    height="24" viewBox="0 0 24 24">
                    <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" /></svg>),
                type: 'sub',
                active: false,
                selected: false,
                title: 'Elements',
                children: [
                    { path: `${import.meta.env.BASE_URL}elements/Accordian`, type: 'link', active: false, selected: false, title: 'Accordion' },
                    { path: `${import.meta.env.BASE_URL}elements/Alerts`, type: 'link', active: false, selected: false, title: 'Alerts' },
                    { path: `${import.meta.env.BASE_URL}elements/Avathar`, type: 'link', active: false, selected: false, title: 'Avatar' },
                    { path: `${import.meta.env.BASE_URL}elements/Badges`, type: 'link', active: false, selected: false, title: 'Badges' },
                    { path: `${import.meta.env.BASE_URL}elements/Breadcrumb`, type: 'link', active: false, selected: false, title: 'Breadcrumb' },
                    { path: `${import.meta.env.BASE_URL}elements/Buttons`, type: 'link', active: false, selected: false, title: 'Buttons' },
                    { path: `${import.meta.env.BASE_URL}elements/CardImages`, type: 'link', active: false, selected: false, title: 'Card Images' },
                    { path: `${import.meta.env.BASE_URL}elements/Cards`, type: 'link', active: false, selected: false, title: 'Cards' },
                    { path: `${import.meta.env.BASE_URL}elements/Carousel`, type: 'link', active: false, selected: false, title: 'Carousel' },
                    { path: `${import.meta.env.BASE_URL}elements/DropDown`, type: 'link', active: false, selected: false, title: 'DropDown' },
                    { path: `${import.meta.env.BASE_URL}elements/Footers`, type: 'link', active: false, selected: false, title: 'Footers' },
                    { path: `${import.meta.env.BASE_URL}elements/ListGroup`, type: 'link', active: false, selected: false, title: 'ListGroup' },
                    { path: `${import.meta.env.BASE_URL}elements/MediaObject`, type: 'link', active: false, selected: false, title: 'MediaObject' },
                    { path: `${import.meta.env.BASE_URL}elements/Modal`, type: 'link', active: false, selected: false, title: 'Modal' },
                    { path: `${import.meta.env.BASE_URL}elements/Navigation`, type: 'link', active: false, selected: false, title: 'Navigation' },
                    { path: `${import.meta.env.BASE_URL}elements/Pagination`, type: 'link', active: false, selected: false, title: 'Pagination' },
                    { path: `${import.meta.env.BASE_URL}elements/Panel`, type: 'link', active: false, selected: false, title: 'Panel' },
                    { path: `${import.meta.env.BASE_URL}elements/Popover`, type: 'link', active: false, selected: false, title: 'Popover' },
                    { path: `${import.meta.env.BASE_URL}elements/Progress`, type: 'link', active: false, selected: false, title: 'Progress' },
                    { path: `${import.meta.env.BASE_URL}elements/Tabs`, type: 'link', active: false, selected: false, title: 'Tabs' },
                    { path: `${import.meta.env.BASE_URL}elements/Tags`, type: 'link', active: false, selected: false, title: 'Tags' },
                    { path: `${import.meta.env.BASE_URL}elements/Toast`, type: 'link', active: false, selected: false, title: 'Toast' },
                    { path: `${import.meta.env.BASE_URL}elements/ToolTips`, type: 'link', active: false, selected: false, title: 'ToolTips' },
                ],
            },

            {
                path: `${import.meta.env.BASE_URL}Apps`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" /> </svg>),

                type: 'sub',
                active: false,
                selected: false,
                title: 'Apps',
                children: [

                    {
                        type: 'sub', active: false, selected: false, title: 'Chats', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Apps/chats/chat01`, type: 'link', active: false, selected: false, title: 'Chat01' },
                                { path: `${import.meta.env.BASE_URL}Apps/chats/chat02`, type: 'link', active: false, selected: false, title: 'Chat02' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Contacts', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Apps/contacts/contactlist01`, type: 'link', active: false, selected: false, title: 'Contact List01' },
                                { path: `${import.meta.env.BASE_URL}Apps/contacts/contactlist02`, type: 'link', active: false, selected: false, title: 'Contact List02' },

                            ]
                    },
                    { path: `${import.meta.env.BASE_URL}Apps/Calendar`, type: 'link', active: false, selected: false, title: 'Calendar' },
                    { path: `${import.meta.env.BASE_URL}Apps/cookies`, type: 'link', active: false, selected: false, title: 'Cookies' },
                    { path: `${import.meta.env.BASE_URL}Apps/counters`, type: 'link', active: false, selected: false, title: 'Counters' },
                    {
                        type: 'sub', active: false, selected: false, title: 'filemanager', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Apps/filemanager/fileattachment`, type: 'link', active: false, selected: false, title: 'Fileatt Achment' },
                                { path: `${import.meta.env.BASE_URL}Apps/filemanager/filemanager01`, type: 'link', active: false, selected: false, title: 'File Manager01' },
                                { path: `${import.meta.env.BASE_URL}Apps/filemanager/filemanager02`, type: 'link', active: false, selected: false, title: 'File Manager02' },
                                { path: `${import.meta.env.BASE_URL}Apps/filemanager/filedetails`, type: 'link', active: false, selected: false, title: 'File Details' },
                                { path: `${import.meta.env.BASE_URL}Apps/filemanager/filelist`, type: 'link', active: false, selected: false, title: 'File List' },
                            ]
                    },

                    { path: `${import.meta.env.BASE_URL}Apps/imagecrop`, type: 'link', active: false, selected: false, title: 'Imagecrop' },
                    { path: `${import.meta.env.BASE_URL}Apps/loaders`, type: 'link', active: false, selected: false, title: 'Loaders' },
                    { path: `${import.meta.env.BASE_URL}Apps/notofications`, type: 'link', active: false, selected: false, title: 'Notofications' },
                    { path: `${import.meta.env.BASE_URL}Apps/PageSessiontimeout`, type: 'link', active: false, selected: false, title: 'PageSessiontimeout' },
                    { path: `${import.meta.env.BASE_URL}Apps/rangeslider`, type: 'link', active: false, selected: false, title: 'Rangeslider' },
                    { path: `${import.meta.env.BASE_URL}Apps/rating`, type: 'link', active: false, selected: false, title: 'Rating' },
                    { path: `${import.meta.env.BASE_URL}Apps/timeline`, type: 'link', active: false, selected: false, title: 'Timeline' },
                    { path: `${import.meta.env.BASE_URL}Apps/sweetalerts`, type: 'link', active: false, selected: false, title: 'Sweetalerts' },
                    {
                        type: 'sub', active: false, selected: false, title: 'Todo List', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Apps/todolist/todolist01`, type: 'link', active: false, selected: false, title: 'Todo List 01' },
                                { path: `${import.meta.env.BASE_URL}Apps/todolist/todolist02`, type: 'link', active: false, selected: false, title: 'Todo List 02' },
                                { path: `${import.meta.env.BASE_URL}Apps/todolist/todolist03`, type: 'link', active: false, selected: false, title: 'Todo List 03' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'User List', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Apps/userlist/userlist01`, type: 'link', active: false, selected: false, title: 'User List 01' },
                                { path: `${import.meta.env.BASE_URL}Apps/userlist/userlist03`, type: 'link', active: false, selected: false, title: 'User List 03' },

                            ]
                    },

                ]
            },

            {
                path: `${import.meta.env.BASE_URL}AdvancedUI`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z" /></svg>),

                type: 'sub',
                active: false,
                selected: false,
                title: 'AdvancedUI',
                children: [
                    {
                        type: 'sub', active: false, selected: false, title: 'Utilities', children:
                            [
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/border`, type: 'link', active: false, selected: false, title: 'Border' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/colors`, type: 'link', active: false, selected: false, title: 'Colors' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/display`, type: 'link', active: false, selected: false, title: 'Display' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/flextime`, type: 'link', active: false, selected: false, title: 'Flextime' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/height`, type: 'link', active: false, selected: false, title: 'Height' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/margin`, type: 'link', active: false, selected: false, title: 'Margin' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/padding`, type: 'link', active: false, selected: false, title: 'Padding' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/typhogarphy`, type: 'link', active: false, selected: false, title: 'Typhogarphy' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/utilities/width`, type: 'link', active: false, selected: false, title: 'Width' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Widgets', children:
                            [
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/widgets/chartwidgets`, type: 'link', active: false, selected: false, title: 'Chartwidgets' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/widgets/widgets`, type: 'link', active: false, selected: false, title: 'Widgets' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Charts', children:
                            [
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/charts/apexcharts`, type: 'link', active: false, selected: false, title: 'Apex Charts' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/charts/chartjscharts`, type: 'link', active: false, selected: false, title: 'Chartjs Charts' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/charts/echartcharts`, type: 'link', active: false, selected: false, title: 'Echart Charts' },

                            ]
                    },
                    {
                        type: 'sub', active: false, selected: false, title: 'Tables', children:
                            [
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/tables/datatable`, type: 'link', active: false, selected: false, title: 'Data Table' },
                                { path: `${import.meta.env.BASE_URL}AdvancedUI/tables/defaulttable`, type: 'link', active: false, selected: false, title: 'Default Table' },

                            ]
                    },

                ]
            },
                
            {
                path: `${import.meta.env.BASE_URL}Landingpage`,
                icon: (<svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.76 20.2a2.73 2.73 0 0 0 2.15.85 8.86 8.86 0 0 0 3.37-.86 9 9 0 0 0 12.27-10.9c1.31-2.23 1.75-4.26.67-5.48a2.94 2.94 0 0 0-2.57-1A5 5 0 0 0 16.1 4 9 9 0 0 0 3.58 15.14c-1.06 1.21-2.05 3.68-.82 5.06zm1.5-1.32c-.22-.25 0-1.07.37-1.76a9.26 9.26 0 0 0 1.57 1.74c-1.03.3-1.71.28-1.94.02zm14.51-5.17A7 7 0 0 1 15.58 18 7.12 7.12 0 0 1 12 19a6.44 6.44 0 0 1-1.24-.13 30.73 30.73 0 0 0 4.42-3.29 31.5 31.5 0 0 0 3.8-4 6.88 6.88 0 0 1-.21 2.13zm.09-8.89a.94.94 0 0 1 .87.32c.23.26.16.94-.26 1.93a9.2 9.2 0 0 0-1.61-1.86 2.48 2.48 0 0 1 1-.39zM5.22 10.31A6.94 6.94 0 0 1 8.41 6 7 7 0 0 1 12 5a6.9 6.9 0 0 1 6 3.41 5.19 5.19 0 0 1 .35.66 27.43 27.43 0 0 1-4.49 5A27.35 27.35 0 0 1 8.35 18a7 7 0 0 1-3.13-7.65z" /></svg>),
                type: 'link',
                active: false,
                selected: false,
                title: 'Landingpage',
               

            },
        ],
    },

    {
        menutitle: "ICONS",
        id: 3,
        Items: [
            {
                path: `${import.meta.env.BASE_URL}Icons`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z"></path>
                </svg>),

                type: 'sub',
                active: false,
                selected: false,
                title: 'Icons',
                children: [
                    { path: `${import.meta.env.BASE_URL}icons/fontawesome`, type: 'link', active: false, selected: false, title: 'Font Awesome' },
                    { path: `${import.meta.env.BASE_URL}icons/materialdesignicons`, type: 'link', active: false, selected: false, title: 'Material Design Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/simplelineicons`, type: 'link', active: false, selected: false, title: 'Simpleline Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/feathericons`, type: 'link', active: false, selected: false, title: 'Feather Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/ionicicons`, type: 'link', active: false, selected: false, title: 'Ionic Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/flagicons`, type: 'link', active: false, selected: false, title: 'Flag Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/pe7icons`, type: 'link', active: false, selected: false, title: 'Pe7 Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/themifyicons`, type: 'link', active: false, selected: false, title: 'Themify Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/typiconicons`, type: 'link', active: false, selected: false, title: 'Typicon Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/weathericons`, type: 'link', active: false, selected: false, title: 'Weather Icons' },
                    { path: `${import.meta.env.BASE_URL}icons/materialsvgs`, type: 'link', active: false, selected: false, title: 'Material Svgs' },
                    { path: `${import.meta.env.BASE_URL}icons/bootstrapsvgs`, type: 'link', active: false, selected: false, title: 'Bootstrap Svgs' },

                ]
            },

        ]

    },

    {
        menutitle: "MAP",
        id: 4,
        Items: [
            {
                path: `${import.meta.env.BASE_URL}Map`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24"
                    height="24" viewBox="0 0 24 24">
                    <path
                        d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z" /></svg>),

                type: 'sub',
                active: false,
                selected: false,
                title: 'Maps',
                children: [

                    { path: `${import.meta.env.BASE_URL}maps/leafletmaps`, type: 'link', active: false, selected: false, title: 'Leaflet Maps' },

                ]
            },
        ]
    },

    {
        menutitle: "CUSTOM & SUB MENUS",
        id: 5,
        Items: [
            {
                path:`${import.meta.env.BASE_URL}CustomPages`,
                icon:(<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z"></path>
            </svg>),
                type:'sub',
                active: false,
                selected: false,
                title:'Custompages',
                children: [
                    {
                        type: 'sub', active: false, selected: false, title: 'Register', children:
                            [
                                { path: `${import.meta.env.BASE_URL}CustomPages/register/register01`, type: 'link', active: false, selected: false, title: 'Register01' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/register/register02`, type: 'link', active: false, selected: false, title: 'Register02' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/register/register03`, type: 'link', active: false, selected: false, title: 'Register03' },
                            ]
                    },
                    {
                        type: 'sub', active: false, selected: false, title: 'Login', children:
                            [
                                { path: `${import.meta.env.BASE_URL}CustomPages/login/login01`, type: 'link', active: false, selected: false, title: 'Login01' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/login/login02`, type: 'link', active: false, selected: false, title: 'Login02' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/login/login03`, type: 'link', active: false, selected: false, title: 'Login03' },
                            ]
                    },
                    {
                        type: 'sub', active: false, selected: false, title: 'Forget Password', children:
                            [
                                { path: `${import.meta.env.BASE_URL}CustomPages/forgetpassword/forgetpassword01`, type: 'link', active: false, selected: false, title: 'Forget Password01' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/forgetpassword/forgetpassword02`, type: 'link', active: false, selected: false, title: 'Forget Password02' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/forgetpassword/forgetpassword03`, type: 'link', active: false, selected: false, title: 'Forget Password03' },
                            ]
                    },
                    {
                        type: 'sub', active: false, selected: false, title: 'Reset Password', children:
                            [
                                { path: `${import.meta.env.BASE_URL}CustomPages/resetpassword/resetpassword01`, type: 'link', active: false, selected: false, title: 'Reset Password01' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/resetpassword/resetpassword02`, type: 'link', active: false, selected: false, title: 'Reset Password02' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/resetpassword/resetpassword03`, type: 'link', active: false, selected: false, title: 'Reset Password03' },
                            ]
                    },
                    {
                        type: 'sub', active: false, selected: false, title: 'Lock Screen', children:
                            [
                                { path: `${import.meta.env.BASE_URL}CustomPages/lockscreen/lockscreen01`, type: 'link', active: false, selected: false, title: 'Lock Screen01' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/lockscreen/lockscreen02`, type: 'link', active: false, selected: false, title: 'Lock Screen02' },
                                { path: `${import.meta.env.BASE_URL}CustomPages/lockscreen/lockscreen03`, type: 'link', active: false, selected: false, title: 'Lock Screen03' },
                            ]
                    },
                    { path: `${import.meta.env.BASE_URL}CustomPages/underconstruction`, type: 'link', active: false, selected: false, title: 'Under Construction' },
                    { path: `${import.meta.env.BASE_URL}CustomPages/comingsoon`, type: 'link', active: false, selected: false, title: 'Coming Soon' },

                ]
            },
            {
                path: `${import.meta.env.BASE_URL}Submenus`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>),
                type: 'sub',
                active: false,
                selected: false,
                title: 'Submenus',
                children: [
                    {
                        type: 'sub', active: false, selected: false, title: 'Submenu1', children:
                            [
                                { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.1' },
                                { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2' },

                                {
                                    type: 'sub', active: false, selected: false, title: 'Submenu1.2', children:
                                        [
                                            { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2.1' },
                                            { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2.2' },
                                            { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2.3' },

                                        ]
                                },
                                { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.3' },

                            ]
                    },
                    { path: "#", type: 'link', active: false, selected: false, title: 'Submenu2' },

                ]
            },

        ]
    },

    {
        menutitle: "PAGES & ERROR PAGES",
        id: 6,
        Items: [
            {
                path: `${import.meta.env.BASE_URL}Pages`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z"></path>
                    <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path>
                    <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path>
                </svg>),

                type: 'sub',
                active: false,
                selected: false,
                title: 'Pages',
                children: [

                    {
                        type: 'sub', active: false, selected: false, title: 'Profile', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/profile/profile01`, type: 'link', active: false, selected: false, title: 'Profile 01' },
                                { path: `${import.meta.env.BASE_URL}Pages/profile/profile02`, type: 'link', active: false, selected: false, title: 'Profile 02' },
                                { path: `${import.meta.env.BASE_URL}Pages/profile/profile03`, type: 'link', active: false, selected: false, title: 'Profile 03' },

                            ]
                    },
                    { path: `${import.meta.env.BASE_URL}Pages/editprofile`, type: 'link', active: false, selected: false, title: 'Edit Profile' },
                    { path: `${import.meta.env.BASE_URL}Pages/notificationlist`, type: 'link', active: false, selected: false, title: 'Notification List' },

                    {
                        type: 'sub', active: false, selected: false, title: 'Email', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/Email/emailcompose`, type: 'link', active: false, selected: false, title: 'Email Compose' },
                                { path: `${import.meta.env.BASE_URL}Pages/Email/emailinbox`, type: 'link', active: false, selected: false, title: 'Email Inbox' },
                                { path: `${import.meta.env.BASE_URL}Pages/Email/emailread`, type: 'link', active: false, selected: false, title: 'Email Read' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Pricing', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/pricing/pricing01`, type: 'link', active: false, selected: false, title: 'Pricing 01' },
                                { path: `${import.meta.env.BASE_URL}Pages/pricing/pricing02`, type: 'link', active: false, selected: false, title: 'Pricing 02' },
                                { path: `${import.meta.env.BASE_URL}Pages/pricing/pricing03`, type: 'link', active: false, selected: false, title: 'Pricing 03' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Invoice', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/invoice/addinvoice`, type: 'link', active: false, selected: false, title: 'Add Invoice' },
                                { path: `${import.meta.env.BASE_URL}Pages/invoice/editinvoice`, type: 'link', active: false, selected: false, title: 'Edit Invoice' },
                                { path: `${import.meta.env.BASE_URL}Pages/invoice/invoice01`, type: 'link', active: false, selected: false, title: 'Invoice 01' },
                                { path: `${import.meta.env.BASE_URL}Pages/invoice/invoice02`, type: 'link', active: false, selected: false, title: 'Invoice 02' },
                                { path: `${import.meta.env.BASE_URL}Pages/invoice/invoice03`, type: 'link', active: false, selected: false, title: 'Invoice 03' },
                                { path: `${import.meta.env.BASE_URL}Pages/invoice/invoicelist`, type: 'link', active: false, selected: false, title: 'Invoice List' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Blog', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/blog/blog01`, type: 'link', active: false, selected: false, title: 'Blog01' },
                                { path: `${import.meta.env.BASE_URL}Pages/blog/blog02`, type: 'link', active: false, selected: false, title: 'Blog02' },
                                { path: `${import.meta.env.BASE_URL}Pages/blog/blog03`, type: 'link', active: false, selected: false, title: 'Blog03' },
                                { path: `${import.meta.env.BASE_URL}Pages/blog/blogadd`, type: 'link', active: false, selected: false, title: 'Blog Add' },
                                { path: `${import.meta.env.BASE_URL}Pages/blog/blogdetails`, type: 'link', active: false, selected: false, title: 'Blog Details' },
                                { path: `${import.meta.env.BASE_URL}Pages/blog/blogstyles`, type: 'link', active: false, selected: false, title: 'Blog Styles' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Ecommerce', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/ecommerce/addproducts`, type: 'link', active: false, selected: false, title: 'Add Products' },
                                { path: `${import.meta.env.BASE_URL}Pages/ecommerce/checkout`, type: 'link', active: false, selected: false, title: 'Checkout' },
                                { path: `${import.meta.env.BASE_URL}Pages/ecommerce/products`, type: 'link', active: false, selected: false, title: 'Products' },
                                { path: `${import.meta.env.BASE_URL}Pages/ecommerce/productsdetails`, type: 'link', active: false, selected: false, title: 'Product Details' },
                                { path: `${import.meta.env.BASE_URL}Pages/ecommerce/shoppingcart`, type: 'link', active: false, selected: false, title: 'Shopping Cart' },
                                { path: `${import.meta.env.BASE_URL}Pages/ecommerce/wishlist`, type: 'link', active: false, selected: false, title: 'Wishlist' },
                            ]
                    },

                    {
                        type: 'sub', active: false, selected: false, title: 'Forms', children:
                            [
                                { path: `${import.meta.env.BASE_URL}Pages/forms/advancedforms`, type: 'link', active: false, selected: false, title: 'Advanced Forms' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formeditor`, type: 'link', active: false, selected: false, title: 'Form Editor' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formelements`, type: 'link', active: false, selected: false, title: 'Form Elements' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formelementsizes`, type: 'link', active: false, selected: false, title: 'Form Elementsizes' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formlayouts`, type: 'link', active: false, selected: false, title: 'Formlayouts' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formtreeview`, type: 'link', active: false, selected: false, title: 'Form Treeview' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formvalidations`, type: 'link', active: false, selected: false, title: 'Form Validations' },
                                { path: `${import.meta.env.BASE_URL}Pages/forms/formwizard`, type: 'link', active: false, selected: false, title: 'Form Wizard' },

                            ]
                    },
                    { path: `${import.meta.env.BASE_URL}Pages/gallery`, type: 'link', active: false, selected: false, title: 'Gallery' },
                    { path: `${import.meta.env.BASE_URL}Pages/search`, type: 'link', active: false, selected: false, title: 'Search' },
                    { path: `${import.meta.env.BASE_URL}Pages/switcher`, type: 'link', active: false, selected: false, title: 'Switcher' },
                    { path: `${import.meta.env.BASE_URL}Pages/terms`, type: 'link', active: false, selected: false, title: 'Terms' },
                    { path: `${import.meta.env.BASE_URL}Pages/Emptypage`, type: 'link', active: false, selected: false, title: 'Emptypage' },
                    { path: `${import.meta.env.BASE_URL}Pages/FAQS`, type: 'link', active: false, selected: false, title: 'FAQS' },

                ]
            },
             {
                path: `${import.meta.env.BASE_URL}ErrorPages`, 
                icon:(<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
                <path d="M11 6h2v8h-2zm0 10h2v2h-2z"></path></svg>),
                type: 'sub',
                active: false,
                selected: false,
                title: 'ErrorPages',
                children: [
                    { path: `${import.meta.env.BASE_URL}ErrorPages/error400`, type: 'link', active: false, selected: false, title: '400' },
                    { path: `${import.meta.env.BASE_URL}ErrorPages/error401`, type: 'link', active: false, selected: false, title: '401' },
                    { path: `${import.meta.env.BASE_URL}ErrorPages/error403`, type: 'link', active: false, selected: false, title: '403' },
                    { path: `${import.meta.env.BASE_URL}ErrorPages/error404`, type: 'link', active: false, selected: false, title: '404' },
                    { path: `${import.meta.env.BASE_URL}ErrorPages/error500`, type: 'link', active: false, selected: false, title: '500' },
                    { path: `${import.meta.env.BASE_URL}ErrorPages/error503`, type: 'link', active: false, selected: false, title: '503' },

                ]

            },
        ]
    },



];
export default MenuItems;


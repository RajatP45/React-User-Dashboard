
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layout/App';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Accordian from './components/Elements/Accordian/Accordian';
import Alerts from './components/Elements/Alerts/Alerts';
import Avathar from './components/Elements/Avathar/Avathar';
import Badges from './components/Elements/Badges/Badge';
import Breadcrumb from './components/Elements/Breadcrumb/Breadcrumb';
import Buttons from './components/Elements/Buttons/Buttons';
import CardImages from './components/Elements/CardImages/CardImages';
import Cards from './components/Elements/Cards/Cards';
import Carousel from './components/Elements/Carousel/Carousel';
import DropDown from './components/Elements/DropDown/DropDown';
import Footers from './components/Elements/Footers/Footers';
import ListGroup from './components/Elements/ListGroup/ListGroup';
import MediaObject from './components/Elements/MediaObject/MediaObject';
import Modal from './components/Elements/Modal/Modal';
import Navigation from './components/Elements/Navigation/Navigation';
import Pagination from './components/Elements/Pagination/Pagination';
import Panel from './components/Elements/Panel/Panel';
import Popover from './components/Elements/Popover/Popover';
import Progress from './components/Elements/Progress/Progress';
import Tabs from './components/Elements/Tabs/Tabs';

import Toast from './components/Elements/Toast/Toast';
import ToolTips from './components/Elements/ToolTips/ToolTips';
import Chat01 from './components/Apps/Chat/Chat01/Chat01';
import Chat02 from './components/Apps/Chat/Chat02/Chat02';
import ConatctList01 from './components/Apps/Contacts/ConatctList01/ConatctList01';
import ContactList02 from './components/Apps/Contacts/ContactList02/ContactList02';
import Calendar from './components/Apps/Calendar/Calendar';
import Cookies from './components/Apps/Cookies/Cookies';
import Counters from './components/Apps/Counters/Counters';
import FileAttachment from './components/Apps/FileManager/FileAttachment/FileAttachment'
import FileDetails from './components/Apps/FileManager/FileDetails/FileDetails';
import FileList from './components/Apps/FileManager/FileList/FileList';
import FileManager01 from './components/Apps/FileManager/FileManager01/FileManager01';
import FileManager02 from './components/Apps/FileManager/FileManager02/FileManager02';
import ImageCrop from './components/Apps/ImageCrop/ImageCrop';
import Loaders from './components/Apps/Loaders/Loaders';
import Notifications from './components/Apps/Notifications/Notifications';
import PageSessiontimeout from './components/Apps/Page-Sessiontimeout/Page-Sessiontimeout';
import RangeSlider from './components/Apps/RangeSlider/RangeSlider';
import Rating from './components/Apps/Rating/Rating';
import SweetAlerts from './components/Apps/SweetAlerts/SweetAlerts';
import TodoList01 from './components/Apps/TodoList/TodoList01/TodoList01';
import TodoList02 from './components/Apps/TodoList/TodoList02/TodoList02';
import TodoList03 from './components/Apps/TodoList/TodoList03/TodoList03';
import UserList01 from './components/Apps/UserList/UserList01/UserList01';
import UserList03 from './components/Apps/UserList/UserList03/UserList03';
import Border from './components/AdvancedUI/Utilities/Border/Border';
import Colors from './components/AdvancedUI/Utilities/Colors/Colors';
import Display from './components/AdvancedUI/Utilities/Display/Display';
import FlexTime from './components/AdvancedUI/Utilities/FlexTime/FlexTime';
import Height from './components/AdvancedUI/Utilities/Height/Height';
import Margin from './components/AdvancedUI/Utilities/Margin/Margin';
import Padding from './components/AdvancedUI/Utilities/Padding/Padding';
import Typhography from './components/AdvancedUI/Utilities/Typhography/Typhography';
import Width from './components/AdvancedUI/Utilities/Width/Width';
import ChartWidgets from './components/AdvancedUI/Widgets/ChartWidgets/ChartWidgets';
import Widgets from './components/AdvancedUI/Widgets/Widgets/Widgets';
import ApexCharts from './components/AdvancedUI/Charts/ApexCharts/ApexCharts';
import ChartjsCharts from './components/AdvancedUI/Charts/ChartjsCharts/ChartjsCharts';
import EchartCharts from './components/AdvancedUI/Charts/EchartCharts/EchartCharts';
import DataTable from './components/AdvancedUI/Tables/DataTable/DataTable';
import DefaultTable from './components/AdvancedUI/Tables/DefaultTable/DefaultTable';
import BootstrapSvgs from './components/Icons/BootstrapSvgs/BootstrapSvgs';
import FeatherIcons from './components/Icons/FeatherIcons/FeatherIcons';
import FlagIcons from './components/Icons/FlagIcons/FlagIcons';
import FontAwesome from './components/Icons/FontAwesome/FontAwesome';
import IonicIcons from './components/Icons/IonicIcons/IonicIcons';
import MaterialDesignIcons from './components/Icons/MaterialDesignIcons/MaterialDesignIcons';
import MaterialSvgs from './components/Icons/MaterialSvgs/MaterialSvgs';
import Pe7Icons from './components/Icons/Pe7Icons/Pe7Icons';
import SimpleLineIcons from './components/Icons/SimpleLineIcons/SimpleLineIcons';
import ThemifyIcons from './components/Icons/ThemifyIcons/ThemifyIcons';
import TypiconIcons from './components/Icons/TypiconIcons/TypiconIcons';
import WeatherIcon from './components/Icons/WeatherIcon/WeatherIcon';
import LeafletMaps from './components/Maps/LeafletMaps/LeafletMaps';
import MapelMaps from './components/Maps/MapelMaps/MapelMaps';
import VectorMaps from './components/Maps/VectorMaps/VectorMaps';
import Blog01 from './components/Pages/Blog/Blog01/Blog01';
import Blog02 from './components/Pages/Blog/Blog02/Blog02';
import Blog03 from './components/Pages/Blog/Blog03/Blog03';
import BlogAdd from './components/Pages/Blog/BlogAdd/BlogAdd';
import BlogDetails from './components/Pages/Blog/BlogDetails/BlogDetails';
import BlogStyles from './components/Pages/Blog/BlogStyles/BlogStyles';
import AddProducts from './components/Pages/ECommerce/AddProducts/AddProducts';
import CheckOut from './components/Pages/ECommerce/CheckOut/CheckOut';
import Products from './components/Pages/ECommerce/Products/Products';
import ProductsDetails from './components/Pages/ECommerce/ProductsDetails/ProductsDetails';
import ShoppingCart from './components/Pages/ECommerce/ShoppingCart/ShoppingCart';
import WishList from './components/Pages/ECommerce/WishList/WishList';
import EditProfile from './components/Pages/EditProfile/EditProfile';
import EmailCompose from './components/Pages/Email/EmailCompose/EmailCompose';
import EmailInbox from './components/Pages/Email/EmailInbox/EmailInbox';
import EmailRead from './components/Pages/Email/EmailRead/EmailRead';
import EmptyPage from './components/Pages/EmptyPage/EmptyPage';
import Faqs from './components/Pages/FAQS/FAQS';
import AdvancedForms from './components/Pages/Forms/AdvancedForms/AdvancedForms';
import FormEditor from './components/Pages/Forms/FormEditor/FormEditor';
import FormElements from './components/Pages/Forms/FormElements/FormElements';
import FormElementSizes from './components/Pages/Forms/FormElementSizes/FormElementSizes';
import FormLayouts from './components/Pages/Forms/FormLayouts/FormLayouts';
import FormTreeview from './components/Pages/Forms/FormTreeview/FormTreeview';
import FormValidations from './components/Pages/Forms/FormValidations/FormValidations';
import FormWizard from './components/Pages/Forms/FormWizard/FormWizard';
import Gallery from './components/Pages/Gallery/Gallery';
import AddInvoice from './components/Pages/Invoice/AddInvoice/AddInvoice';
import EditInvoice from './components/Pages/Invoice/EditInvoice/EditInvoice';
import Invoice01 from './components/Pages/Invoice/Invoice01/Invoice01';
import Invoice02 from './components/Pages/Invoice/Invoice02/Invoice02';
import Invoice03 from './components/Pages/Invoice/Invoice03/Invoice03';
import InvoiceList from './components/Pages/Invoice/InvoiceList/InvoiceList';
import NotificationList from './components/Pages/NotificationList/NotificationList';
import Pricing01 from './components/Pages/Pricing/Pricing01/Pricing01';
import Pricing02 from './components/Pages/Pricing/Pricing02/Pricing02';
import Pricing03 from './components/Pages/Pricing/Pricing03/Pricing03';
import Profile01 from './components/Pages/Profile/Profile01/Profile01';
import Profile02 from './components/Pages/Profile/Profile02/Profile02';
import Profile03 from './components/Pages/Profile/Profile03/Profile03';
import Search from './components/Pages/Search/Search';
import Terms from './components/Pages/Terms/Terms';
import TimeLine from './components/Apps/TimeLine/TimeLine';
import Submenu11 from './components/SubMenus/SubMenu1/Submenu1.1/Submenu1.1';
import Submenu121 from './components/SubMenus/SubMenu1/Submenu1.2/Submenu1.2.1/Submenu1.2.1';
import Submenu122 from './components/SubMenus/SubMenu1/Submenu1.2/Submenu1.2.2/Submenu1.2.2';
import Submenu123 from './components/SubMenus/SubMenu1/Submenu1.2/Submenu1.2.3/Submenu1.2.3';
import Submenu13 from './components/SubMenus/SubMenu1/Submenu1.3/Submenu1.3';
import SubMenu2 from './components/SubMenus/SubMenu2/SubMenu2';
import Tags from './components/Elements/Tags/Tags';
import Landing from './layout/Landing';
import LandingPage from './components/Landingpage/LandingPage';
import Loader from './layout/Loader/Loader';
import Error400 from './components/ErrorPages/400/400';
import Error401 from './components/ErrorPages/401/401';
import Error403 from './components/ErrorPages/403/403';
import Error404 from './components/ErrorPages/404/404';
import Error500 from './components/ErrorPages/500/500';
import Error503 from './components/ErrorPages/503/503';
import ErrorPages from './layout/ErrorPages';
import Register01 from './components/CustomPages/Register/Register01/Register01';
import Register02 from './components/CustomPages/Register/Register02/Register02';
import Register03 from './components/CustomPages/Register/Register03/Register03';
import Login01 from './components/CustomPages/Login/Login01/Login01';
import Login03 from './components/CustomPages/Login/Login03/Login03';
import Login02 from './components/CustomPages/Login/Login02/Login02';
import ForgetPassword01 from './components/CustomPages/ForgetPassword/ForgetPassword01/ForgetPassword01';
import ForgetPassword02 from './components/CustomPages/ForgetPassword/ForgetPassword02/ForgetPassword02';
import ForgetPassword03 from './components/CustomPages/ForgetPassword/ForgetPassword03/ForgetPassword03';
import ResetPassword01 from './components/CustomPages/ReserPassword/ResetPassword01/ResetPassword01';
import ResetPassword02 from './components/CustomPages/ReserPassword/ResetPassword02/ResetPassword02';
import ResetPassword03 from './components/CustomPages/ReserPassword/ResetPassword03/ResetPassword03';
import LockScreen01 from './components/CustomPages/LockScreen/LockScreen01/LockScreen01';
import LockScreen02 from './components/CustomPages/LockScreen/LockScreen02/LockScreen02';
import LockScreen03 from './components/CustomPages/LockScreen/LockScreen03/LockScreen03';
import UnderConstruction from './components/CustomPages/UnderConstruction/UnderConstruction';
import ComingSoon from './components/CustomPages/ComingSoon/ComingSoon';
import Custom from './layout/Custom';
import Switcherlayout from './layout/Switcherlayout';
import Switcher01 from './components/Pages/Switcher/Switcher1';

import Firebaselayout from './layout/Firebase/Firebaseauthentication/firebaselayout';
import Login from './layout/Firebase/Firebaseauthentication/login';
import Signup from './layout/Firebase/Firebaseauthentication/signup';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Fragment>
    <BrowserRouter>
        <Routes>

          {/* Authentication  */}
          <Route path={`${import.meta.env.BASE_URL}/`} element={<Firebaselayout />}>
          <Route index element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}Firebase/Firebaseauthentication/login`} element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}Firebase/Firebaseauthentication/signup`} element={<Signup />} />
          </Route>

          {/* Main Route*/}

          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<Dashboard />} />
            {/* {Elements} */}

            <Route path={`${import.meta.env.BASE_URL}elements/accordian`} element={<Accordian />} />
            <Route path={`${import.meta.env.BASE_URL}elements/alerts`} element={<Alerts />} />
            <Route path={`${import.meta.env.BASE_URL}elements/avathar`} element={<Avathar />} />
            <Route path={`${import.meta.env.BASE_URL}elements/badges`} element={<Badges />} />
            <Route path={`${import.meta.env.BASE_URL}elements/breadcrumb`} element={<Breadcrumb />} />
            <Route path={`${import.meta.env.BASE_URL}elements/buttons`} element={<Buttons />} />
            <Route path={`${import.meta.env.BASE_URL}elements/cardImages`} element={<CardImages />} />
            <Route path={`${import.meta.env.BASE_URL}elements/cards`} element={<Cards />} />
            <Route path={`${import.meta.env.BASE_URL}elements/carousel`} element={<Carousel />} />
            <Route path={`${import.meta.env.BASE_URL}elements/dropDown`} element={<DropDown />} />
            <Route path={`${import.meta.env.BASE_URL}elements/footers`} element={<Footers />} />
            <Route path={`${import.meta.env.BASE_URL}elements/listGroup`} element={<ListGroup />} />
            <Route path={`${import.meta.env.BASE_URL}elements/mediaObject`} element={<MediaObject />} />
            <Route path={`${import.meta.env.BASE_URL}elements/modal`} element={<Modal />} />
            <Route path={`${import.meta.env.BASE_URL}elements/navigation`} element={<Navigation />} />
            <Route path={`${import.meta.env.BASE_URL}elements/pagination`} element={<Pagination />} />
            <Route path={`${import.meta.env.BASE_URL}elements/panel`} element={<Panel />} />
            <Route path={`${import.meta.env.BASE_URL}elements/popover`} element={<Popover />} />
            <Route path={`${import.meta.env.BASE_URL}elements/progress`} element={<Progress />} />
            <Route path={`${import.meta.env.BASE_URL}elements/tabs`} element={<Tabs />} />
            <Route path={`${import.meta.env.BASE_URL}elements/tags`} element={<Tags />} />
            <Route path={`${import.meta.env.BASE_URL}elements/toast`} element={<Toast />} />
            <Route path={`${import.meta.env.BASE_URL}elements/toolTips`} element={<ToolTips />} />

            {/* {Apps} */}

            <Route path={`${import.meta.env.BASE_URL}apps/chats/chat01`} element={<Chat01 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/chats/chat02`} element={<Chat02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/contacts/contactlist01`} element={<ConatctList01 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/contacts/contactlist02`} element={<ContactList02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/Calendar`} element={<Calendar />} />
            <Route path={`${import.meta.env.BASE_URL}apps/cookies`} element={<Cookies />} />
            <Route path={`${import.meta.env.BASE_URL}apps/counters`} element={<Counters />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/fileattachment`} element={<FileAttachment />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanager01`} element={<FileManager01 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanager02`} element={<FileManager02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`} element={<FileDetails />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filelist`} element={<FileList />} />
            <Route path={`${import.meta.env.BASE_URL}apps/imagecrop`} element={<ImageCrop />} />
            <Route path={`${import.meta.env.BASE_URL}apps/loaders`} element={<Loaders />} />
            <Route path={`${import.meta.env.BASE_URL}apps/notofications`} element={<Notifications />} />
            <Route path={`${import.meta.env.BASE_URL}apps/PageSessiontimeout`} element={<PageSessiontimeout />} />
            <Route path={`${import.meta.env.BASE_URL}apps/rangeslider`} element={<RangeSlider />} />
            <Route path={`${import.meta.env.BASE_URL}apps/rating`} element={<Rating />} />
            <Route path={`${import.meta.env.BASE_URL}apps/timeline`} element={<TimeLine />} />
            <Route path={`${import.meta.env.BASE_URL}apps/sweetalerts`} element={<SweetAlerts />} />
            <Route path={`${import.meta.env.BASE_URL}apps/todolist/todolist01`} element={<TodoList01 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/todolist/todolist02`} element={<TodoList02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/todolist/todolist03`} element={<TodoList03 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/userlist/userlist01`} element={<UserList01 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/userlist/userlist03`} element={<UserList03 />} />

            {/* {Advanced UI} */}

            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/border`} element={<Border />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/colors`} element={<Colors />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/display`} element={<Display />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/flextime`} element={<FlexTime />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/height`} element={<Height />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/margin`} element={<Margin />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/padding`} element={<Padding />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/typhogarphy`} element={<Typhography />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/utilities/width`} element={<Width />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/widgets/chartwidgets`} element={<ChartWidgets />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/widgets/widgets`} element={<Widgets />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/charts/apexcharts`} element={<ApexCharts />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/charts/chartjscharts`} element={<ChartjsCharts />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/charts/echartcharts`} element={<EchartCharts />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/tables/datatable`} element={<DataTable />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/tables/defaulttable`} element={<DefaultTable />} />


            {/* Switcher */}

            {/* {icons} */}

            <Route path={`${import.meta.env.BASE_URL}icons/bootstrapsvgs`} element={<BootstrapSvgs />} />
            <Route path={`${import.meta.env.BASE_URL}icons/feathericons`} element={<FeatherIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/flagicons`} element={<FlagIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/fontawesome`} element={<FontAwesome />} />
            <Route path={`${import.meta.env.BASE_URL}icons/ionicicons`} element={<IonicIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/materialdesignicons`} element={<MaterialDesignIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/materialsvgs`} element={<MaterialSvgs />} />
            <Route path={`${import.meta.env.BASE_URL}icons/pe7icons`} element={<Pe7Icons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/simplelineicons`} element={<SimpleLineIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/themifyicons`} element={<ThemifyIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/typiconicons`} element={<TypiconIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/weathericons`} element={<WeatherIcon />} />

            {/* {Maps} */}

            <Route path={`${import.meta.env.BASE_URL}maps/leafletmaps`} element={<LeafletMaps />} />
            <Route path={`${import.meta.env.BASE_URL}maps/mapelmaps`} element={<MapelMaps />} />
            <Route path={`${import.meta.env.BASE_URL}maps/vectormaps`} element={<VectorMaps />} />

            {/* {Pages} */}

            <Route path={`${import.meta.env.BASE_URL}pages/blog/blog01`} element={<Blog01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blog02`} element={<Blog02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blog03`} element={<Blog03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blogadd`} element={<BlogAdd />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blogdetails`} element={<BlogDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blogstyles`} element={<BlogStyles />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/addproducts`} element={<AddProducts />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} element={<CheckOut local_varaiable={undefined} />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/products`} element={<Products />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/productsdetails`} element={<ProductsDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} element={<ShoppingCart />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`} element={<WishList />} />
            <Route path={`${import.meta.env.BASE_URL}pages/editprofile`} element={<EditProfile />} />
            <Route path={`${import.meta.env.BASE_URL}pages/email/emailcompose`} element={<EmailCompose />} />
            <Route path={`${import.meta.env.BASE_URL}pages/email/emailinbox`} element={<EmailInbox />} />
            <Route path={`${import.meta.env.BASE_URL}pages/email/emailread`} element={<EmailRead />} />
            <Route path={`${import.meta.env.BASE_URL}pages/emptypage`} element={<EmptyPage />} />
            <Route path={`${import.meta.env.BASE_URL}pages/faqs`} element={<Faqs />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/advancedforms`} element={<AdvancedForms />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formeditor`} element={<FormEditor />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formelements`} element={<FormElements />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formelementsizes`} element={<FormElementSizes />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formlayouts`} element={<FormLayouts />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formtreeview`} element={<FormTreeview />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formvalidations`} element={<FormValidations />} />
            <Route path={`${import.meta.env.BASE_URL}pages/forms/formwizard`} element={<FormWizard />} />
            <Route path={`${import.meta.env.BASE_URL}pages/gallery`} element={<Gallery />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/addinvoice`} element={<AddInvoice />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/editinvoice`} element={<EditInvoice />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice01`} element={<Invoice01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice02`} element={<Invoice02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice03`} element={<Invoice03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoicelist`} element={<InvoiceList />} />
            <Route path={`${import.meta.env.BASE_URL}pages/notificationlist`} element={<NotificationList />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing/pricing01`} element={<Pricing01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing/pricing02`} element={<Pricing02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing/pricing03`} element={<Pricing03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/profile/profile01`} element={<Profile01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/profile/profile02`} element={<Profile02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/profile/profile03`} element={<Profile03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/search`} element={<Search />} />
            {/* <Route path={`${import.meta.env.BASE_URL}pages/switcher`} element={<Switcher />} /> */}
            <Route path={`${import.meta.env.BASE_URL}pages/terms`} element={<Terms />} />

            {/* SUBMENUS */}
            <Route path={`${import.meta.env.BASE_URL}`} element={<Submenu11 />} />
            <Route path={`${import.meta.env.BASE_URL}`} element={<Submenu121 />} />
            <Route path={`${import.meta.env.BASE_URL}`} element={<Submenu122 />} />
            <Route path={`${import.meta.env.BASE_URL}`} element={<Submenu123 />} />
            <Route path={`${import.meta.env.BASE_URL}`} element={<Submenu13 />} />
            <Route path={`${import.meta.env.BASE_URL}`} element={<SubMenu2 />} />
          </Route>
          {/* ErrorPages */}
          <Route path={`${import.meta.env.BASE_URL}`} element={<ErrorPages />}>
            <Route path={`${import.meta.env.BASE_URL}errorpages/error400`} element={<Error400 />} />
            <Route path={`${import.meta.env.BASE_URL}errorpages/error401`} element={<Error401 />} />
            <Route path={`${import.meta.env.BASE_URL}errorpages/error403`} element={<Error403 />} />
            <Route path={`${import.meta.env.BASE_URL}errorpages/error404`} element={<Error404 />} />
            <Route path={`${import.meta.env.BASE_URL}errorpages/error500`} element={<Error500 />} />
            <Route path={`${import.meta.env.BASE_URL}errorpages/error503`} element={<Error503 />} />
          </Route>

          {/* {Landingpage} */}
          <Route path={`${import.meta.env.BASE_URL}`} element={<Landing />}>
            <Route path={`${import.meta.env.BASE_URL}landingPage`} element={<LandingPage />} />
          </Route>

          {/* CUSTOM & SUBMENUS */}
          <Route path={`${import.meta.env.BASE_URL}`} element={<Custom />}>
            <Route path={`${import.meta.env.BASE_URL}custompages/register/register01`} element={<Register01 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/register/register02`} element={<Register02 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/register/register03`} element={<Register03 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/login/login01`} element={<Login01 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/login/login02`} element={<Login02 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/login/login03`} element={<Login03 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/forgetpassword/forgetpassword01`} element={<ForgetPassword01 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/forgetpassword/forgetpassword02`} element={<ForgetPassword02 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/forgetpassword/forgetpassword03`} element={<ForgetPassword03 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/resetpassword/resetpassword01`} element={<ResetPassword01 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/resetpassword/resetpassword02`} element={<ResetPassword02 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/resetpassword/resetpassword03`} element={<ResetPassword03 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/lockscreen/lockscreen01`} element={<LockScreen01 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/lockscreen/lockscreen02`} element={<LockScreen02 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/lockscreen/lockscreen03`} element={<LockScreen03 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/underconstruction`} element={<UnderConstruction />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/comingsoon`} element={<ComingSoon />} />
          </Route>
          {/* Switcher*/}
          <Route path={`${import.meta.env.BASE_URL}`} element={<Switcherlayout />}>
            <Route path={`${import.meta.env.BASE_URL}Pages/switcher`} element={<Switcher01 />} />
          </Route>

        </Routes>
    </BrowserRouter>
  </Fragment>

);

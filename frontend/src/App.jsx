import React from 'react'
import Navbar from './components/Navbar'
import {Route,Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import CareerPage from './pages/CareerPage';
import ApplyPage from './pages/ApplyPage';
import PartnerPage from './pages/PartnerPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import PressSection from './pages/PressSection';
import HelpCenter from './pages/HelpCenter';
import ContactUs from './pages/ContactUs';
import SafetyInfo from './pages/SafetyInfo';
import Accessibility from './pages/Accessibility';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';
import Dashboard from './pages/hotelOwner/Dashboard';
import {Toaster} from "react-hot-toast"
import { useAppContext } from './context/AppContext';



const App = ()=> {
  
  const isOwnerPath= useLocation().pathname.includes("owner");
  const {showHotelReg} =useAppContext();

  return (
    <div>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg &&  <HotelReg />}  {/* true then show hotel reg */}
      <div className='min-h-[70h]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/apply/:jobId" element={<ApplyPage />} />
          <Route path='/partnerPages' element={<PartnerPage />} />
          <Route path='/BlogPages' element={<BlogPage />} />
          <Route path='/abouts' element={<AboutPage />} />
          <Route path='/press' element={<PressSection />} />
          <Route path='/helpcenter' element={<HelpCenter />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/safetyinfo' element={<SafetyInfo />} />
          <Route path='/accessibility' element={<Accessibility />} />
          <Route path='/my-bookings' element={<MyBookings/>} />
          <Route path='/owner' element={<Layout/>}>
              <Route  index element={<Dashboard />}/>
              <Route  path='add-room' element={<AddRoom />}/>
              <Route  path='list-room' element={<ListRoom />}/>
          </Route>

        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App
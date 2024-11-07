import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Order from './components/Order/Order'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import Customers from './components/Customers/Customers';
import Testimonials from './components/Testimonils/Testimonils';
import { Faq } from './components/Faq/Faq';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy policy/Privacy';
const App = () => {
  return (
    <div>
      
<Navbar/>
<Banner/>
   <Order/>

   <Customers/>
   <Testimonials/>
   {/* <Faq/> */}
   {/* <Terms/> */}
   {/* <Privacy/> */}
   {/* <Footer/> */}
    </div>
  )
}

export default App

import Header from "./components/Header";
import React from 'react'
import Navbar from './components/Navbar.js/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Footer from "./components/Footer";
//import Initiatives from "./components/MenuLayout.js/Initiatives";
import GrandChallenge from "./components/MenuLayout.js/Initiatives/GrandChallenge";
import Cipher from "./components/MenuLayout.js/Initiatives/Cipher";
import ExcellenceAward from "./components/MenuLayout.js/Initiatives/ExcellenceAward";
import Career from "./pages/Career/Career";
import TechSagar from './components/MenuLayout.js/Initiatives/TechSagar'
import CyberSecurityAwarenessMonth from "./components/MenuLayout.js/Event & Outreach/CyberSecurityAwarenessMonth";
import DCPP from './components/MenuLayout.js/Skills & Capability/DCPP'
import DCPLA from './components/MenuLayout.js/Skills & Capability/DCPLA'
import Hackathon from './components/MenuLayout.js/Skills & Capability/Hackathon'
import CCITR from "./components/MenuLayout.js/CoEs/CCITR";
import ResourceCentre from "./components/MenuLayout.js/Resource Centre/ResourceCentre";















function App() {
  return (
    <>

      <HashRouter>
        <Header />
        <Navbar />








        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/grandchallenge' element={<GrandChallenge />} />
          <Route exact path='/cipher' element={<Cipher />} />
          <Route exact path='/career' element={<Career />} />
          <Route exact path='/awareness-month' element={<CyberSecurityAwarenessMonth />} />
          <Route exact path='/tech-sagar' element={<TechSagar />} />
          <Route exact path='/dcpp' element={<DCPP />} />
          <Route exact path='/dcpla' element={<DCPLA />} />
          <Route exact path='/excellence-award' element={<ExcellenceAward />} />
          <Route exact path='/hackathon' element={<Hackathon />} />
          <Route exact path='/resource-centre' element={<ResourceCentre />} />





        </Routes>
        <Footer />








      </HashRouter>




    </>
  );
}

export default App;

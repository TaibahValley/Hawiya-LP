import React from 'react'
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';


//components
import Navebar from '../components/Nav/Navebar'
import Sidebar from '../components/Nav/Sidebar'
import Header from '../components/Header'
import About from '../components/About'
import Collection from '../components/Collection'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Landingpage({t}) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    console.log(lng)
    }

  return (
    <>
        <Navebar changeLanguage={changeLanguage} t={t} />
        <Sidebar t={t}/>
        <Header t={t}/>
        <About t={t}/>
        <Collection t={t}/>
        <Roadmap t={t}/>
        <Team t={t}/>
        <Contact t={t}/>
        <Footer t={t}/>
    </>
  )
}

export default withNamespaces()(Landingpage);
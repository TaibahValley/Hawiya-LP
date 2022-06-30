import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Roadmap1 from "../assets/imgs/svg/Roadmap.svg"
import paint from "../assets/imgs/paint.png"
import "../assets/css/style.css"

export default function Roadmap({t}) {

  return (
    <div id="roadmap">
      <h1 id="t-roadmap">{t("Roadmap")}</h1>
      <div id="line-r"></div>
      <br/>
      <div className='raodmap-cols'>
          <img id="i-roadmap" src={Roadmap1}/>
      </div>
  </div>
  )

}

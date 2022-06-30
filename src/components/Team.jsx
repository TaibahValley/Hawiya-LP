import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import discord from "../assets/imgs/discord.png"
import telegram from "../assets/imgs/telegram.png"
import "../assets/css/style.css"

export default function Team({t}) {
  return (
    <Container className="section" id="Team">
      <Row>
        <h1>{t("ourTeam")}</h1>
        <div id="line-t"></div>
        <p>{t("team")}</p>
      </Row>
      <br/>
      <Row id="teamBrow">
        
        {/* <Col> */}
        {/* <img src={discord} className="social"/> */}
        <a className='t-team'>{t("Blockchain")}</a>
        <a className='t-team'>{t("Tezos")}</a>
      {/* </Col> */}
      {/* <Col> */}
        {/* <img src={telegram} className="social"/> */}
        
      {/* </Col> */}
      <Col></Col>
      </Row>

  </Container>
  )
}

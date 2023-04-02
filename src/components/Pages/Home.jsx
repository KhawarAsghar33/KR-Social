import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Topbar from '../Bars/Topbar'
import Leftbar from '../Bars/Leftbar'
import Feed from '../Bars/Feed'
import Rightbar from '../Bars/Rightbar'

function Home() {
  return (
    <div>
      <Topbar />
      <div>
        <Row>
          <Col xs={12} sm={3}> <Leftbar />  </Col>
          <Col xs={12} sm={5}> <Feed />     </Col>
          <Col xs={12} sm={4}> <Rightbar /> </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home

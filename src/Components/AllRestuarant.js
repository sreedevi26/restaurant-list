import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import RestuarantCard from './RestuarantCard'

function AllRestuarant() {

  // state to hold all restuarants
  const [allRestuarant, setallrestuarant] = useState([])

  // api call to fetch data from json file
  const getAllrestuarant = async () => {
    const response = await axios.get('http://localhost:4000/restaurants')
    setallrestuarant(response.data)
  }
  console.log(allRestuarant);

  useEffect(() => {
    getAllrestuarant()
  }, [])
  return (
    <Row >
      {
        allRestuarant.map(restaurants=>(
        <Col lg={4} md={4} sm={12} xl={4}>

          <RestuarantCard item={restaurants}/>

        </Col>
        ))
      }
    </Row>

  )
}

export default AllRestuarant
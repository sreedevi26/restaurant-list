import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col,Row,Image,ListGroup  } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import RestuarantHour from './RestuarantHour';
import RestuaranrReview from './RestuaranrReview';

function ViewRestuarant() {
  // to get params from url
  const {id} = useParams()
  console.log(id);

  // create state,to hold the restuarant details
  const [restaurant,setRestuarant] = useState({})
  // 
  const getRestuarant = async()=>{
    // api call 
    const {data} = await axios.get(`http://localhost:4000/restaurants/${id}`)
    // console.log(data);
    setRestuarant(data)
  }

  // console.log(restaurant)
  useEffect(()=>{
    getRestuarant()
  })
  return (
    <>
    {
      restaurant?
      <Row className='mt-5'>
        <Col lg={3}>
            <Image className='rounded' src={restaurant.photograph} fluid/>
        </Col>
        <Col>
        <ListGroup>
      <ListGroup.Item>
        <h1>{restaurant.name}</h1>
        <h5>{restaurant.neighborhood}</h5>
        </ListGroup.Item>
      <ListGroup.Item>Cuisine : {restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address : {restaurant.address}</ListGroup.Item>
    </ListGroup>
    <br />
    <p className='ms-2'><RestuarantHour hours={restaurant.operating_hours}/></p>
    <p className='ms-2'><RestuaranrReview reviews={restaurant.reviews}/></p>
        </Col>
      </Row>:''}
    </>
  )
}

export default ViewRestuarant
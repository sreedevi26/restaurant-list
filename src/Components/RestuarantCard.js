import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function RestuarantCard({item}) {
    console.log(item);

    return (
        <>
            <Link style={{textDecoration:'none'}} to={`View-Restuarant/${item.id}`}>       
                    <Card className='m-5' style={{ width: '25rem' }}>
                        <Card.Img variant="top" style={{height:'25rem'}} className='p-2' src={item.photograph}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                <p> Cuisine : {item.cuisine_type}</p>
                                <p>Neighborhood:{item.neighborhood}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Link>
        </>
    )
}

export default RestuarantCard
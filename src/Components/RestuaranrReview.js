import React from 'react'
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

function RestuaranrReview({reviews}) {
  // console.log(reviews);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant='light'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here for CLient Reviews
      </Button>
      <Collapse in={open}>
        <div className='ms-2' id="example-collapse-text">
          {
            reviews?.map(item=>(
              <div>
                <h6>{item.name} : (<span>{item.date}</span>)</h6>
                <p>Rating : {item.rating}</p>
                <p style={{textAlign:'justify'}}>Comments : {item.comments}</p>
              </div>
            ))
          }
        </div>
      </Collapse>
    </>
  )
}

export default RestuaranrReview
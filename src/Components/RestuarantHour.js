import React from 'react'
import { Button, Modal, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

function RestuarantHour({ hours }) {
    // console.log(hours);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Restuarant Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        hours?
                        <ListGroup>
                        <ListGroup.Item>Monday{hours.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday{hours.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday{hours.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday{hours.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday{hours.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday{hours.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday{hours.Sunday}</ListGroup.Item>
                    </ListGroup>:''}
                </Modal.Body>
            </Modal>
        </>

    
    );
}

export default RestuarantHour
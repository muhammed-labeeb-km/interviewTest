import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Decide() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
      <Card style={{ width: '30rem' }}>
        <Card.Header className='text-secondary text-center' >Features</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='text-warning'>
            <Link to="/update" className="text-decoration-none text-warning">Update User Profile</Link>
          </ListGroup.Item>
          <ListGroup.Item className='text-danger'>
            <Link to="/delete" className="text-decoration-none text-danger">Delete User Account</Link>
          </ListGroup.Item>
          <ListGroup.Item className='text-primary'>
            <Link to="/item" className="text-decoration-none">Go to Items</Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default Decide;

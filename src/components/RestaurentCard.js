import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function RestaurentCard({ item }) {
    return (
        <Link to={`/details/${item.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.photograph} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.neighborhood}
                    </Card.Text>
                </Card.Body>
                <Card.Text>
                    <p>Cuisine : {item.cuisine_type}</p>
                </Card.Text>
            </Card>
        </Link>
    )
}

export default RestaurentCard


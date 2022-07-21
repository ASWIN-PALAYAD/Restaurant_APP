import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Row,Col,ListGroup,Image} from 'react-bootstrap'

function RestaurentDetails() {

    const [data, setData] = useState([])

    const params = useParams()

    async function fetchData(){
        await fetch('/restaurants.json')
        .then((data)=>data.json())
        .then((res)=>setData(res.restaurants))
    }

    useEffect(() => {

      fetchData()

    }, [])
    

    const details = data.find((item)=>item.id == params.id)
    console.log(details);
    
    
  return (
    <div>
        <h1>RES Details</h1>
        {details?(  

          <Row className="my-3">
            <Col md={3}>
                <Image className='img' src={details.photograph} alt={details.name} fluid/>
            </Col>

            <Col md={4}>
              <ListGroup.Item>
                <h2>{details.name}</h2>
                <p>{details.neighborhood}</p>
              </ListGroup.Item>

              <ListGroup.Item>
                <p>Cusine Type : {details.cuisine_type}</p>
              </ListGroup.Item>

              <ListGroup.Item>
                <p>Address : {details.address}</p>
              </ListGroup.Item>

            </Col>

            <Col md={4} >
              <ListGroup.Item>
                <h4>Operationg Hours:</h4>
                <p>Monday: {details.operating_hours.Monday}</p>
                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                <p>Thursday: {details.operating_hours.Thursday}</p>
                <p>Friday: {details.operating_hours.Friday}</p>
                <p>Saturday: {details.operating_hours.Saturday}</p>
                <p>Sunday: {details.operating_hours.Sunday}</p> 
              </ListGroup.Item>
            </Col>

          </Row>

        
        
        ):'null'}
        
    </div>
  )
}

export default RestaurentDetails
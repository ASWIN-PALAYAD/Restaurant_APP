import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurentCard from './RestaurentCard'


function Home() {

  const [restaurents, setRestaurents] = useState([])

  async function fetchData(){
    await fetch('./restaurants.json')
    .then((data)=>data.json())
    .then((res)=>setRestaurents(res.restaurants))
  }

  useEffect(() => {
    
    fetchData()
    
  }, [])

  console.log("my data", restaurents);
  

  return (
    <Row>
      {restaurents.map(item=>(
        <Col sm={12} md={8} lg={6} xl={3}>
          
        <RestaurentCard item={item}/>

        </Col>

      ))}
    </Row>
  )
}

export default Home
import React from 'react'
import Card from 'react-bootstrap/Card';


const CardB = (props) => {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img style={{height:"150px",width:"287px"}} variant="top" src={props.img} />
      <Card.Body style={{height:"100px",flex:1}}>
        <Card.Title style={{textAlign:"center"}}>{props.title}</Card.Title>
        <Card.Text>
          {props.descr}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardB
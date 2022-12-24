import React from 'react'
import Departments from './Departments'
import "../style/styles.css"

function Content() {
  return (
    <>
    <div id='dept'>
        <h1 style={{textAlign:"start"}}>Departments:</h1>
    <Departments />
    </div>
    </>
  )
}

export default Content
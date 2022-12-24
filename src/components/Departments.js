import React from 'react'
import CardB from "../components/CardB";
import departments from '../data/departments';

function Departments() {

  return (
    <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
    <div className="row">
    {departments.map((i) => (
        <div class="col" style={{justifyContent:"space-between",margin:"5px"}}>
        <CardB img={i.img} title={i.name} descr={i.descr} />
        </div>
    ))}
    </div>
      </div>
  )
}

export default Departments
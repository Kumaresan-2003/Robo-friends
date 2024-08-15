import React from 'react';
// import { robots } from './robots';
import Card from './Card';
const Cardlist=({robots})=>{
    return (
      <div>
        {
            robots.map((user,i)=>{
             return (
             <Card key={i}
               id={robots[i].id}
               name={robots[i].id}
               email={robots[i].email}
               />
             );
            })
        }
      </div>
    );
}

export default Cardlist;
import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';
import SinglrItem from './singlrItem';

const Myitem = () => {
    const [item ,setItem]=useState([ ])
    useEffect(()=>{
        fetch('http://localhost:5000/myitem')
        .then(res=>res.json())
        .then(data=>setItem(data))
        
    },[])
    
    console.log(item)

    const handleDeleted=(id)=>{
        const sure= window.confirm('Are you Sure')
        if(sure){
          const url=`http://localhost:5000/additem/${id}`
          fetch(url,{
          method:"delete"
      })
      .then(rea=>rea.json())
      .then(data=>{
          if(data.deletedCount>0){
              const remaining=item.filter(pt=>pt._id!==id)
              setItem(remaining)
          }
      })
      }
    }
    return (
        <div>
            <Header/>
            <h1>My Item</h1>
            <div className='all-item'>
            {item.map(i=><SinglrItem i={i} key={i._id } handleDeleted={handleDeleted}></SinglrItem>)}
            </div>
        </div>
    );
};

export default Myitem;
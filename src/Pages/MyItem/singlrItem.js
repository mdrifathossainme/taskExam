import React from 'react';

const SinglrItem = ({i ,handleDeleted}) => {
    const {_id, name,description}=i

    return (
        <div className='item'>
        <h3> Item Name : {name}</h3>
        <p> Description : {description}</p>
        <button onClick={()=>handleDeleted(_id)} >Deleted</button>
        </div>
    );
};

export default SinglrItem;
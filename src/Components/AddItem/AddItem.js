import React from 'react';
import { toast } from 'react-toastify';

const AddItem = () => {
    
    const onSubmit =( e )=> {
        e.preventDefault()
        const  name=e.target.name.value
        const  description=e.target.description.value

        const addItem={
            name:name,
            description:description
        }
    
     
        const url=`http://localhost:5000/additem`
        fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },body:JSON.stringify(addItem)
        })
        .then(rea=>rea.json())
        .then(data=>{
           toast('Item Add Successful')
        })
        e.target.reset()
    }

    return (
        <div className='form'>
            <form onSubmit={onSubmit} className='addform'>
                <input placeholder='Name ' name='name' type="text"></input>
                <textarea placeholder='description' name='description' ></textarea>
                <input type="submit" value="Add Item"></input>
            </form>

        </div>
    );
};

export default AddItem;
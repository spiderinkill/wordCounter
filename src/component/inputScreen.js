import React from 'react';
import '../style/style.css';

const InputScreen =(props)=>{
  return (
    <div className='input' >
      <textarea onChange= {props.handleChange}/>
    </div>
  )
}

export default InputScreen;

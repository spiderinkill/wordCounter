import React from 'react';

const OutputScreen =(props)=>{
  return (
    <div className='screen' >
    {[...props.wordlist].map((element) => (
      <p key={element.k}>
        {element.k} : {element.v}
      </p>
    ))}
    </div>
  )
}

export default OutputScreen;

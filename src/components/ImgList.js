import React from 'react'
import Image from './Image'
import './image.css'

export default function ImgContainer(props) {
  const final = (
    <div className='container'>
      <div className='grid'>
        {props.images.map((img, idx) => (
          <Image img={img} key={idx} />
        ))}
      </div>
    </div>
  )
  // console.log(props.images)
  return final
}

import React, { useRef, useState } from 'react'

export default function Image(props) {
  const reference = useRef(null)
  const [span, setSpan] = useState(0)

  const callSpan = () => {
    const height = reference.current.clientHeight
    const reqSpan = Math.ceil(height / 10)
    setSpan(reqSpan)
  }

  return (
    <img
      onLoad={callSpan}
      onClick={() => window.open(props.img.urls.regular, '_blank')}
      ref={reference}
      style={{ gridRowEnd: `span ${span}` }}
      src={props.img.urls.regular}
      alt={props.img.alt_description}
      className='image figure-img img-fluid rounded mx-auto d-block'
    />
  )
}

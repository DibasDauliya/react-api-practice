import React, { useState } from 'react'

export default function SearchBox(props) {
  const [search, setSearch] = useState('')

  return (
    <div className='container mt-3'>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault()
          props.inputValue(search)
        }}
      >
        <div className='form-group'>
          <h1 className='m-heading text-center'>Search</h1>
          <input
            type='text'
            className='form-control'
            id='search'
            autoComplete='off'
            onChange={(e) => {
              setSearch(e.target.value)
              //   props.inputValue(e.target.value)
            }}
            value={search || ''}
            placeholder='Enter your query'
          />
        </div>
      </form>
    </div>
  )
}

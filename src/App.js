import React, { useState } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox'
import ImgContainer from './components/ImgList'

export default function App() {
  const [img, setImg] = useState([])

  async function getValue(value) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: value
      },
      headers: {
        Authorization: 'Client-ID a1MKqSp3wKhpPPp7v9fYcH_XHQ4FT7Xkd_13B9JTidY'
      }
    })
    setImg(res.data.results)
  }

  return (
    <div>
      <SearchBox inputValue={getValue} />
      <ImgContainer images={img} />
    </div>
  )
}

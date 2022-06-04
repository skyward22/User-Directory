import React from 'react'
import Header from "./Header"
import DataCard from './DataCard'
import data from '../data'

const Box = () => {
  return (
    <div>
      
      <Header/>
      <DataCard data={data}/>

    </div>
  )
}

export default Box
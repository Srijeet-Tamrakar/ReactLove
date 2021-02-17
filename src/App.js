import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header'
import Images from './components/Images'
import Images2 from './components/Images2'
import Calendar from './components/Calendar'
import Videos from './components/Videos'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Header/>
      <Images/>
      <Calendar/>
      <Images2/>
      <Card/>
      <Videos/>
    </div>
  )
}

export default App


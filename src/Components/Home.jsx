import React from 'react'
import TopnavBar from './TopnavBar'

const Home = () => {
  return (
    <div className="container">
      <TopnavBar/>
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1>My Planner</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
import React, { useState } from 'react'

const Home = () => {

    const [name, setName] = useState("John Doe");

  return (
    <div className="container">
        <h3 className="text-primary">Home</h3>
    </div>
  )
}

export default Home
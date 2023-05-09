import React from 'react'

export default function Home() {
  return (
    <div className='home'>
      <div className="card home__card">
        <h4>Shehroz</h4>
        <div className="card-image">
        <img src="https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
      <div className="card-content">
      <i className='material-icons' style={{color: "red"}}>favorite</i>

        <h6>Title</h6>
        <p>it is my first post</p>
        <input type="text" placeholder='add a comment'/>
      </div>
      </div>

      <div className="card home__card">
        <h4>Shehroz</h4>
        <div className="card-image">
        <img src="https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
      <div className="card-content">
        <h6>Title</h6>
        <p>it is my first post</p>
        <input type="text" placeholder='add a comment'/>
      </div>
      </div>

    </div>
  )
}

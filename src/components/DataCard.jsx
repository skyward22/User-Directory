import React, {useState} from 'react'
import data from '../data'

const DataCard = (props) => {

  const users = props.data.slice(0, data.length)
  const [index, setIndex] = useState(0)

  let user = users[index]

  const next = () => {
    setIndex(index + 1)
  }

  const previous = () => {
    setIndex(index - 1)
  }

  return (

    <div>Here's my DataCard
      <div>   
        <h1>{user.id}/{users.length}</h1>
          <div>
              <span>
                  <h1>{user.name.first} {user.name.last}</h1>
                  <div></div>
              </span>
              <div>
                  <div>
                    <h3>From: </h3>
                    <p>{user.city}, {user.country}</p>
                  </div>
                  <div>
                    <h3>Job Title: </h3>
                    <p>{user.title}</p>
                  </div>
                  <div>
                    <h3>Employer: </h3>
                    <p>{user.employer}</p>
                  </div>
              </div>
              <div>
                  <h3>Favorite Movies:</h3>
                  <p>#1 {user.favoriteMovies[0]}</p>
                  <p>#2 {user.favoriteMovies[1]}</p>
                  <p>#3 {user.favoriteMovies[2]}</p>
              </div>
          </div>          
      </div>
      
      <div>
        {index === 0 ? <button></button> : <button onClick={previous}>{'<'} before</button>}
      <div>
      </div>          
        {index === data.length - 1 ? <button></button> : <button onClick={next}>after {'>'}</button>}
      </div>


    </div>
  )
}

export default DataCard
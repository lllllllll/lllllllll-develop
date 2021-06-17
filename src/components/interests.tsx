import React from 'react'
import { interests } from '../utility/docs'

const Interests = () => {
  return (
    <section className="interests">
      <h1 className="title">Interests</h1>
      <div className="container">
        <div className="int-sec items">
          {interests.map((i, key) => (
            <div key={key} className="item">
              <div className="box pic">
                <img src={i.pic} alt="" />
              </div>
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests

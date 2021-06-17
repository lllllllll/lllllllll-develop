import React from 'react'
import { devOps } from '../utility/docs'

const Devops = () =>  {
  return (
    <section className="devops">
      <h1 className="title">DevOps and Source Code</h1>
      <div className="container">
        <div className="items">
          {
            devOps.map((i, key) => (
              <div key={key} className="item">
                <div className="box pic">
                  <img src={i.pic} alt="" />
                </div>
                <p>{i.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Devops
import React from 'react'
import { education } from '../utility/docs'

const Education = () => {
  return (
    <section className="education">
      <h1 className="title">Education</h1>
      <div className="container">
        <div className="edu-sec">
          {
            education.map((i,key) => {
              return i.status ?
              <div key={key} className={`edu-item ${i.status}`}>
                <small>{i.job}</small>
                <p>{i.duration}</p>
                <small className="b">{i.company}</small>
              </div>
              : <div className="edu-title"><h1>{i.title}</h1></div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Education
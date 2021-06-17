import React from 'react'
import { language } from '../utility/docs'

const Language = () => {
  return (
    <section className="language">
      <h1 className="title">Coding Languages</h1>
      <div className="container">
        <div className="lan-sec">
          <div className="title">Frontend</div>
          <div className="items">
            {
              language.frontend.map((i, key) => (
                <div key={key} className="item">
                  <div className="box pic">
                    <img src={i.pic} alt="" />
                  </div>
                  <p>{i.title}</p>
                </div>
              ))
            }
          </div>
          <div className="title">Backend</div>
          <div className="items">
            {
              language.backend.map((i, key) => (
                <div key={key} className="item">
                  <div className="box pic">
                    <img src={i.pic} alt="" />
                  </div>
                  <p>{i.title}</p>
                </div>
              ))
            }
          </div>
          <div className="title">Database</div>
          <div className="items">
            {
              language.database.map((i, key) => (
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
      </div>
    </section>
  )
}

export default Language
import React from 'react'
import { expereince } from '../utility/docs'

const Expereince = () =>  {
  return (
    <section className="expereince">
      <h1 className="title">Work expereince</h1>
      <div className="container">
        <div className="exp-sec">
          <div className="exp-l">
            <div className="pic">
              <img src="./images/works/1.svg" alt="" />
            </div>
          </div>
          <div className="exp-r">
            <div className="title">Management console</div>
            <small>Development Stack</small>
            <div className="exp-info">
              {
                expereince.management.map((i, key) => (
                  <div key={key} className="item">{i}</div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="exp-sec">
          <div className="exp-l txt">
            <div className="title">Chatbot Facebook, Line</div>
            <small>Development Stack</small>
            <div className="exp-info">
              {
                expereince.chatbot.map((i, key) => (
                  <div key={key} className="item">{i}</div>
                ))
              }
            </div>
          </div>
          <div className="exp-r p">
            <div className="pic">
              <img src="./images/works/2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="exp-sec">
          <div className="exp-l">
            <div className="pic">
              <img src="./images/works/3.svg" alt="" />
            </div>
          </div>
          <div className="exp-r">
            <div className="title">Payment gateway</div>
            <small>Development Stack</small>
            <div className="exp-info">
              {
                expereince.payment.map((i, key) => (
                  <div key={key} className="item">{i}</div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="exp-sec">
          <div className="exp-l txt">
            <div className="title">UX/Ui</div>
            <small>Development Stack</small>
            <div className="exp-info">
              {
                expereince.uxi.map((i, key) => (
                  <div key={key} className="item">{i}</div>
                ))
              }
            </div>
          </div>
          <div className="exp-r p">
            <div className="pic">
              <img src="./images/works/4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expereince

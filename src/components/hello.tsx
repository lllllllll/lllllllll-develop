import React from 'react'
import Typewriter from 'typewriter-effect'

const Hello = () => {
  return (
    <section className="hello">
      
      <div className="hi">
        <div>🧑 : </div> 
        <Typewriter
          onInit={()=> {}}
          options={{
            strings: ['Hi Nyob zoo os', 'Hello world', 'สวัสดีชาวโลก 🐂', 'こんにちは世界', '你好，世界'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h1>YAKA CHANG</h1>
      <h5>Frontend Developer</h5>
      <hr />
      <div className="container">
        <div className="sub-title">Profile</div>
        <div className="row link-profile">
          <a className="col" href="https://github.com/lllllllll/" target="_blank">
            <div className="box">
              <img src="/images/github.svg" alt="" />
            </div>
            <p>/|||||||||</p>
          </a>
          <a className="col" href="https://www.behance.net/YAKAChang" target="_blank">
            <div className="box shodow">
              <img src="/images/behance.svg" alt="" />
            </div>
            <p>/YAKAChang</p>
          </a>
          <a className="col" href="https://dribbble.com/YAKADesign" target="_blank">
            <div className="box">
              <img src="/images/dribbble.svg" alt="" />
            </div>
            <p>/YAKADesign</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hello

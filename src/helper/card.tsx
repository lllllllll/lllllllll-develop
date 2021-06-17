import React from 'react'
import { MessageCircle, Heart, Share2 } from 'react-feather'

const Card = () => {
  return (
    <div className="box card">
      <div className="pic">
        {/* <img src="./images/card.jpg" alt="" /> */}
      </div>
      <div className="tools">
        <div className="like">
          <Heart size="18" />
        </div>
        <div className="comments">
          <MessageCircle size="18" />
        </div>
        <div className="share">
          <Share2 size="18" />
        </div>
      </div>
      <div className="write">
        <input type="text" placeholder="Comment..." />
      </div>
    </div>
  )
}

export default Card